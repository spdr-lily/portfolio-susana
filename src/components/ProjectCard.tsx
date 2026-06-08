import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, image, technologies }: Props) {
  return (
    <div className="rounded-md border border-slate-700 bg-slate-800/30 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
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
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
