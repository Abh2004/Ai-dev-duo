import { motion } from "framer-motion";
import { useState } from "react";

// Service descriptions
const serviceDescriptions = {
  "StartUp Acceleration": "We provide end-to-end support to help startups accelerate their growth, from ideation to market launch. Our expertise in product development, go-to-market strategies, and funding guidance helps emerging companies reach their potential faster.",
  "Mobile App Development": "Create seamless native and cross-platform mobile experiences with our expert development team. We build high-performance applications for iOS and Android that engage users and deliver exceptional experiences.",
  "Website Development": "From responsive frontend interfaces to powerful backend systems, we deliver custom websites optimized for performance, user experience, and conversion. Our solutions are built with scalability and maintainability in mind.",
  "Enterprise App Development": "Streamline operations and enhance productivity with custom enterprise applications tailored to your specific business needs. We create secure, scalable solutions that integrate with your existing systems.",
  "Product Design and Branding": "Elevate your digital presence with our comprehensive design and branding services. We craft intuitive interfaces, memorable brand identities, and cohesive visual systems that resonate with your target audience.",
  "Next Gen Technology": "Leverage cutting-edge technologies like AI, blockchain, and IoT to create innovative solutions that give you a competitive edge. We help you adopt and implement emerging technologies that transform your business.",
  "Growth Marketing": "Accelerate your digital growth with data-driven marketing strategies. Our comprehensive approach includes SEO, content marketing, social media, and analytics to help you acquire and retain customers efficiently.",
  "Maintenance and Support": "Ensure optimal performance and continuous improvement of your digital assets with our reliable maintenance and support services. We provide ongoing technical support, updates, and optimization for lasting success."
};

// Service card details
interface ServiceDetails {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
}

// Enhanced SVG Icons with gradient backgrounds
const StartupIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="startupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0047B3" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#startupGrad)" fillOpacity="0.1" />
    <path d="M52.5 52.5H17.5V17.5H35V14H17.5C15.5625 14 14 15.5625 14 17.5V52.5C14 54.4375 15.5625 56 17.5 56H52.5C54.4375 56 56 54.4375 56 52.5V35H52.5V52.5ZM42 14V17.5H49.0438L28.8225 37.7213L31.2788 40.1775L51.5 19.9562V27H55V14H42Z" fill="white"/>
  </svg>
);

const MobileAppIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4D3AFF" />
        <stop offset="100%" stopColor="#8662FF" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#mobileGrad)" fillOpacity="0.1" />
    <path d="M45.5 14H24.5C22.0125 14 20 16.0125 20 18.5V51.5C20 53.9875 22.0125 56 24.5 56H45.5C47.9875 56 50 53.9875 50 51.5V18.5C50 16.0125 47.9875 14 45.5 14ZM24.5 51.5V18.5H45.5V51.5H24.5Z" fill="white"/>
    <path d="M35 49C36.6569 49 38 47.6569 38 46C38 44.3431 36.6569 43 35 43C33.3431 43 32 44.3431 32 46C32 47.6569 33.3431 49 35 49Z" fill="white"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#00A3FF" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#webGrad)" fillOpacity="0.1" />
    <path d="M56 18.5H14V48.5H56V18.5Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M21 56H49" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M35 48.5V56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M14 42H56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
  </svg>
);

const EnterpriseIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="enterpriseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF3366" />
        <stop offset="100%" stopColor="#FF6633" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#enterpriseGrad)" fillOpacity="0.1" />
    <path d="M56 48.5H14V18.5H56V48.5ZM21 56H49M35 48.5V56" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="52" cy="24" r="4" fill="#FFFFFF"/>
  </svg>
);

const ProductDesignIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C6FF" />
        <stop offset="100%" stopColor="#0072FF" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#designGrad)" fillOpacity="0.1" />
    <path d="M14 14V46H26V56L36 46H56V14H14Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M33 27V33" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M39 21L27 33" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

const NextGenIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nextGenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7B4DFF" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#nextGenGrad)" fillOpacity="0.1" />
    <path d="M45.5 56H24.5C22.0125 56 20 53.9875 20 51.5V18.5C20 16.0125 22.0125 14 24.5 14H45.5C47.9875 14 50 16.0125 50 18.5V51.5C50 53.9875 47.9875 56 45.5 56Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
    <path d="M35 52C36.6569 52 38 50.6569 38 49C38 47.3431 36.6569 46 35 46C33.3431 46 32 47.3431 32 49C32 50.6569 33.3431 52 35 52Z" fill="white"/>
    <path d="M35 35C40.5228 35 45 30.5228 45 25C45 19.4772 40.5228 15 35 15C29.4772 15 25 19.4772 25 25C25 30.5228 29.4772 35 35 35Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
    <path d="M35 30C37.7614 30 40 27.7614 40 25C40 22.2386 37.7614 20 35 20C32.2386 20 30 22.2386 30 25C30 27.7614 32.2386 30 35 30Z" fill="white"/>
  </svg>
);

const GrowthIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="growthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ECC71" />
        <stop offset="100%" stopColor="#00C853" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#growthGrad)" fillOpacity="0.1" />
    <path d="M14 14V50H56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M28 43V29" stroke="#FFFFFF" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M37 43V24" stroke="#FFFFFF" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M46 43V35" stroke="#FFFFFF" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

const MaintenanceIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="maintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA534" />
        <stop offset="100%" stopColor="#FFD701" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="28" fill="url(#maintGrad)" fillOpacity="0.1" />
    <path d="M56 48.5H14V18.5H56V48.5ZM21 56H49M35 48.5V56" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="49" cy="30" r="4" fill="#FFFFFF"/>
    <path d="M24 35C25.6569 35 27 33.6569 27 32C27 30.3431 25.6569 29 24 29C22.3431 29 21 30.3431 21 32C21 33.6569 22.3431 35 24 35Z" fill="white"/>
    <path d="M28 38C29.6569 38 31 36.6569 31 35C31 33.3431 29.6569 32 28 32C26.3431 32 25 33.3431 25 35C25 36.6569 26.3431 38 28 38Z" fill="white"/>
  </svg>
);

// Define service data with extended information
const services: ServiceDetails[] = [
  {
    icon: <StartupIcon />,
    title: "StartUp Acceleration",
    description: serviceDescriptions["StartUp Acceleration"],
    color: "from-[#0047B3] to-[#0066FF]",
    features: ["MVP Development", "Market Strategy", "Investor Pitching", "Growth Hacking"]
  },
  {
    icon: <MobileAppIcon />,
    title: "Mobile App Development",
    description: serviceDescriptions["Mobile App Development"],
    color: "from-[#4D3AFF] to-[#8662FF]",
    features: ["Native iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"]
  },
  {
    icon: <WebsiteIcon />,
    title: "Website Development",
    description: serviceDescriptions["Website Development"],
    color: "from-[#0066FF] to-[#00A3FF]",
    features: ["Frontend Development", "Backend Development", "CMS, Progressive Web Apps", "E-commerce Solutions"]
  },
  {
    icon: <EnterpriseIcon />,
    title: "Enterprise App Development",
    description: serviceDescriptions["Enterprise App Development"],
    color: "from-[#FF3366] to-[#FF6633]",
    features: ["Custom Software", "System Integration", "Legacy Modernization", "Security Implementation"]
  },
  {
    icon: <ProductDesignIcon />,
    title: "Product Design and Branding",
    description: serviceDescriptions["Product Design and Branding"],
    color: "from-[#00C6FF] to-[#0072FF]",
    features: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping"]
  },
  {
    icon: <NextGenIcon />,
    title: "Next Gen Technology",
    description: serviceDescriptions["Next Gen Technology"],
    color: "from-[#7B4DFF] to-[#0066FF]",
    features: ["AI & Machine Learning", "Blockchain", "IoT Solutions", "Extended Reality (AR/VR)"]
  },
  {
    icon: <GrowthIcon />,
    title: "Growth Marketing",
    description: serviceDescriptions["Growth Marketing"],
    color: "from-[#2ECC71] to-[#00C853]",
    features: ["Conversion Optimization", "SEO & SEM", "Content Strategy", "Analytics & Insights"]
  },
  {
    icon: <MaintenanceIcon />,
    title: "Maintenance and Support",
    description: serviceDescriptions["Maintenance and Support"],
    color: "from-[#FFA534] to-[#FFD701]",
    features: ["24/7 Technical Support", "Performance Optimization", "Security Updates", "Feature Enhancements"]
  }
];

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
    transition: { duration: 0.5 }
  }
};

