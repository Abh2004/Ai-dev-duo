import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  SiReact, SiAngular, SiVuedotjs, SiNextdotjs, SiDjango, 
  SiTypescript, SiTailwindcss, SiFastapi, SiFlask, SiPython, 
  SiMongodb, SiNodedotjs, SiExpress, SiGraphql, SiPrisma,
  SiPostgresql, SiMysql, SiElasticsearch, SiRedis, SiSupabase,
  SiFirebase, SiDocker, SiKubernetes, SiAmazon, SiGooglecloud,
  SiDigitalocean, SiVercel, SiNetlify, SiNginx, SiCloudflare,
  SiGithubactions, SiJenkins, SiTerraform, SiAnsible, SiVite,
  SiLaravel, SiDotnet, SiApachekafka, SiRabbitmq, 
  SiRust, SiSvelte, SiFlutter, SiKotlin, SiSwift, SiWebrtc, SiApache,
  SiPhp, SiSpring, SiNestjs, SiAdonisjs, SiJupyter, SiTensorflow,
  SiPandas, SiScikitlearn, SiOpenai, SiCss3, SiSass, SiJest, SiCypress,
  SiRedux, SiWebpack, SiHasura, SiNuxtdotjs,
  SiApple, SiAndroid, SiIonic, SiStripe, SiAuth0, 
  SiSqlite, SiAzure, SiJava, SiMariadb, SiJavascript
} from "react-icons/si";

import { 
  FaReact, FaAws, FaGitAlt, FaJava as FaJavaIcon, FaGithub, FaJs, 
  FaDatabase, FaNodeJs, FaBrain, FaCloudUploadAlt,
  FaTools, FaNetworkWired, FaServer, FaMobile
} from "react-icons/fa";

import { GrMysql } from "react-icons/gr";
import { TbBrandThreejs, TbApi, TbBrandPython } from "react-icons/tb";

type TechCategory = "web" | "mobile" | "nextgen";

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

