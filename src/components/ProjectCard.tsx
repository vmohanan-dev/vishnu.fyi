import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-zinc-100 rounded-lg p-6 hover:border-zinc-200 transition-colors bg-white">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-zinc-900">
          {project.title}
        </h3>
        {project.url && project.url !== "#" && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-700 transition-colors ml-3 flex-shrink-0"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-xs font-mono text-zinc-500 bg-zinc-50 border border-zinc-100 hover:bg-zinc-100"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
