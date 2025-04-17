import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Custom styled map component with a premium look
export default function ContactMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Animation for map markers
  const pulseAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
  };

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="relative w-full rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ 
        height: "400px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stylized map container with dark mode styling */}
      <div className="absolute inset-0 bg-[#0A0A14] overflow-hidden">
        {/* Map content */}
        <div className="absolute inset-0 opacity-95">
          <svg width="100%" height="100%" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background grid pattern */}
            <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M50 0L0 0L0 50" stroke="#161622" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Main roads */}
            <path d="M100,200 C200,180 300,250 400,220 C500,190 600,240 700,200 C800,160 900,220 950,180" 
                  stroke="#2A2A3C" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M50,150 C150,130 250,170 350,140 C450,110 550,160 650,120 C750,80 850,140 950,100" 
                  stroke="#2A2A3C" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M50,250 C150,230 250,270 350,240 C450,210 550,260 650,220 C750,180 850,240 950,200" 
                  stroke="#2A2A3C" strokeWidth="3" strokeLinecap="round" fill="none" />
            
            {/* Secondary roads */}
            <path d="M200,50 L200,350" stroke="#1E1E2A" strokeWidth="2" strokeDasharray="2,6" />
            <path d="M400,50 L400,350" stroke="#1E1E2A" strokeWidth="2" strokeDasharray="2,6" />
            <path d="M600,50 L600,350" stroke="#1E1E2A" strokeWidth="2" strokeDasharray="2,6" />
            <path d="M800,50 L800,350" stroke="#1E1E2A" strokeWidth="2" strokeDasharray="2,6" />
          </svg>
        </div>
        
        {/* Company location marker */}
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          animate={isHovered ? pulseAnimation : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-[#0066FF]" />
            <div className="absolute -inset-3 bg-[#0066FF] rounded-full opacity-30 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute -inset-6 bg-[#0066FF] rounded-full opacity-10 animate-ping" style={{ animationDuration: "4s" }} />
          </div>
        </motion.div>
        
        {/* Sector marker */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 text-white text-center">
          <div className="bg-[#0A0A14] bg-opacity-80 px-4 py-2 rounded-lg border border-[#2A2A3C]">
            <p className="text-sm font-medium text-[#0066FF]">Sector 48</p>
            <p className="text-xs text-[#888]">Gurgaon, Haryana 122001</p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 bg-[#0A0A14] bg-opacity-80 px-3 py-2 rounded-md border border-[#2A2A3C] text-xs text-[#888]">
          View larger map
        </div>
        
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <motion.div 
            className="w-8 h-8 bg-[#0A0A14] bg-opacity-80 rounded-full border border-[#2A2A3C] flex items-center justify-center text-[#888]"
            whileHover={{ scale: 1.1, backgroundColor: "#0066FF22" }}
          >
            <span className="text-lg">+</span>
          </motion.div>
          <motion.div 
            className="w-8 h-8 bg-[#0A0A14] bg-opacity-80 rounded-full border border-[#2A2A3C] flex items-center justify-center text-[#888]"
            whileHover={{ scale: 1.1, backgroundColor: "#0066FF22" }}
          >
            <span className="text-lg">-</span>
          </motion.div>
        </div>
        
        {/* Map overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
      </div>
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#222] border-t-[#0066FF] rounded-full animate-spin" />
        </div>
      )}
      
      {/* Hover effect overlay */}
      <motion.div 
        className="absolute inset-0 bg-[#0066FF] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Interactive prompt */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0066FF] text-white px-4 py-2 rounded-full text-sm font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
      >
        Visit us at our office
      </motion.div>
    </motion.div>
  );
}