import { html, nothing } from "lit";
import { t } from "../strings.js";

export type DigitalEmployee = {
  id: string;
  name: string;
  description: string;
  builtin: boolean;
  enabled?: boolean;
  createdAt?: number;
  skillIds?: string[];
  skillNames?: string[];
  mcpServerKeys?: string[];
};

export type DigitalEmployeeProps = {
  loading: boolean;
  employees: DigitalEmployee[];
  error: string | null;
  onRefresh: () => void;
  onOpenEmployee: (employeeId: string) => void;
  // 创建
  createModalOpen: boolean;
  createName: string;
  createDescription: string;
  createPrompt: string;
  createError: string | null;
  createBusy: boolean;
  advancedOpen: boolean;
  mcpJson: string;
  onMcpJsonChange: (value: string) => void;
  skillUploadName: string;
  skillUploadFiles: File[];
  skillUploadError: string | null;
  onCreateOpen: () => void;
  onCreateClose: () => void;
  onCreateNameChange: (value: string) => void;
  onCreateDescriptionChange: (value: string) => void;
  onCreatePromptChange: (value: string) => void;
  onCreateSubmit: () => void;
  onToggleAdvanced: () => void;
  onSkillUploadNameChange: (value: string) => void;
  onSkillUploadFilesChange: (files: File[]) => void;
  // 管理
  onToggleEnabled: (employeeId: string, enabled: boolean) => void;
  onDelete: (employeeId: string) => void;
  onEdit: (employeeId: string) => void;
  // 编辑
  editModalOpen: boolean;
  editId: string;
  editName: string;
  editDescription: string;
  editPrompt: string;
  editMcpJson: string;
  editSkillNames: string[];
  editSkillFilesToUpload: File[];
  editSkillsToDelete: string[];
  editError: string | null;
  editBusy: boolean;
  onEditClose: () => void;
  onEditDescriptionChange: (value: string) => void;
  onEditPromptChange: (value: string) => void;
  onEditMcpJsonChange: (value: string) => void;
  onEditSkillFilesChange: (files: File[]) => void;
  onEditSkillDelete: (skillName: string) => void;
  onEditSkillUndoDelete: (skillName: string) => void;
  onEditSubmit: () => void;
};

