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
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Main server/enterprise structure */}
        <rect 
          x="15" 
          y="15" 
          width="30" 
          height="30" 
          rx="2" 
          stroke="white" 
          strokeWidth="1.5"
          fill="#111111"
        />
        
        {/* Enterprise modules/components */}
        <rect 
          x="19" 
          y="19" 
          width="8" 
          height="8" 
          rx="1" 
          stroke="white" 
          strokeWidth="1"
          fill="#111111"
        />
        <rect 
          x="33" 
          y="19" 
          width="8" 
          height="8" 
          rx="1" 
          stroke="white" 
          strokeWidth="1"
          fill="#111111"
        />
        <rect 
          x="19" 
          y="33" 
          width="8" 
          height="8" 
          rx="1" 
          stroke="white" 
          strokeWidth="1"
          fill="#111111"
        />
        <rect 
          x="33" 
          y="33" 
          width="8" 
          height="8" 
          rx="1" 
          stroke="white" 
          strokeWidth="1"
          fill="#111111"
        />
        
        {/* Connecting lines */}
        <line x1="27" y1="23" x2="33" y2="23" stroke="white" strokeWidth="0.75" strokeDasharray="1 1" />
        <line x1="27" y1="37" x2="33" y2="37" stroke="white" strokeWidth="0.75" strokeDasharray="1 1" />
        <line x1="23" y1="27" x2="23" y2="33" stroke="white" strokeWidth="0.75" strokeDasharray="1 1" />
        <line x1="37" y1="27" x2="37" y2="33" stroke="white" strokeWidth="0.75" strokeDasharray="1 1" />
        
        {/* Center connection node */}
        <circle cx="30" cy="30" r="2" stroke="white" strokeWidth="1" fill="#111111" />
        <circle cx="30" cy="30" r="1" fill="white" opacity="0.5" />
        
        {/* Technical blueprint elements */}
        <line x1="10" y1="30" x2="13" y2="30" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="47" y1="30" x2="50" y2="30" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="30" y1="10" x2="30" y2="13" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="30" y1="47" x2="30" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
        
        {/* Dimension indicators */}
        <path d="M10 15L10 45" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="1 2" />
        <path d="M50 15L50 45" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="1 2" />
        <path d="M10 15L15 15" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="1 2" />
        <path d="M10 45L15 45" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="1 2" />
      </svg>
    ),
    description: "We develop custom enterprise applications that streamline operations, improve efficiency, and drive digital transformation within your organization. Our enterprise solutions are built to handle complex business processes, integrate with existing systems, and scale as your business grows. We focus on creating secure, reliable, and user-friendly applications that meet the specific needs of your enterprise.",
    features: ["ERP Solutions", "CRM Systems", "Business Process Automation", "Legacy System Modernization"]
  },
  "next-gen-tech": {
    title: "Next Gen Tech",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Central neural node */}
        <circle cx="30" cy="30" r="3" stroke="white" strokeWidth="1" fill="#111111" />
        
        {/* Neural network paths */}
        <path d="M30 15V27" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        <path d="M30 33V45" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        <path d="M15 30H27" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        <path d="M33 30H45" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        
        {/* Diagonal connectors */}
        <path d="M20 20L27 27" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        <path d="M33 33L40 40" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        <path d="M20 40L27 33" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        <path d="M33 27L40 20" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        
        {/* Neural endpoints */}
        <circle cx="30" cy="15" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="30" cy="45" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="15" cy="30" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="45" cy="30" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="20" cy="20" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="40" cy="20" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="20" cy="40" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="40" cy="40" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        
        {/* Technical grid elements */}
        <circle cx="30" cy="30" r="15" stroke="white" strokeWidth="0.25" opacity="0.2" strokeDasharray="1 2" fill="none" />
        <circle cx="30" cy="30" r="9" stroke="white" strokeWidth="0.25" opacity="0.3" strokeDasharray="1 1" fill="none" />
        
        {/* Axis and blueprint details */}
        <line x1="10" y1="30" x2="12" y2="30" stroke="white" strokeWidth="0.5" opacity="0.2" />
        <line x1="48" y1="30" x2="50" y2="30" stroke="white" strokeWidth="0.5" opacity="0.2" />
        <line x1="30" y1="10" x2="30" y2="12" stroke="white" strokeWidth="0.5" opacity="0.2" />
        <line x1="30" y1="48" x2="30" y2="50" stroke="white" strokeWidth="0.5" opacity="0.2" />
        
        {/* Data pulses - subtle animation effect */}
        <circle cx="24" cy="24" r="1" fill="white" opacity="0.6" />
        <circle cx="36" cy="24" r="0.8" fill="white" opacity="0.5" />
        <circle cx="24" cy="36" r="0.8" fill="white" opacity="0.5" />
        <circle cx="36" cy="36" r="0.8" fill="white" opacity="0.5" />
      </svg>
    ),
    description: "We harness the power of emerging technologies to create innovative solutions that give your business a competitive edge. Our team stays at the forefront of technological advancements, ensuring that your business benefits from the latest innovations. We help you implement next-generation technologies that transform your operations, enhance customer experiences, and drive business growth.",
    features: ["Artificial Intelligence", "Machine Learning", "Blockchain Development", "IoT Solutions", "Augmented/Virtual Reality"]
  },
  "growth-marketing": {
    title: "Growth Marketing",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Chart area */}
        <rect 
          x="12" 
          y="15" 
          width="36" 
          height="30" 
          rx="1" 
          stroke="white" 
          strokeWidth="0.75"
          fill="#111111"
        />
        
        {/* Grid lines for chart */}
        <line x1="12" y1="25" x2="48" y2="25" stroke="white" strokeWidth="0.25" opacity="0.3" strokeDasharray="1 1" />
        <line x1="12" y1="35" x2="48" y2="35" stroke="white" strokeWidth="0.25" opacity="0.3" strokeDasharray="1 1" />
        <line x1="22" y1="15" x2="22" y2="45" stroke="white" strokeWidth="0.25" opacity="0.3" strokeDasharray="1 1" />
        <line x1="32" y1="15" x2="32" y2="45" stroke="white" strokeWidth="0.25" opacity="0.3" strokeDasharray="1 1" />
        <line x1="42" y1="15" x2="42" y2="45" stroke="white" strokeWidth="0.25" opacity="0.3" strokeDasharray="1 1" />
        
        {/* Growth line */}
        <path 
          d="M15 40L25 30L35 26L45 18" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Data points */}
        <circle cx="15" cy="40" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="25" cy="30" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="35" cy="26" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        <circle cx="45" cy="18" r="1.5" stroke="white" strokeWidth="0.5" fill="#111111" />
        
        {/* Upward arrow indicator */}
        <path 
          d="M50 20L45 18L47 15" 
          stroke="white" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
        
        {/* Chart axis labels */}
        <line x1="12" y1="45" x2="10" y2="45" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="12" y1="35" x2="10" y2="35" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="12" y1="25" x2="10" y2="25" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="12" y1="15" x2="10" y2="15" stroke="white" strokeWidth="0.5" opacity="0.5" />
        
        {/* Projected growth indicator */}
        <path 
          d="M45 18L48 16" 
          stroke="white" 
          strokeWidth="0.75" 
          strokeDasharray="2 1" 
          strokeLinecap="round" 
          opacity="0.7" 
        />
      </svg>
    ),
    description: "Our growth marketing strategies help businesses acquire, engage, and retain customers through data-driven approaches. We combine creativity with analytics to develop marketing campaigns that deliver measurable results. Our team's expertise covers the full spectrum of digital marketing channels, allowing us to create comprehensive strategies that drive sustainable growth for your business.",
    features: ["Digital Strategy", "SEO & SEM", "Content Marketing", "Social Media Marketing", "Conversion Rate Optimization"]
  },
  "software-maintenance": {
    title: "Software Maintenance",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#111111" />
        <rect x="1" y="1" width="58" height="58" rx="29" stroke="#222222" strokeWidth="0.5" />
        
        {/* Main gear */}
        <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="1.5" fill="#111111" />
        <circle cx="30" cy="30" r="4" stroke="white" strokeWidth="1" fill="#111111" />
        
        {/* Gear teeth */}
        <line x1="30" y1="14" x2="30" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="42" x2="30" y2="46" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="30" x2="18" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="30" x2="46" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        
        <line x1="18.7" y1="18.7" x2="21.5" y2="21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38.5" y1="38.5" x2="41.3" y2="41.3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18.7" y1="41.3" x2="21.5" y2="38.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38.5" y1="21.5" x2="41.3" y2="18.7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Wrench */}
        <path 
          d="M38 15C40 12 44 12 46 14C48 16 48 20 45 22L40 27L33 20L38 15Z" 
          stroke="white" 
          strokeWidth="1" 
          fill="#111111"
        />
        <path 
          d="M42 17L44 19" 
          stroke="white" 
          strokeWidth="0.75" 
          strokeLinecap="round"
        />
        
        {/* Blueprint elements */}
        <circle cx="30" cy="30" r="20" stroke="white" strokeWidth="0.25" opacity="0.2" strokeDasharray="1 3" fill="none" />
        <line x1="10" y1="30" x2="12" y2="30" stroke="white" strokeWidth="0.3" opacity="0.4" />
        <line x1="48" y1="30" x2="50" y2="30" stroke="white" strokeWidth="0.3" opacity="0.4" />
        <line x1="30" y1="10" x2="30" y2="12" stroke="white" strokeWidth="0.3" opacity="0.4" />
        <line x1="30" y1="48" x2="30" y2="50" stroke="white" strokeWidth="0.3" opacity="0.4" />
        
        {/* Detail lines */}
        <path 
          d="M17 40C13 42 11 46 12 48" 
          stroke="white" 
          strokeWidth="0.5" 
          strokeLinecap="round" 
          opacity="0.6" 
          strokeDasharray="1 1"
          fill="none"
        />
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
    <section className="py-24 bg-black relative">
      {/* Background subtle grid pattern for professional look */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Service Navigation */}
          <div className="lg:w-1/3">
            <div 
              className="relative p-6 lg:p-8 bg-[#0a0a0a] border border-[#222] rounded-lg shadow-lg" 
              style={{ 
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.8)', 
                backdropFilter: 'blur(10px)' 
              }}
            >
              <h3 className="text-xl font-semibold mb-8 text-white">Our Services</h3>
              {services.map((service, index) => (
                <div key={service.id} className="flex items-center mb-8 relative">
                  {/* Vertical line connecting dots */}
                  {index < services.length - 1 && (
                    <div className="absolute h-10 w-px bg-[#222] left-2 top-4"></div>
                  )}
                  
                  {/* Dot indicator */}
                  <div 
                    className={cn(
                      "w-4 h-4 rounded-full border border-[#333] z-10 flex-shrink-0 transition-all duration-300",
                      activeService === service.id ? "bg-[#0066FF] border-[#0066FF] shadow-[0_0_10px_rgba(0,102,255,0.5)]" : "bg-transparent"
                    )}
                  ></div>
                  
                  {/* Service name button */}
                  <button
                    className={cn(
                      "ml-4 text-left transition-all duration-300 text-base font-medium",
                      activeService === service.id 
                        ? "text-[#0066FF] translate-x-1" 
                        : "text-[#888] hover:text-white hover:translate-x-0.5"
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
              className="h-full p-6 lg:p-10 bg-[#0a0a0a] border border-[#222] rounded-lg shadow-lg"
              style={{ 
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.8)', 
                backdropFilter: 'blur(10px)' 
              }}
            >
              {/* Title with icon */}
              <div className="flex justify-between items-start mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white bg-clip-text">{activeContent.title}</h2>
                <div className="hidden md:block">
                  {activeContent.icon}
                </div>
              </div>
              
              {/* Blue underline with glow effect */}
              <div className="w-32 h-0.5 bg-[#0066FF] mb-10 relative">
                <div className="absolute inset-0 bg-[#0066FF] blur-sm opacity-50"></div>
              </div>
              
              {/* Description */}
              <p className="text-[#aaa] mb-12 leading-relaxed text-lg">
                {activeContent.description}
              </p>
              
              {/* Feature grid with hover effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {activeContent.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-[#111] p-5 rounded-lg border border-[#222] transition-all duration-300 hover:border-[#333] hover:shadow-[0_5px_20px_-8px_rgba(0,102,255,0.2)]"
                  >
                    <p className="text-white flex items-center">
                      <span className="mr-3 text-[#0066FF]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Know more button with enhanced styling */}
              <button className="text-[#0066FF] flex items-center hover:underline mt-8 transition-all duration-300 hover:translate-x-1 group">
                <span>Explore further</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}