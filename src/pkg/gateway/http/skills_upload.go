// Package http provides skills upload HTTP handler.
package http

import (
	"archive/zip"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/openocta/openocta/pkg/gateway/handlers"
)

// skillNameRe: English letters, numbers, hyphens, underscores. 1-64 chars.
var skillNameRe = regexp.MustCompile(`^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$`)

const (
	skillUploadMaxSize   = 10 << 20 // 10 MB
	skillTemplateContent = "---\nname: %s\ndescription: Brief description of what this skill does.\nmetadata: {}\n---\n\n# %s\n\nDescribe when and how to use this skill.\n\n## When to Use\n\n- Use case 1\n- Use case 2\n\n## How It Works\n\n1. Step one\n2. Step two\n\n## Examples\n\n```\nExample usage\n```\n"
)

// validateSkillContent checks SKILL.md format: must have YAML frontmatter with --- and name.
// Returns (valid, errorMessage, templateIfInvalid).
func validateSkillContent(content []byte, skillName string) (bool, string, string) {
	s := string(content)
	trimmed := strings.TrimSpace(s)
	if len(trimmed) < 10 {
		return false, "SKILL.md is too short or empty", fmt.Sprintf(skillTemplateContent, skillName, skillName)
	}
	//if !strings.HasPrefix(trimmed, "---") {
	//	return false, "SKILL.md must start with YAML frontmatter (---)", fmt.Sprintf(skillTemplateContent, skillName, skillName)
	//}
	parts := strings.SplitN(trimmed, "---", 3)
	if len(parts) < 3 {
		return false, "SKILL.md must have opening and closing --- for frontmatter", fmt.Sprintf(skillTemplateContent, skillName, skillName)
	}
	fm := strings.TrimSpace(parts[1])
	if fm == "" {
		return false, "Frontmatter cannot be empty", fmt.Sprintf(skillTemplateContent, skillName, skillName)
	}
	//hasName := false
	//for _, line := range strings.Split(fm, "\n") {
	//	line = strings.TrimSpace(line)
	//	if strings.HasPrefix(line, "name:") {
	//		val := strings.TrimSpace(strings.TrimPrefix(line, "name:"))
	//		val = strings.Trim(val, `"'`)
	//		if val != "" {
	//			hasName = true
	//		}
	//		break
	//	}
	//}
	//if !hasName {
	//	return false, "Frontmatter must include 'name:' field", fmt.Sprintf(skillTemplateContent, skillName, skillName)
	//}
	return true, "", ""
}

// extractSkillFromZip extracts SKILL.md from zip. Looks for SKILL.md at root or in first-level dirs.
// Zip format uses forward slashes; we normalize with ToSlash for cross-platform (Windows) compatibility.
// Returns (content, nil) or (nil, error).
func extractSkillFromZip(r io.ReaderAt, size int64) ([]byte, error) {
	zr, err := zip.NewReader(r, size)
	if err != nil {
		return nil, fmt.Errorf("invalid zip: %w", err)
	}
	var candidates []*zip.File
	for _, f := range zr.File {
		if f.FileInfo().IsDir() {
			continue
		}
		// Zip names may use / or \; normalize for Windows compatibility
		baseName := strings.ToLower(filepath.Base(filepath.ToSlash(f.Name)))
		if baseName == "skill.md" {
			candidates = append(candidates, f)
		}
	}
	if len(candidates) == 0 {
		// Check for SKILL.md in subdirs
		for _, f := range zr.File {
			if f.FileInfo().IsDir() {
				continue
			}
			clean := filepath.ToSlash(filepath.Clean(f.Name))
			parts := strings.Split(clean, "/")
			if len(parts) >= 2 && strings.ToLower(parts[len(parts)-1]) == "skill.md" {
				candidates = append(candidates, f)
			}
		}
	}
	if len(candidates) == 0 {
		return nil, fmt.Errorf("zip must contain SKILL.md (at root or in a subdirectory)")
	}
	// Use first found
	rc, err := candidates[0].Open()
	if err != nil {
		return nil, fmt.Errorf("cannot read SKILL.md from zip: %w", err)
	}
	defer rc.Close()
	data, err := io.ReadAll(io.LimitReader(rc, 1<<20))
	if err != nil {
		return nil, fmt.Errorf("cannot read SKILL.md: %w", err)
	}
	return data, nil
}

