import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProjectShowcase />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
