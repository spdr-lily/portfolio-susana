import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  deployUrl?: string;
}

export default function ProjectCard({ title, description, image, technologies, githubUrl }: Props) { // 2. Adicionado aqui
  return (
    <div className="rounded-md border border-slate-700 bg-slate-800/30 overflow-hidden">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-50 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6"> {/* Adicionei um mb-6 aqui para afastar os botões */}
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 3. BLOCO DOS BOTÕES ADICIONADO AQUI */}
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              {/* Se você não tiver uma biblioteca de ícones instalada (como lucide-react ou react-icons), use um SVG do GitHub ou apenas o texto por enquanto */}
              <span>GitHub</span>
            </a>
          )}
          
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-cyan-600 hover:bg-cyan-500 text-white transition-colors">
            Detalhes
          </button>
        </div>

      </div>
    </div>
  );
}