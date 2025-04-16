import { useEffect, useRef, useState } from 'react';

interface RocketAnimationProps {
  className?: string;
}

export default function RocketAnimation({ className = '' }: RocketAnimationProps) {
  const rocketRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    if (!rocketRef.current) return;
    
    // Initial animation - rocket coming from bottom to center
    const rocket = rocketRef.current;
    let startPosition = window.innerHeight;
    let currentPosition = startPosition;
    let targetPosition = 0;
    let speed = 15; // pixels per frame
    let animationFrameId: number;
    
    const initialAnimation = () => {
      if (!rocket) return;
      
      if (currentPosition > targetPosition) {
        currentPosition -= speed;
        rocket.style.transform = `translateY(${currentPosition}px)`;
        animationFrameId = requestAnimationFrame(initialAnimation);
      } else {
        cancelAnimationFrame(animationFrameId);
        setAnimationComplete(true);
      }
    };
    
    // Start the initial animation
    initialAnimation();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  // Secondary hover animation after initial animation completes
  useEffect(() => {
    if (!animationComplete || !rocketRef.current) return;
    
    const rocket = rocketRef.current;
    let posY = 0;
    let direction = 1;
    let animationFrameId: number;
    
    const hoverAnimation = () => {
      if (!rocket) return;
      
      posY += 0.2 * direction;
      
      // Oscillate within a range
      if (posY > 10) direction = -1;
      if (posY < -10) direction = 1;
      
      rocket.style.transform = `translateY(${posY}px)`;
      animationFrameId = requestAnimationFrame(hoverAnimation);
    };
    
    hoverAnimation();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animationComplete]);

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