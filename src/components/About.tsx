import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 mb-4">
          Sobre Mim
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full mb-8" />
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-5 text-zinc-400 leading-relaxed">
            <p>
              Sou desenvolvedora full stack com paixão por criar aplicações web
              modernas e performáticas. Com experiência em React, Next.js e Node.js,
              busco sempre unir design elegante com código limpo e escalável.
            </p>
            <p>
              Ao longo da minha carreira, trabalhei em projetos que vão desde
              dashboards complexos até aplicações em tempo real, sempre focada em
              entregar valor real para os usuários.
            </p>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <Image
              src="/images/profile.jpg"
              alt="Susana Campelo"
              width={224}
              height={224}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
