"use client";

import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "Python", "R", "SQL", "Pandas", "NumPy", "Scikit-Learn",
  "Machine Learning", "MLOps", "Estatística Aplicada", "Estatística Bayesiana",
  "Power BI", "DAX", "Power Query", "Data Visualization", "ETL",
  "Apache Airflow", "Apache Spark", "Apache Flink", "Data Modeling", "Data Warehousing",
  "PostgreSQL", "MongoDB (NoSQL)", "Elasticsearch",
  "Flask", "Dash", "Plotly",
  "AWS", "Docker", "Git", "GitHub Actions", "CI/CD", "DevOps", "Linux", "Windows",
  "Infraestrutura de Redes", "Segurança da Informação",
  "OpenCV", "OCR",
  "LGPD", "ITIL 4", "Metodologias Ágeis (Scrum e Kanban)",
  "Documentação Técnica", "UI/UX",
];

export default function Competencias() {
  const { t } = useLanguage();

  return (
    <section id="competencias" className="animate-fade-up">
      <SectionHeading title={t.competencias.title} />

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
