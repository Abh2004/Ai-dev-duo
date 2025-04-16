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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-black">
      {/* Enhanced Particle Background */}
      <ParticlesBackground count={100} color="#0066FF" minSize={1} maxSize={4} speed={0.5} />
      
      {/* 3D Elements */}
      <div className="absolute right-[10%] top-32 w-[400px] h-[400px] opacity-100 hidden lg:block">
        <Cube3D 
          size={3} 
          color="#0080FF" 
          wireframe={false} 
          rotation={{ x: 0.007, y: 0.012, z: 0.003 }}
        />
      </div>
      
      {/* Decorative elements */}
      <ThemeCube className="top-20 left-[5%]" opacity={30} />
      <ThemeCube className="bottom-20 right-[10%]" opacity={40} />
      <ThemeCube className="top-40 right-[40%]" opacity={25} />
      <ThemeCube className="bottom-40 left-[25%]" opacity={35} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <AnimatedText 
            text="Let's Build Something Together!" 
            tagName="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left"
            duration={0.08}
          />
          
          <motion.p 
            className="text-[#AAAAAA] text-lg md:text-xl mb-8 leading-relaxed"
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
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button className="bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 px-8 shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)]">
                Drop us a Message
              </Button>
            </Link>
            
            <Link href="/work">
              <Button variant="outline" className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 font-medium py-3 px-8">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
