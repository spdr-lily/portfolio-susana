export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Susana Campelo.</p>
        <p>Construído com Next.js e Tailwind CSS</p>
      </div>
    </footer>
  );
}
