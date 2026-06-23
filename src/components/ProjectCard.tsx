import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-zinc-100 rounded-lg p-6 bg-white flex flex-col transition-all duration-200 hover:border-zinc-200 hover:shadow-sm hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-zinc-900">
          {project.title}
        </h3>
        {project.url && (
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
      <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex items-end justify-between gap-2">
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
        {project.slug && (
          <Link
            href={`/project/${project.slug}`}
            className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-900 transition-colors flex-shrink-0 ml-2"
          >
            Read <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
