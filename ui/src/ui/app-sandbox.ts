import type { AppViewState } from "./app-view-state.ts";
import { getSandboxFromConfig, saveSandboxConfig } from "./controllers/sandbox.ts";
import type { SandboxConfigForm } from "./controllers/sandbox.ts";
import { loadConfig } from "./controllers/config.ts";
import { saveConfigPatch } from "./controllers/config.ts";
import { cloneConfigObject } from "./controllers/config/form-utils.ts";
import { setPathValue } from "./controllers/config/form-utils.ts";

/** Sync sandbox form from config when entering tab or after config load. */
export function syncSandboxFromConfig(host: AppViewState): SandboxConfigForm | null {
  const current = getSandboxFromConfig(host);
  if (current == null) return null;
  return cloneConfigObject(current) as SandboxConfigForm;
}

export function handleSandboxToggleEnabled(host: AppViewState) {
  if (!host.client || !host.connected) return;
  // 以当前 UI 可见状态为准，避免因 configForm/snapshot 差异导致开关不同步
  const currentForm =
    (host.sandboxForm as SandboxConfigForm | null) ?? getSandboxFromConfig(host) ?? {};
  const currentEnabled = currentForm.enabled !== false;

  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {}) as Record<
    string,
    unknown
  >;
  if (!base.security || typeof base.security !== "object") {
    base.security = {};
  }
  const security = base.security as { sandbox?: Record<string, unknown> };
  if (!security.sandbox || typeof security.sandbox !== "object") {
    security.sandbox = {};
  }
  const sb = security.sandbox as Record<string, unknown>;
  // 取反当前 UI 状态：enabled 默认 true，显式 false 表示关闭
  sb.enabled = !currentEnabled;
  // 更新本地表单状态，确保按钮状态立即刷新（保留其他字段）
  host.sandboxForm = {
    ...(currentForm as SandboxConfigForm),
    enabled: sb.enabled as boolean,
  };
  host.configSaving = true;
  host.lastError = null;
  saveConfigPatch(host, { security })
    .then(() => loadConfig(host))
    .finally(() => {
      host.configSaving = false;
    });
}

export function handleValidatorToggleEnabled(host: AppViewState) {
  if (!host.client || !host.connected) return;
  const currentForm =
    (host.sandboxForm as SandboxConfigForm | null) ?? getSandboxFromConfig(host) ?? {};
  const currentValidator = (currentForm.validator ?? {}) as NonNullable<SandboxConfigForm["validator"]> & {
    enabled?: boolean;
  };
  const currentEnabled = currentValidator.enabled !== false;

  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {}) as Record<
    string,
    unknown
  >;
  if (!base.security || typeof base.security !== "object") {
    base.security = {};
  }
  const security = base.security as { sandbox?: Record<string, unknown>; validator?: Record<string, unknown> };
  if (!security.validator || typeof security.validator !== "object") {
    security.validator = {};
  }
  const v = security.validator as Record<string, unknown>;
  v.enabled = !currentEnabled;

  host.sandboxForm = {
    ...currentForm,
    validator: {
      ...currentValidator,
      enabled: v.enabled as boolean,
    },
  };
  host.configSaving = true;
  host.lastError = null;
  saveConfigPatch(host, { security })
    .then(() => loadConfig(host))
    .finally(() => {
      host.configSaving = false;
    });
}

export function handleApprovalQueueToggleEnabled(host: AppViewState) {
  if (!host.client || !host.connected) return;
  const currentForm =
    (host.sandboxForm as SandboxConfigForm | null) ?? getSandboxFromConfig(host) ?? {};
  const currentQueue =
    (currentForm.approvalQueue ?? {}) as NonNullable<SandboxConfigForm["approvalQueue"]> & {
      enabled?: boolean;
    };
  const currentEnabled = currentQueue.enabled === true;

  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {}) as Record<
    string,
    unknown
  >;
  if (!base.security || typeof base.security !== "object") {
    base.security = {};
  }
  const security = base.security as { sandbox?: Record<string, unknown>; approvalQueue?: Record<string, unknown> };
  if (!security.approvalQueue || typeof security.approvalQueue !== "object") {
    security.approvalQueue = {};
  }
  const q = security.approvalQueue as Record<string, unknown>;
  q.enabled = !currentEnabled;

  host.sandboxForm = {
    ...currentForm,
    approvalQueue: {
      ...currentQueue,
      enabled: q.enabled as boolean,
    },
  };
  host.configSaving = true;
  host.lastError = null;
  saveConfigPatch(host, { security })
    .then(() => loadConfig(host))
    .finally(() => {
      host.configSaving = false;
    });
}

