export type Project = {
  title: string;
  description: string;
  stack: string[];
  url?: string;
  slug?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "laceup.club",
    description:
      "Tennis club SaaS with 148 clubs and 40,000 match records live in production. Built by orchestrating 12 AI specialists, then making the product calls they couldn't.",
    stack: ["Claude Code", "Next.js", "Supabase"],
    url: "https://laceup.club",
    slug: "laceup",
    featured: true,
  },
  {
    title: "AI-First Onboarding",
    description:
      "Redesigned HubSpot's Pro onboarding around an agentic intake that captures customer goals and builds a personalised setup plan. Doubled plan adoption. HubSpot's #1 2025 product priority.",
    stack: ["Lovable", "LLM", "HubSpot"],
    slug: "onboarding",
    featured: true,
  },
  {
    title: "Mobile Reporting",
    description:
      "Built mobile dashboard reporting from scratch at HubSpot, targeting sales leaders. Grew to 55k weekly users — 1 in 5 mobile users. Retention improved from 27% to 43%.",
    stack: ["React Native", "HubSpot"],
    slug: "mobile-reporting",
  },
  {
    title: "The Arena",
    description:
      "Winter tennis ladder for a local club. Interviewed 5 committee members before building, then shipped a custom matchmaking algorithm unique to club tennis. 2K visitors, 118 completed matches. Learnings became laceup.club.",
    stack: ["Lovable"],
  },
  {
    title: "Serve Slots",
    description:
      "Event booking app with waitlist management for tennis socials. 413 bookings across 37 events, 101 unique players since launch. Core features now live in laceup.club.",
    stack: ["Lovable", "Supabase", "Twilio"],
  },
  {
    title: "Tennis Cues",
    description:
      "iOS coaching app that delivers technique reminders via audio during a match — no screen required. Built to learn E2E iOS development.",
    stack: ["Claude", "Expo", "Supabase"],
    url: "https://github.com/vmohanan-dev/TennisCue",
  },
];
