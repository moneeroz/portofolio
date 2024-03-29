import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full h-screen text-center">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
