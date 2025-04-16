import Services from "@/components/Services";
import ThemeCube from "@/components/ThemeCube";

export default function ServicesPage() {
  return (
    <main className="pt-24 relative">
      {/* Background Elements */}
      <ThemeCube className="absolute top-40 -left-20" opacity={0.03} />
      <ThemeCube className="absolute top-60 right-10" opacity={0.02} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-[#AAAAAA] text-lg">
            We offer a comprehensive range of digital solutions to help your business thrive in today's technology-driven world.
          </p>
        </div>
        
        <Services />
      </div>
    </main>
  );
}