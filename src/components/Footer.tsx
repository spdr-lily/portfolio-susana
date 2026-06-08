export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Susana. Todos os direitos reservados.</p>
        <p>Feito com Next.js, React e Tailwind CSS</p>
      </div>
    </footer>
  );
}