// handleSkillsUpload handles POST /api/skills/upload (multipart: name, file).
func (s *Server) handleSkillsUpload(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	// Optional auth - if gateway requires token, check it
	// For now we allow unauthenticated when no token configured (local dev)
	_ = r

	// Limit body size
	r.Body = http.MaxBytesReader(w, r.Body, skillUploadMaxSize)
	if err := r.ParseMultipartForm(skillUploadMaxSize); err != nil {
		writeSkillsUploadError(w, http.StatusBadRequest, "failed to parse form: "+err.Error(), "")
		return
	}

	file, header, err := r.FormFile("file")
	if err != nil {
		writeSkillsUploadError(w, http.StatusBadRequest, "file is required: "+err.Error(), "")
		return
	}
	defer file.Close()

	contentType := header.Header.Get("Content-Type")
	isZip := strings.Contains(contentType, "zip") || strings.HasSuffix(strings.ToLower(header.Filename), ".zip")

	nameRaw := strings.TrimSpace(r.FormValue("name"))
	if nameRaw == "" {
		if isZip {
			// 压缩包未填 name 时，用压缩包文件名（去掉 .zip）作为默认名
			base := filepath.Base(header.Filename)
			if strings.HasSuffix(strings.ToLower(base), ".zip") {
				base = base[:len(base)-4]
			}
			nameRaw = strings.TrimSpace(base)
			if nameRaw == "" || !skillNameRe.MatchString(nameRaw) {
				writeSkillsUploadError(w, http.StatusBadRequest,
					"when uploading zip without name, filename must be a valid skill name (1-64 chars, English letters, numbers, hyphens, underscores)",
					fmt.Sprintf(skillTemplateContent, "my-skill", "My Skill"))
				return
			}
		} else {
			writeSkillsUploadError(w, http.StatusBadRequest,
				"name is required for single file upload (SKILL.md)",
				fmt.Sprintf(skillTemplateContent, "my-skill", "My Skill"))
			return
		}
	} else if !skillNameRe.MatchString(nameRaw) {
		writeSkillsUploadError(w, http.StatusBadRequest,
			"name must be 1-64 chars, English letters, numbers, hyphens, underscores",
			fmt.Sprintf(skillTemplateContent, "my-skill", "My Skill"))
		return
	}

	env := func(k string) string { return os.Getenv(k) }
	managedDir := handlers.ResolveManagedSkillsDir(env)
	targetDir := filepath.Join(managedDir, nameRaw)

	// Ensure parent exists
	if err := os.MkdirAll(managedDir, 0755); err != nil {
		writeSkillsUploadError(w, http.StatusInternalServerError, "failed to create skills dir: "+err.Error(), "")
		return
	}

	buf, err := io.ReadAll(io.LimitReader(file, skillUploadMaxSize))
	if err != nil {
		writeSkillsUploadError(w, http.StatusBadRequest, "failed to read file: "+err.Error(), "")
		return
	}

	var skillContent []byte
	if isZip {
		skillContent, err = extractSkillFromZip(bytes.NewReader(buf), int64(len(buf)))
		if err != nil {
			template := fmt.Sprintf(skillTemplateContent, nameRaw, nameRaw)
			writeSkillsUploadError(w, http.StatusBadRequest, err.Error(), template)
			return
		}
	} else {
		// Single file - must be SKILL.md
		fname := strings.ToLower(filepath.Base(header.Filename))
		if fname != "skill.md" {
			writeSkillsUploadError(w, http.StatusBadRequest,
				"single file must be named SKILL.md",
				fmt.Sprintf(skillTemplateContent, nameRaw, nameRaw))
			return
		}
		skillContent = buf
	}

	// Validate format
	valid, errMsg, template := validateSkillContent(skillContent, nameRaw)
	if !valid {
		writeSkillsUploadError(w, http.StatusBadRequest, errMsg, template)
		return
	}

	// Remove existing dir if present (overwrite)
	_ = os.RemoveAll(targetDir)
	if err := os.MkdirAll(targetDir, 0755); err != nil {
		writeSkillsUploadError(w, http.StatusInternalServerError, "failed to create skill dir: "+err.Error(), "")
		return
	}

	if isZip {
		// Extract zip: find the dir containing SKILL.md and extract its contents to targetDir
		zr, err := zip.NewReader(bytes.NewReader(buf), int64(len(buf)))
		if err != nil {
			writeSkillsUploadError(w, http.StatusBadRequest, "invalid zip: "+err.Error(), "")
			return
		}
		// Zip uses / or \; normalize to / for consistent prefix logic (Windows-compatible)
		prefix := ""
		for _, f := range zr.File {
			if f.FileInfo().IsDir() {
				continue
			}
			clean := filepath.ToSlash(filepath.Clean(f.Name))
			if strings.Contains(clean, "..") {
				continue
			}
			lower := strings.ToLower(clean)
			if strings.HasSuffix(lower, "skill.md") {
				// path.Dir works with / on all platforms
				dir := path.Dir(clean)
				if dir != "." {
					prefix = dir + "/"
				}
				break
			}
		}
		for _, f := range zr.File {
			if f.FileInfo().IsDir() {
				continue
			}
			clean := filepath.ToSlash(filepath.Clean(f.Name))
			if strings.Contains(clean, "..") {
				continue
			}
			rel := clean
			if prefix != "" && strings.HasPrefix(clean, prefix) {
				rel = strings.TrimPrefix(clean, prefix)
			}
			if rel == "" || rel == clean && strings.Contains(clean, "/") {
				continue
			}
			dest := filepath.Join(targetDir, filepath.FromSlash(rel))
			_ = os.MkdirAll(filepath.Dir(dest), 0755)
			rc, err := f.Open()
			if err != nil {
				continue
			}
			data, _ := io.ReadAll(io.LimitReader(rc, 1<<20))
			rc.Close()
			_ = os.WriteFile(dest, data, 0644)
		}
	} else {
		skillPath := filepath.Join(targetDir, "SKILL.md")
		if err := os.WriteFile(skillPath, skillContent, 0644); err != nil {
			writeSkillsUploadError(w, http.StatusInternalServerError, "failed to write SKILL.md: "+err.Error(), "")
			return
		}
	}

	w.Header().Set("Content-Type", "application/json")
	result := map[string]interface{}{
		"ok":   true,
		"name": nameRaw,
		"path": targetDir,
	}
	marshal, err := json.Marshal(result)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write(marshal)
	//err = json.NewEncoder(w).Encode(map[string]interface{}{
	//	"ok":   true,
	//	"name": nameRaw,
	//	"path": targetDir,
	//})
}

func writeSkillsUploadError(w http.ResponseWriter, status int, message string, template string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	payload := map[string]interface{}{"ok": false, "error": message}
	if template != "" {
		payload["template"] = template
	}
	_ = json.NewEncoder(w).Encode(payload)
}
