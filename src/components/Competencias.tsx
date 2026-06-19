"use client";

import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Competencias() {
  const { t } = useLanguage();

  return (
    <section id="competencias" className="animate-fade-up">
      <SectionHeading title={t.competencias.title} />

      <div className="flex flex-wrap gap-3">
        {t.competencias.skills.map((skill) => (
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
