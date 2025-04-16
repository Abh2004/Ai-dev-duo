import { partnersData } from "@/lib/utils";
import { FaGoogle, FaAmazon, FaDatabase, FaMicrosoft, FaServer } from "react-icons/fa";

// Map of partner names to their icons using Font Awesome icons
const partnerIcons = {
  Google: FaGoogle,
  AWS: FaAmazon,
  Oracle: FaDatabase,
  Microsoft: FaMicrosoft,
  IBM: FaServer
};

export default function Partners() {
  return (
    <section className="py-12 bg-black border-t border-b border-[#222222]">
      <div className="container mx-auto px-4">
        <p className="text-center text-[#AAAAAA] mb-8">Trusted by industry leaders</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          {partnersData.map((partner) => {
            const IconComponent = partnerIcons[partner as keyof typeof partnerIcons];
            
            return (
              <div key={partner} className="grayscale hover:grayscale-0 transition-all duration-300 h-10 flex items-center">
                <IconComponent className="h-8 w-auto text-white" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
