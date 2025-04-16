import { serviceData } from "@/lib/utils";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import AnimatedText from "./AnimatedText";
import Cube3D from "./Cube3D";
import AnimatedCard from "./AnimatedCard";

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute -left-32 top-32 w-64 h-64 opacity-10 hidden lg:block">
        <Cube3D 
          size={3} 
          color="#0066FF" 
          wireframe={true} 
          rotation={{ x: 0.002, y: 0.003, z: 0.001 }}
        />
      </div>
      
      <div className="absolute -right-32 bottom-32 w-64 h-64 opacity-10 hidden lg:block">
        <Cube3D 
          size={3} 
          color="#0066FF" 
          wireframe={true} 
          rotation={{ x: -0.003, y: 0.002, z: 0.001 }}
        />
      </div>
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#0066FF]/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#0066FF]/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <AnimatedText 
            text="Mobile App Development & Digital Transformation" 
            tagName="h2"
            className="text-3xl md:text-4xl font-bold mb-4"
            duration={0.05}
          />
          
          <motion.p 
            className="text-[#AAAAAA] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our comprehensive suite of software development and digital services 
            designed to transform your business and elevate your digital presence.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <AnimatedCard 
              key={index} 
              delay={0.1 * index}
              glowEffect={true}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