// Define tech stacks for each category with enhanced modern tech
const techStacks: Record<TechCategory, TechItem[]> = {
  web: [
    { icon: <SiReact className="text-[#61DAFB]" size={42} />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white" size={42} />, name: "Next.js" },
    { icon: <SiVuejs className="text-[#4FC08D]" size={42} />, name: "Vue.js" },
    { icon: <SiNuxtdotjs className="text-[#00DC82]" size={42} />, name: "Nuxt.js" },
    { icon: <SiAngular className="text-[#DD0031]" size={42} />, name: "Angular" },
    { icon: <SiSvelte className="text-[#FF3E00]" size={42} />, name: "Svelte" },
    { icon: <SiRedux className="text-[#764ABC]" size={42} />, name: "Redux" },
    { icon: <SiTypescript className="text-[#3178C6]" size={42} />, name: "TypeScript" },
    { icon: <SiJavascript className="text-[#F7DF1E]" size={42} />, name: "JavaScript" },
    { icon: <SiNodedotjs className="text-[#339933]" size={42} />, name: "Node.js" },
    { icon: <SiExpress className="text-white" size={42} />, name: "Express.js" },
    { icon: <SiNestjs className="text-[#E0234E]" size={42} />, name: "NestJS" },
    { icon: <SiAdonisjs className="text-[#5A45FF]" size={42} />, name: "AdonisJS" },
    { icon: <SiMongodb className="text-[#47A248]" size={42} />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-[#336791]" size={42} />, name: "PostgreSQL" },
    { icon: <SiHasura className="text-[#1EB4D4]" size={42} />, name: "Hasura" },
    { icon: <GrMysql className="text-[#4479A1]" size={42} />, name: "MySQL" },
    { icon: <SiMariadb className="text-[#003545]" size={42} />, name: "MariaDB" },
    { icon: <SiDjango className="text-[#092E20]" size={42} />, name: "Django" },
    { icon: <SiPython className="text-[#3776AB]" size={42} />, name: "Python" },
    { icon: <SiFastapi className="text-[#009688]" size={42} />, name: "FastAPI" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" size={42} />, name: "Tailwind CSS" },
    { icon: <SiCss3 className="text-[#1572B6]" size={42} />, name: "CSS3" },
    { icon: <SiSass className="text-[#CC6699]" size={42} />, name: "Sass" },
    { icon: <SiLaravel className="text-[#FF2D20]" size={42} />, name: "Laravel" },
    { icon: <SiPhp className="text-[#777BB4]" size={42} />, name: "PHP" },
    { icon: <SiRails className="text-[#CC0000]" size={42} />, name: "Ruby on Rails" },
    { icon: <SiGraphql className="text-[#E10098]" size={42} />, name: "GraphQL" },
    { icon: <SiPrisma className="text-white" size={42} />, name: "Prisma" },
    { icon: <TbBrandThreejs className="text-white" size={42} />, name: "Three.js" },
    { icon: <SiVite className="text-[#646CFF]" size={42} />, name: "Vite" },
    { icon: <SiWebpack className="text-[#8DD6F9]" size={42} />, name: "Webpack" },
    { icon: <SiJest className="text-[#C21325]" size={42} />, name: "Jest" },
    { icon: <SiCypress className="text-[#17202C]" size={42} />, name: "Cypress" },
    { icon: <SiDotnet className="text-[#512BD4]" size={42} />, name: ".NET" },
    { icon: <SiStripe className="text-[#008CDD]" size={42} />, name: "Stripe" },
    { icon: <SiJwt className="text-[#000000]" size={42} />, name: "JWT" },
    { icon: <SiWebrtc className="text-[#333333]" size={42} />, name: "WebRTC" },
    { icon: <SiElasticsearch className="text-[#005571]" size={42} />, name: "Elasticsearch" },
    { icon: <TbApi className="text-[#00ACC1]" size={42} />, name: "RESTful APIs" }
  ],
  mobile: [
    { icon: <FaReact className="text-[#61DAFB]" size={42} />, name: "React Native" },
    { icon: <SiFlutter className="text-[#02569B]" size={42} />, name: "Flutter" },
    { icon: <SiIonic className="text-[#3880FF]" size={42} />, name: "Ionic" },
    { icon: <SiKotlin className="text-[#7F52FF]" size={42} />, name: "Kotlin" },
    { icon: <SiSwift className="text-[#F05138]" size={42} />, name: "Swift" },
    { icon: <SiApple className="text-[#000000]" size={42} />, name: "iOS Development" },
    { icon: <SiAndroid className="text-[#3DDC84]" size={42} />, name: "Android Development" },
    { icon: <SiTypescript className="text-[#3178C6]" size={42} />, name: "TypeScript" },
    { icon: <SiJavascript className="text-[#F7DF1E]" size={42} />, name: "JavaScript" },
    { icon: <SiFirebase className="text-[#FFCA28]" size={42} />, name: "Firebase" },
    { icon: <SiMongodb className="text-[#47A248]" size={42} />, name: "MongoDB" },
    { icon: <SiSqlite className="text-[#003B57]" size={42} />, name: "SQLite" },
    { icon: <SiGraphql className="text-[#E10098]" size={42} />, name: "GraphQL" },
    { icon: <SiRedis className="text-[#DC382D]" size={42} />, name: "Redis" },
    { icon: <SiSupabase className="text-[#3ECF8E]" size={42} />, name: "Supabase" },
    { icon: <SiExpress className="text-white" size={42} />, name: "Express.js" },
    { icon: <SiNodedotjs className="text-[#339933]" size={42} />, name: "Node.js" },
    { icon: <SiJava className="text-[#007396]" size={42} />, name: "Java" },
    { icon: <SiXamarin className="text-[#3498DB]" size={42} />, name: "Xamarin" },
    { icon: <FaMobile className="text-[#0088CC]" size={42} />, name: "Mobile UX/UI" },
    { icon: <SiStripe className="text-[#008CDD]" size={42} />, name: "Stripe" },
    { icon: <SiAuthy className="text-[#EC1C24]" size={42} />, name: "Auth Systems" },
    { icon: <FaGitAlt className="text-[#F05032]" size={42} />, name: "Git" },
    { icon: <FaGithub className="text-white" size={42} />, name: "GitHub" }
  ],
  nextgen: [
    { icon: <SiDocker className="text-[#2496ED]" size={42} />, name: "Docker" },
    { icon: <SiKubernetes className="text-[#326CE5]" size={42} />, name: "Kubernetes" },
    { icon: <FaAws className="text-[#FF9900]" size={42} />, name: "AWS" },
    { icon: <SiGooglecloud className="text-[#4285F4]" size={42} />, name: "Google Cloud" },
    { icon: <SiMicrosoft className="text-[#5E5E5E]" size={42} />, name: "Microsoft Azure" },
    { icon: <SiDigitalocean className="text-[#0080FF]" size={42} />, name: "DigitalOcean" },
    { icon: <SiVercel className="text-white" size={42} />, name: "Vercel" },
    { icon: <SiNetlify className="text-[#00C7B7]" size={42} />, name: "Netlify" },
    { icon: <SiGithubactions className="text-[#2088FF]" size={42} />, name: "GitHub Actions" },
    { icon: <SiJenkins className="text-[#D24939]" size={42} />, name: "Jenkins" },
    { icon: <SiAzuredevops className="text-[#0078D7]" size={42} />, name: "Azure DevOps" },
    { icon: <SiTerraform className="text-[#7B42BC]" size={42} />, name: "Terraform" },
    { icon: <SiCloudflare className="text-[#F38020]" size={42} />, name: "Cloudflare" },
    { icon: <SiApache className="text-[#D22128]" size={42} />, name: "Apache" },
    { icon: <SiProxy className="text-[#00AFC8]" size={42} />, name: "Nginx/Proxy" },
    { icon: <FaCloudUploadAlt className="text-[#3498DB]" size={42} />, name: "Cloud Storage" },
    { icon: <SiApachekafka className="text-[#000000]" size={42} />, name: "Kafka" },
    { icon: <SiRabbitmq className="text-[#FF6600]" size={42} />, name: "RabbitMQ" },
    { icon: <SiJupyter className="text-[#F37626]" size={42} />, name: "Jupyter" },
    { icon: <SiTensorflow className="text-[#FF6F00]" size={42} />, name: "TensorFlow" },
    { icon: <SiPandas className="text-[#150458]" size={42} />, name: "Pandas" },
    { icon: <SiScikitlearn className="text-[#F7931E]" size={42} />, name: "Scikit-learn" },
    { icon: <SiOpenai className="text-white" size={42} />, name: "OpenAI" },
    { icon: <FaBrain className="text-[#9C27B0]" size={42} />, name: "Machine Learning" },
    { icon: <TbBrandPython className="text-[#3776AB]" size={42} />, name: "Python ML/AI" },
    { icon: <SiRust className="text-[#000000]" size={42} />, name: "Rust" },
    { icon: <FaServer className="text-[#6C757D]" size={42} />, name: "Server Management" },
    { icon: <FaNetworkWired className="text-[#0078D7]" size={42} />, name: "Network Architecture" },
    { icon: <FaTools className="text-[#FFC107]" size={42} />, name: "DevOps Tools" }
  ]
};

export default function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("web");
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  
  // Tabs for the tech categories
  const categories: { id: TechCategory; label: string }[] = [
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "nextgen", label: "Next Gen Tech" }
  ];

  // Generate a unique animation delay for each particle
  const getRandomDelay = () => Math.random() * 5;
  
  // Generate unique particles for the background
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: getRandomDelay()
  }));

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated floating particles in background */}
      <div className="absolute inset-0 opacity-10">
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
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Futuristic gradient blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-[20%] w-40 h-40 rounded-full bg-[#0066FF] filter blur-[80px]"></div>
        <div className="absolute bottom-20 right-[10%] w-60 h-60 rounded-full bg-[#8800FF] filter blur-[100px]"></div>
        <div className="absolute bottom-40 left-[30%] w-20 h-20 rounded-full bg-[#00CCFF] filter blur-[50px]"></div>
      </div>
      
      {/* Grid lines in background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Modern heading with digital accent elements */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Our Fully Loaded Technology Stack
              
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
            <div className="absolute -left-6 -bottom-4 text-[10px] text-[#0066FF22] font-mono">
              01101<br/>10010<br/>01010
            </div>
          </div>
          
          <p className="text-[#888] max-w-2xl mx-auto mt-6 text-lg">
            We leverage cutting-edge technologies to build powerful, scalable, and innovative solutions
          </p>
        </motion.div>
        
        {/* Category Tabs - Modern high-tech design */}
        <div className="flex justify-center mb-16">
          <div 
            className="inline-flex bg-[#0A0A0A] rounded-xl p-1.5 shadow-xl relative overflow-hidden" 
            style={{ 
              boxShadow: '0 8px 30px rgba(0, 20, 50, 0.25)',
              border: '1px solid rgba(30, 30, 30, 0.6)',
            }}
          >
            {/* Animated background glow effect */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
                animation: 'pulse 4s infinite'
              }}
            ></div>
            
            {/* Tech pattern in the background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-2 bottom-2 text-[8px] text-white font-mono">
                010011<br/>100101
              </div>
              <div className="absolute left-2 top-2 text-[8px] text-white font-mono">
                110010<br/>010110
              </div>
            </div>
            
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-8 py-3 text-sm font-medium rounded-lg transition-all duration-500 relative z-10 overflow-hidden",
                  activeCategory === category.id 
                    ? "text-white" 
                    : "text-[#AAA] hover:text-white"
                )}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  boxShadow: activeCategory === category.id ? '0 0 15px rgba(0, 90, 255, 0.5)' : 'none',
                }}
              >
                {/* Button background effect */}
                {activeCategory === category.id && (
                  <motion.div 
                    layoutId="tabBackground"
                    className="absolute inset-0 bg-gradient-to-br from-[#0055DD] to-[#0033AA] z-[-1]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    {/* Particle effect inside active tab */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${1 + Math.random() * 2}px`,
                          height: `${1 + Math.random() * 2}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: 0.3 + Math.random() * 0.3,
                          animation: `float ${2 + Math.random() * 2}s infinite`
                        }}
                      ></div>
                    ))}
                  </motion.div>
                )}
                
                {/* Category label with subtle animations */}
                <span className="relative inline-block">
                  {category.label}
                  
                  {/* Subtle underline on hover for inactive tabs */}
                  {activeCategory !== category.id && (
                    <motion.div 
                      className="absolute bottom-[-3px] left-0 right-0 h-[1px] bg-[#0066FF] opacity-70"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Tech Icons Grid - Enhanced with hover effects */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-14"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {techStacks[activeCategory].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div 
                className="mb-4 relative p-5 rounded-2xl transition-all duration-300 transform group-hover:scale-110"
                style={{
                  background: hoveredTech === index ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                  boxShadow: hoveredTech === index ? '0 0 20px rgba(0, 102, 255, 0.2)' : 'none',
                  animation: `float ${6 + index % 3}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* The tech icon with subtle glow effect */}
                <motion.div
                  animate={{
                    rotate: hoveredTech === index ? [0, 5, -5, 0] : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    filter: `drop-shadow(0 0 3px rgba(${
                      tech.name.includes("React") ? "97, 218, 251, 0.5" :
                      tech.name.includes("Node") ? "51, 153, 51, 0.5" :
                      tech.name.includes("Mongo") ? "71, 162, 72, 0.5" :
                      tech.name.includes("Python") ? "55, 118, 171, 0.5" :
                      tech.name.includes("Docker") ? "36, 150, 237, 0.5" :
                      tech.name.includes("AWS") ? "255, 153, 0, 0.5" :
                      "255, 255, 255, 0.3"
                    }))`
                  }}
                >
                  {tech.icon}
                </motion.div>
                
                {/* Glowing circle behind icon on hover */}
                {hoveredTech === index && (
                  <>
                    <div 
                      className="absolute inset-0 rounded-2xl z-[-1] opacity-20"
                      style={{
                        background: `radial-gradient(circle, rgba(0, 102, 255, 0.8) 0%, rgba(0, 0, 0, 0) 70%)`,
                      }}
                    ></div>
                    
                    {/* Animated particles around the icon when hovered */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute rounded-full bg-blue-400"
                          style={{
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0.4 + Math.random() * 0.6,
                            filter: 'blur(1px)',
                            animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </>
                )}
                
                {/* Subtle pulsing ring effect - always visible but more intense on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl z-[-1] transition-opacity duration-300"
                  style={{
                    opacity: hoveredTech === index ? 0.15 : 0.05,
                    border: '1px solid rgba(0, 102, 255, 0.3)',
                    animation: 'glowing 3s infinite'
                  }}
                ></div>
              </div>
              
              <div className="relative">
                <p className="text-sm font-medium transition-all duration-300 transform group-hover:text-[#0066FF]"
                   style={{
                     textShadow: hoveredTech === index ? '0 0 8px rgba(0, 102, 255, 0.5)' : 'none'
                   }}
                >
                  {tech.name}
                </p>
                
                {/* Underline animation on hover */}
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0066FF] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredTech === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}