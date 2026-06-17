"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="animate-fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
          {t.about.title}
        </h2>
        <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
          {t.about.text}
        </p>
      </div>
    </section>
  );
}
