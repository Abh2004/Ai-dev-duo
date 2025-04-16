import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PortfolioCard from "./PortfolioCard";
import { portfolioData } from "@/lib/utils";

export default function Work() {
  return (
    <section id="work" className="py-20 bg-[#222222]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Create Websites and Apps
          </h2>
          <p className="text-[#AAAAAA] max-w-3xl mx-auto">
            Our portfolio showcases innovative solutions across multiple platforms and industries.
            Each project is crafted with attention to detail and a focus on delivering exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              bgColor={project.bgColor}
              platforms={project.platforms}
              description={project.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="#contact">
            <Button 
              variant="outline" 
              className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 font-medium py-3 px-8"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
