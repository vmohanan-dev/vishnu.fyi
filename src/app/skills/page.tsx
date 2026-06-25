import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills — vishnu.fyi",
  description:
    "The Claude Code skills I authored, vendor from open source, and use day-to-day.",
};

const authored = skills.filter((s) => s.tier === "authored");
const publicSkills = skills.filter((s) => s.tier === "public");
const internal = skills.filter((s) => s.tier === "internal");

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        <div className="mb-14">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-3">
            Skills
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
            The tools shape the work. These are the Claude Code skills I wrote,
            vendor from open source, and lean on every day.
          </p>
        </div>

        {/* Authored */}
        <section className="mb-14">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
            Authored
          </h2>
          <p className="text-sm text-zinc-500 mb-6 max-w-xl">
            Most of these form one system: <span className="font-mono text-zinc-700">work-brain</span> holds
            my role, people, voice, and projects as plain files, and the rest read and write it —{" "}
            <span className="font-mono text-zinc-700">slack-er</span> drafts in my voice,{" "}
            <span className="font-mono text-zinc-700">morning-brief</span> reads my VIPs and project state,{" "}
            <span className="font-mono text-zinc-700">gardener</span> keeps it current.{" "}
            <span className="font-mono text-zinc-700">storytelling</span> and{" "}
            <span className="font-mono text-zinc-700">pm-peer</span> are standalone — portable to any workflow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {authored.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Public */}
        <section className="mb-14">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
            Open source I use
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            Vendored from{" "}
            <a
              href="https://github.com/mattpocock/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 underline underline-offset-4 transition-colors"
            >
              mattpocock/skills
            </a>{" "}
            and kept current.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {publicSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Internal */}
        <section>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
            Team &amp; internal
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            Internal HubSpot tooling I use day-to-day — described generically,
            not published.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internal.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
