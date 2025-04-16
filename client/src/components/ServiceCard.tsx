import { useState } from "react";
import {
  Smartphone,
  Monitor,
  Cloud,
  Rocket,
  Laptop,
  PaintBucket,
  TrendingUp,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const iconMap = {
  smartphone: Smartphone,
  monitor: Monitor,
  cloud: Cloud,
  rocket: Rocket,
  laptop: Laptop,
  palette: PaintBucket,
  "trending-up": TrendingUp,
  shield: Shield
};

interface ServiceCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  hoverDetails?: string;
  className?: string;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description,
  hoverDetails,
  className 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[icon];

  return (
    <motion.div 
      className={cn(
        "relative border border-[#333] group h-full cursor-pointer",
        isHovered ? "bg-[#0066FF]" : "bg-[#111]",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0,102,255,0.3)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Blue accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-[#0066FF]" />
      
      <div className="p-6 pl-8">
        <div className="flex items-start space-x-4">
          <IconComponent className="h-6 w-6 text-white mt-1" />
          <div>
            <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
            
            {isHovered && (
              <motion.p 
                className="text-white/90 text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                {hoverDetails}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
