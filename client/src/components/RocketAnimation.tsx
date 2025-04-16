import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import rocketSvg from '../assets/rocket.svg';
import fireSvg from '../assets/fire.svg';

interface RocketAnimationProps {
  className?: string;
}

export default function RocketAnimation({ className = '' }: RocketAnimationProps) {
  const rocketRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create stars effect
    const createStar = () => {
      if (!rocketRef.current) return;
      
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      star.style.opacity = `${0.1 + Math.random() * 0.3}`;
      
      rocketRef.current.appendChild(star);
      
      setTimeout(() => {
        if (rocketRef.current && star.parentNode === rocketRef.current) {
          rocketRef.current.removeChild(star);
        }
      }, 3000);
    };
    
    const starInterval = setInterval(createStar, 300);
    
    return () => {
      clearInterval(starInterval);
    };
  }, []);
  
  return (
    <div className={`rocket-animation-container ${className}`} ref={rocketRef}>
      <style dangerouslySetInnerHTML={{__html: `
        .rocket-animation-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          opacity: 0.3;
          animation: starFall linear;
        }
        
        @keyframes starFall {
          from {
            transform: translateY(-20px) translateX(0);
          }
          to {
            transform: translateY(100vh) translateX(20px);
          }
        }
        
        .rocket-assembly {
          position: absolute;
          width: 100px;
          transform-origin: center bottom;
        }
        
        .rocket-img {
          width: 100%;
          height: auto;
        }
        
        .fire-wrapper {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
        }
        
        .fire-img {
          width: 100%;
          filter: drop-shadow(0 0 10px rgba(0, 102, 255, 0.7));
        }
      `}} />
      
      <motion.div
        className="rocket-assembly"
        initial={{ 
          bottom: "-200px", 
          right: "10%",
          rotate: 5
        }}
        animate={{ 
          bottom: "15%", 
          right: "10%",
          rotate: [3, -3, 3]
        }}
        transition={{
          bottom: { 
            type: "spring", 
            stiffness: 50, 
            damping: 20,
            duration: 2
          },
          rotate: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }
        }}
      >
        <img src={rocketSvg} alt="Rocket" className="rocket-img" />
        <div className="fire-wrapper">
          <motion.img 
            src={fireSvg} 
            alt="Rocket fire" 
            className="fire-img"
            animate={{
              scaleY: [1, 1.2, 0.9, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}