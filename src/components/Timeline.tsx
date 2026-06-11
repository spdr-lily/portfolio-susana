import SectionHeading from "./SectionHeading";

const events = [
  { year: "2024", title: "Início do projeto M.I.N.D." },
  { year: "2025", title: "Desenvolvimento do banco clínico" },
  { year: "2025", title: "Integração de escalas psicométricas" },
  {year: "2026", title: "Formação no Curso Superior de Ciência de Dados com ênfase em IA" },
  { year: "2026", title: "Arquitetura de Machine Learning" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="animate-fade-up">
      <SectionHeading title="Timeline" />

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />

        <div className="space-y-8">
          {events.map((event) => (
            <div key={`${event.year}-${event.title}`} className="relative pl-12">
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-[#0f172a]" />
              <span className="inline-block text-sm font-semibold text-cyan-400 mb-1">
                {event.year}
              </span>
              <p className="text-slate-300">{event.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
