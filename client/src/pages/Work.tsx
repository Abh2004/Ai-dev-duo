import ThemeCube from "@/components/ThemeCube";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface ProjectProps {
  title: string;
  subtitle: string;
  bgColor: string;
  platforms: string[];
  imageUrl?: string;
}

const ProjectCard = ({ title, subtitle, bgColor, platforms, imageUrl }: ProjectProps) => {
  return (
    <motion.div 
      className={`${bgColor} h-80 relative overflow-hidden`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
        <div className="text-sm text-white/70">{platforms.join(" / ")}</div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/80">{subtitle}</p>
        </div>
      </div>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}
    </motion.div>
  );
};

const projects: ProjectProps[] = [
  {
    title: "BITPAY",
    subtitle: "Cryptocurrency App",
    bgColor: "bg-blue-600", 
    platforms: ["Android", "iOS", "Web"],
    imageUrl: "https://source.unsplash.com/random/600x800/?cryptocurrency,app"
  },
  {
    title: "GLAUCUS LOGISTICS",
    subtitle: "Warehouse Management System",
    bgColor: "bg-blue-900", 
    platforms: ["Web", "Desktop"],
    imageUrl: "https://source.unsplash.com/random/600x800/?warehouse,logistics"
  },
  {
    title: "YOLO",
    subtitle: "Taxi Booking App",
    bgColor: "bg-green-600", 
    platforms: ["Android", "iOS"],
    imageUrl: "https://source.unsplash.com/random/600x800/?taxi,booking"
  },
  {
    title: "CAPTAIN THUG",
    subtitle: "Mini Streaming Platform Website",
    bgColor: "bg-purple-900", 
    platforms: ["Web"],
    imageUrl: "https://source.unsplash.com/random/600x800/?streaming,video"
  },
  {
    title: "EXCURSIFY",
    subtitle: "Travel App",
    bgColor: "bg-pink-700", 
    platforms: ["Android", "iOS", "Web"],
    imageUrl: "https://source.unsplash.com/random/600x800/?travel,app"
  },
  {
    title: "COINKARTS",
    subtitle: "Cryptocurrency Web Platform",
    bgColor: "bg-orange-800", 
    platforms: ["Web"],
    imageUrl: "https://source.unsplash.com/random/600x800/?crypto,dashboard"
  },
  {
    title: "AFFORDABLE HOSPITALS",
    subtitle: "Hospital Search Web",
    bgColor: "bg-red-500", 
    platforms: ["Web"],
    imageUrl: "https://source.unsplash.com/random/600x800/?hospital,healthcare"
  },
  {
    title: "BLUEPAISA",
    subtitle: "Digital QR Wallet Platform",
    bgColor: "bg-blue-800", 
    platforms: ["Android", "iOS"],
    imageUrl: "https://source.unsplash.com/random/600x800/?qr,wallet"
  },
  {
    title: "GAMERZZ",
    subtitle: "Esports Hub and Content App",
    bgColor: "bg-gray-700", 
    platforms: ["Android", "iOS", "Web", "Desktop"],
    imageUrl: "https://source.unsplash.com/random/600x800/?esports,gaming"
  }
];

export default function WorkPage() {
  return (
    <main className="pt-24 pb-20 relative bg-black">
      {/* Background Elements */}
      <ThemeCube className="absolute top-40 -left-20" opacity={0.03} />
      <ThemeCube className="absolute top-60 right-10" opacity={0.02} />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Our </span>
            <span className="text-[#0066FF]">Portfolio</span>
            <span className="text-white"> of Solutions</span>
          </motion.h1>
          
          <motion.p 
            className="text-[#999] text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We take a thoughtful approach to every project, beginning with thorough research and strategic planning before 
            implementing innovative solutions that deliver exceptional value to our clients.
          </motion.p>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="container mx-auto px-4 mb-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 text-center mt-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8">
            Need innovative software solutions to handle your tech needs<br /> and transform your business?
          </h2>
          
          <Link to="/contact">
            <motion.button
              className="px-10 py-3 border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Drop us a Message
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      {/* Footer Menu - Categories */}
      <div className="container mx-auto px-4 py-10 border-t border-[#222] grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-medium mb-4">Mobile</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#777] hover:text-white">Android Apps</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">iPhone Apps</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Hybrid Apps</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Swift</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Kotlin</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-4">Web</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#777] hover:text-white">React Js</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Angular Js</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Vue Js</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Java</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">WordPress</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-4">Game</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#777] hover:text-white">Unity 3D</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Unreal Engine</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Augmented Reality</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Virtual Reality</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Metaverse</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-4">IOT</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#777] hover:text-white">Automation</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Connected Hardware</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">AI and ML</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Robotics</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Drone Tech</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-4">Quicklinks</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#777] hover:text-white">Services</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">About Us</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Our Work</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Company Policy</a></li>
            <li><a href="#" className="text-[#777] hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}