import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeCube from "./ThemeCube";
import Cube3D from "./Cube3D";
import ParticlesBackground from "./ParticlesBackground";
import AnimatedText from "./AnimatedText";
import RocketAnimation from "./RocketAnimation";
import './RocketAnimation.css';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-visible">
      {/* Particle Background */}
      <ParticlesBackground count={60} color="#0066FF" minSize={1} maxSize={3} speed={0.3} />
      
      {/* 3D Elements */}
      <div className="absolute right-[5%] top-32 w-64 h-64 opacity-40 hidden lg:block">
        <Cube3D 
          size={2} 
          color="#0066FF" 
          wireframe={true} 
          rotation={{ x: 0.005, y: 0.01, z: 0.002 }}
        />
      </div>
      
      {/* Decorative elements */}
      <ThemeCube className="top-20 left-[5%]" opacity={20} />
      <ThemeCube className="bottom-20 right-[10%]" opacity={30} />
      <ThemeCube className="top-40 right-[20%]" opacity={15} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
          
          {/* The right column is just a placeholder to maintain grid layout */}
          <div className="hidden lg:block h-[500px] relative"></div>
        </div>
      </div>
      
      {/* Rocket Animation */}
      {/* We position it absolutely on the page, independent of the grid */}
      <RocketAnimation className="rocket-global" />
    </section>
  );
}
