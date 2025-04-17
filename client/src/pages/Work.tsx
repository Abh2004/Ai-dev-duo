import ThemeCube from "@/components/ThemeCube";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "wouter";
import { useRef, useState } from "react";
import { ChevronRight, ExternalLink, Clock, Users, Award, Star } from "lucide-react";

// Import local images
import projectCrypto from "@/assets/images/project-crypto.svg";
import projectLogistics from "@/assets/images/project-logistics.svg";
import projectTaxi from "@/assets/images/project-taxi.svg";
import projectStreaming from "@/assets/images/project-streaming.svg";
import projectTravel from "@/assets/images/project-travel.svg";
import projectCryptoPlatform from "@/assets/images/project-crypto-platform.svg";
import projectHospital from "@/assets/images/project-hospital.svg";
import projectWallet from "@/assets/images/project-wallet.svg";
import projectEsports from "@/assets/images/project-esports.svg";

interface ProjectProps {
  title: string;
  subtitle: string;
  description?: string;
  bgColor: string;
  platforms: string[];
  image: string;
  stats?: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
}

const ProjectCard = ({ 
  title, 
  subtitle, 
  description, 
  bgColor, 
  platforms, 
  image,
  stats
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={cardRef}
      className={`${bgColor} relative overflow-hidden rounded-xl h-[400px] shadow-xl transform transition-all duration-500`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
      }}
    >
      {/* Background Image with overlay gradient */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.9 : 0.7
          }}
        ></div>
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
        {/* Top Section - Platforms */}
        <div className="flex flex-wrap gap-2">
          {platforms.map((platform, idx) => (
            <span 
              key={idx} 
              className="text-xs px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white/90 border border-white/10"
            >
              {platform}
            </span>
          ))}
        </div>
        
        {/* Bottom Section - Title and Description */}
        <div>
          {/* Project Title with animated underline */}
          <h3 className="text-2xl font-bold text-white mb-2 relative inline-block">
            {title}
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-white"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : '30%' }}
              transition={{ duration: 0.3 }}
            />
          </h3>
          
          {/* Subtitle */}
          <p className="text-md text-white/90 mb-4">{subtitle}</p>
          
          {/* Description or Stats on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {stats && (
                  <div className="grid grid-cols-3 gap-2 my-3">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/10 rounded p-2 text-center backdrop-blur-sm">
                        <div className="flex justify-center mb-1">
                          {stat.icon}
                        </div>
                        <div className="text-sm font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {description && (
                  <p className="text-sm text-white/80 line-clamp-3 mt-2">{description}</p>
                )}
                
                {/* CTA Button */}
                <motion.div 
                  className="mt-3 inline-flex items-center text-sm text-white font-medium group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  View Project 
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced project data with descriptions and stats
const projects: ProjectProps[] = [
  {
    title: "BITPAY",
    subtitle: "Cryptocurrency App",
    description: "A comprehensive cryptocurrency wallet and payment platform enabling users to securely store, manage, and spend their digital assets.",
    bgColor: "bg-gradient-to-br from-[#0d47a1] to-[#002171]", 
    platforms: ["Android", "iOS", "Web"],
    image: projectCrypto,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "50K+", label: "Active Users" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "4.8", label: "App Rating" },
      { icon: <Clock className="w-4 h-4 text-white" />, value: "6 mo", label: "Dev Time" }
    ]
  },
  {
    title: "GLAUCUS LOGISTICS",
    subtitle: "Warehouse Management System",
    description: "End-to-end warehouse management solution improving inventory tracking, order fulfillment, and supply chain operations for logistics companies.",
    bgColor: "bg-gradient-to-br from-[#0a2351] to-[#05132d]", 
    platforms: ["Web", "Desktop"],
    image: projectLogistics,
    stats: [
      { icon: <Star className="w-4 h-4 text-white" />, value: "35%", label: "Efficiency" },
      { icon: <Clock className="w-4 h-4 text-white" />, value: "8 mo", label: "Dev Time" },
      { icon: <Users className="w-4 h-4 text-white" />, value: "12", label: "Companies" }
    ]
  },
  {
    title: "YOLO",
    subtitle: "Taxi Booking App",
    description: "On-demand transportation platform connecting riders with drivers using real-time location tracking and seamless payment integration.",
    bgColor: "bg-gradient-to-br from-[#2e7d32] to-[#1b5e20]", 
    platforms: ["Android", "iOS"],
    image: projectTaxi,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "100K+", label: "Active Users" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "4.7", label: "App Rating" },
      { icon: <Clock className="w-4 h-4 text-white" />, value: "9 mo", label: "Dev Time" }
    ]
  },
  {
    title: "CAPTAIN THUG",
    subtitle: "Mini Streaming Platform Website",
    description: "Video streaming service with content management, user subscriptions, and analytics for creators to monetize their digital content.",
    bgColor: "bg-gradient-to-br from-[#4a148c] to-[#311b92]", 
    platforms: ["Web"],
    image: projectStreaming,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "25K+", label: "Subscribers" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "10K+", label: "Videos" },
      { icon: <Clock className="w-4 h-4 text-white" />, value: "7 mo", label: "Dev Time" }
    ]
  },
  {
    title: "EXCURSIFY",
    subtitle: "Travel App",
    description: "Comprehensive travel companion app featuring trip planning, booking services, local recommendations, and real-time updates for travelers.",
    bgColor: "bg-gradient-to-br from-[#ad1457] to-[#880e4f]", 
    platforms: ["Android", "iOS", "Web"],
    image: projectTravel,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "75K+", label: "Travelers" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "4.9", label: "App Rating" },
      { icon: <Star className="w-4 h-4 text-white" />, value: "1K+", label: "Destinations" }
    ]
  },
  {
    title: "COINKARTS",
    subtitle: "Cryptocurrency Web Platform",
    description: "Cryptocurrency trading and investment platform with real-time market data, portfolio management, and educational resources for investors.",
    bgColor: "bg-gradient-to-br from-[#e65100] to-[#bf360c]", 
    platforms: ["Web"],
    image: projectCryptoPlatform,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "40K+", label: "Investors" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "$150M+", label: "Volume" },
      { icon: <Clock className="w-4 h-4 text-white" />, value: "10 mo", label: "Dev Time" }
    ]
  },
  {
    title: "AFFORDABLE HOSPITALS",
    subtitle: "Hospital Search Web",
    description: "Healthcare platform connecting patients with affordable medical facilities, appointment scheduling, and transparent pricing information.",
    bgColor: "bg-gradient-to-br from-[#c62828] to-[#b71c1c]", 
    platforms: ["Web"],
    image: projectHospital,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "200K+", label: "Patients" },
      { icon: <Star className="w-4 h-4 text-white" />, value: "500+", label: "Hospitals" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "15%", label: "Savings" }
    ]
  },
  {
    title: "BLUEPAISA",
    subtitle: "Digital QR Wallet Platform",
    description: "Mobile payment solution using QR code technology for secure, contactless transactions and digital money management across multiple currencies.",
    bgColor: "bg-gradient-to-br from-[#0d47a1] to-[#01579b]", 
    platforms: ["Android", "iOS"],
    image: projectWallet,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "150K+", label: "Users" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "2M+", label: "Transactions" },
      { icon: <Clock className="w-4 h-4 text-white" />, value: "11 mo", label: "Dev Time" }
    ]
  },
  {
    title: "GAMERZZ",
    subtitle: "Esports Hub and Content App",
    description: "Gaming community platform for esports enthusiasts featuring tournament organization, live streaming, team management, and content creation tools.",
    bgColor: "bg-gradient-to-br from-[#424242] to-[#212121]", 
    platforms: ["Android", "iOS", "Web", "Desktop"],
    image: projectEsports,
    stats: [
      { icon: <Users className="w-4 h-4 text-white" />, value: "300K+", label: "Gamers" },
      { icon: <Award className="w-4 h-4 text-white" />, value: "5K+", label: "Teams" },
      { icon: <Star className="w-4 h-4 text-white" />, value: "1.2K+", label: "Tournaments" }
    ]
  }
];

