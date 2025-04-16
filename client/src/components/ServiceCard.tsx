import {
  Smartphone,
  Globe,
  PaintBucket,
  Cloud,
  Brain,
  ShoppingCart,
  PieChart,
  Clipboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  mobile: Smartphone,
  globe: Globe,
  palette: PaintBucket,
  cloud: Cloud,
  brain: Brain,
  "shopping-cart": ShoppingCart,
  "pie-chart": PieChart,
  clipboard: Clipboard
};

interface ServiceCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  className 
}: ServiceCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className={cn(
      "bg-[#222222] rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,102,255,0.2)]",
      className
    )}>
      <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-4">
        <IconComponent className="h-6 w-6 text-[#0066FF]" />
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-[#AAAAAA]">{description}</p>
    </div>
  );
}
