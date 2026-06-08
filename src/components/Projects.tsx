import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects">
      <SectionHeading title="Projetos" />

      {featured && <FeaturedProject project={featured} />}

      <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}
