import Image from "next/image";
import type { Project } from "@/types";

interface Props {
  project: Project;
}

export default function FeaturedProject({ project }: Props) {
  const tech = ["FastAPI", "PostgreSQL", "Airflow", "Redis", "Machine Learning"];

  return (
    <div className="rounded-md border border-slate-700 bg-slate-800/50 mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
        <div className="relative h-64 md:h-80 rounded-md overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            Projeto Principal
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            {project.title}
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/spdr-lily/mind"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-colors text-sm inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="#" className="px-5 py-2.5 rounded-md bg-cyan-600 hover:bg-cyan-700 text-white transition-colors text-sm">
              Detalhes
            </a>
            <a href="#projects-grid" className="px-5 py-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-colors text-sm">
              Outros projetos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
