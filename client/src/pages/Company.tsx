import About from "@/components/About";
import CompanyIntro from "@/components/CompanyIntro";
import WhatWeStandFor from "@/components/WhatWeStandFor";
import OurProcess from "@/components/OurProcess";
import ThemeCube from "@/components/ThemeCube";
import OurTeam from "@/components/OurTeam";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function CompanyPage() {
  // Random particles for background animation
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
  }));

  // Values for animated counting stats
  // const stats = [
  //   { value: 8, label: "Years of Experience" },
  //   { value: 150, label: "Completed Projects" },
  //   { value: 50, label: "Happy Clients" },
  //   { value: 25, label: "Team Members" },
  // ];

  // Interactive highlight for hero section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <main className="pt-24 relative bg-black overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.1 + Math.random() * 0.15,
              filter: "blur(1px)",
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}

        {/* Gradient background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500 filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600 filter blur-[150px] opacity-10"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* 3D Cubes */}
        <ThemeCube className="absolute top-40 -left-20" opacity={0.04} />
        <ThemeCube className="absolute top-60 right-10" opacity={0.03} />
        <ThemeCube className="absolute bottom-40 left-1/3" opacity={0.02} />
      </div>

      {/* Enhanced Hero Section with Interactive Elements */}
      <div
        ref={heroRef}
        className="container mx-auto px-4 py-32 relative z-10"
        onMouseMove={handleMouseMove}
      >
        <div className="relative max-w-4xl mx-auto text-center mb-20">
          {/* Interactive highlight follows mouse */}
          <div
            className="absolute opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, #0066FF 0%, rgba(0, 102, 255, 0) 70%)",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              left: `${mousePosition.x - 150}px`,
              top: `${mousePosition.y - 150}px`,
              transition: "left 0.3s ease-out, top 0.3s ease-out",
            }}
          ></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="text-white">Innovation & </span>
              <span className="text-[#0066FF]">Expertise</span>

              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 w-5 h-5 border-t-2 border-l-2 border-[#0066FF] opacity-70"></div>
              <div className="absolute -right-6 -bottom-3 w-5 h-5 border-b-2 border-r-2 border-[#0066FF] opacity-70"></div>

              {/* Underline effect */}
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-[3px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-pulse opacity-70"></div>
              </div>
            </h1>
          </motion.div>

          <motion.p
            className="text-[#BBB] text-lg max-w-3xl mx-auto leading-relaxed mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Founded by a team of IITians, Dev Duo is driven by creativity and
            technical expertise. Learn about our mission and the innovative
            solutions we deliver to startups and companies to help them overcome
            their technical challenges and achieve their business goals.
          </motion.p>

          {/* Animated stats counter row */}
          {/* <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Semi-transparent background */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f] to-[#091526] rounded-lg -z-10 opacity-60"></div>

                {/* Subtle border */}
          {/* <div className="absolute inset-0 rounded-lg border border-[#234] -z-5"></div>

                {/* Animated counter */}
          {/* <div className="text-3xl md:text-4xl font-bold text-[#0066FF] mb-1">
                  {/* Display with "+" symbol for numbers > 10 */}
          {/* <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.value > 10 ? `${stat.value}+` : stat.value}
                  </motion.span>
                </div>
                <p className="text-[#999] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Visual accent for heading */}
          <motion.div
            className="mt-12 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
          </motion.div>
        </div>
      </div>

      {/* Company Introduction with What We Do - kept as is */}
      <CompanyIntro />

      {/* What We Stand For - kept as is */}
      <WhatWeStandFor />

      {/* Our Process - kept as is */}
      <OurProcess />

      {/* Our Team Section */}
      <OurTeam />

      {/* About Section - Partners section removed */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <About />
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="py-20 bg-gradient-to-b from-[#070c17] to-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF] rounded-full filter blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your ideas into reality?
            </h2>
            <p className="text-[#BBB] mb-10">
              Our team of IIT graduates and experts is ready to help you build
              innovative solutions for your business challenges.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#0066FF] to-[#0044BB] text-white rounded-lg font-medium transition-all"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(0, 102, 255, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
