import Work from "@/components/Work";
import ThemeCube from "@/components/ThemeCube";

export default function WorkPage() {
  return (
    <main className="pt-24 relative">
      {/* Background Elements */}
      <ThemeCube className="absolute top-40 -left-20" opacity={0.03} />
      <ThemeCube className="absolute top-60 right-10" opacity={0.02} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-[#AAAAAA] text-lg">
            Explore our featured projects and success stories across various industries and platforms.
          </p>
        </div>
        
        <Work />
      </div>
    </main>
  );
}