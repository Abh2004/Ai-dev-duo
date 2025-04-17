import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Service interface
interface Service {
  id: string;
  title: string;
  description: string;
  bg: string;
  gradient: string;
  features: string[];
  icon: (isActive: boolean) => React.ReactNode;
}

// Premium services data
const services: Service[] = [
  {
    id: "startup",
    title: "StartUp Acceleration",
    description: "We provide end-to-end support to help startups accelerate their growth through innovative technology strategies and solutions.",
    bg: "#0047B3",
    gradient: "linear-gradient(225deg, #0066FF, #003F9E)",
    features: ["MVP Development", "Market Strategy", "Investor Pitching", "Growth Hacking"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#0066FF" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M52.5 52.5H17.5V17.5H35V14H17.5C15.5625 14 14 15.5625 14 17.5V52.5C14 54.4375 15.5625 56 17.5 56H52.5C54.4375 56 56 54.4375 56 52.5V35H52.5V52.5ZM42 14V17.5H49.0438L28.8225 37.7213L31.2788 40.1775L51.5 19.9562V27H55V14H42Z" fill="white"/>
      </svg>
    )
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Create seamless native and cross-platform mobile experiences that engage users and deliver exceptional performance.",
    bg: "#4D3AFF",
    gradient: "linear-gradient(225deg, #8662FF, #4D3AFF)",
    features: ["Native iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#8662FF" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M45.5 14H24.5C22.0125 14 20 16.0125 20 18.5V51.5C20 53.9875 22.0125 56 24.5 56H45.5C47.9875 56 50 53.9875 50 51.5V18.5C50 16.0125 47.9875 14 45.5 14ZM24.5 51.5V18.5H45.5V51.5H24.5Z" fill="white"/>
        <path d="M35 49C36.6569 49 38 47.6569 38 46C38 44.3431 36.6569 43 35 43C33.3431 43 32 44.3431 32 46C32 47.6569 33.3431 49 35 49Z" fill="white"/>
      </svg>
    )
  },
  {
    id: "website",
    title: "Website Development",
    description: "From responsive frontends to powerful backends, we deliver websites optimized for performance and user experience.",
    bg: "#0066FF",
    gradient: "linear-gradient(225deg, #00A3FF, #0066FF)",
    features: ["Frontend Development", "Backend Integration", "CMS, Progressive Web Apps", "E-commerce Solutions"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#00A3FF" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M56 18.5H14V48.5H56V18.5Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M21 56H49" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M35 48.5V56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M14 42H56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
      </svg>
    )
  },
  {
    id: "enterprise",
    title: "Enterprise App Development",
    description: "Streamline operations with custom enterprise applications tailored to your business needs and existing systems.",
    bg: "#FF3366",
    gradient: "linear-gradient(225deg, #FF6633, #FF3366)",
    features: ["Custom Software", "System Integration", "Legacy Modernization", "Security Implementation"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#FF3366" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M56 48.5H14V18.5H56V48.5ZM21 56H49M35 48.5V56" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="52" cy="24" r="4" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: "design",
    title: "Product Design and Branding",
    description: "Elevate your digital presence with comprehensive design and branding services that resonate with your audience.",
    bg: "#00C6FF",
    gradient: "linear-gradient(225deg, #0072FF, #00C6FF)",
    features: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#00C6FF" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M14 14V46H26V56L36 46H56V14H14Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M33 27V33" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M39 21L27 33" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "nextgen",
    title: "Next Gen Technology",
    description: "Leverage cutting-edge technologies like AI, blockchain, and IoT to create innovative solutions for your business.",
    bg: "#7B4DFF",
    gradient: "linear-gradient(225deg, #0066FF, #7B4DFF)",
    features: ["AI & Machine Learning", "Blockchain", "IoT Solutions", "Extended Reality (AR/VR)"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#7B4DFF" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M45.5 56H24.5C22.0125 56 20 53.9875 20 51.5V18.5C20 16.0125 22.0125 14 24.5 14H45.5C47.9875 14 50 16.0125 50 18.5V51.5C50 53.9875 47.9875 56 45.5 56Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
        <path d="M35 52C36.6569 52 38 50.6569 38 49C38 47.3431 36.6569 46 35 46C33.3431 46 32 47.3431 32 49C32 50.6569 33.3431 52 35 52Z" fill="white"/>
        <path d="M35 35C40.5228 35 45 30.5228 45 25C45 19.4772 40.5228 15 35 15C29.4772 15 25 19.4772 25 25C25 30.5228 29.4772 35 35 35Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
        <path d="M35 30C37.7614 30 40 27.7614 40 25C40 22.2386 37.7614 20 35 20C32.2386 20 30 22.2386 30 25C30 27.7614 32.2386 30 35 30Z" fill="white"/>
      </svg>
    )
  },
  {
    id: "growth",
    title: "Growth Marketing",
    description: "Accelerate your digital growth with data-driven marketing strategies for customer acquisition and retention.",
    bg: "#2ECC71",
    gradient: "linear-gradient(225deg, #00C853, #2ECC71)",
    features: ["Conversion Optimization", "SEO & SEM", "Content Strategy", "Analytics & Insights"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#2ECC71" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M14 14V50H56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M28 43V29" stroke="white" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M37 43V24" stroke="white" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M46 43V35" stroke="white" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "maintenance",
    title: "Maintenance and Support",
    description: "Ensure optimal performance with our reliable ongoing technical support, updates, and optimization services.",
    bg: "#FFA534",
    gradient: "linear-gradient(225deg, #FFD701, #FFA534)",
    features: ["24/7 Technical Support", "Performance Optimization", "Security Updates", "Feature Enhancements"],
    icon: (isActive: boolean) => (
      <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="28" fill="#FFA534" fillOpacity={isActive ? "0.2" : "0.1"} />
        <path d="M56 48.5H14V18.5H56V48.5ZM21 56H49M35 48.5V56" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="49" cy="30" r="4" fill="#FFFFFF"/>
        <path d="M24 35C25.6569 35 27 33.6569 27 32C27 30.3431 25.6569 29 24 29C22.3431 29 21 30.3431 21 32C21 33.6569 22.3431 35 24 35Z" fill="white"/>
        <path d="M28 38C29.6569 38 31 36.6569 31 35C31 33.3431 29.6569 32 28 32C26.3431 32 25 33.3431 25 35C25 36.6569 26.3431 38 28 38Z" fill="white"/>
      </svg>
    )
  }
];

export default function WhatWeDo() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.5 
      }
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 }
    }
  };

  // Get active service details
  const activeServiceDetails = activeService 
    ? services.find(s => s.id === activeService) 
    : null;

  // Random particle elements for background
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10
  }));

  return (
    <section className="py-24 bg-[#05050A] relative overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
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
              opacity: 0.05 + Math.random() * 0.07,
              filter: 'blur(1px)',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
        
        {/* Gradient background elements */}
        <div className="absolute top-0 left-20 w-[500px] h-[500px] rounded-full opacity-5 bg-blue-500 filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-20 w-[500px] h-[500px] rounded-full opacity-5 bg-indigo-500 filter blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Premium section heading */}
        <div className="relative z-10 text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF]/10 to-transparent rounded-full filter blur-xl"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">What we do</span>
              <span className="text-[#0066FF]">?</span>
              
              <motion.div 
                className="absolute -right-4 -top-4 w-8 h-8"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] absolute top-0 right-0"></div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 -bottom-4 w-10 h-10"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              >
                <div className="w-2 h-2 rounded-full bg-[#0066FF] absolute bottom-0 left-0"></div>
              </motion.div>
            </h2>
            
            {/* Glow effect */}
            <div className="absolute -bottom-4 left-0 right-0 h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-pulse opacity-70"></div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-[#BBB] text-lg max-w-3xl mx-auto mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your search for end-to-end technology partner ends here. We are Top-Rated on Clutch, Google
            and the trusted choice of Fortune 500 Companies.
          </motion.p>
        </div>

        {/* Service Grid - Ultra Modern Design */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.slice(0, 8).map((service) => (
            <motion.div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                hoveredCard === service.id ? 'z-10' : 'z-0'
              }`}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setActiveService(service.id === activeService ? null : service.id)}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                height: hoveredCard === service.id ? '320px' : '220px',
                transition: 'height 0.3s ease-out, transform 0.3s ease-out'
              }}
            >
              {/* Service Card Background with Gradient */}
              <div 
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{ 
                  background: hoveredCard === service.id || activeService === service.id 
                    ? service.gradient
                    : 'linear-gradient(180deg, rgba(15, 15, 25, 0.9) 0%, rgba(10, 10, 20, 0.95) 100%)',
                  opacity: hoveredCard === service.id 
                    ? 0.9
                    : activeService === service.id 
                      ? 0.7
                      : 1
                }}
              />
              
              {/* Elegant Border */}
              <div className="absolute inset-[1px] rounded-2xl bg-[#080815]/80 z-0 backdrop-blur-sm overflow-hidden">
                {/* Color line on top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Animated glowing effect on hover */}
                {hoveredCard === service.id && (
                  <motion.div 
                    className="absolute inset-0 opacity-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      background: `radial-gradient(circle at 50% 50%, ${service.bg}, transparent 70%)`
                    }}
                  />
                )}
                
                {/* Animated particles on hover */}
                {hoveredCard === service.id && Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white"
                    initial={{ 
                      x: Math.random() * 300 - 150,
                      y: Math.random() * 300 - 150,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: [0, -100],
                      opacity: [0, 0.7, 0]
                    }}
                    transition={{ 
                      duration: 1.5 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              
              {/* Content Container */}
              <div className="relative h-full z-10 p-6 flex flex-col">
                {/* Icon with glow effect */}
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="relative mb-4"
                >
                  {service.icon(hoveredCard === service.id || activeService === service.id)}
                  
                  {/* Glow effect behind icon */}
                  {(hoveredCard === service.id || activeService === service.id) && (
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background: `radial-gradient(circle, ${service.bg} 0%, transparent 70%)`,
                        filter: 'blur(15px)'
                      }}
                    />
                  )}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-[22px] font-bold mb-2 text-white">
                  {service.title}
                </h3>
                
                {/* Description & Features with animated reveal */}
                <motion.div 
                  className="relative overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredCard === service.id ? 1 : 0,
                    height: hoveredCard === service.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center text-sm text-white/70"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: hoveredCard === service.id ? 1 : 0,
                          x: hoveredCard === service.id ? 0 : -10
                        }}
                        transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90 mr-2"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Learn More Button - Only visible on hover */}
                <motion.div
                  className="mt-auto pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <button
                    className="text-sm text-white font-medium flex items-center group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle learn more click
                    }}
                  >
                    Learn more 
                    <span className="ml-1 transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </motion.div>
                
                {/* Badge indicator for popular services */}
                {service.id === 'website' && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] rounded-full font-medium">
                    POPULAR
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Active Service Details Panel - when a service is clicked */}
        <AnimatePresence>
          {activeService && activeServiceDetails && (
            <motion.div
              className="relative mb-10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#080818] to-[#0A0A1A] opacity-95"></div>
              
              {/* Glowing border */}
              <div className="absolute inset-0 p-[1px] rounded-2xl">
                <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
                <div 
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${activeServiceDetails.bg}, transparent)`,
                    filter: 'blur(2px)'
                  }}
                ></div>
              </div>
              
              <div className="relative p-8 z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="mr-4">
                      {activeServiceDetails.icon(true)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{activeServiceDetails.title}</h3>
                      <p className="text-white/70 max-w-2xl">{activeServiceDetails.description}</p>
                    </div>
                  </div>
                  
                  <button 
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    onClick={() => setActiveService(null)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-lg">Key Features</h4>
                    <ul className="space-y-2">
                      {activeServiceDetails.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-center text-white/80"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                        >
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center mr-3"
                            style={{ background: activeServiceDetails.bg }}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-lg">Project Process</h4>
                    <div className="space-y-3">
                      {['Discovery', 'Planning', 'Design & Development', 'Testing', 'Deployment', 'Support'].map((step, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                        >
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-3 text-xs text-white/90 font-medium">
                            {idx + 1}
                          </div>
                          <div className="text-white/80">{step}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <motion.button
                    className="px-6 py-3 rounded-lg text-white font-medium"
                    style={{ background: activeServiceDetails.gradient }}
                    whileHover={{ scale: 1.03, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-12 mx-auto max-w-4xl text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 via-[#0066FF]/10 to-[#0066FF]/5 rounded-xl blur-xl opacity-50 -z-10"></div>
          
          <div className="p-8 rounded-xl backdrop-blur-sm border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your digital presence?</h3>
            <p className="text-[#BBB] max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you build innovative solutions that meet your business challenges and exceed your expectations.
            </p>
            
            <motion.a
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-[#0066FF] text-white font-medium rounded-lg shadow-lg shadow-[#0066FF]/20 group"
              whileHover={{ scale: 1.03, backgroundColor: "#0055DD" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>Explore Our Services</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}