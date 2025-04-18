import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ServiceIconType =
  | "rocket"
  | "smartphone"
  | "monitor"
  | "laptop"
  | "palette"
  | "cloud"
  | "trending-up"
  | "shield";

export const serviceData = [
  {
    icon: "rocket" as ServiceIconType,
    title: "StartUp Acceleration",
    description:
      "Strategic planning, MVP development, and scaling solutions for startups at any stage.",
    hoverDetails:
      "Business Analysis, MVP Development, Funding Preparation, Market Validation",
  },
  {
    icon: "smartphone" as ServiceIconType,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications with exceptional user experiences.",
    hoverDetails:
      "Android App, iOS App Development, Hybrid App Development, Flutter and IoT",
  },
  {
    icon: "monitor" as ServiceIconType,
    title: "Website Development",
    description:
      "Responsive websites and web applications optimized for performance and conversion.",
    hoverDetails:
      "Frontend Development, Backend Development, CMS, Progressive Web Apps",
  },
  {
    icon: "laptop" as ServiceIconType,
    title: "Enterprise App Development",
    description:
      "Custom enterprise solutions that streamline operations and improve efficiency.",
    hoverDetails:
      "ERP Solutions, CRM Development, Business Process Automation, Legacy Modernization",
  },
  {
    icon: "palette" as ServiceIconType,
    title: "Product Design and Branding",
    description:
      "User-centered design and branding solutions that create memorable experiences.",
    hoverDetails:
      "UI/UX Design, Brand Identity, Design Systems, Prototyping and User Testing",
  },
  {
    icon: "cloud" as ServiceIconType,
    title: "Next Gen Technology",
    description:
      "Cutting-edge solutions leveraging the latest technological advancements.",
    hoverDetails: "AI/ML, Blockchain, IoT Solutions, Extended Reality (AR/VR)",
  },
  {
    icon: "trending-up" as ServiceIconType,
    title: "Growth Marketing",
    description:
      "Data-driven marketing strategies to accelerate growth and expand market reach.",
    hoverDetails:
      "SEO/SEM, Content Marketing, Social Media Strategy, Analytics and Optimization",
  },
  {
    icon: "shield" as ServiceIconType,
    title: "Maintenance and Support",
    description:
      "Ongoing support and maintenance services to ensure optimal system performance.",
    hoverDetails:
      "Proactive Monitoring, Technical Support, Security Updates, Performance Optimization",
  },
];

export const portfolioData = [
  {
    title: "SHOPWAVE",
    bgColor: "bg-[#1a2e4c]",
    platforms: ["iOS", "Android"],
    description: "E-commerce application with AR product visualization",
  },
  {
    title: "MEDCONNECT",
    bgColor: "bg-[#4c1a3d]",
    platforms: ["Web"],
    description: "Telemedicine platform for virtual consultations",
  },
  {
    title: "FITPULSE",
    bgColor: "bg-[#2d3c1a]",
    platforms: ["iOS", "Android"],
    description: "Fitness tracking app with AI coaching",
  },
  {
    title: "FINFLOW",
    bgColor: "bg-[#3c1a1a]",
    platforms: ["Web", "iOS"],
    description: "Digital banking solution with advanced security",
  },
  {
    title: "HOMEHUB",
    bgColor: "bg-[#1a3c3c]",
    platforms: ["iOS", "Android"],
    description: "IoT-powered smart home management system",
  },
  {
    title: "EDUSCAPE",
    bgColor: "bg-[#3c1a2e]",
    platforms: ["Web"],
    description: "Interactive learning platform with gamification",
  },
];

export const partnersData = ["Google", "AWS", "Oracle", "Microsoft", "IBM"];

import project1 from "@/assets/images/project1.svg";
import project2 from "@/assets/images/project2.svg";
import project3 from "@/assets/images/project3.svg";
import project4 from "@/assets/images/project4.svg";

// Import new project images
import theraTech from "@/assets/images/DewinterMicroscope.png";
import prevacare from "@/assets/images/prevacare.png";
import silverheights from "@/assets/images/silverheights.png";
import drumIITKGP from "@/assets/images/DRUM-IITKGP.png";

export const showcaseProjects = [
  {
    id: "theraTech",
    title: "Thera Tech",
    category: "Healthcare Technology",
    description:
      "Advanced healthcare technology solutions for medical professionals and patients",
    image: theraTech,
    platforms: ["Web", "Android", "iOS"],
  },
  {
    id: "prevacare",
    title: "Prevacare",
    category: "Preventive Healthcare",
    description:
      "Comprehensive preventive healthcare platform for personalized health management",
    image: prevacare,
    platforms: ["Web", "Android"],
  },
  {
    id: "silverheights",
    title: "Silverheights",
    category: "Senior Living",
    description:
      "Digital solutions for senior living communities and eldercare management",
    image: silverheights,
    platforms: ["Web", "iOS"],
  },
  {
    id: "drumIITKGP",
    title: "DRUM-IITKGP",
    category: "Transportation",
    description:
      "Intelligent transportation routing system developed with IIT Kharagpur",
    image: drumIITKGP,
    platforms: ["Web", "Android", "iOS"],
  },
];
