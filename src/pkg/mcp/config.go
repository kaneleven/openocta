// Package mcp 提供 MCP（Model Context Protocol）配置的公共解析与规格构建。
// 与 src/docs/mcp-configuration.md 文档一致，供 agent/runtime、acp/mcp、gateway 等模块复用。
package mcp

import (
	"os"
	"strings"

	"github.com/openocta/openocta/pkg/config"
)

// BuildServerSpecs 将 config.Mcp.Servers 转为 MCP 规格字符串列表，供 API Options 使用。
func BuildServerSpecs(cfg *config.OpenOctaConfig) []string {
	if cfg == nil || cfg.Mcp == nil {
		return nil
	}
	return BuildServerSpecsFromMcpConfig(cfg.Mcp)
}

// BuildServerSpecsFromMcpConfig 从 McpConfig 构建规格列表，供全局配置或数字员工级 MCP 合并后使用。
// 每个条目解析为以下三种之一：
// - stdio://command arg1 arg2 ...（Command + Args）
// - url（URL 字段）
// - stdio spec（Service + ServiceURL，如 prometheus）
// 已禁用的条目会被跳过，重复规格会去重。
func BuildServerSpecsFromMcpConfig(mcp *config.McpConfig) []string {
	if mcp == nil || len(mcp.Servers) == 0 {
		return nil
	}
	var specs []string
	seen := make(map[string]struct{})
	for name, entry := range mcp.Servers {
		if entry.Enabled != nil && !*entry.Enabled {
			continue
		}
		spec := entryToSpec(name, &entry)
		spec = strings.TrimSpace(spec)
		if spec == "" {
			continue
		}
		if _, ok := seen[spec]; ok {
			continue
		}
		seen[spec] = struct{}{}
		specs = append(specs, spec)
	}
	return specs
}

func entryToSpec(name string, e *config.McpServerEntry) string {
	// 1) Command (stdio)
	if strings.TrimSpace(e.Command) != "" {
		cmd := strings.TrimSpace(e.Command)
		args := strings.TrimSpace(strings.Join(e.Args, " "))
		envPrefix := buildEnvPrefixForSpec(e.Env, cmd)
		base := cmd
		if args != "" {
			base = cmd + " " + args
		}
		return "stdio://" + envPrefix + base
	}
	// 2) URL (SSE/HTTP)
	if strings.TrimSpace(e.URL) != "" {
		return strings.TrimSpace(e.URL)
	}
	// 3) Service + ServiceURL -> known stdio spec
	if strings.TrimSpace(e.Service) != "" && strings.TrimSpace(e.ServiceURL) != "" {
		return serviceToStdioSpec(
			strings.ToLower(strings.TrimSpace(e.Service)),
			strings.TrimSpace(e.ServiceURL),
		)
	}
	return ""
}

// buildEnvPrefixForSpec 将 env 转为可嵌入 stdio spec 的前缀。
// agentsdk-go 的 stdio spec 不支持单独传 env，故用 env VAR=val command 形式注入。
// 展开 $VAR 引用。注意：值含空格时可能被 strings.Fields 拆分，建议用 URL 编码等避免。
func buildEnvPrefixForSpec(env map[string]string, command string) string {
	if len(env) == 0 {
		return ""
	}
	var parts []string
	for k, v := range env {
		k = strings.TrimSpace(k)
		if k == "" {
			continue
		}
		expanded := os.Expand(v, func(name string) string { return os.Getenv(name) })
		parts = append(parts, k+"="+expanded)
	}
	if len(parts) == 0 {
		return ""
	}
	// 使用 npx 时添加 NPM 静默配置，减少 npm 输出污染 stdio 通道（见 MCP servers #2895）
	if strings.Contains(strings.ToLower(command), "npx") {
		parts = append(parts, "NPM_CONFIG_LOGLEVEL=error", "NPM_CONFIG_AUDIT=false")
	}
	return "env " + strings.Join(parts, " ") + " "
}

func serviceToStdioSpec(service, backendURL string) string {
	switch service {
	case "prometheus":
		// 必须注入 PROMETHEUS_URL，否则 prometheus-mcp 无法连接后端
		envPrefix := buildEnvPrefixForSpec(map[string]string{"PROMETHEUS_URL": backendURL}, "npx")
		return "stdio://" + envPrefix + "npx -y prometheus-mcp-server"
	default:
		return ""
	}
}
