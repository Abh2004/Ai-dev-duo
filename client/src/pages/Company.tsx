import About from "@/components/About";
import Partners from "@/components/Partners";
import CompanyIntro from "@/components/CompanyIntro";
import WhatWeStandFor from "@/components/WhatWeStandFor";
import OurProcess from "@/components/OurProcess";
import ThemeCube from "@/components/ThemeCube";
import { motion } from "framer-motion";

export default function CompanyPage() {
  return (
    <main className="pt-24 relative bg-black">
      {/* Background Elements */}
      <ThemeCube className="absolute top-40 -left-20" opacity={0.03} />
      <ThemeCube className="absolute top-60 right-10" opacity={0.02} />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Innovation & </span>
            <span className="text-[#0066FF]">Expertise</span>
          </motion.h1>
          
          <motion.p 
            className="text-[#999] text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn about our team, mission, and the technology partners that help us deliver
            exceptional solutions. We're driven by innovation and committed to exceeding
            client expectations on every project.
          </motion.p>
        </div>
      </div>
      
      {/* Company Introduction with What We Do */}
      <CompanyIntro />
      
      {/* What We Stand For */}
      <WhatWeStandFor />
      
      {/* Our Process */}
      <OurProcess />
      
      {/* About & Partners */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <About />
        <Partners />
      </div>
    </main>
  );
}