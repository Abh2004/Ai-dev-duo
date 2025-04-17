import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn, ServiceIconType } from "@/lib/utils";

// Define the service content structure
interface ServiceContent {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

// Create a mapping of service content by ID
const serviceContentMap: Record<string, ServiceContent> = {
  "startup-accelerator": {
    title: "StartUp Accelerator",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Rocket Body */}
        <path 
          d="M30 10C30 10 20 18 20 32C20 38 24 42 30 42C36 42 40 38 40 32C40 18 30 10 30 10Z" 
          stroke="white" 
          strokeWidth="1.5"
          fill="#111111"
        />
        
        {/* Rocket Details */}
        <circle cx="30" cy="25" r="3" stroke="white" strokeWidth="1" fill="#111111" />
        <circle cx="30" cy="33" r="2" stroke="white" strokeWidth="1" fill="#111111" />
        
        {/* Rocket Flame */}
        <path 
          d="M27 42C27 42 28 48 30 50C32 48 33 42 33 42" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          strokeDasharray="1 2"
        />
        
        {/* Grid Lines */}
        <line x1="12" y1="30" x2="48" y2="30" stroke="#333333" strokeWidth="0.5" strokeDasharray="1 3" />
        <line x1="30" y1="12" x2="30" y2="48" stroke="#333333" strokeWidth="0.5" strokeDasharray="1 3" />
        
        {/* Measurement Marks */}
        <circle cx="20" cy="30" r="1" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="40" cy="30" r="1" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="30" cy="20" r="1" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="30" cy="40" r="1" stroke="white" strokeWidth="0.5" fill="none" />
        
        {/* Constellation Points */}
        <circle cx="20" cy="15" r="0.8" fill="white" opacity="0.7" />
        <circle cx="40" cy="15" r="0.8" fill="white" opacity="0.7" />
        <circle cx="15" cy="40" r="0.8" fill="white" opacity="0.7" />
        <circle cx="45" cy="40" r="0.8" fill="white" opacity="0.7" />
        <line x1="20" y1="15" x2="40" y2="15" stroke="white" strokeWidth="0.5" opacity="0.3" />
        <line x1="40" y1="15" x2="45" y2="40" stroke="white" strokeWidth="0.5" opacity="0.3" />
        <line x1="45" y1="40" x2="15" y2="40" stroke="white" strokeWidth="0.5" opacity="0.3" />
        <line x1="15" y1="40" x2="20" y2="15" stroke="white" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    description: "We put in place a strategic plan and create a roadmap for your business and properly research the market and the segment in which you plan to grow your business in. Strategic planning is one of the key services provided by Ai DevDuo. Our customers partner with us to plan critical steps for their startup business. Our continuous analysis of the market trends and dynamics keeps us alert to changes and developments in different market sectors.",
    features: ["Strategy Planning", "Pitch Deck", "B2B, B2C Marketing", "ROI Management"]
  },
  "product-design": {
    title: "Product Design",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Pen tool shape */}
        <path 
          d="M38 22L42 26L28 40L18 42L20 32L34 18L38 22Z" 
          stroke="white" 
          strokeWidth="1.5"
          fill="#111111"
        />
        
        {/* Control handle lines */}
        <path 
          d="M38 22L42 26" 
          stroke="white" 
          strokeWidth="1" 
          strokeLinecap="round"
        />
        <path 
          d="M34 18L38 22" 
          stroke="white" 
          strokeWidth="1" 
          strokeLinecap="round"
        />
        
        {/* Selection points */}
        <circle cx="38" cy="22" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="42" cy="26" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="34" cy="18" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="18" cy="42" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        
        {/* Grid Lines */}
        <line x1="12" y1="30" x2="48" y2="30" stroke="#333333" strokeWidth="0.5" strokeDasharray="1 3" />
        <line x1="30" y1="12" x2="30" y2="48" stroke="#333333" strokeWidth="0.5" strokeDasharray="1 3" />
        
