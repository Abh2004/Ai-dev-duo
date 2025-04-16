import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serviceData = [
  {
    icon: "rocket",
    title: "StartUp Acceleration",
    description: "Strategic planning, MVP development, and scaling solutions for startups at any stage.",
    hoverDetails: "Business Analysis, MVP Development, Funding Preparation, Market Validation"
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications with exceptional user experiences.",
    hoverDetails: "Android App, iOS App Development, Hybrid App Development, Flutter and IoT"
  },
  {
    icon: "monitor",
    title: "Website Development",
    description: "Responsive websites and web applications optimized for performance and conversion.",
    hoverDetails: "Frontend Development, Backend Development, CMS, Progressive Web Apps"
  },
  {
    icon: "laptop",
    title: "Enterprise App Development",
    description: "Custom enterprise solutions that streamline operations and improve efficiency.",
    hoverDetails: "ERP Solutions, CRM Development, Business Process Automation, Legacy Modernization"
  },
  {
    icon: "palette",
    title: "Product Design and Branding",
    description: "User-centered design and branding solutions that create memorable experiences.",
    hoverDetails: "UI/UX Design, Brand Identity, Design Systems, Prototyping and User Testing"
  },
  {
    icon: "cloud",
    title: "Next Gen Technology",
    description: "Cutting-edge solutions leveraging the latest technological advancements.",
    hoverDetails: "AI/ML, Blockchain, IoT Solutions, Extended Reality (AR/VR)"
  },
  {
    icon: "trending-up",
    title: "Growth Marketing",
    description: "Data-driven marketing strategies to accelerate growth and expand market reach.",
    hoverDetails: "SEO/SEM, Content Marketing, Social Media Strategy, Analytics and Optimization"
  },
  {
    icon: "shield",
    title: "Maintenance and Support",
    description: "Ongoing support and maintenance services to ensure optimal system performance.",
    hoverDetails: "Proactive Monitoring, Technical Support, Security Updates, Performance Optimization"
  }
];

export const portfolioData = [
  {
    title: "SHOPWAVE",
    bgColor: "bg-[#1a2e4c]",
    platforms: ["iOS", "Android"],
    description: "E-commerce application with AR product visualization"
  },
  {
    title: "MEDCONNECT",
    bgColor: "bg-[#4c1a3d]",
    platforms: ["Web"],
    description: "Telemedicine platform for virtual consultations"
  },
  {
    title: "FITPULSE",
    bgColor: "bg-[#2d3c1a]",
    platforms: ["iOS", "Android"],
    description: "Fitness tracking app with AI coaching"
  },
  {
    title: "FINFLOW",
    bgColor: "bg-[#3c1a1a]",
    platforms: ["Web", "iOS"],
    description: "Digital banking solution with advanced security"
  },
  {
    title: "HOMEHUB",
    bgColor: "bg-[#1a3c3c]",
    platforms: ["iOS", "Android"],
    description: "IoT-powered smart home management system"
  },
  {
    title: "EDUSCAPE",
    bgColor: "bg-[#3c1a2e]",
    platforms: ["Web"],
    description: "Interactive learning platform with gamification"
  }
];

export const partnersData = [
  "Google",
  "AWS",
  "Oracle",
  "Microsoft",
  "IBM"
];
