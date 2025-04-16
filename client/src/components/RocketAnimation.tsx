import { useEffect, useRef } from 'react';

interface RocketAnimationProps {
  className?: string;
}

export default function RocketAnimation({ className = '' }: RocketAnimationProps) {
  const rocketRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleAnimationEffect = () => {
      if (!rocketRef.current) return;
      
      // Add subtle hover animation
      const rocket = rocketRef.current;
      let posY = 0;
      let direction = 1;
      
      const animate = () => {
        if (!rocket) return;
        
        posY += 0.2 * direction;
        
        // Oscillate within a range
        if (posY > 10) direction = -1;
        if (posY < -10) direction = 1;
        
        rocket.style.transform = `translateY(${posY}px)`;
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    handleAnimationEffect();
  }, []);

  return (
    <div className={`rocket-animation-container relative ${className}`}>
      {/* Stars/particles */}
      <div className="stars">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`
            }}
          />
        ))}
      </div>
      
      {/* Rocket SVG */}
      <div ref={rocketRef} className="rocket-wrapper">
        <img src="/rocket.svg" alt="Rocket" className="rocket" />
        
        {/* Fire animation */}
        <div className="fire-wrapper">
          <img src="/fire.svg" alt="Rocket fire" className="fire" />
        </div>
      </div>
      
      {/* Trailing particles */}
      <div className="trails">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="trail"
            style={{
              left: `${45 + Math.random() * 10}%`,
              animationDuration: `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}