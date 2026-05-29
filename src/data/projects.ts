export type Project = {
  title: string;
  description: string;
  stack: string[];
  url: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Breeze Onboarding",
    description:
      "Redesigned HubSpot's onboarding flow around goals rather than features. Built a prototype in Lovable to pressure-test the concept before writing a line of production code.",
    stack: ["Lovable", "HubSpot"],
    url: "https://www.hubspot.com",
    featured: true,
  },
  {
    title: "Breeze Notetaker",
    description:
      "AI-first meeting note app that integrates with desktop audio capture. Transcribes, summarises, and surfaces action items without any manual input.",
    stack: ["Lovable", "OpenAI"],
    url: "#",
  },
  {
    title: "Clip Studio",
    description:
      "Tool for extracting shareable clips from customer calls. Upload a recording, get timestamped highlights ready to share with your team.",
    stack: ["Lovable", "Supabase", "OpenAI"],
    url: "#",
  },
  {
    title: "Tennis Cues",
    description:
      "Mobile coaching app that delivers technique reminders during a match via audio cues. Built for on-court use — no screen required.",
    stack: ["Claude", "Supabase", "Expo"],
    url: "https://github.com/vmohanan-dev/TennisCue",
    featured: true,
  },
  {
    title: "Reno Style",
    description:
      "Upload a photo of any room and see renovation options applied to it. Useful for quickly visualising paint colours, furniture swaps, or layout changes before committing.",
    stack: ["Lovable", "Gemini"],
    url: "#",
  },
  {
    title: "Serve Slots",
    description:
      "Tennis court booking platform with a waitlist system. Players join a queue for popular slots and get an SMS when a spot opens.",
    stack: ["Lovable", "Supabase", "Twilio"],
    url: "#",
  },
  {
    title: "The Arena",
    description:
      "Round-robin tournament manager that generates match ladders, tracks results, and updates standings in real time.",
    stack: ["Lovable", "Gemini"],
    url: "#",
  },
];
