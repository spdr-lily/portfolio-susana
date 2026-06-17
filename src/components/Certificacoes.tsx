"use client";

import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Certificacoes() {
  const { t } = useLanguage();

  return (
    <section id="certificacoes" className="animate-fade-up">
      <SectionHeading title={t.certificacoes.title} />

      <div className="rounded-md border border-slate-700 bg-slate-800/30 p-6 max-w-md">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-cyan-500/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-slate-50">{t.certificacoes.name}</h3>
            <p className="text-sm text-slate-500">{t.certificacoes.issuer}</p>
          </div>
          <a
            href="/e-cert.pdf"
            download="e-cert.pdf"
            className="px-4 py-2 text-sm font-medium rounded-md bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shrink-0"
          >
            {t.certificacoes.button}
          </a>
        </div>
      </div>
    </section>
  );
}
