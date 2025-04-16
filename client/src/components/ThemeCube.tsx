import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ThemeCubeProps extends HTMLAttributes<HTMLDivElement> {
  opacity?: number;
}

export default function ThemeCube({ 
  className, 
  opacity = 20, 
  ...props 
}: ThemeCubeProps) {
  return (
    <div 
      className={cn(
        "absolute w-[150px] h-[150px] bg-[#0066FF]/10 border border-[#0066FF]/30 rotate-45 z-0",
        className
      )}
      style={{ opacity: opacity / 100 }}
      {...props} 
    />
  );
}