export function renderDigitalEmployee(props: DigitalEmployeeProps) {
  const list = props.employees ?? [];
  const rawName = props.createName?.trim() ?? "";
  const employeeIdPreview = deriveEmployeeIdFromName(rawName);
  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${t("navTitleDigitalEmployee")}</div>
          <div class="card-sub">
            提供不同垂直场景的对话模版，点击任一数字员工即可开启新的会话。
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn primary" ?disabled=${props.loading} @click=${props.onCreateOpen}>
            ${t("skillsAdd")}
          </button>
          <button class="btn" ?disabled=${props.loading} @click=${props.onRefresh}>
            ${props.loading ? t("commonLoading") : t("commonRefresh")}
          </button>
        </div>
      </div>

      ${
        props.error
          ? html`<div class="callout danger" style="margin-top: 12px;">${props.error}</div>`
          : nothing
      }

      ${
        !props.loading && list.length === 0
          ? html`<div class="muted" style="margin-top: 16px;">暂无数字员工，可稍后在配置中添加。</div>`
          : html`
              <div class="list" style="margin-top: 16px;">
                ${list.map((emp) => {
                  const title = emp.name || emp.id;
                  const desc = emp.description || (emp.builtin ? "内置数字员工" : "自定义数字员工");
                  const created =
                    typeof emp.createdAt === "number" && emp.createdAt > 0
                      ? new Date(emp.createdAt).toLocaleString()
                      : emp.builtin
                        ? "内置"
                        : "";
                  const enabled = emp.enabled !== false;
                  return html`
                    <div
                      class="list-item list-item--row"
                      style="width: 100%; text-align: left;"
                    >
                      <div class="list-main">
                        <div class="list-title">
                          ${title}
                          ${emp.builtin
                            ? html`<span class="chip" style="margin-left: 8px;">内置</span>`
                            : nothing}
                        </div>
                        <div class="list-sub">${desc}</div>
                        <div class="list-sub muted" style="margin-top: 4px;">
                          ${created ? html`<span>创建时间：${created}</span>` : nothing}
                          <span style="margin-left: 12px;">
                            状态：${enabled ? "启用" : "禁用"}
                          </span>
                          ${renderSkillMcpHint(emp)}
                        </div>
                      </div>
                      <div class="row" style="gap: 8px; align-items: center; justify-content: flex-end;">
                        <button
                          class="btn btn--sm primary"
                          @click=${() => props.onOpenEmployee(emp.id)}
                        >
                          会话
                        </button>
                        <button
                          class="btn btn--sm"
                          @click=${() => props.onEdit(emp.id)}
                          ?disabled=${emp.builtin}
                        >
                          修改
                        </button>
                        <button
                          class="btn btn--sm danger"
                          @click=${() => props.onDelete(emp.id)}
                        >
                          ${t("skillsDelete")}
                        </button>
                      </div>
                    </div>
                  `;
                })}
              </div>
            `
      }

      ${
        props.createModalOpen
          ? html`
              <div class="modal-overlay" @click=${props.onCreateClose}>
                <div class="modal card" @click=${(e: Event) => e.stopPropagation()}>
                  <div class="card-title">新增数字员工</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>名称</span>
                    <input
                      type="text"
                      .value=${props.createName}
                      @input=${(e: Event) =>
                        props.onCreateNameChange((e.target as HTMLInputElement).value)}
                      placeholder="如 SRE 运维专家"
                    />
                    <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>描述</span>
                    <textarea
                      rows="2"
                      .value=${props.createDescription}
                      @input=${(e: Event) =>
                        props.onCreateDescriptionChange(
                          (e.target as HTMLTextAreaElement).value,
                        )}
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>Prompt（可选）</span>
                    <textarea
                      rows="4"
                      .value=${props.createPrompt}
                      @input=${(e: Event) =>
                        props.onCreatePromptChange((e.target as HTMLTextAreaElement).value)}
                      placeholder="为该数字员工编写系统提示/人设说明。"
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <button class="btn secondary" type="button" @click=${props.onToggleAdvanced}>
                      ${props.advancedOpen ? "收起高级配置" : "展开高级配置"}
                    </button>
                  </div>
                  ${
                    props.advancedOpen
                      ? html`
                          <div class="card" style="margin-top: 12px;">
                            <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">
                              高级配置
                            </div>
                            <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                              预估 ID：<code>${employeeIdPreview}</code>（基于名称生成，用于专属技能目录
                              ~/.openocta/employee_skills/${employeeIdPreview}/...）
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>MCP 配置（可选，JSON）</span>
                              <textarea
                                rows="4"
                                .value=${props.mcpJson}
                                @input=${(e: Event) =>
                                  props.onMcpJsonChange(
                                    (e.target as HTMLTextAreaElement).value,
                                  )}
                                placeholder='remote: {"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}} \nlocal: {"prometheus_test":{"enabled":true,"command":"npx","args":["prometheus-mcp@latest","stdio"],"env":{"PROMETHEUS_URL":"http://192.168.50.59:9090"}}}'
                              ></textarea>
                              <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                                与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                              </div>
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能名称（可选）</span>
                              <input
                                type="text"
                                .value=${props.skillUploadName}
                                @input=${(e: Event) =>
                                  props.onSkillUploadNameChange(
                                    (e.target as HTMLInputElement).value,
                                  )}
                                placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                              />
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                              <input
                                type="file"
                                accept=".md,.MD,.zip"
                                multiple
                                @change=${(e: Event) => {
                                  const input = e.target as HTMLInputElement;
                                  const files = input.files ? Array.from(input.files) : [];
                                  props.onSkillUploadFilesChange(files);
                                }}
                              />
                            </div>
                            ${
                              props.skillUploadError
                                ? html`
                                    <div class="callout danger" style="margin-top: 8px;">
                                      ${props.skillUploadError}
                                    </div>
                                  `
                                : nothing
                            }
                          </div>
                        `
                      : nothing
                  }
                  ${
                    props.createError
                      ? html`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${props.createError}
                          </div>
                        `
                      : nothing
                  }
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${props.createBusy} @click=${props.onCreateClose}>
                      ${t("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${props.createBusy || !props.createName.trim()}
                      @click=${props.onCreateSubmit}
                    >
                      ${props.createBusy ? t("commonLoading") : t("skillsUploadSubmit")}
                    </button>
                  </div>
                </div>
              </div>
            `
          : nothing
      }

      ${
        props.editModalOpen
          ? html`
              <div class="modal-overlay" @click=${props.onEditClose}>
                <div class="modal card" @click=${(e: Event) => e.stopPropagation()}>
                  <div class="card-title">修改数字员工</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>名称</span>
                    <input type="text" .value=${props.editName} disabled />
                    <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称不可修改</div>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>描述</span>
                    <textarea
                      rows="2"
                      .value=${props.editDescription}
                      @input=${(e: Event) =>
                        props.onEditDescriptionChange(
                          (e.target as HTMLTextAreaElement).value,
                        )}
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>Prompt（可选）</span>
                    <textarea
                      rows="4"
                      .value=${props.editPrompt}
                      @input=${(e: Event) =>
                        props.onEditPromptChange(
                          (e.target as HTMLTextAreaElement).value,
                        )}
                      placeholder="为该数字员工编写系统提示/人设说明。"
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>MCP 配置（可选，JSON）</span>
                    <textarea
                      rows="4"
                      .value=${props.editMcpJson}
                      @input=${(e: Event) =>
                        props.onEditMcpJsonChange(
                          (e.target as HTMLTextAreaElement).value,
                        )}
                      placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>已有技能</span>
                    ${
                      props.editSkillNames.length === 0
                        ? html`<div class="muted" style="font-size: 12px;">暂无技能</div>`
                        : html`
                            <div class="row" style="flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                              ${props.editSkillNames.map(
                                (name) =>
                                  html`
                                    <span
                                      class="chip"
                                      style="display: inline-flex; align-items: center; gap: 4px;"
                                    >
                                      ${name}
                                      ${!props.editSkillsToDelete.includes(name)
                                        ? html`
                                            <button
                                              type="button"
                                              class="btn btn--sm"
                                              style="padding: 2px 6px; font-size: 11px;"
                                              @click=${() => props.onEditSkillDelete(name)}
                                            >
                                              删除
                                            </button>
                                          `
                                        : html`
                                            <span class="muted" style="font-size: 11px;"
                                              >已标记删除</span
                                            >
                                            <button
                                              type="button"
                                              class="btn btn--sm"
                                              style="padding: 2px 6px; font-size: 11px;"
                                              @click=${() => props.onEditSkillUndoDelete(name)}
                                            >
                                              撤销
                                            </button>
                                          `}
                                    </span>
                                  `,
                              )}
                            </div>
                          `
                    }
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>新上传技能文件（可多选）</span>
                    <input
                      type="file"
                      accept=".md,.MD,.zip"
                      multiple
                      @change=${(e: Event) => {
                        const input = e.target as HTMLInputElement;
                        const files = input.files ? Array.from(input.files) : [];
                        props.onEditSkillFilesChange(files);
                      }}
                    />
                    ${
                      props.editSkillFilesToUpload.length > 0
                        ? html`
                            <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                              ${props.editSkillFilesToUpload.map(
                                (f) =>
                                  html`<span class="chip" style="font-size: 12px;"
                                    >${f.name}</span
                                  >`,
                              )}
                            </div>
                          `
                        : nothing
                    }
                  </div>
                  ${
                    props.editError
                      ? html`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${props.editError}
                          </div>
                        `
                      : nothing
                  }
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${props.editBusy} @click=${props.onEditClose}>
                      ${t("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${props.editBusy}
                      @click=${props.onEditSubmit}
                    >
                      ${props.editBusy ? t("commonLoading") : "保存"}
                    </button>
                  </div>
                </div>
              </div>
            `
          : nothing
      }
    </section>
  `;
}

function renderSkillMcpHint(emp: DigitalEmployee) {
  const skills = emp.skillNames ?? emp.skillIds ?? [];
  const mcp = emp.mcpServerKeys ?? [];
  if (skills.length === 0 && mcp.length === 0) return html``;
  const maxShow = 3;
  const skillStr =
    skills.length <= maxShow
      ? skills.join(", ")
      : `${skills.slice(0, maxShow).join(", ")}....`;
  const mcpStr =
    mcp.length <= maxShow ? mcp.join(", ") : `${mcp.slice(0, maxShow).join(", ")}....`;
  const fullSkill = skills.join(", ");
  const fullMcp = mcp.join(", ");
  const title =
    fullSkill && fullMcp
      ? `技能：${fullSkill}\nMCP：${fullMcp}`
      : fullSkill
        ? `技能：${fullSkill}`
        : `MCP：${fullMcp}`;
  const parts: string[] = [];
  if (skillStr) parts.push(`技能：${skillStr}`);
  if (mcpStr) parts.push(`MCP：${mcpStr}`);
  return html`<span
    style="margin-left: 12px; cursor: help; text-decoration: underline dotted;"
    title=${title}
  >
    ${parts.join(" | ")}
  </span>`;
}

function deriveEmployeeIdFromName(name: string): string {
  const s = name.trim().toLowerCase();
  if (!s) {
    return "employee";
  }
  let out = "";
  for (const ch of s) {
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      out += ch;
      continue;
    }
    if (ch === "-" || ch === "_" || ch === " ") {
      out += "-";
    }
  }
  out = out.replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  if (!out) {
    out = "employee";
  }
  if (out.length > 64) {
    out = out.slice(0, 64);
  }
  return out;
}

