"use client";

import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();
  const events = [
    { year: "2024", title: t.timeline.events[0] },
    { year: "2025", title: t.timeline.events[1] },
    { year: "2025", title: t.timeline.events[2] },
    { year: "2026", title: t.timeline.events[3] },
    { year: "2026", title: t.timeline.events[4] },
  ];

  return (
    <section id="timeline" className="animate-fade-up">
      <SectionHeading title={t.timeline.title} />

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
