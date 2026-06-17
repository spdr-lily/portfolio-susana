"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  details?: string;
}

export default function ProjectCard({ title, description, image, technologies, githubUrl, details }: Props) {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
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
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <span>{t.projectCard.github}</span>
              </a>
            )}

            {details && (
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-sm font-medium rounded-md bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
              >
                {t.projectCard.details}
              </button>
            )}
          </div>

        </div>
      </div>

      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-md border border-slate-700 bg-slate-900 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-slate-50 mb-6">{title}</h2>

            <div className="text-slate-300 leading-relaxed space-y-4 whitespace-pre-line">
              {details}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
