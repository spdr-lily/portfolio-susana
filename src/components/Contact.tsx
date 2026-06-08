export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 mb-4">Contato</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full mb-8" />
      <p className="text-zinc-400 max-w-lg leading-relaxed">
        Vamos trabalhar juntos? Me envie um e-mail.
      </p>
      <a
        href="mailto:susana@email.com"
        className="inline-block mt-6 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors"
      >
        enviar e-mail
      </a>
    </section>
  );
}
