import { describe, it, expect } from "vitest";
import { createRun, advanceToStable, violatesExpectation, handToWorkbench, applyFix, setMode, type Step } from "./assurance-rail";

describe("autonomy mode", () => {
  it("runs every step to passed and issues a verdict even when an output silently diverged", () => {
    const run = advanceToStable(createRun("autonomy"));

    expect(run.phase).toBe("completed");
    expect(run.steps.every((s) => s.status === "passed")).toBe(true);
    expect(run.verdict).not.toBeNull();
    expect(run.verdict?.hostingProvider).toBe("");
  });
});

describe("governed mode", () => {
  it("flags the diverged step for review and pauses before issuing a verdict", () => {
    const run = advanceToStable(createRun("governed"));

    expect(run.phase).toBe("paused");
    expect(run.verdict).toBeNull();

    const enrich = run.steps.find((s) => s.id === "enrich");
    expect(enrich?.status).toBe("needs-review");

    const ticket = run.steps.find((s) => s.id === "ticket");
    expect(ticket?.status).toBe("pending");
  });
});

describe("detection is expectation-driven", () => {
  const base: Step = {
    id: "x", label: "x", tool: "x", expectation: "", field: "f",
    rule: "non-empty", source: "builder", output: "", status: "pending",
  };

  it("flags a step whose output fails its declared non-empty expectation", () => {
    expect(violatesExpectation({ ...base, rule: "non-empty", output: "" })).toBe(true);
  });

  it("does not flag a step that satisfies its expectation", () => {
    expect(violatesExpectation({ ...base, rule: "non-empty", output: "Cloudflare" })).toBe(false);
  });

  it("does not flag empty output when no expectation was declared", () => {
    expect(violatesExpectation({ ...base, rule: "any", output: "" })).toBe(false);
  });
});

describe("handoff to Workbench", () => {
  it("turns a paused run into a diagnosed one and names the real root cause", () => {
    const diagnosed = handToWorkbench(advanceToStable(createRun("governed")));

    expect(diagnosed.phase).toBe("diagnosed");
    expect(diagnosed.diagnosis?.step).toBe("enrich");
    expect(diagnosed.diagnosis?.wrongField).toBe("organization");
    expect(diagnosed.diagnosis?.rightField).toBe("org");
  });

  it("is a no-op unless the run is paused for review", () => {
    const completed = advanceToStable(createRun("autonomy"));
    expect(handToWorkbench(completed)).toEqual(completed);
  });
});

describe("applying the fix", () => {
  const diagnosed = () => handToWorkbench(advanceToStable(createRun("governed")));

  it("resolves the run, clears the review flag, and produces a correct verdict", () => {
    const resolved = applyFix(diagnosed());

    expect(resolved.phase).toBe("resolved");
    expect(resolved.steps.find((s) => s.id === "enrich")?.status).toBe("passed");
    expect(resolved.steps.every((s) => s.status === "passed")).toBe(true);
    expect(resolved.verdict?.hostingProvider).not.toBe("");
  });

  it("is a no-op unless the run has been diagnosed", () => {
    const paused = advanceToStable(createRun("governed"));
    expect(applyFix(paused)).toEqual(paused);
  });
});

describe("switching mode", () => {
  it("returns a clean planned run in the new mode so both paths start fresh", () => {
    const fresh = setMode(advanceToStable(createRun("autonomy")), "governed");

    expect(fresh.mode).toBe("governed");
    expect(fresh.phase).toBe("planned");
    expect(fresh.steps.every((s) => s.status === "pending")).toBe(true);
    expect(fresh.verdict).toBeNull();
    expect(fresh.diagnosis).toBeNull();
  });
});

describe("the difference between the modes", () => {
  it("autonomy self-certifies past its own violated expectation; governed does not", () => {
    const enrichId = "enrich";

    const auto = advanceToStable(createRun("autonomy"));
    const autoEnrich = auto.steps.find((s) => s.id === enrichId)!;
    // The agent declared an expectation, broke it, and passed itself anyway.
    expect(violatesExpectation(autoEnrich)).toBe(true);
    expect(autoEnrich.status).toBe("passed");
    expect(auto.verdict).not.toBeNull();

    const governed = advanceToStable(createRun("governed"));
    const govEnrich = governed.steps.find((s) => s.id === enrichId)!;
    // The same violated expectation is independently enforced; no verdict issues.
    expect(violatesExpectation(govEnrich)).toBe(true);
    expect(govEnrich.status).toBe("needs-review");
    expect(governed.verdict).toBeNull();
  });
});
