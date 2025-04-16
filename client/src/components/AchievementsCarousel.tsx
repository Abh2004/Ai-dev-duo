import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/images/project1.svg";
import project2 from "@/assets/images/project2.svg";
import project3 from "@/assets/images/project3.svg";
import project4 from "@/assets/images/project4.svg";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  platforms: string[];
}

const projects: Project[] = [
  {
    id: "glaucus-logistics",
    title: "Glaucus Logistics",
    subtitle: "Warehouse Management System",
    description: "We made a perfect design and UI in Angular Js for Glaucus Logistics. They have been founded by a team with exhaustive experience of supply chain solutions, advisory, warehouse design and technology product development. They are the preferred supply chain management partner for small and mid-sized companies focusing on trading, retail & wholesale distribution allowing businesses to effectively compete with their larger competitors on efficiency and effectiveness.",
    image: project1,
    platforms: ["Mac", "Windows", "Web"]
  },
  {
    id: "healthmate",
    title: "HealthMate",
    subtitle: "Telehealth Platform",
    description: "Developed a comprehensive telehealth platform using React and Node.js that connects patients with healthcare providers for virtual consultations. The platform includes features such as appointment scheduling, secure video calls, electronic health records, and prescription management. It has significantly improved healthcare access for patients in remote areas and streamlined operations for medical practices.",
    image: project2,
    platforms: ["Web", "iOS", "Android"]
  },
  {
    id: "finflow",
    title: "FinFlow",
    subtitle: "Banking Solution",
    description: "Created a robust banking application with Vue.js and Spring Boot that provides users with secure access to financial services. The solution includes features for account management, fund transfers, bill payments, expense tracking, and financial insights. Enhanced security measures like biometric authentication and real-time fraud detection ensure safe transactions for all users.",
    image: project3,
    platforms: ["Web", "iOS", "Android"]
  },
  {
    id: "retailinsight",
    title: "RetailInsight",
    subtitle: "Inventory Management System",
    description: "Built a comprehensive inventory management system for retail businesses using Angular and .NET Core. The platform helps retailers track inventory levels, automate reordering, analyze sales patterns, and improve supply chain efficiency. Integration with POS systems and real-time data synchronization has helped clients reduce excess inventory costs by 25% and increase sales through improved stock availability.",
    image: project4,
    platforms: ["Web", "Windows", "Mac"]
  }
];

export default function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentProject = projects[currentIndex];

  // Auto-scroll functionality
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 8000); // Change slide every 8 seconds

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Achievements and Challenges</h2>
        </div>
        
        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-12">
            {/* Left side - Image */}
            <motion.div
              key={`image-${currentProject.id}`}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="rounded-lg max-w-full max-h-[400px] object-contain"
                />
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div
              key={`content-${currentProject.id}`}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
              <h4 className="text-[#0066FF] text-lg mb-4">{currentProject.subtitle}</h4>
              
              <p className="text-[#999] mb-6 leading-relaxed">
                {currentProject.description}
              </p>
              
              <div className="flex space-x-3 mt-auto">
                {currentProject.platforms.map((platform, index) => (
                  <span key={index} className="text-sm text-[#0066FF]">
                    {index > 0 ? " | " : ""}{platform}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#0066FF] w-6" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}