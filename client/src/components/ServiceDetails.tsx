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
        <path d="M30 10L30 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 10L22 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 10L38 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 25C15 22.7909 16.7909 21 19 21H41C43.2091 21 45 22.7909 45 25V45C45 47.2091 43.2091 49 41 49H19C16.7909 49 15 47.2091 15 45V25Z" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    description: "We put in place a strategic plan and create a roadmap for your business and properly research the market and the segment in which you plan to grow your business in. Strategic planning is one of the key services provided by Troibits Infotech. Our customers partner with us to plan critical steps for their startup business. Our continuous analysis of the market trends and dynamics keeps us alert to changes and developments in different market sectors.",
    features: ["Strategy Planning", "Pitch Deck", "B2B, B2C Marketing", "ROI Management"]
  },
  "product-design": {
    title: "Product Design",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30Z" stroke="white" strokeWidth="1.5"/>
        <path d="M30 19V30H41" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Our design team creates innovative and user-centric product designs that captivate users and drive engagement. We believe in designing products that not only look great but also offer exceptional usability and functionality. Our design process involves deep research into user needs, behavior patterns, and industry standards to create solutions that truly stand out.",
    features: ["UI/UX Design", "Wireframing", "Prototyping", "User Testing"]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="10" width="20" height="40" rx="2" stroke="white" strokeWidth="1.5"/>
        <line x1="20" y1="16" x2="40" y2="16" stroke="white" strokeWidth="1.5"/>
        <line x1="20" y1="44" x2="40" y2="44" stroke="white" strokeWidth="1.5"/>
        <circle cx="30" cy="48" r="1" fill="white"/>
      </svg>
    ),
    description: "Our mobile app development team creates innovative applications for iOS and Android platforms that deliver exceptional user experiences. We utilize the latest technologies and development practices to build high-performance, scalable, and feature-rich mobile applications that meet the unique needs of your business and users.",
    features: ["Native iOS Development", "Native Android Development", "Hybrid App Development", "App Store Optimization"]
  },
  "web-development": {
    title: "Web Development",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="40" height="30" rx="2" stroke="white" strokeWidth="1.5"/>
        <line x1="10" y1="23" x2="50" y2="23" stroke="white" strokeWidth="1.5"/>
        <circle cx="15" cy="19" r="1" fill="white"/>
        <circle cx="19" cy="19" r="1" fill="white"/>
        <circle cx="23" cy="19" r="1" fill="white"/>
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
          {/* Left side - Service Navigation */}
          <div className="lg:w-1/3">
            <div className="relative">
              {services.map((service, index) => (
                <div key={service.id} className="flex items-center mb-8 relative">
                  {/* Vertical line connecting dots */}
                  {index < services.length - 1 && (
                    <div className="absolute h-8 w-px bg-[#333] left-2 top-4"></div>
                  )}
                  
                  {/* Dot indicator */}
                  <div 
                    className={cn(
                      "w-4 h-4 rounded-full border border-[#333] z-10 flex-shrink-0",
                      activeService === service.id ? "bg-[#0066FF] border-[#0066FF]" : "bg-transparent"
                    )}
                  ></div>
                  
                  {/* Service name button */}
                  <button
                    className={cn(
                      "ml-4 text-left transition-colors duration-300",
                      activeService === service.id ? "text-[#0066FF]" : "text-[#777] hover:text-white"
                    )}
                    onClick={() => setActiveService(service.id)}
                  >
                    {service.name}
                  </button>
                </div>
              ))}
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
              
              {/* Feature grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {activeContent.features.map((feature, index) => (
                  <div key={index} className="bg-[#111] p-4 rounded">
                    <p className="text-white">{feature}</p>
                  </div>
                ))}
              </div>
              
              {/* Know more button */}
              <button className="text-[#0066FF] flex items-center hover:underline mt-4">
                Know more
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}