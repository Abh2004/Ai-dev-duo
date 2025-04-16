import About from "@/components/About";
import Partners from "@/components/Partners";
import ThemeCube from "@/components/ThemeCube";

export default function CompanyPage() {
  return (
    <main className="pt-24 relative">
      {/* Background Elements */}
      <ThemeCube className="absolute top-40 -left-20" opacity={0.03} />
      <ThemeCube className="absolute top-60 right-10" opacity={0.02} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-[#AAAAAA] text-lg">
            Learn about our team, mission, and the technology partners that help us deliver exceptional solutions.
          </p>
        </div>
        
        <About />
        <Partners />
      </div>
    </main>
  );
}