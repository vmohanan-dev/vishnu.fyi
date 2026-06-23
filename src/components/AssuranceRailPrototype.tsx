"use client";

import { useEffect, useRef, useState } from "react";
import {
  createRun,
  advanceToStable,
  handToWorkbench,
  applyFix,
  setMode,
  type Mode,
  type Run,
  type ExpectationSource,
  type Step,
} from "@/lib/assurance-rail";

const SOURCE_LABEL: Record<ExpectationSource, string> = {
  agent: "declared by agent · AI",
  inferred: "inferred from downstream use",
  builder: "builder assertion",
};

const GREEN = "#13855b";
const AMBER = "#b4690e";

function statusDot(status: Step["status"]): string {
  if (status === "passed") return GREEN;
  if (status === "needs-review") return AMBER;
  return "#d4d4d8"; // zinc-300
}

export function AssuranceRailPrototype() {
  const [run, setRun] = useState<Run>(() => createRun("autonomy"));
  const [progress, setProgress] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [started, setStarted] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout);
  }, []);

  function reset(next: Run) {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setRun(next);
    setProgress(0);
    setAnimating(false);
    setStarted(false);
    setTicketOpen(false);
  }

  function chooseMode(mode: Mode) {
    if (mode === run.mode) return;
    reset(setMode(run, mode));
  }

  function handleRun() {
    const final = advanceToStable(run);
    const activeCount = final.steps.filter((s) => s.status !== "pending").length;
    setStarted(true);
    setAnimating(true);
    setProgress(0);
    for (let i = 1; i <= activeCount; i++) {
      timers.current.push(
        setTimeout(() => {
          setProgress(i);
          if (i === activeCount) {
            setRun(final);
            setAnimating(false);
          }
        }, i * 340),
      );
    }
  }

  const finalSteps = animating ? advanceToStable(run).steps : run.steps;
  const displaySteps: Step[] = animating
    ? run.steps.map((s, i) => ({ ...s, status: i < progress ? finalSteps[i].status : "pending" }))
    : run.steps;

  const isAutonomy = run.mode === "autonomy";
  const paused = run.phase === "paused";
  const diagnosed = run.phase === "diagnosed";
  const resolved = run.phase === "resolved";
  const completed = run.phase === "completed";
  const flagged = run.steps.find((s) => s.status === "needs-review");
  // Who certifies that a step succeeded: the agent itself, or the independent rail.
  const certifier = isAutonomy ? "agent" : "rail";

  return (
    <div className="rounded-xl overflow-hidden border border-zinc-200 bg-white shadow-sm text-[13px] leading-relaxed text-zinc-700">
      {/* Title bar + mode toggle */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 bg-zinc-50">
        <div className="flex items-center gap-2 min-w-0">
          <span style={{ color: GREEN }} className="font-mono text-xs">◆ tines</span>
          <span className="text-zinc-400 text-xs truncate">Alert Investigation Agent</span>
        </div>
        <div className="flex rounded-md p-0.5 text-xs bg-zinc-100 border border-zinc-200">
          {(["autonomy", "governed"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => chooseMode(m)}
              className="px-2.5 py-1 rounded transition-colors"
              style={
                run.mode === m
                  ? { background: "#fff", color: "#18181b", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }
                  : { color: "#71717a" }
              }
            >
              {m === "autonomy" ? "Autonomy" : "Governed autonomy"}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 grid gap-3 md:grid-cols-[1fr_300px]">
        {/* Step canvas */}
        <ol className="space-y-2">
          {displaySteps.map((s) => {
            const isFlagged = s.status === "needs-review";
            const isPassed = s.status === "passed";
            const isDiverged = s.id === "enrich";
            return (
              <li
                key={s.id}
                className="rounded-lg px-3 py-2.5 border flex items-start gap-3"
                style={{
                  borderColor: isFlagged ? AMBER : "#e4e4e7",
                  background: isFlagged ? "#fdf6ec" : "#fff",
                }}
              >
                <span
                  className="mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: statusDot(s.status) }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-zinc-900">{s.label}</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded flex-shrink-0 bg-zinc-100 text-zinc-500">
                      {s.tool}
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    expects: {s.expectation}
                    <span
                      className="ml-1.5 font-mono"
                      style={{ color: s.source === "agent" ? AMBER : "#a1a1aa" }}
                    >
                      · {SOURCE_LABEL[s.source]}
                    </span>
                  </div>

                  {/* Who certified this step succeeded */}
                  {isPassed && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px]" style={{ color: GREEN }}>
                      <span className="font-mono px-1.5 py-0.5 rounded" style={{ background: "#e7f4ee" }}>
                        ✓ certified by {certifier}
                      </span>
                      {isAutonomy && isDiverged && (
                        <span className="text-zinc-400">
                          agent: response received (200) · proceeding
                        </span>
                      )}
                    </div>
                  )}

                  {/* The independent rail catching it */}
                  {isFlagged && (
                    <div className="mt-2 rounded-md px-2.5 py-2 text-[11px]" style={{ background: "#fbeed7", color: AMBER }}>
                      <div className="font-medium">⛔ assurance rail · independent of the agent</div>
                      <div className="text-zinc-600 mt-1 font-mono">
                        expected <span className="text-zinc-900">hosting_provider</span> non-empty · got{" "}
                        <span className="text-zinc-900">&quot;&quot;</span>
                      </div>
                      <div className="text-zinc-500 mt-1">
                        the agent passed itself here; the rail did not
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {/* Side panel */}
        <div className="space-y-3">
          {!started && (
            <div className="rounded-lg p-3 border border-zinc-200 bg-zinc-50 text-zinc-500 text-xs">
              An agent investigates a reported phishing URL across ipinfo and a
              threat feed, then opens a ticket.{" "}
              {isAutonomy
                ? "In autonomy, the agent decides for itself whether each step succeeded."
                : "In governed autonomy, an independent rail holds the agent to its own declared expectations."}
              <button
                onClick={handleRun}
                className="mt-3 w-full rounded-md py-1.5 font-medium text-white"
                style={{ background: GREEN }}
              >
                Run investigation
              </button>
            </div>
          )}

          {animating && (
            <div className="rounded-lg p-3 border border-zinc-200 bg-zinc-50 text-zinc-500 text-xs">
              Agent running…
            </div>
          )}

          {completed && (
            <div className="rounded-lg p-3 border border-zinc-200">
              <div className="flex items-center gap-2 text-xs" style={{ color: GREEN }}>
                ✓ Verdict issued by the agent
              </div>
              <p className="text-[11px] text-zinc-500 mt-1.5">
                Every step certified by the agent itself. Nothing independent
                checked its work.
              </p>
              <button
                onClick={() => setTicketOpen((v) => !v)}
                className="mt-2 text-xs underline text-zinc-600"
              >
                {ticketOpen ? "Hide ticket" : "View the ticket it filed"}
              </button>
              {ticketOpen && (
                <div className="mt-2 rounded-md p-2.5 text-[11px] font-mono bg-zinc-50 border border-zinc-200">
                  <div>severity: <span className="text-zinc-900">low</span></div>
                  <div>
                    hosting_provider:{" "}
                    <span style={{ background: "#fde2e2", color: "#b91c1c" }}>&nbsp;(empty)&nbsp;</span>
                  </div>
                  <div className="text-zinc-400 mt-1">closed automatically · no flag</div>
                </div>
              )}
            </div>
          )}

          {paused && (
            <div className="rounded-lg p-3 border" style={{ borderColor: AMBER, background: "#fdf6ec" }}>
              <div className="text-xs font-medium" style={{ color: AMBER }}>
                ⏸ Agent verdict held · awaiting human
              </div>
              <p className="text-[11px] text-zinc-600 mt-1.5">
                The agent broke an expectation it set for itself. Its authority to
                close the report is withheld until a human clears it.
              </p>
              <button
                onClick={() => setRun(handToWorkbench(run))}
                className="mt-2 w-full rounded-md py-1.5 font-medium text-xs text-white"
                style={{ background: "#18181b" }}
              >
                Hand to Workbench →
              </button>
            </div>
          )}

          {(diagnosed || resolved) && run.diagnosis && (
            <div className="rounded-lg p-3 border border-zinc-200">
              <div className="text-xs text-zinc-900 mb-1.5">◆ Workbench</div>
              <p className="text-[11px] text-zinc-600">{run.diagnosis.finding}</p>
              <div className="mt-2 rounded-md p-2 text-[11px] font-mono bg-zinc-50 border border-zinc-200">
                <span style={{ color: "#b91c1c" }}>− {run.diagnosis.wrongField}</span>
                <br />
                <span style={{ color: GREEN }}>+ {run.diagnosis.rightField}</span>
              </div>
              {diagnosed && (
                <button
                  onClick={() => setRun(applyFix(run))}
                  className="mt-2 w-full rounded-md py-1.5 font-medium text-xs text-white"
                  style={{ background: GREEN }}
                >
                  Apply fix
                </button>
              )}
              {resolved && (
                <div className="mt-2 text-[11px]" style={{ color: GREEN }}>
                  ✓ Fixed · re-run clean · hosting_provider: AS15169 Google LLC
                </div>
              )}
            </div>
          )}

          {started && (
            <button
              onClick={() => reset(createRun(run.mode))}
              className="text-[11px] text-zinc-400 underline"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
