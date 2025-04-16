import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeCube from "./ThemeCube";
import AnimatedText from "./AnimatedText";
import Sphere3D from "./Sphere3D";

export default function About() {
  // Generate unique but consistent image URLs
  const images = [
    "https://source.unsplash.com/random/500x300/?collaboration,team",
    "https://source.unsplash.com/random/500x300/?office,modern",
    "https://source.unsplash.com/random/500x300/?meeting,tech",
    "https://source.unsplash.com/random/500x300/?design,workshop"
  ];

  return (
    <section id="company" className="py-20 relative overflow-hidden">
      <ThemeCube className="-top-10 left-[15%]" opacity={10} />
      <ThemeCube className="bottom-20 right-[5%]" opacity={20} />
      
      {/* 3D Element */}
      <div className="absolute left-[60%] top-40 w-64 h-64 opacity-20 hidden lg:block">
        <Sphere3D 
          radius={1.5} 
          color="#0066FF" 
          wireframe={true} 
          rotation={{ x: 0.002, y: 0.003, z: 0.001 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedText 
              text="A Creative Company" 
              tagName="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
              duration={0.05}
            />
            
            <motion.p 
              className="text-[#AAAAAA] mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Since our founding in 2015, Troibits has been at the forefront of digital innovation. 
              We combine technical expertise with creative thinking to deliver solutions 
              that not only meet but exceed our clients' expectations.
            </motion.p>
            
            <motion.p 
              className="text-[#AAAAAA] mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Our team of passionate developers, designers, and strategists work collaboratively 
              to transform ideas into impactful digital experiences. We believe in building 
              long-term partnerships with our clients, understanding their business goals, 
              and delivering solutions that drive growth.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-[#0066FF] text-3xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  150+
                </motion.div>
                <p className="text-[#AAAAAA] text-sm">Projects Completed</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-[#0066FF] text-3xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  50+
                </motion.div>
                <p className="text-[#AAAAAA] text-sm">Happy Clients</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-[#0066FF] text-3xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  25+
                </motion.div>
                <p className="text-[#AAAAAA] text-sm">Team Members</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 px-8 shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)]">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Work With Us
                  </motion.span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  className="rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[0]}')` }} 
                  />
                </motion.div>
                <motion.div 
                  className="rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[1]}')` }} 
                  />
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[2]}')` }} 
                  />
                </motion.div>
                <motion.div 
                  className="rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[3]}')` }} 
                  />
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0066FF]/20 rounded-full blur-xl z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
