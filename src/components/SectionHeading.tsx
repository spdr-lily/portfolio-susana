interface Props {
  title: string;
}

export default function SectionHeading({ title }: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-cyan-500 mt-4" />
    </div>
  );
}
