import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  bgColor: string;
  platforms: string[];
  description: string;
  className?: string;
}

export default function PortfolioCard({
  title,
  bgColor,
  platforms,
  description,
  className
}: PortfolioCardProps) {
  // Generate unique but consistent image URL for each portfolio item based on title
  const imageUrl = `https://source.unsplash.com/random/600x337/?app,${encodeURIComponent(title.toLowerCase())}`;

  return (
    <div 
      className={cn(
        `${bgColor} rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,102,255,0.2)]`,
        className
      )}
    >
      <div className="relative aspect-video">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium uppercase">{title}</h3>
          <div className="flex space-x-2">
            {platforms.map((platform, index) => (
              <span 
                key={index} 
                className="text-xs bg-[#0066FF]/20 text-[#0066FF] py-1 px-2 rounded"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[#AAAAAA] text-sm">{description}</p>
      </div>
    </div>
  );
}
