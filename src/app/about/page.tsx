import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CvButton from "@/components/CvButton";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    role: "Senior PM, AI Personalization & Ecosystem",
    company: "HubSpot",
    period: "2025 – present",
    description:
      "Building Breeze Projects — the personalization layer for Breeze Assistant — and the MCP ecosystem strategy that connects third-party apps to Breeze. Positioning: Glean for SMBs.",
  },
  {
    role: "Senior PM, Growth & Onboarding",
    company: "HubSpot",
    period: "2024 – 2025",
    description:
      "Led HubSpot's #1 2025 product priority: product-led onboarding for Pro customers. Shipped an AI conversational onboarding agent that doubled plan adoption. Framework expanded across five hubs.",
  },
  {
    role: "Senior PM, Mobile Reporting & Platform",
    company: "HubSpot",
    period: "2021 – 2024",
    description:
      "Built mobile reporting from scratch, targeting the sales leader persona. Grew to 55k weekly users. Led the React Native migration that cut feature delivery time by 3×.",
  },
  {
    role: "PM / Associate PM, Mobile",
    company: "HubSpot",
    period: "2019 – 2021",
    description:
      "Shipped HubSpot's first mobile AI feature — a computer-vision business card scanner — increasing contact creation by 4.5×. Promoted from APM to PM in 13 months.",
  },
  {
    role: "Support Engineer & Product Expert",
    company: "HubSpot",
    period: "2015 – 2019",
    description:
      "One of the first 10 hires for HubSpot Support in Dublin. Solved 3,500+ cases and ranked consistently in the top 5% for resolution and NPS.",
  },
];

const skills = [
  "AI products",
  "PLG & onboarding",
  "Mobile platform",
  "LLM prompting & evals",
  "Product strategy",
  "Zero-to-one",
  "Next.js",
  "TypeScript",
  "Claude Code",
  "Lovable",
  "Supabase",
  "SQL",
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
            About
          </h1>
          <p className="text-zinc-500 leading-relaxed mb-3">
            I&apos;m Vishnu — a Senior PM at HubSpot who also writes the code.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-3">
            I did a PhD in Botany before any of this. Research trained me to sit
            with problems that don&apos;t have obvious answers — but I wanted to work on
            things that would actually reach people. That brought me to HubSpot, where
            I&apos;ve spent nine years shipping product across mobile, growth, and AI.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-8">
            Over the last few years I started building my own tools using AI-native
            workflows. I can now go from idea to working product in days rather than
            weeks. The projects here are real things I&apos;ve shipped — none of them
            are demos.
          </p>
          <CvButton />
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.role + job.period}>
                <div className="flex items-start justify-between mb-1.5">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {job.role}
                    </p>
                    <p className="text-sm text-zinc-500">{job.company}</p>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5 flex-shrink-0 ml-4">
                    {job.period}
                  </p>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-mono text-zinc-500 bg-zinc-50 border border-zinc-100"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