        {/* Ruler marks */}
        <line x1="15" y1="28" x2="15" y2="32" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="25" y1="28" x2="25" y2="32" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="35" y1="28" x2="35" y2="32" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="40" y1="28" x2="40" y2="32" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="45" y1="28" x2="45" y2="32" stroke="white" strokeWidth="0.5" opacity="0.7" />
        
        {/* Curved line for artistic element */}
        <path 
          d="M12 20C18 15 30 45 48 25" 
          stroke="white" 
          strokeWidth="0.5" 
          strokeDasharray="1 2" 
          opacity="0.3"
          fill="none"
        />
      </svg>
    ),
    description: "Our design team creates innovative and user-centric product designs that captivate users and drive engagement. We believe in designing products that not only look great but also offer exceptional usability and functionality. Our design process involves deep research into user needs, behavior patterns, and industry standards to create solutions that truly stand out.",
    features: ["UI/UX Design", "Wireframing", "Prototyping", "User Testing"]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Phone outline */}
        <rect 
          x="22" 
          y="12" 
          width="16" 
          height="36" 
          rx="3" 
          stroke="white" 
          strokeWidth="1.5"
          fill="#111111"
        />
        
        {/* Screen */}
        <rect 
          x="24" 
          y="16" 
          width="12" 
          height="24" 
          rx="1" 
          stroke="white" 
          strokeWidth="0.5"
          fill="#111111"
        />
        
        {/* App Icons on screen - more minimalist, professional look */}
        <rect x="26" y="18" width="2.5" height="2.5" rx="0.5" stroke="white" strokeWidth="0.5" fill="none" />
        <rect x="30" y="18" width="2.5" height="2.5" rx="0.5" stroke="white" strokeWidth="0.5" fill="none" />
        <rect x="26" y="22" width="2.5" height="2.5" rx="0.5" stroke="white" strokeWidth="0.5" fill="none" />
        <rect x="30" y="22" width="2.5" height="2.5" rx="0.5" stroke="white" strokeWidth="0.5" fill="none" />
        <rect x="26" y="26" width="2.5" height="2.5" rx="0.5" stroke="white" strokeWidth="0.5" fill="none" />
        <rect x="30" y="26" width="2.5" height="2.5" rx="0.5" stroke="white" strokeWidth="0.5" fill="none" />
        
        {/* Home button */}
        <circle cx="30" cy="44" r="2" stroke="white" strokeWidth="0.5" fill="none" />
        
        {/* Device details */}
        <line x1="24" y1="14" x2="36" y2="14" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="24" y1="42" x2="36" y2="42" stroke="white" strokeWidth="0.5" opacity="0.7" />
        
        {/* Technical blueprint elements */}
        <line x1="19" y1="30" x2="21" y2="30" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="39" y1="30" x2="41" y2="30" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="30" y1="9" x2="30" y2="11" stroke="white" strokeWidth="0.5" opacity="0.7" />
        <line x1="30" y1="49" x2="30" y2="51" stroke="white" strokeWidth="0.5" opacity="0.7" />
        
        {/* Dimension lines for technical look */}
        <path d="M14 12L14 48" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.3" />
        <path d="M46 12L46 48" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.3" />
        <path d="M14 12L22 12" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.3" />
        <path d="M14 48L22 48" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.3" />
        <path d="M38 12L46 12" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.3" />
        <path d="M38 48L46 48" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.3" />
      </svg>
    ),
    description: "Our mobile app development team creates innovative applications for iOS and Android platforms that deliver exceptional user experiences. We utilize the latest technologies and development practices to build high-performance, scalable, and feature-rich mobile applications that meet the unique needs of your business and users.",
    features: ["Native iOS Development", "Native Android Development", "Hybrid App Development", "App Store Optimization"]
  },
  "web-development": {
    title: "Web Development",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Browser outline */}
        <rect 
          x="12" 
          y="14" 
          width="36" 
          height="28" 
          rx="3" 
          stroke="white" 
          strokeWidth="1.5"
          fill="#111111"
        />
        
        {/* Browser header */}
        <path d="M12 17h36" stroke="white" strokeWidth="0.5" />
        
        {/* Browser controls */}
        <circle cx="16" cy="17" r="1" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="20" cy="17" r="1" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="24" cy="17" r="1" stroke="white" strokeWidth="0.5" fill="none" />
        
        {/* Address bar */}
        <rect x="28" y="15" width="16" height="3" rx="1.5" stroke="white" strokeWidth="0.5" fill="none" />
        
        {/* Page content - streamlined for professional look */}
        <line x1="16" y1="22" x2="44" y2="22" stroke="white" strokeWidth="0.5" opacity="0.8" />
        <line x1="16" y1="26" x2="36" y2="26" stroke="white" strokeWidth="0.5" opacity="0.6" />
        <line x1="16" y1="30" x2="40" y2="30" stroke="white" strokeWidth="0.5" opacity="0.6" />
        <line x1="16" y1="34" x2="32" y2="34" stroke="white" strokeWidth="0.5" opacity="0.6" />
        
        {/* Code brackets for tech feel */}
        <path 
          d="M20 40L16 36L20 32" 
          stroke="white" 
          strokeWidth="0.8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
        <path 
          d="M40 40L44 36L40 32" 
          stroke="white" 
          strokeWidth="0.8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
        
        {/* Technical details and measurement lines */}
        <line x1="8" y1="14" x2="10" y2="14" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="8" y1="42" x2="10" y2="42" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="50" y1="14" x2="52" y2="14" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <line x1="50" y1="42" x2="52" y2="42" stroke="white" strokeWidth="0.5" opacity="0.4" />
        
        {/* Dimension lines */}
        <path d="M8 14v28" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="1 2" />
        <path d="M52 14v28" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="1 2" />
      </svg>
    ),
    description: "Our web development team specializes in creating responsive, high-performance websites and web applications that drive business growth. We combine cutting-edge technologies with innovative design to deliver seamless user experiences that engage visitors and convert them into customers. Our web solutions are built to be scalable, secure, and easy to maintain.",
    features: ["Frontend Development", "Backend Development", "E-commerce Solutions", "Progressive Web Apps"]
  },
  "enterprise-app-development": {
    title: "Enterprise App Development",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="40" height="30" rx="2" stroke="white" strokeWidth="1.5"/>
        <path d="M20 25H25V30H20V25Z" stroke="white" strokeWidth="1.5"/>
        <path d="M35 25H40V30H35V25Z" stroke="white" strokeWidth="1.5"/>
        <path d="M20 35H25V40H20V35Z" stroke="white" strokeWidth="1.5"/>
        <path d="M35 35H40V40H35V35Z" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    description: "We develop custom enterprise applications that streamline operations, improve efficiency, and drive digital transformation within your organization. Our enterprise solutions are built to handle complex business processes, integrate with existing systems, and scale as your business grows. We focus on creating secure, reliable, and user-friendly applications that meet the specific needs of your enterprise.",
    features: ["ERP Solutions", "CRM Systems", "Business Process Automation", "Legacy System Modernization"]
  },
  "next-gen-tech": {
    title: "Next Gen Tech",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 15V45" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 20L40 40" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 30H45" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 40L40 20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    description: "We harness the power of emerging technologies to create innovative solutions that give your business a competitive edge. Our team stays at the forefront of technological advancements, ensuring that your business benefits from the latest innovations. We help you implement next-generation technologies that transform your operations, enhance customer experiences, and drive business growth.",
    features: ["Artificial Intelligence", "Machine Learning", "Blockchain Development", "IoT Solutions", "Augmented/Virtual Reality"]
  },
  "growth-marketing": {
    title: "Growth Marketing",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 45L25 30L35 40L50 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 25H50V35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Our growth marketing strategies help businesses acquire, engage, and retain customers through data-driven approaches. We combine creativity with analytics to develop marketing campaigns that deliver measurable results. Our team's expertise covers the full spectrum of digital marketing channels, allowing us to create comprehensive strategies that drive sustainable growth for your business.",
    features: ["Digital Strategy", "SEO & SEM", "Content Marketing", "Social Media Marketing", "Conversion Rate Optimization"]
  },
  "software-maintenance": {
    title: "Software Maintenance",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 20C15 17.7909 16.7909 16 19 16H41C43.2091 16 45 17.7909 45 20V40C45 42.2091 43.2091 44 41 44H19C16.7909 44 15 42.2091 15 40V20Z" stroke="white" strokeWidth="1.5"/>
        <path d="M35 30C35 32.7614 32.7614 35 30 35C27.2386 35 25 32.7614 25 30C25 27.2386 27.2386 25 30 25C32.7614 25 35 27.2386 35 30Z" stroke="white" strokeWidth="1.5"/>
        <path d="M35 30H40" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 30H25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 25V20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 40V35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    description: "We provide comprehensive software maintenance services to ensure your applications remain secure, up-to-date, and performing optimally. Our maintenance team handles everything from routine updates and bug fixes to performance optimizations and security patching. We work proactively to identify and address potential issues before they impact your business operations.",
    features: ["Preventive Maintenance", "Corrective Maintenance", "Security Updates", "Performance Optimization", "System Monitoring"]
  }
};

