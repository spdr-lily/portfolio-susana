export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 mb-4">
          Susana Campelo
        </h1>

        <h2 className="text-xl sm:text-2xl text-violet-400 font-semibold mb-6">
          Data Scientist | Data Engineer
        </h2>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Desenvolvendo sistemas inteligentes,
          pipelines de dados e soluções para
          apoio à decisão clínica.
        </p>
      </div>
    </section>
  );
}
