export default function About() {
  return (
    <section id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6">
          Sobre Mim
        </h2>
        <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
          Atualmente desenvolvo o projeto{" "}
          <strong className="text-cyan-300">M.I.N.D.</strong>{" "}
          (Mental Intelligence &amp; Network Data),
          um sistema open-source de apoio à decisão clínica
          baseado em DSM-5-TR, CID-11 e inferência probabilística.
        </p>
      </div>
    </section>
  );
}
