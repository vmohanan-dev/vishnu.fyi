export type Mode = "autonomy" | "governed";

export type StepStatus = "pending" | "passed" | "needs-review";

/** The kind of check the rail enforces against a step's output. */
export type ExpectationRule = "non-empty" | "any";

/**
 * Where a step's expectation came from. Declaration can be AI-assisted ("agent");
 * enforcement never is. "inferred" and "builder" involve no model at all.
 */
export type ExpectationSource = "agent" | "inferred" | "builder";

export type RunPhase =
  | "planned"
  | "completed"
  | "paused"
  | "diagnosed"
  | "resolved";

export type Step = {
  id: string;
  label: string;
  tool: string;
  /** The agent-declared success criterion for this step's output, in prose. */
  expectation: string;
  /** The machine-checkable rule the rail enforces for this step. */
  rule: ExpectationRule;
  /** Where the expectation came from (AI-assisted or not). */
  source: ExpectationSource;
  /** The field this step is responsible for populating. */
  field: string;
  /** What the step actually produced. Empty string means it silently diverged. */
  output: string;
  status: StepStatus;
};

export type Verdict = {
  severity: string;
  hostingProvider: string;
};

export type Diagnosis = {
  step: string;
  finding: string;
  wrongField: string;
  rightField: string;
};

export type Run = {
  mode: Mode;
  phase: RunPhase;
  steps: Step[];
  verdict: Verdict | null;
  diagnosis: Diagnosis | null;
};

function initialSteps(): Step[] {
  return [
    { id: "intake", label: "Receive phishing report", tool: "Webhook", expectation: "report has a URL", rule: "non-empty", source: "inferred", field: "url", output: "http://8.8.8.8/login", status: "pending" },
    { id: "extract", label: "Extract domain", tool: "Transform", expectation: "domain is resolvable", rule: "non-empty", source: "inferred", field: "domain", output: "8.8.8.8", status: "pending" },
    { id: "enrich", label: "Enrich IP", tool: "ipinfo", expectation: "hosting_provider is non-empty", rule: "non-empty", source: "agent", field: "hosting_provider", output: "", status: "pending" },
    { id: "threat", label: "Check threat feed", tool: "URLhaus", expectation: "threat status returned", rule: "non-empty", source: "agent", field: "threat", output: "no_results", status: "pending" },
    { id: "score", label: "Score risk", tool: "Transform", expectation: "score derived from full enrichment", rule: "non-empty", source: "inferred", field: "risk_score", output: "low", status: "pending" },
    { id: "ticket", label: "Open ticket", tool: "Ticketing", expectation: "ticket created with enrichment", rule: "non-empty", source: "builder", field: "ticket", output: "created", status: "pending" },
  ];
}

export function createRun(mode: Mode): Run {
  return { mode, phase: "planned", steps: initialSteps(), verdict: null, diagnosis: null };
}

export function setMode(_run: Run, mode: Mode): Run {
  return createRun(mode);
}

export function handToWorkbench(run: Run): Run {
  if (run.phase !== "paused") return run;
  const flagged = run.steps.find((s) => s.status === "needs-review");
  const diagnosis: Diagnosis = {
    step: flagged?.id ?? "enrich",
    finding:
      "The enrichment output is empty because the formula reads a field that does not exist on the response.",
    wrongField: "organization",
    rightField: "org",
  };
  return { ...run, phase: "diagnosed", diagnosis };
}

export function applyFix(run: Run): Run {
  if (run.phase !== "diagnosed") return run;
  const steps = run.steps.map((s) =>
    s.id === run.diagnosis?.step
      ? { ...s, output: "AS15169 Google LLC", status: "passed" as StepStatus }
      : { ...s, status: "passed" as StepStatus },
  );
  return { ...run, phase: "resolved", steps, verdict: buildVerdict(steps) };
}

function fieldValue(steps: Step[], field: string): string {
  return steps.find((s) => s.field === field)?.output ?? "";
}

function buildVerdict(steps: Step[]): Verdict {
  return {
    severity: fieldValue(steps, "risk_score"),
    hostingProvider: fieldValue(steps, "hosting_provider"),
  };
}

export function violatesExpectation(step: Step): boolean {
  if (step.rule === "non-empty") return step.output.trim() === "";
  return false;
}

export function advanceToStable(run: Run): Run {
  if (run.mode === "autonomy") {
    const steps = run.steps.map((s) => ({ ...s, status: "passed" as StepStatus }));
    return { ...run, phase: "completed", steps, verdict: buildVerdict(steps) };
  }

  const steps = run.steps.map((s) => ({ ...s }));
  for (const step of steps) {
    if (violatesExpectation(step)) {
      step.status = "needs-review";
      return { ...run, phase: "paused", steps, verdict: null };
    }
    step.status = "passed";
  }
  return { ...run, phase: "completed", steps, verdict: buildVerdict(steps) };
}
