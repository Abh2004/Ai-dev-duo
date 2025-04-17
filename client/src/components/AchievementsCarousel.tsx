import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Award, Star, Activity, TrendingUp, 
  BarChart2, CheckCircle, Code, Clock, Users, Globe, Monitor
} from "lucide-react";
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
  stats?: {
    icon: React.ReactNode;
    value: string;
    label: string;
    color: string;
  }[];
  tags?: string[];
}

// Enhanced project data with additional statistics and tags
const projects: Project[] = [
  {
    id: "glaucus-logistics",
    title: "Glaucus Logistics",
    subtitle: "Warehouse Management System",
    description: "We made a perfect design and UI in Angular Js for Glaucus Logistics. They have been founded by a team with exhaustive experience of supply chain solutions, advisory, warehouse design and technology product development. They are the preferred supply chain management partner for small and mid-sized companies focusing on trading, retail & wholesale distribution allowing businesses to effectively compete with their larger competitors on efficiency and effectiveness.",
    image: project1,
    platforms: ["Mac", "Windows", "Web"],
    stats: [
      { icon: <TrendingUp size={18} />, value: "85%", label: "Efficiency Increase", color: "#0066FF" },
      { icon: <Clock size={18} />, value: "60%", label: "Time Saved", color: "#00CCBB" },
      { icon: <BarChart2 size={18} />, value: "40%", label: "Cost Reduction", color: "#FF6B6B" }
    ],
    tags: ["Angular", "TypeScript", "Node.js", "MongoDB", "Docker"]
  },
  {
    id: "healthmate",
    title: "HealthMate",
    subtitle: "Telehealth Platform",
    description: "Developed a comprehensive telehealth platform using React and Node.js that connects patients with healthcare providers for virtual consultations. The platform includes features such as appointment scheduling, secure video calls, electronic health records, and prescription management. It has significantly improved healthcare access for patients in remote areas and streamlined operations for medical practices.",
    image: project2,
    platforms: ["Web", "iOS", "Android"],
    stats: [
      { icon: <Users size={18} />, value: "10K+", label: "Active Users", color: "#0066FF" },
      { icon: <Globe size={18} />, value: "95%", label: "Availability", color: "#00CCBB" },
      { icon: <CheckCircle size={18} />, value: "99.8%", label: "Uptime", color: "#FF6B6B" }
    ],
    tags: ["React.js", "Express", "WebRTC", "AWS", "MongoDB"]
  },
  {
    id: "finflow",
    title: "FinFlow",
    subtitle: "Banking Solution",
    description: "Created a robust banking application with Vue.js and Spring Boot that provides users with secure access to financial services. The solution includes features for account management, fund transfers, bill payments, expense tracking, and financial insights. Enhanced security measures like biometric authentication and real-time fraud detection ensure safe transactions for all users.",
    image: project3,
    platforms: ["Web", "iOS", "Android"],
    stats: [
      { icon: <Award size={18} />, value: "5M+", label: "Transactions", color: "#0066FF" },
      { icon: <Star size={18} />, value: "4.9", label: "App Rating", color: "#00CCBB" },
      { icon: <Activity size={18} />, value: "99.9%", label: "Uptime", color: "#FF6B6B" }
    ],
    tags: ["Vue.js", "Spring Boot", "PostgreSQL", "Redis", "Kubernetes"]
  },
  {
    id: "retailinsight",
    title: "RetailInsight",
    subtitle: "Inventory Management System",
    description: "Built a comprehensive inventory management system for retail businesses using Angular and .NET Core. The platform helps retailers track inventory levels, automate reordering, analyze sales patterns, and improve supply chain efficiency. Integration with POS systems and real-time data synchronization has helped clients reduce excess inventory costs by 25% and increase sales through improved stock availability.",
    image: project4,
    platforms: ["Web", "Windows", "Mac"],
    stats: [
      { icon: <Code size={18} />, value: "25%", label: "Inventory Reduction", color: "#0066FF" },
      { icon: <Monitor size={18} />, value: "30%", label: "Revenue Increase", color: "#00CCBB" },
      { icon: <TrendingUp size={18} />, value: "50+", label: "Active Stores", color: "#FF6B6B" }
    ],
    tags: ["Angular", ".NET Core", "SQL Server", "Azure", "Power BI"]
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

  // Random particles for the background
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4
  }));

  return (
    <section className="py-28 bg-black relative overflow-hidden">
      {/* Background particles and gradient */}
      <div className="absolute inset-0">
        {/* Glowing gradient background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-[30%] w-64 h-64 rounded-full bg-blue-500 filter blur-[120px]"></div>
          <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-indigo-600 filter blur-[150px]"></div>
        </div>

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

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with modern styling */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 relative">
              Achievements and Challenges
              
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 w-5 h-5 border-t-2 border-l-2 border-[#0066FF] opacity-60"></div>
              <div className="absolute -right-6 -bottom-3 w-5 h-5 border-b-2 border-r-2 border-[#0066FF] opacity-60"></div>
              
              {/* Underline effect */}
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-[3px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-pulse opacity-70"></div>
              </div>
            </h2>
            
            <p className="text-[#999] max-w-2xl mx-auto mt-6 text-lg">
              Explore our successful projects and the innovative solutions we've delivered
            </p>
          </div>
        </motion.div>
        
        {/* Carousel container with glass morphism effect */}
        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Arrows - Redesigned for better visibility */}
          <button 
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-[#0A0A0A]/80 p-3 md:p-4 rounded-full hover:bg-[#0066FF]/20 transition-all duration-300 border border-[#333] group"
            onClick={prevSlide}
            aria-label="Previous project"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-[#999] group-hover:text-[#0066FF] transition-colors" />
          </button>
          
          <button 
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-[#0A0A0A]/80 p-3 md:p-4 rounded-full hover:bg-[#0066FF]/20 transition-all duration-300 border border-[#333] group"
            onClick={nextSlide}
            aria-label="Next project"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-[#999] group-hover:text-[#0066FF] transition-colors" />
          </button>
          
          {/* Main content card with glass morphism effect */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0A]/60 backdrop-blur-sm border border-[#222] p-6 md:p-10"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <AnimatePresence mode="wait">
              {/* Project Content with Grid Layout */}
              <motion.div
                key={`project-${currentProject.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Left side - Image with enhanced presentation */}
                <div className="relative overflow-hidden rounded-xl group">
                  {/* Main image with hover effect */}
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#111] to-[#0A0A0A] p-4 border border-[#222]"
                    style={{
                      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-60 z-10"></div>
                    
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className="rounded-lg w-full object-contain relative z-0 h-[280px] md:h-[350px]"
                    />
                    
                    {/* Platform badges */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                      {currentProject.platforms.map((platform, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-sm text-[#0066FF] text-xs rounded-full border border-[#333]"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech stack tags */}
                    <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                      {currentProject.tags?.map((tag, index) => (
                        <motion.span 
                          key={index}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                          className="px-2 py-0.5 bg-[#0B0B0B]/70 backdrop-blur-sm text-[#AAA] text-[10px] rounded-md border border-[#333]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side - Content with enhanced presentation */}
                <div className="flex flex-col space-y-6">
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Title with animated underline */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative inline-block">
                      {currentProject.title}
                      <div className="absolute -bottom-1 left-0 right-0 h-[2px]">
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-transparent"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.7, delay: 0.3 }}
                        ></motion.div>
                      </div>
                    </h3>
                    
                    {/* Subtitle */}
                    <h4 className="text-[#0066FF] text-lg md:text-xl mb-4 font-medium">{currentProject.subtitle}</h4>
                    
                    {/* Stats/KPIs Section */}
                    {currentProject.stats && (
                      <motion.div 
                        className="grid grid-cols-3 gap-4 my-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {currentProject.stats.map((stat, index) => (
                          <div 
                            key={index}
                            className="bg-[#111]/70 backdrop-blur-sm rounded-lg border border-[#222] p-3 text-center transition-all duration-300 hover:border-[#444] group"
                          >
                            <div className="flex justify-center mb-2">
                              <div 
                                className="p-2 rounded-full" 
                                style={{ color: stat.color }}
                              >
                                {stat.icon}
                              </div>
                            </div>
                            <p className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                            <p className="text-xs text-[#999] mt-1 group-hover:text-white transition-colors">{stat.label}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                    
                    {/* Description */}
                    <motion.p 
                      className="text-[#BBB] leading-relaxed text-sm md:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {currentProject.description}
                    </motion.p>
                  </motion.div>

                  {/* Call to action button */}
                  <motion.button 
                    className="mt-6 self-start px-5 py-2.5 bg-gradient-to-r from-[#0066FF] to-[#0044BB] text-white rounded-lg font-medium flex items-center group transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    View Case Study 
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Enhanced Dots Navigation */}
          <div className="flex justify-center mt-10 space-x-3">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div 
                  className={`
                    h-2.5 rounded-full transition-all duration-500 
                    ${index === currentIndex 
                      ? "w-10 bg-gradient-to-r from-[#0066FF] to-[#00AAFF]" 
                      : "w-2.5 bg-[#333] group-hover:bg-[#555]"
                    }
                  `}
                ></div>
                
                {/* Glow effect for active dot */}
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-[#0066FF] opacity-30 blur-md"></div>
                )}
                
                {/* Project title tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap px-2 py-1 bg-[#111] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {project.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}