export default function WhatWeDo() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [highlightedService, setHighlightedService] = useState<number | null>(null);
  
  // Background elements for visual enhancement
  const backgroundElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4
  }));

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated particles */}
        {backgroundElements.map(particle => (
          <div 
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.1 + Math.random() * 0.05,
              filter: 'blur(1px)',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
        
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-indigo-600 rounded-full filter blur-[150px] opacity-5"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with enhanced styling */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
              What we do?
              
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 w-5 h-5 border-t-2 border-l-2 border-[#0066FF] opacity-60"></div>
              <div className="absolute -right-6 -bottom-3 w-5 h-5 border-b-2 border-r-2 border-[#0066FF] opacity-60"></div>
              
              {/* Underline effect */}
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-[3px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-pulse opacity-70"></div>
              </div>
            </h2>
          </motion.div>
          
          <motion.p
            className="text-[#BBB] text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your search for end-to-end technology partner ends here. We are Top-Rated on Clutch, Google
            and the trusted choice of Fortune 500 Companies.
          </motion.p>
          
          {/* Decorative dots */}
          <motion.div 
            className="mt-8 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
          </motion.div>
        </div>
        
        {/* Services Grid with enhanced animation and interactivity */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-[#0A0A14] to-[#0D0D1A] p-6 rounded-lg relative group cursor-pointer transition-all duration-300 border border-[#181830] ${highlightedService === index ? 'border-[#0066FF] shadow-lg shadow-[#0066FF]/10' : 'border-opacity-50'}`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setActiveService(index === activeService ? null : index)}
              onMouseEnter={() => setHighlightedService(index)}
              onMouseLeave={() => setHighlightedService(null)}
            >
              {/* Glowing accent on hover */}
              <motion.div 
                className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: highlightedService === index ? 0.05 : 0 }}
              />
              
              {/* Blue accent line with glow effect */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.color} rounded-l-lg ${highlightedService === index ? 'shadow-[0_0_10px_rgba(0,102,255,0.5)]' : ''}`}></div>
              
              {/* Top accent for visual appeal */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Icon with animated background */}
              <motion.div 
                className="relative mb-4 group-hover:scale-105 transition-transform duration-300"
                animate={{ 
                  y: [0, -5, 0], 
                  transition: { 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  } 
                }}
              >
                {service.icon}
                
                {/* Animated ring */}
                <div className={`absolute -inset-4 rounded-full border border-[#0066FF]/20 ${highlightedService === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
              </motion.div>
              
              {/* Title and content */}
              <div>
                <motion.h3 
                  className="text-xl font-semibold mb-2 group-hover:text-[#0066FF] transition-colors duration-300"
                  animate={{ 
                    color: highlightedService === index ? '#0066FF' : '#FFFFFF',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Features shown on hover */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: highlightedService === index ? 'auto' : 0,
                    opacity: highlightedService === index ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ul className="mt-3 space-y-1 text-sm text-[#AAA]">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: highlightedService === index ? 1 : 0,
                          x: highlightedService === index ? 0 : -10
                        }}
                        transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
                      >
                        <span className="text-[#0066FF] mr-2">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Badge indicator for website development to showcase active state */}
              {index === 2 && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-[#0066FF] text-white text-xs rounded-full">
                  Popular
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-[#BBB] mb-6 max-w-2xl mx-auto">
            Discover how our comprehensive services can transform your digital presence and accelerate your business growth.
          </p>
          
          <motion.a 
            href="/services" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0066FF] to-[#0044BB] text-white rounded-lg font-medium transition-all"
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}