import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CvButton from "@/components/CvButton";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    role: "Senior Product Manager",
    company: "HubSpot",
    period: "2022 – present",
    description:
      "Working on Breeze — HubSpot's AI layer. Led onboarding redesign, AI note-taking, and several zero-to-one features shipped to hundreds of thousands of users.",
  },
  {
    role: "Product Manager",
    company: "HubSpot",
    period: "2020 – 2022",
    description:
      "Owned core CRM features across the contact and company objects. Shipped bulk editing, custom properties, and a new association model.",
  },
  {
    role: "Associate Product Manager",
    company: "HubSpot",
    period: "2019 – 2020",
    description:
      "APM programme. Rotated across three product areas: marketing hub, sales hub, and platform.",
  },
];

const skills = [
  "Product strategy",
  "Zero-to-one",
  "AI products",
  "Next.js",
  "TypeScript",
  "Lovable",
  "Supabase",
  "Claude API",
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
            I&apos;m Vishnu — a Senior Product Manager at HubSpot who now also writes
            the code. After six years shipping product, I started building my
            own tools using AI-native workflows. What started as curiosity
            became a practice: I can now go from idea to working product in days
            rather than weeks.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-8">
            I care about the quality of what gets built — not just the speed.
            The projects here are real tools I use or have used. None of them
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
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
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
