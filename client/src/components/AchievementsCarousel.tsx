import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Star,
  Activity,
  TrendingUp,
  BarChart2,
  CheckCircle,
  Code,
  Clock,
  Users,
  Globe,
  Monitor,
  Server,
  Shield,
  Database,
} from "lucide-react";

// Import from assets/images
import theratechImage from "@/assets/images/theratech.jpg";
import silverheightsImage from "@/assets/images/silverheights.png";
import dewinterImage from "@/assets/images/DewinterMicroscope.png";
import prevacareImage from "@/assets/images/prevacare.png";
import drumImage from "@/assets/images/DRUM-IITKGP.png";
import xenovateImage from "@/assets/images/Xenovate.png";

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

// Real project data with detailed information
const projects: Project[] = [
  {
    id: "xenovate",
    title: "Xenovate",
    subtitle: "Real-time Communication Backend",
    description:
      "Developed a high-performance FastAPI backend solution with advanced Socket.IO implementation, enabling real-time communication and data streaming for multiple client applications. The system handles thousands of concurrent connections with minimal latency, providing seamless real-time updates across platforms.",
    image: xenovateImage,
    platforms: ["Backend", "API", "Microservices"],
    stats: [
      {
        icon: <Server size={18} />,
        value: "10K+",
        label: "Concurrent Users",
        color: "#0066FF",
      },
      {
        icon: <Clock size={18} />,
        value: "<50ms",
        label: "Latency",
        color: "#00CCBB",
      },
      {
        icon: <Shield size={18} />,
        value: "99.99%",
        label: "Uptime",
        color: "#FF6B6B",
      },
    ],
    tags: [
      "FastAPI",
      "Socket.IO",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "WebSockets",
    ],
  },
  {
    id: "prevacare",
    title: "PrevaCare",
    subtitle: "Healthcare Integration Platform",
    description:
      "Built a comprehensive healthcare solution developed by doctors for companies, schools, and institutes. The platform seamlessly integrates labs, doctors, ABDM, and government health IDs to provide end-to-end healthcare management. Features include appointment scheduling, medical records management, lab test integration, and compliance with healthcare standards.",
    image: prevacareImage,
    platforms: ["Web", "Mobile", "API"],
    stats: [
      {
        icon: <Users size={18} />,
        value: "30+",
        label: "Institutions",
        color: "#0066FF",
      },
      {
        icon: <Database size={18} />,
        value: "100%",
        label: "ABDM Compliant",
        color: "#00CCBB",
      },
      {
        icon: <Shield size={18} />,
        value: "End-to-End",
        label: "Encryption",
        color: "#FF6B6B",
      },
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT", "FHIR"],
  },
  {
    id: "silverheights",
    title: "SilverHeights",
    subtitle: "Real Estate Platform",
    description:
      "Designed and developed a feature-rich real estate website offering property listings, virtual tours, mortgage calculators, and agent connections for residential and commercial properties. The intuitive interface allows users to filter properties based on various criteria, view detailed information, and schedule viewings directly through the platform.",
    image: silverheightsImage,
    platforms: ["Web", "Responsive", "Mobile"],
    stats: [
      {
        icon: <Globe size={18} />,
        value: "200+",
        label: "Properties",
        color: "#0066FF",
      },
      {
        icon: <Users size={18} />,
        value: "15K+",
        label: "Monthly Users",
        color: "#00CCBB",
      },
      {
        icon: <TrendingUp size={18} />,
        value: "28%",
        label: "Conversion Rate",
        color: "#FF6B6B",
      },
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Firebase", "Google Maps API"],
  },
  {
    id: "theratech",
    title: "TheraTech",
    subtitle: "AI-Powered Mental Health Platform",
    description:
      "Created an advanced AI solution for mental health therapy featuring a comprehensive doctor portal for monitoring patient progress and providing personalized treatment plans. The platform leverages natural language processing to analyze patient communications, identify patterns, and recommend therapeutic approaches, significantly improving treatment outcomes.",
    image: theratechImage,
    platforms: ["Web", "Mobile", "AI"],
    stats: [
      {
        icon: <Users size={18} />,
        value: "5K+",
        label: "Patients",
        color: "#0066FF",
      },
      {
        icon: <Award size={18} />,
        value: "93%",
        label: "Satisfaction",
        color: "#00CCBB",
      },
      {
        icon: <Code size={18} />,
        value: "AI-Driven",
        label: "Therapy",
        color: "#FF6B6B",
      },
    ],
    tags: ["React", "Node.js", "TensorFlow", "MongoDB", "Express", "NLP"],
  },
  {
    id: "drum-iitkgp",
    title: "DRUM-IITKGP",
    subtitle: "AI-Based Routing Solution",
    description:
      "Developed an innovative AI-powered routing system for IIT Kharagpur to minimize AQI exposure across different transportation methods. The solution analyzes real-time air quality data, traffic patterns, and user preferences to suggest the healthiest routes for commuters, reducing exposure to harmful pollutants while optimizing travel time.",
    image: drumImage,
    platforms: ["Mobile", "Web", "API"],
    stats: [
      {
        icon: <Users size={18} />,
        value: "10K+",
        label: "IIT Students",
        color: "#0066FF",
      },
      {
        icon: <Activity size={18} />,
        value: "30%",
        label: "AQI Reduction",
        color: "#00CCBB",
      },
      {
        icon: <Monitor size={18} />,
        value: "Real-time",
        label: "Updates",
        color: "#FF6B6B",
      },
    ],
    tags: [
      "Python",
      "Flask",
      "React Native",
      "TensorFlow",
      "Google Maps API",
      "AQI APIs",
    ],
  },
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
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
    duration: 3 + Math.random() * 4,
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
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.2 + Math.random() * 0.3,
              filter: "blur(1px)",
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
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
              Our Featured Projects
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
              Explore our successful projects built by IIT graduates for
              transformative business solutions
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
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-[#999] group-hover:text-[#0066FF] transition-colors" />
          </button>

          <button
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-[#0A0A0A]/80 p-3 md:p-4 rounded-full hover:bg-[#0066FF]/20 transition-all duration-300 border border-[#333] group"
            onClick={nextSlide}
            aria-label="Next project"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-[#999] group-hover:text-[#0066FF] transition-colors" />
          </button>

          {/* Main content card with glass morphism effect */}
          <div
            className="relative rounded-2xl overflow-hidden bg-[#0A0A0A]/60 backdrop-blur-sm border border-[#222] p-6 md:p-10"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
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
                      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
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
                          transition={{
                            duration: 0.3,
                            delay: 0.1 + index * 0.1,
                          }}
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
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.7, delay: 0.3 }}
                        ></motion.div>
                      </div>
                    </h3>

                    {/* Subtitle */}
                    <h4 className="text-[#0066FF] text-lg md:text-xl mb-4 font-medium">
                      {currentProject.subtitle}
                    </h4>

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
                            <p
                              className="text-xl font-bold"
                              style={{ color: stat.color }}
                            >
                              {stat.value}
                            </p>
                            <p className="text-xs text-[#999] mt-1 group-hover:text-white transition-colors">
                              {stat.label}
                            </p>
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
                  {/* <motion.button
                    className="mt-6 self-start px-5 py-2.5 bg-gradient-to-r from-[#0066FF] to-[#0044BB] text-white rounded-lg font-medium flex items-center group transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    View Case Study
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button> */}
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
                    ${
                      index === currentIndex
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
