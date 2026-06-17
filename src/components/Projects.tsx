"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const all = projects.map((p, i) => {
    const pt = t.projectData[i];
    return pt ? { ...p, title: pt.title, description: pt.description, details: pt.details ?? p.details } : p;
  });
  const featured = all.find((p) => p.featured);
  const others = all.filter((p) => !p.featured);

  return (
    <section id="projects" className="animate-fade-up">
      <SectionHeading title={t.projects.title} />

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
            details={project.details}
          />
        ))}
      </div>
    </section>
  );
}
