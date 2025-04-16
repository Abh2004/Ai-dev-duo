import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProjectShowcase />
      <About />
      <Contact />
    </main>
  );
}
