import { useEffect, useState } from 'react';

interface RocketAnimationProps {
  className?: string;
}

export default function RocketAnimation({ className = '' }: RocketAnimationProps) {
  const [trails, setTrails] = useState<Array<{ id: number; delay: number; duration: number; offset: number; left: number; bottom: number }>>([]);
  
  // Generate trails with varying properties that follow the rocket's path
  useEffect(() => {
    // Start generating trails after 1 second
    const timerId = setTimeout(() => {
      // Create multiple trail points along the rocket's circular path
      const pathPositions = [
        { left: 50, bottom: 10 },   // Initial part of path
        { left: 40, bottom: 15 },
        { left: 30, bottom: 20 },
        { left: 25, bottom: 30 },
        { left: 30, bottom: 40 },
        { left: 40, bottom: 50 },
        { left: 50, bottom: 55 },
        { left: 60, bottom: 50 },
        { left: 70, bottom: 45 },
        { left: 75, bottom: 40 },
        { left: 75, bottom: 30 }    // Final position
      ];
      
      // Generate trails that will appear at different points in the path
      const newTrails = Array.from({ length: 30 }).map((_, i) => {
        // Distribute trails across different positions in the path
        const positionIndex = Math.floor(i / 3) % pathPositions.length;
        const position = pathPositions[positionIndex];
        
        return {
          id: i,
          delay: 0.5 + i * 0.2, // Stagger the delays to follow rocket
          duration: 0.8 + Math.random(),
          left: position.left,
          bottom: position.bottom,
          offset: Math.random() * 10 - 5 // Small random offset
        };
      });
      
      setTrails(newTrails);
    }, 1000);
    
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
              left: `calc(${trail.left}% + ${trail.offset}px)`,
              bottom: `${trail.bottom}%`,
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