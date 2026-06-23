import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  const hubspotProjects = projects.filter((p) => p.hubspot);
  const personalProjects = projects.filter((p) => !p.hubspot);

  return (
    <section id="work" className="max-w-3xl mx-auto px-6 pb-24">
      <div>
        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8">
          HubSpot
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hubspotProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8">
          Personal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
