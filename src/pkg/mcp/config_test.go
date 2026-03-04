package mcp

import (
	"strings"
	"testing"

	"github.com/openocta/openocta/pkg/config"
)

func TestBuildServerSpecsFromMcpConfig_EnvInjection(t *testing.T) {
	cfg := &config.McpConfig{
		Servers: map[string]config.McpServerEntry{
			"prometheus_test": {
				Enabled: ptr(true),
				Command: "npx",
				Args:    []string{"prometheus-mcp@latest", "stdio"},
				Env:     map[string]string{"PROMETHEUS_URL": "http://192.168.50.59:9090"},
			},
		},
	}
	specs := BuildServerSpecsFromMcpConfig(cfg)
	if len(specs) != 1 {
		t.Fatalf("expected 1 spec, got %d", len(specs))
	}
	spec := specs[0]
	if !strings.HasPrefix(spec, "stdio://") {
		t.Errorf("spec should start with stdio://, got %q", spec)
	}
	if !strings.Contains(spec, "PROMETHEUS_URL=http://192.168.50.59:9090") {
		t.Errorf("spec should contain PROMETHEUS_URL, got %q", spec)
	}
	if !strings.Contains(spec, "env ") {
		t.Errorf("spec should use env prefix, got %q", spec)
	}
	if !strings.Contains(spec, "npx prometheus-mcp@latest stdio") {
		t.Errorf("spec should contain npx command, got %q", spec)
	}
}

func TestBuildServerSpecsFromMcpConfig_ServicePrometheus(t *testing.T) {
	cfg := &config.McpConfig{
		Servers: map[string]config.McpServerEntry{
			"prometheus": {
				Service:    "prometheus",
				ServiceURL: "http://192.168.50.59:9090",
			},
		},
	}
	specs := BuildServerSpecsFromMcpConfig(cfg)
	if len(specs) != 1 {
		t.Fatalf("expected 1 spec, got %d", len(specs))
	}
	spec := specs[0]
	if !strings.Contains(spec, "PROMETHEUS_URL=http://192.168.50.59:9090") {
		t.Errorf("service spec should contain PROMETHEUS_URL, got %q", spec)
	}
	if !strings.Contains(spec, "prometheus-mcp-server") {
		t.Errorf("spec should contain prometheus-mcp-server, got %q", spec)
	}
}

func ptr(b bool) *bool { return &b }
