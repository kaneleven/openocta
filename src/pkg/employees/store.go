package employees

import (
	"encoding/json"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"github.com/openocta/openocta/pkg/paths"
)

// ListSummaries 返回所有内置与用户自建数字员工的概要信息。
// env 通常为 os.Getenv。
func ListSummaries(env func(string) string) ([]Summary, error) {
	var out []Summary

	//// 1. 内置数字员工：来自 embed/agents_skills 下的一级子目录。
	//if agentsFS, err := embed.AgentsSkillsFS(); err == nil {
	//	if entries, err := fs.ReadDir(agentsFS, "."); err == nil {
	//		for _, e := range entries {
	//			if !e.IsDir() {
	//				continue
	//			}
	//			id := strings.TrimSpace(e.Name())
	//			if id == "" || strings.HasPrefix(id, ".") {
	//				continue
	//			}
	//			out = append(out, Summary{
	//				ID:          id,
	//				Name:        id,
	//				Description: "",
	//				Builtin:     true,
	//				SkillIDs:    nil,
	//			})
	//		}
	//	}
	//}

	// 2. 用户自建数字员工：~/.openocta/employees/<id>/manifest.json
	root := ResolveEmployeesDir(env)
	if fi, err := os.Stat(root); err == nil && fi.IsDir() {
		entries, err := os.ReadDir(root)
		if err == nil {
			for _, e := range entries {
				if !e.IsDir() {
					continue
				}
				id := e.Name()
				manifestPath := filepath.Join(root, id, "manifest.json")
				data, err := os.ReadFile(manifestPath)
				if err != nil {
					continue
				}
				var m Manifest
				if err := json.Unmarshal(data, &m); err != nil {
					continue
				}
				if m.ID == "" {
					m.ID = id
				}
				skillNames := listEmployeeSkillNames(env, m.ID, m.SkillIDs)
				mcpKeys := make([]string, 0, len(m.McpServers))
				for k := range m.McpServers {
					if k != "" {
						mcpKeys = append(mcpKeys, k)
					}
				}
				sort.Strings(mcpKeys)
				out = append(out, Summary{
					ID:            m.ID,
					Name:          coalesce(m.Name, m.ID),
					Description:   m.Description,
					Prompt:        m.Prompt,
					Enabled:       m.Enabled,
					CreatedAt:     m.CreatedAt,
					Builtin:       m.Builtin,
					SkillIDs:      append([]string(nil), m.SkillIDs...),
					SkillNames:    skillNames,
					McpServerKeys: mcpKeys,
				})
			}
		}
	}

	// 稳定排序，内置在前、再按 ID 排序。
	sort.Slice(out, func(i, j int) bool {
		if out[i].Builtin != out[j].Builtin {
			return out[i].Builtin && !out[j].Builtin
		}
		return out[i].ID < out[j].ID
	})
	return out, nil
}

// LoadManifest 加载指定 ID 的数字员工 manifest。
// 若不存在用户 manifest 而 embed 中存在同名目录，则返回合成的内置 manifest。
func LoadManifest(id string, env func(string) string) (*Manifest, error) {
	id = strings.TrimSpace(id)
	if id == "" {
		return nil, os.ErrNotExist
	}

	// 用户 manifest 优先
	root := ResolveEmployeesDir(env)
	manifestPath := filepath.Join(root, id, "manifest.json")
	if data, err := os.ReadFile(manifestPath); err == nil {
		var m Manifest
		if err := json.Unmarshal(data, &m); err == nil {
			if m.ID == "" {
				m.ID = id
			}
			return &m, nil
		}
	}

	// 退回到内置：检查 embed/agents_skills/<id>
	//if agentsFS, err := embed.AgentsSkillsFS(); err == nil {
	//	if fi, err := fs.Stat(agentsFS, id); err == nil && fi.IsDir() {
	//		return &Manifest{
	//			ID:          id,
	//			Name:        id,
	//			Description: "",
	//			Builtin:     true,
	//		}, nil
	//	}
	//}

	return nil, os.ErrNotExist
}

// SaveManifest 在 ~/.openocta/employees/<id>/ 下写入 manifest.json。
func SaveManifest(m *Manifest, env func(string) string) error {
	if m == nil {
		return nil
	}
	id := strings.TrimSpace(m.ID)
	if id == "" {
		id = strings.TrimSpace(m.Name)
	}
	if id == "" {
		return os.ErrInvalid
	}

	root := ResolveEmployeesDir(env)
	dir := filepath.Join(root, id)
	if err := os.MkdirAll(dir, 0o755); err != nil {
		return err
	}

	// 若已存在 manifest，则保留 CreatedAt 等历史字段（除非调用方显式覆盖）。
	// 注意：Enabled 由调用方显式传入时不再被覆盖，以支持禁用操作。
	existingPath := filepath.Join(dir, "manifest.json")
	if data, err := os.ReadFile(existingPath); err == nil {
		var old Manifest
		if jsonErr := json.Unmarshal(data, &old); jsonErr == nil {
			if m.CreatedAt == 0 && old.CreatedAt != 0 {
				m.CreatedAt = old.CreatedAt
			}
		}
	}
	if m.CreatedAt == 0 {
		m.CreatedAt = time.Now().UnixMilli()
	}

	m.ID = id
	data, err := json.MarshalIndent(m, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(filepath.Join(dir, "manifest.json"), data, 0o644)
}

// DeleteEmployee 删除指定 ID 的用户数字员工（不会影响内置）。
func DeleteEmployee(id string, env func(string) string) error {
	id = strings.TrimSpace(id)
	if id == "" {
		return os.ErrInvalid
	}
	root := ResolveEmployeesDir(env)
	dir := filepath.Join(root, id)
	// 内置员工没有磁盘目录，这里仅删除用户目录。
	if _, err := os.Stat(dir); err != nil {
		return err
	}
	return os.RemoveAll(dir)
}

func coalesce(values ...string) string {
	for _, v := range values {
		if strings.TrimSpace(v) != "" {
			return v
		}
	}
	return ""
}

// listEmployeeSkillNames 返回该员工的技能名称列表：manifest.skillIds + employee_skills/<id> 下的目录名。
func listEmployeeSkillNames(env func(string) string, employeeID string, manifestSkillIDs []string) []string {
	seen := make(map[string]struct{})
	for _, id := range manifestSkillIDs {
		if id = strings.TrimSpace(id); id != "" {
			seen[id] = struct{}{}
		}
	}
	stateDir := paths.ResolveStateDir(env)
	skillsDir := filepath.Join(stateDir, "employee_skills", employeeID)
	if entries, err := os.ReadDir(skillsDir); err == nil {
		for _, e := range entries {
			if e.IsDir() && !strings.HasPrefix(e.Name(), ".") {
				name := strings.TrimSpace(e.Name())
				if name != "" {
					seen[name] = struct{}{}
				}
			}
		}
	}
	names := make([]string, 0, len(seen))
	for n := range seen {
		names = append(names, n)
	}
	sort.Strings(names)
	return names
}
