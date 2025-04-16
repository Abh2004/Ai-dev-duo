import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeCube from "./ThemeCube";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <ThemeCube className="top-20 left-[5%]" opacity={20} />
      <ThemeCube className="bottom-20 right-[10%]" opacity={30} />
      <ThemeCube className="top-40 right-[20%]" opacity={15} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something <span className="text-[#0066FF]">Together!</span>
          </h1>
          <p className="text-[#AAAAAA] text-lg md:text-xl mb-8 leading-relaxed">
            We create innovative digital solutions that transform businesses. 
            Our team of experts specializes in mobile app development, web applications, 
            and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#contact">
              <Button className="bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 px-8 shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)]">
                Drop us a Message
              </Button>
            </Link>
            
            <Link href="#work">
              <Button variant="outline" className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 font-medium py-3 px-8">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
