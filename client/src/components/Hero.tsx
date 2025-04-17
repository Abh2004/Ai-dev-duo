import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeCube from "./ThemeCube";
import Cube3D from "./Cube3D";
import Sphere3D from "./Sphere3D";
import ParticlesBackground from "./ParticlesBackground";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 md:pt-32 lg:pt-40 md:pb-24 lg:pb-32 overflow-hidden bg-black">
      {/* Enhanced Particle Background */}
      <ParticlesBackground count={100} color="#0066FF" minSize={1} maxSize={4} speed={0.5} />
      
      {/* 3D Elements */}
      <div className="absolute right-[5%] top-24 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] opacity-100 hidden md:block">
        <Cube3D 
          size={3} 
          color="#0080FF" 
          wireframe={false} 
          rotation={{ x: 0.007, y: 0.012, z: 0.003 }}
        />
      </div>
      
      {/* Decorative elements - Responsive positioning */}
      <ThemeCube className="top-16 sm:top-20 left-[3%] sm:left-[5%]" opacity={30} />
      <ThemeCube className="bottom-12 sm:bottom-20 right-[5%] sm:right-[10%]" opacity={40} />
      <ThemeCube className="top-32 sm:top-40 right-[30%] sm:right-[40%]" opacity={25} />
      <ThemeCube className="bottom-28 sm:bottom-40 left-[15%] sm:left-[25%]" opacity={35} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto md:mx-0">
          <AnimatedText 
            text="Let's Build Something Together!" 
            tagName="h1"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-center md:text-left"
            duration={0.08}
          />
          
          <motion.p 
            className="text-[#AAAAAA] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We handle tech for startups and companies, building innovative software solutions 
            that transform businesses. Our expert team specializes in tailored development
            for all your technology needs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center md:items-start space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button className="bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)] w-full sm:w-auto">
                Drop us a Message
              </Button>
            </Link>
            
            <Link href="/work">
              <Button variant="outline" className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 font-medium py-2 px-6 sm:py-3 sm:px-8 w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
