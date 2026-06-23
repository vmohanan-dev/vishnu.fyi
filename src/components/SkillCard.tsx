import { Skill } from "@/data/skills";
import { ExternalLink } from "lucide-react";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group border border-zinc-100 rounded-lg p-5 hover:border-zinc-200 transition-colors bg-white flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-sm font-mono font-medium text-zinc-900">
          {skill.name}
        </h3>
        {skill.source && (
          <a
            href={skill.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-700 transition-colors flex-shrink-0"
            aria-label={`Source for ${skill.name}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}