export default function ServiceDetails() {
  // State to track the active service
  const [activeService, setActiveService] = useState<string>("startup-accelerator");
  
  // Get the content for the active service
  const activeContent = serviceContentMap[activeService];
  
  // Define the list of all services for the navigation
  const services = [
    { id: "startup-accelerator", name: "StartUp Accelerator" },
    { id: "product-design", name: "Product Design" },
    { id: "mobile-app-development", name: "Mobile App Development" },
    { id: "web-development", name: "Web Development" },
    { id: "enterprise-app-development", name: "Enterprise App Development" },
    { id: "next-gen-tech", name: "Next Gen Tech" },
    { id: "growth-marketing", name: "Growth Marketing" },
    { id: "software-maintenance", name: "Software Maintenance" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Service Navigation - Matching the new image exactly */}
          <div className="lg:w-1/3">
            <div className="relative pl-8">
              {services.map((service, index) => {
                const isActive = activeService === service.id;
                const isAboveActive = index > 0 && services[index-1].id === activeService;
                const isBelowActive = index < services.length - 1 && services[index+1].id === activeService;
                
                return (
                  <div key={service.id} className="mb-10 relative">
                    {/* Connecting line to the dot above (only if not the first item) */}
                    {index > 0 && (
                      <div 
                        className={cn(
                          "absolute w-[1px] h-10 left-[-15px] top-[-10px]",
                          isActive || isAboveActive 
                            ? "bg-gradient-to-t from-[#0066FF] to-transparent" 
                            : "bg-[#222]"
                        )}
                        style={{
                          opacity: isActive || isAboveActive ? "1" : "0.5"
                        }}
                      >
                        {/* Animated glow for active connection */}
                        {(isActive || isAboveActive) && (
                          <div 
                            className="absolute inset-0 w-full h-full"
                            style={{
                              boxShadow: "0 0 4px 1px rgba(0, 102, 255, 0.3)",
                              animation: "pulseGlow 2s infinite"
                            }}
                          ></div>
                        )}
                      </div>
                    )}
                    
                    {/* Connecting line to the dot below (only if not the last item) */}
                    {index < services.length - 1 && (
                      <div 
                        className={cn(
                          "absolute w-[1px] h-10 left-[-15px] top-[15px]",
                          isActive || isBelowActive 
                            ? "bg-gradient-to-b from-[#0066FF] to-transparent" 
                            : "bg-[#222]"
                        )}
                        style={{
                          opacity: isActive || isBelowActive ? "1" : "0.5"
                        }}
                      >
                        {/* Animated glow for active connection */}
                        {(isActive || isBelowActive) && (
                          <div 
                            className="absolute inset-0 w-full h-full"
                            style={{
                              boxShadow: "0 0 4px 1px rgba(0, 102, 255, 0.3)",
                              animation: "pulseGlow 2s infinite"
                            }}
                          ></div>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      {/* Dot indicator */}
                      <div 
                        className="relative"
                        style={{
                          marginLeft: "-23px"
                        }}
                      >
                        {/* The actual dot */}
                        <div 
                          className={cn(
                            "w-[15px] h-[15px] rounded-full transition-all duration-500",
                            isActive 
                              ? "bg-[#0066FF]" 
                              : "border border-[#333] bg-transparent"
                          )}
                        ></div>
                        
                        {/* Glow effect for active dot */}
                        {isActive && (
                          <div 
                            className="absolute w-[25px] h-[25px] rounded-full top-[-5px] left-[-5px] z-[-1]"
                            style={{
                              background: "radial-gradient(circle, rgba(0,102,255,0.4) 0%, rgba(0,102,255,0) 70%)",
                              boxShadow: "0 0 8px 2px rgba(0, 102, 255, 0.3)",
                              animation: "pulseDot 2s infinite"
                            }}
                          ></div>
                        )}

                        {/* Small blue spark that appears on hover */}
                        <div 
                          className="absolute w-[3px] h-[3px] bg-[#0099FF] rounded-full 
                                    blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300"
                          style={{
                            top: "6px",
                            left: "6px",
                            boxShadow: "0 0 4px 1px rgba(0, 120, 255, 0.6)",
                            animation: "spark 1.5s infinite"
                          }}
                        ></div>
                      </div>
                      
                      {/* Service name */}
                      <button
                        className={cn(
                          "text-left transition-colors duration-300 ml-4",
                          isActive ? "text-[#0066FF]" : "text-[#777] hover:text-white"
                        )}
                        onClick={() => setActiveService(service.id)}
                      >
                        {service.name}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          
          {/* Right side - Service Content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {/* Title with icon */}
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">{activeContent.title}</h2>
                <div className="hidden md:block">
                  {activeContent.icon}
                </div>
              </div>
              
              {/* Blue underline */}
              <div className="w-24 h-0.5 bg-[#0066FF] mb-8"></div>
              
              {/* Description */}
              <p className="text-[#999] mb-12 leading-relaxed">
                {activeContent.description}
              </p>
              
              {/* Feature grid - enhanced with premium styling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {activeContent.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-[#111] p-5 rounded border border-[#222] hover:border-[#333] transition-all duration-300 relative group"
                    style={{
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    {/* Blue accent corner */}
                    <div className="absolute top-0 left-0 w-[3px] h-[30px] bg-[#0066FF] rounded-tl"></div>
                    <div className="absolute top-0 left-0 w-[30px] h-[3px] bg-[#0066FF] rounded-tl"></div>
                    
                    {/* Subtle glow on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded"
                      style={{
                        background: "radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.3) 0%, transparent 70%)"
                      }}
                    ></div>
                    
                    <p className="text-white text-lg pl-2">{feature}</p>
                  </div>
                ))}
              </div>
              
              {/* Premium Know more button */}
              <button 
                className="flex items-center py-2.5 px-5 mt-6 rounded-md relative overflow-hidden group border border-[#0066FF] bg-transparent"
                style={{
                  boxShadow: "0 0 15px rgba(0, 102, 255, 0.15)"
                }}
              >
                {/* Background glow effect that appears on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-300"
                  style={{
                    background: "linear-gradient(45deg, rgba(0, 102, 255, 0.5) 0%, rgba(0, 102, 255, 0.1) 100%)"
                  }}
                ></div>
                
                {/* Button text with icon */}
                <span className="text-[#0066FF] font-medium mr-2 z-10 group-hover:text-white transition-colors duration-300">
                  Know more
                </span>
                <ArrowRight className="h-4 w-4 text-[#0066FF] group-hover:text-white transition-colors duration-300 z-10 group-hover:translate-x-1 transition-transform" />
                
                {/* Bottom line animation */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0066FF] group-hover:w-full transition-all duration-300"></div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}