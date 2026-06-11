import { Navbar, Hero, About, Competencias, Timeline, Projects, Certificacoes, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Competencias />
        <Timeline />
        <Projects />
        <Certificacoes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
