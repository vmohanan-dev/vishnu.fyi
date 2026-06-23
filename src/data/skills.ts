export type SkillTier = "authored" | "public" | "internal";

export type Skill = {
  name: string;
  description: string;
  tier: SkillTier;
  source?: string;
};

const MATTPOCOCK = "https://github.com/mattpocock/skills";

export const skills: Skill[] = [
  // ── Authored ──
  {
    name: "work-brain",
    description:
      "The context substrate my other skills read from — who I am, my people and VIPs, strategy, voice, projects. A grilling interview scaffolds it; the skills below plug in. This is the operating system; the rest are apps.",
    tier: "authored",
    source:
      "https://github.com/vmohanan-dev/vishnu.fyi/blob/main/skills/authored/work-brain/SKILL.md",
  },
  {
    name: "slack-er",
    description:
      "Triages my Slack and drafts replies in my voice for messages that genuinely need one. Drafts only, never sends.",
    tier: "authored",
    source:
      "https://github.com/vmohanan-dev/vishnu.fyi/blob/main/skills/authored/slack-er/SKILL.md",
  },
  {
    name: "morning-brief",
    description:
      "Fans out to parallel subagents that pull my calendar, Slack, tasks, and email, then composes a 5-minute brief: a ranked Top 3, today's schedule with prep, and everything that needs a decision.",
    tier: "authored",
    source:
      "https://github.com/vmohanan-dev/vishnu.fyi/blob/main/skills/authored/morning-brief/SKILL.md",
  },
  {
    name: "capex",
    description:
      "Generates a monthly CapEx report for an engineering team: pulls merged PRs from GitHub, classifies work into capitalizable features, weights by PR size, and proposes per-engineer percentages with action flags.",
    tier: "authored",
    source:
      "https://github.com/vmohanan-dev/vishnu.fyi/blob/main/skills/authored/capex/SKILL.md",
  },
  {
    name: "gardener",
    description:
      "End-of-day sweep that tends the work brain: pulls the day's signal, classifies it into cited facts vs judgement, then appends or proposes updates. Never edits or deletes.",
    tier: "authored",
    source:
      "https://github.com/vmohanan-dev/vishnu.fyi/blob/main/skills/authored/gardener/SKILL.md",
  },

  // ── Public (vendored from mattpocock/skills) ──
  {
    name: "grill-me",
    description:
      "Relentless interview that stress-tests a plan before any code gets written.",
    tier: "public",
    source: MATTPOCOCK,
  },
  {
    name: "grill-with-docs",
    description:
      "Grilling that sharpens terminology and updates project docs as decisions land.",
    tier: "public",
    source: MATTPOCOCK,
  },
  {
    name: "handoff",
    description:
      "Compacts a working session into a handoff doc for the next agent to pick up.",
    tier: "public",
    source: MATTPOCOCK,
  },
  {
    name: "tdd",
    description:
      "Red-green-refactor loop for building features and fixing bugs test-first.",
    tier: "public",
    source: MATTPOCOCK,
  },
  {
    name: "prototype",
    description:
      "Throwaway prototypes to feel out a design or data model before committing.",
    tier: "public",
    source: MATTPOCOCK,
  },
  {
    name: "to-prd",
    description: "Turns working context into a structured PRD.",
    tier: "public",
    source: MATTPOCOCK,
  },
  {
    name: "improve-codebase-architecture",
    description:
      "Finds refactoring and consolidation opportunities to make a codebase more navigable.",
    tier: "public",
    source: MATTPOCOCK,
  },

  // ── Internal / team (HubSpot — described generically, not published) ──
  {
    name: "prd-builder",
    description:
      "Drafts a PRD through section-by-section intake, treating “idk” / “TBD” as first-class open questions instead of forcing answers.",
    tier: "internal",
  },
  {
    name: "prd-reviewer",
    description:
      "Reviews a draft PRD for structural, logical, and strategic rigor plus handoff-readiness, returning a scored punch list.",
    tier: "internal",
  },
  {
    name: "storytelling",
    description:
      "Narrative-structure frameworks for persuasive business communication — decks, proposals, strategy docs. Created by a colleague.",
    tier: "internal",
  },
  {
    name: "deslop",
    description: "Detects and removes AI writing tropes from prose.",
    tier: "internal",
  },
];
