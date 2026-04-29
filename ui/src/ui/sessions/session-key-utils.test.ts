import { describe, expect, it } from "vitest";
import { isCronRunSessionKey } from "./session-key-utils.js";

describe("isCronRunSessionKey", () => {
  it("matches current agent:cron:…:run:… keys", () => {
    expect(isCronRunSessionKey("agent:main:cron:job-1:run:abc")).toBe(true);
    expect(isCronRunSessionKey("AGENT:MAIN:cron:job-1:run:abc")).toBe(true);
  });

  it("matches legacy cron:…:run:… keys", () => {
    expect(isCronRunSessionKey("cron:job-1:run:sess-1")).toBe(true);
  });

  it("does not match main or persistent cron job keys", () => {
    expect(isCronRunSessionKey("main")).toBe(false);
    expect(isCronRunSessionKey("agent:main:main")).toBe(false);
    expect(isCronRunSessionKey("agent:main:cron:job-1")).toBe(false);
  });

  it("does not confuse employee run keys", () => {
    expect(isCronRunSessionKey("agent:main:employee:e1:run:uuid")).toBe(false);
  });
});
