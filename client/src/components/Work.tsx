import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PortfolioCard from "./PortfolioCard";
import { portfolioData } from "@/lib/utils";
import AnimatedText from "./AnimatedText";
import AnimatedCard from "./AnimatedCard";

export default function Work() {
  return (
    <section id="work" className="py-20 bg-[#222222] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Abstract geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full border border-[#333333] opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full border border-[#333333] opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 rotate-45 border border-[#333333] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [45, 60, 45]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 rotate-45 border border-[#333333] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [45, 30, 45]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <AnimatedCard 
              key={index}
              delay={0.1 * index} 
              hoverEffect={true}
            >
              <PortfolioCard
                title={project.title}
                bgColor={project.bgColor}
                platforms={project.platforms}
                description={project.description}
              />
            </AnimatedCard>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <Button 
              variant="outline" 
              className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 font-medium py-3 px-8"
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Start Your Project
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
