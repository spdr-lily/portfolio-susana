export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 py-5 bg-[#0f172a]/80 backdrop-blur-md border-b border-zinc-800">
      <a href="/" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm font-medium">Home</a>
      <a href="#about" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm font-medium">Sobre</a>
      <a href="#projects" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm font-medium">Projetos</a>
      <a href="#contact" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm font-medium">Contato</a>
    </nav>
  );
}
