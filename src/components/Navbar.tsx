"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const links = [
    { href: "/", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#competencias", label: t.nav.skills },
    { href: "#timeline", label: t.nav.timeline },
    { href: "#projects", label: t.nav.projects },
    { href: "#certificacoes", label: t.nav.certifications },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-cyan-400">
          SC
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="px-2.5 py-1 text-xs font-medium rounded-md border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#0f172a]">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
