import { motion } from "framer-motion";
import processIllustration from "@/assets/images/process-illustration.svg";
import { useState } from "react";

// Enhanced process steps with descriptions
const processSteps = [
  { 
    name: "IP Protection", 
    description: "We implement comprehensive intellectual property protection strategies to safeguard your innovations and business assets.",
    icon: "🛡️"
  },
  { 
    name: "Consultant And Research", 
    description: "Our team conducts thorough market analysis and research to identify opportunities and set strategic direction.",
    icon: "🔍"
  },
  { 
    name: "Ideation And Strategic Planning", 
    description: "We collaborate with you to generate innovative ideas and develop detailed strategic plans for execution.",
    icon: "💡"
  },
  { 
    name: "Product Design", 
    description: "Our design experts create intuitive, user-friendly interfaces and experiences that captivate your target audience.",
    icon: "✏️"
  },
  { 
    name: "Agile Development", 
    description: "Using agile methodologies, we build scalable, robust solutions with regular iterations and continuous feedback.",
    icon: "⚙️"
  },
  { 
    name: "Testing and Quality Assurance", 
    description: "Rigorous testing processes ensure your product meets the highest standards of quality and performance.",
    icon: "✓"
  },
  { 
    name: "Product Launch", 
    description: "We help you strategically launch your product with maximum impact and market penetration.",
    icon: "🚀"
  },
  { 
    name: "Growth and Maintenance", 
    description: "Ongoing support, updates, and optimization to ensure your product evolves with changing business needs.",
    icon: "📈"
  }
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isDotHovered, setIsDotHovered] = useState<boolean>(false);
  
  // Generate random particles for background animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4
  }));

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Animated particles */}
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.2 + Math.random() * 0.3,
              filter: 'blur(1px)',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          ></div>
        ))}
        
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-indigo-600 rounded-full filter blur-[150px] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              Our Process
              
              {/* Decorative digital elements */}
              <div className="absolute -left-8 -top-8 w-6 h-6 border-t-2 border-l-2 border-[#0066FF] opacity-60"></div>
              <div className="absolute -right-8 -bottom-8 w-6 h-6 border-b-2 border-r-2 border-[#0066FF] opacity-60"></div>
              
              {/* Underline effect */}
              <div className="absolute -bottom-3 left-0 right-0 h-[3px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-pulse opacity-70"></div>
              </div>
            </h2>
            
            {/* Subtle tech binary background */}
            <div className="absolute -right-6 -top-4 text-[10px] text-[#0066FF22] font-mono">
              10110<br/>01001<br/>10101
            </div>
          </div>
          
          <p className="text-[#BBB] max-w-3xl mx-auto mt-6">
            From idea to product launch, growth and software maintenance. We are 
            determined to provide IT support through complete life cycle of your business.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Process Illustration */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main illustration */}
            <div className="relative">
              <motion.img 
                src={processIllustration} 
                alt="Our development process" 
                className="max-w-full z-10 relative"
                animate={{
                  scale: isDotHovered ? 1.03 : 1
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Glowing background effect */}
              <motion.div 
                className="absolute inset-0 top-1/4 left-1/4 w-1/2 h-1/2 bg-[#0066FF] rounded-full filter blur-[80px] opacity-20 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            {/* Connecting nodes and dots decoration */}
            <div className="absolute inset-0">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#0066FF] rounded-full"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${20 + (i % 2) * 60}%`
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Process Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Vertical Line with gradient */}
            <div className="absolute top-0 bottom-0 left-[10px] w-[2px] bg-gradient-to-b from-[#0066FF] via-[#0066FF] to-[#0066FF]/30"></div>
            
            {/* Timeline Steps with enhanced interactive elements */}
            <div className="space-y-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="pl-10 relative"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => {
                    setActiveStep(index);
                    setIsDotHovered(true);
                  }}
                  onMouseLeave={() => {
                    setActiveStep(null);
                    setIsDotHovered(false);
                  }}
                >
                  {/* Enhanced dot with glow effect */}
                  <motion.div 
                    className="absolute left-0 top-[9px] w-5 h-5 rounded-full bg-[#0066FF] z-10 flex items-center justify-center"
                    animate={{
                      boxShadow: activeStep === index 
                        ? "0 0 10px 2px rgba(0, 102, 255, 0.7)" 
                        : "0 0 5px 0px rgba(0, 102, 255, 0.3)"
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Pulsing inner circle when active */}
                    {activeStep === index && (
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-white"
                        animate={{ 
                          scale: [1, 1.8, 1],
                          opacity: [0.8, 0.2, 0.8]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Dot connecting line when hovered */}
                  {activeStep === index && (
                    <motion.div 
                      className="absolute top-[12px] left-[20px] h-[1px] bg-[#0066FF]"
                      initial={{ width: 0 }}
                      animate={{ width: 15 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Step content with hover effect */}
                  <motion.div
                    className="relative bg-[#0A0A0A] rounded-lg p-4 border border-[#222]"
                    animate={{
                      borderColor: activeStep === index ? '#0066FF' : '#222',
                      backgroundColor: activeStep === index ? 'rgba(0, 20, 50, 0.2)' : 'rgba(10, 10, 10, 0.7)'
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: activeStep === index 
                        ? '0 5px 15px rgba(0, 30, 60, 0.3)' 
                        : 'none'
                    }}
                  >
                    {/* Step title with icon */}
                    <div className="flex items-center mb-2">
                      <span className="text-white opacity-70 mr-2">
                        {step.icon}
                      </span>
                      <h3 className={`text-lg font-medium ${
                        activeStep === index ? 'text-[#0066FF]' : 'text-white'
                      }`}>
                        {step.name}
                      </h3>
                    </div>
                    
                    {/* Step description - shows on hover */}
                    <motion.p 
                      className="text-sm text-[#AAA]"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: activeStep === index ? 1 : 0,
                        height: activeStep === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}