import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  return (
    <section id="work" className="max-w-3xl mx-auto px-6 pb-24">
      <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8">
        Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