export function handleSandboxPatch(
  host: AppViewState,
  sandboxForm: Record<string, unknown>,
  path: string[],
  value: unknown,
) {
  setPathValue(sandboxForm, path, value);
  // Ensure UI updates immediately (new deep-cloned object reference).
  // This avoids timing issues where controlled inputs are re-rendered with stale nested references.
  host.sandboxForm = cloneConfigObject(sandboxForm) as Record<string, unknown>;
}

export async function handleSandboxSave(
  host: AppViewState,
  sandboxForm: SandboxConfigForm | Record<string, unknown>,
) {
  const current = (sandboxForm as SandboxConfigForm) ?? {};
  const normalized = cloneConfigObject(current) as SandboxConfigForm;
  // 解析资源限制中的内存字符串（支持 1G、512M、1024 等，统一存为字节数）
  const rl = (normalized.resourceLimit ?? {}) as NonNullable<SandboxConfigForm["resourceLimit"]> & {
    maxMemoryBytes?: number | string;
    maxDiskBytes?: number | string;
  };
  let errorMsg: string | null = null;
  if (typeof rl.maxMemoryBytes === "string") {
    const parsed = parseByteSize(rl.maxMemoryBytes);
    if (parsed == null && rl.maxMemoryBytes.trim() !== "") {
      errorMsg = "Invalid max memory format, use e.g. 1G, 512M, 1024";
    } else {
      rl.maxMemoryBytes = parsed ?? undefined;
    }
  }
  if (!errorMsg && typeof rl.maxDiskBytes === "string") {
    const parsed = parseByteSize(rl.maxDiskBytes);
    if (parsed == null && rl.maxDiskBytes.trim() !== "") {
      errorMsg = "Invalid max disk format, use e.g. 10G, 100G, 10240";
    } else {
      rl.maxDiskBytes = parsed ?? undefined;
    }
  }
  if (errorMsg) {
    host.lastError = errorMsg;
    return;
  }
  // 默认资源限制：若用户未填写，则使用安全默认值
  if (!rl.maxCpuPercent || rl.maxCpuPercent <= 0) {
    rl.maxCpuPercent = 60;
  }
  if (typeof rl.maxMemoryBytes !== "number" || rl.maxMemoryBytes <= 0) {
    // 1 GiB
    rl.maxMemoryBytes = 1024 ** 3;
  }
  if (typeof rl.maxDiskBytes !== "number" || rl.maxDiskBytes <= 0) {
    // 1 GiB
    rl.maxDiskBytes = 1024 ** 3;
  }
  normalized.resourceLimit = rl;

  await saveSandboxConfig(host, normalized);
  host.sandboxForm = syncSandboxFromConfig(host);
}

// parseByteSize 将诸如 "1G"、"512M"、"1024" 等字符串解析为字节数。
function parseByteSize(input: string): number | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/^(\d+(?:\.\d+)?)(\s*)([kKmMgGtT]?[bB]?)?$/);
  if (!match) return null;
  const value = Number.parseFloat(match[1]);
  if (!Number.isFinite(value)) return null;
  const unitRaw = (match[3] ?? "").toUpperCase();
  let multiplier = 1;
  switch (unitRaw) {
    case "K":
    case "KB":
      multiplier = 1024;
      break;
    case "M":
    case "MB":
      multiplier = 1024 ** 2;
      break;
    case "G":
    case "GB":
      multiplier = 1024 ** 3;
      break;
    case "T":
    case "TB":
      multiplier = 1024 ** 4;
      break;
    default:
      multiplier = 1;
      break;
  }
  return Math.round(value * multiplier);
}