export default function WorkPage() {
  // Generate random particles for the background
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10
  }));

  return (
    <main className="pt-24 pb-20 relative bg-black overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
              opacity: 0.1 + Math.random() * 0.15,
              filter: 'blur(1px)',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          ></div>
        ))}

        {/* Gradient background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500 filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600 filter blur-[150px] opacity-10"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Accent cubes */}
        <ThemeCube className="absolute top-40 -left-20" opacity={0.04} />
        <ThemeCube className="absolute top-60 right-10" opacity={0.03} />
        <ThemeCube className="absolute bottom-40 left-1/3" opacity={0.02} />
      </div>
      
      {/* Hero Section with enhanced styling */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="text-white">Our </span>
              <span className="text-[#0066FF]">Portfolio</span>
              <span className="text-white"> of Solutions</span>
              
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 w-5 h-5 border-t-2 border-l-2 border-[#0066FF] opacity-70"></div>
              <div className="absolute -right-6 -bottom-3 w-5 h-5 border-b-2 border-r-2 border-[#0066FF] opacity-70"></div>
              
              {/* Underline effect */}
              <div className="absolute -bottom-3 left-1/4 right-1/4 h-[3px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-pulse opacity-70"></div>
              </div>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-[#BBB] text-lg max-w-3xl mx-auto leading-relaxed mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We take a thoughtful approach to every project, beginning with thorough research 
            and strategic planning before implementing innovative solutions that deliver 
            exceptional value to our clients.
          </motion.p>
          
          {/* Visual accent for heading */}
          <motion.div 
            className="mt-12 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
            <span className="h-1 w-1 rounded-full bg-[#0066FF]"></span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Projects Grid with enhanced styling and animations */}
      <div className="container mx-auto px-4 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Call to Action */}
      <div className="container mx-auto px-4 text-center mt-32 mb-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A1020] to-[#0D1526] p-10 md:p-14 rounded-2xl border border-[#1E2A3B] relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#0066FF] filter blur-[100px]"></div>
          </div>
          
          {/* Grid pattern in background */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Need innovative software solutions to handle your tech needs<br /> and transform your business?
            </motion.h2>
            
            <motion.p
              className="text-[#BBB] mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our expert team is ready to craft custom digital solutions tailored to your specific requirements
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-[#0066FF] to-[#0044BB] text-white rounded-lg font-medium flex items-center mx-auto group"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}