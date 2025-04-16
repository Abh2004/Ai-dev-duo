import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <WhatWeDo />
      <Services />
      <ProjectShowcase />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
