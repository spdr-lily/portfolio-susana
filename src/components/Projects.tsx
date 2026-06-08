import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 mb-4">
        Projetos
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
        ))}
      </div>
    </section>
  );
}
