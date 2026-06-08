import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Competencias from "@/components/Competencias";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Certificacoes from "@/components/Certificacoes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
