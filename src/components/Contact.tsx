"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    window.open(
      `mailto:campelosusana@gmail.com?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(`Nome: ${data.get("name")}\n\n${data.get("message")}`)}`,
      "_blank"
    );
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact">
      <SectionHeading title={t.contact.title} />

      <p className="text-slate-400 max-w-lg leading-relaxed mb-8">
        {t.contact.intro}
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">{t.contact.nameLabel}</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={t.contact.namePlaceholder}
              className="w-full px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">{t.contact.subjectLabel}</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder={t.contact.subjectPlaceholder}
              className="w-full px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">{t.contact.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              className="w-full px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-cyan-600 hover:bg-cyan-700 text-white transition-colors text-sm font-medium"
          >
            {sent ? t.contact.sent : t.contact.send}
          </button>
        </form>

        <div className="flex flex-col gap-4">
          <a
            href="https://github.com/spdr-lily"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            {t.contact.github}
          </a>
          <a
            href="https://www.linkedin.com/in/susana-c-b-carneiro-20a619235/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            {t.contact.linkedin}
          </a>
          <a
            href="mailto:campelosusana@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            {t.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
