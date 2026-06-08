import { navLinks } from "@/data/navigation";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight text-violet-600">
          Susana<span className="text-zinc-900 dark:text-zinc-100">.dev</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
