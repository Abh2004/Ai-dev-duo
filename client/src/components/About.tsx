import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeCube from "./ThemeCube";

export default function About() {
  // Generate unique but consistent image URLs
  const images = [
    "https://source.unsplash.com/random/500x300/?collaboration,team",
    "https://source.unsplash.com/random/500x300/?office,modern",
    "https://source.unsplash.com/random/500x300/?meeting,tech",
    "https://source.unsplash.com/random/500x300/?design,workshop"
  ];

  return (
    <section id="company" className="py-20 relative overflow-hidden">
      <ThemeCube className="-top-10 left-[15%]" opacity={10} />
      <ThemeCube className="bottom-20 right-[5%]" opacity={20} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Creative Company</h2>
            <p className="text-[#AAAAAA] mb-6 leading-relaxed">
              Since our founding in 2015, Troibits has been at the forefront of digital innovation. 
              We combine technical expertise with creative thinking to deliver solutions 
              that not only meet but exceed our clients' expectations.
            </p>
            <p className="text-[#AAAAAA] mb-8 leading-relaxed">
              Our team of passionate developers, designers, and strategists work collaboratively 
              to transform ideas into impactful digital experiences. We believe in building 
              long-term partnerships with our clients, understanding their business goals, 
              and delivering solutions that drive growth.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-[#0066FF] text-3xl font-bold mb-2">150+</div>
                <p className="text-[#AAAAAA] text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-[#0066FF] text-3xl font-bold mb-2">50+</div>
                <p className="text-[#AAAAAA] text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-[#0066FF] text-3xl font-bold mb-2">25+</div>
                <p className="text-[#AAAAAA] text-sm">Team Members</p>
              </div>
            </div>
            
            <Link href="#contact">
              <Button className="bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 px-8 shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)]">
                Work With Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[0]}')` }} 
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[1]}')` }} 
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[2]}')` }} 
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-auto aspect-[5/3] bg-cover bg-center" 
                    style={{ backgroundImage: `url('${images[3]}')` }} 
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0066FF]/20 rounded-full blur-xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
