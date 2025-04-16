import { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiAngular, SiVuedotjs, SiRubyonrails, SiPhp, 
  SiWordpress, SiPython, SiLaravel, SiMysql, SiNginx, 
  SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiAndroid, 
  SiApple, SiFlutter, SiKotlin, SiSwift, SiFirebase, 
  SiGoogle, SiTensorflow, SiGraphql, SiMongodb, 
  SiPostgresql, SiDocker, SiKubernetes,
  SiArduino, SiRaspberrypi
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaAws, FaReact, FaMicrosoft } from "react-icons/fa";
import { cn } from "@/lib/utils";

type TechCategory = "web" | "mobile" | "nextgen";

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

// Define tech stacks for each category
const techStacks: Record<TechCategory, TechItem[]> = {
  web: [
    { icon: <SiReact className="text-[#61DAFB]" size={40} />, name: "React Js" },
    { icon: <SiAngular className="text-[#DD0031]" size={40} />, name: "Angular Js" },
    { icon: <SiVuedotjs className="text-[#4FC08D]" size={40} />, name: "Vue Js" },
    { icon: <SiRubyonrails className="text-[#CC0000]" size={40} />, name: "Ruby on Rails" },
    { icon: <SiPhp className="text-[#777BB4]" size={40} />, name: "Php" },
    { icon: <SiWordpress className="text-[#21759B]" size={40} />, name: "Wordpress" },
    { icon: <DiJava className="text-[#ED8B00]" size={40} />, name: "Java" },
    { icon: <SiPython className="text-[#3776AB]" size={40} />, name: "Python" },
    { icon: <SiLaravel className="text-[#FF2D20]" size={40} />, name: "Laravel" },
    { icon: <SiMysql className="text-[#4479A1]" size={40} />, name: "MySQL" },
    { icon: <SiNginx className="text-[#009639]" size={40} />, name: "Nginx" },
    { icon: <SiNodedotjs className="text-[#339933]" size={40} />, name: "Node JS" },
    { icon: <SiHtml5 className="text-[#E34F26]" size={40} />, name: "HTML 5" },
    { icon: <SiCss3 className="text-[#1572B6]" size={40} />, name: "CSS 3" },
    { icon: <SiJavascript className="text-[#F7DF1E]" size={40} />, name: "Javascript" }
  ],
  mobile: [
    { icon: <SiAndroid className="text-[#3DDC84]" size={40} />, name: "Android" },
    { icon: <SiApple className="text-[#000000]" size={40} />, name: "iOS" },
    { icon: <SiFlutter className="text-[#02569B]" size={40} />, name: "Flutter" },
    { icon: <FaReact className="text-[#61DAFB]" size={40} />, name: "React Native" },
    { icon: <SiKotlin className="text-[#7F52FF]" size={40} />, name: "Kotlin" },
    { icon: <SiSwift className="text-[#F05138]" size={40} />, name: "Swift" },
    { icon: <FaMicrosoft className="text-[#3498DB]" size={40} />, name: "Xamarin" },
    { icon: <SiFirebase className="text-[#FFCA28]" size={40} />, name: "Firebase" },
    { icon: <SiApple className="text-[#000000]" size={40} />, name: "App Store" },
    { icon: <SiGoogle className="text-[#414141]" size={40} />, name: "Google Play" }
  ],
  nextgen: [
    { icon: <SiTensorflow className="text-[#FF6F00]" size={40} />, name: "TensorFlow" },
    { icon: <FaAws className="text-[#FF9900]" size={40} />, name: "AWS" },
    { icon: <SiGraphql className="text-[#E10098]" size={40} />, name: "GraphQL" },
    { icon: <SiMongodb className="text-[#47A248]" size={40} />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-[#336791]" size={40} />, name: "PostgreSQL" },
    { icon: <SiDocker className="text-[#2496ED]" size={40} />, name: "Docker" },
    { icon: <SiKubernetes className="text-[#326CE5]" size={40} />, name: "Kubernetes" },
    { icon: <FaReact className="text-[#121D33]" size={40} />, name: "Blockchain" },
    { icon: <SiArduino className="text-[#00979D]" size={40} />, name: "Arduino" },
    { icon: <SiRaspberrypi className="text-[#A22846]" size={40} />, name: "Raspberry Pi" }
  ]
};

export default function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("web");
  
  // Tabs for the tech categories
  const categories: { id: TechCategory; label: string }[] = [
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "nextgen", label: "Next Gen Tech" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Fully Loaded Technology Stack</h2>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#121212] rounded-md p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-8 py-3 text-sm font-medium relative",
                  activeCategory === category.id 
                    ? "text-[#0066FF]" 
                    : "text-white hover:text-gray-300"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066FF]"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tech Icons Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {techStacks[activeCategory].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mb-3">{tech.icon}</div>
              <p className="text-sm text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}