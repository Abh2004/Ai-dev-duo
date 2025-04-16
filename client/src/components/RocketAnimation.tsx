import { useEffect, useState } from 'react';

interface RocketAnimationProps {
  className?: string;
}

export default function RocketAnimation({ className = '' }: RocketAnimationProps) {
  const [trails, setTrails] = useState<Array<{ id: number; delay: number; duration: number; offset: number }>>([]);
  
  // Generate trails with varying properties
  useEffect(() => {
    // Start generating trails after 2 seconds (when rocket animation is well underway)
    const timerId = setTimeout(() => {
      const newTrails = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 2,
        duration: 1 + Math.random() * 1.5, // 1-2.5s duration
        offset: Math.random() * 20 - 10 // -10 to +10px offset
      }));
      setTrails(newTrails);
    }, 2000);
    
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className={`rocket-animation-container relative ${className}`}>
      {/* Stars/particles */}
      <div className="stars">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i} 
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`
            }}
          />
        ))}
      </div>
      
      {/* Rocket with SVG - now uses CSS for animation instead of JS */}
      <div className="rocket-wrapper">
        <img src="/rocket.svg" alt="Rocket" className="rocket" />
        
        {/* Fire animation */}
        <div className="fire-wrapper">
          <img src="/fire.svg" alt="Rocket fire" className="fire" />
        </div>
      </div>
      
      {/* Trailing particles - dynamically created with different timing */}
      <div className="trails">
        {trails.map(trail => (
          <div 
            key={trail.id} 
            className="trail"
            style={{
              left: `calc(75% + ${trail.offset}px)`,
              animationDuration: `${trail.duration}s`,
              animationDelay: `${trail.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Additional particle effects */}
      <div className="particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${65 + Math.random() * 20}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
}