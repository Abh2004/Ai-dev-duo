import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serviceData = [
  {
    icon: "mobile",
    title: "Mobile App Development",
    description: "Native and cross-platform solutions for iOS and Android that deliver exceptional user experiences."
  },
  {
    icon: "globe",
    title: "Web Development",
    description: "Responsive websites and progressive web apps that engage users across all devices."
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description: "Intuitive interfaces and seamless user experiences that delight your customers."
  },
  {
    icon: "cloud",
    title: "Cloud Services",
    description: "Scalable cloud solutions that ensure performance, security, and reliability."
  },
  {
    icon: "brain",
    title: "AI & Machine Learning",
    description: "Intelligent solutions that analyze data and deliver actionable insights."
  },
  {
    icon: "shopping-cart",
    title: "E-Commerce Solutions",
    description: "Digital storefronts and marketplaces that drive conversions and sales."
  },
  {
    icon: "pie-chart",
    title: "Digital Marketing",
    description: "Strategic campaigns that increase brand visibility and customer engagement."
  },
  {
    icon: "clipboard",
    title: "IT Consulting",
    description: "Expert guidance on technology strategy, architecture, and implementation."
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
