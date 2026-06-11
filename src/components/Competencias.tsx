import SectionHeading from "./SectionHeading";

const skills = [
  "Python", "SQL", "R", "PostgreSQL", "FastAPI",
  "Docker", "Airflow", "Pandas", "NumPy", "Scikit-Learn",
  "Git", "Linux",
];

export default function Competencias() {
  return (
    <section id="competencias" className="animate-fade-up">
      <SectionHeading title="Habilidades" />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
