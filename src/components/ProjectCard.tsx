import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: Props) {
  return (
    <div className="rounded-xl bg-zinc-800/50 border border-zinc-700 p-6 hover:border-violet-500 transition-all hover:-translate-y-1">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="rounded-lg object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-zinc-50 mb-2">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
