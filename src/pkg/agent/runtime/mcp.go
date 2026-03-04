// Package runtime: build MCPServers list from OpenOcta config for api.Options.
package runtime

import (
	"github.com/openocta/openocta/pkg/config"
	"github.com/openocta/openocta/pkg/mcp"
)

// BuildMCPServersFromConfig 将 config.Mcp.Servers 转为 MCP 规格列表，复用 pkg/mcp 公共模块。
func BuildMCPServersFromConfig(cfg *config.OpenOctaConfig) []string {
	return mcp.BuildServerSpecs(cfg)
}
