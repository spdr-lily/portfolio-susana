import SectionHeading from "./SectionHeading";

export default function Certificacoes() {
  return (
    <section id="certificacoes">
      <SectionHeading title="Certificações" />

      <div className="rounded-md border border-slate-700 bg-slate-800/30 p-6 max-w-md">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-cyan-500/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-50">ITIL 4 Foundations</h3>
            <p className="text-sm text-slate-500">PeopleCert</p>
          </div>
        </div>
      </div>
    </section>
  );
}
