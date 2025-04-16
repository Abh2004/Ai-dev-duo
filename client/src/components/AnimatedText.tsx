import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  tagName?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export default function AnimatedText({
  text,
  className = '',
  once = true,
  delay = 0,
  duration = 0.05,
  tagName = 'h2',
}: AnimatedTextProps) {
  // Split text into an array of words
  const words = text.split(' ');
  
  // Word animation variants
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  // Create word elements with animation
  const animatedWords: ReactNode[] = words.map((word, i) => (
    <motion.span
      key={i}
      className="mr-2 last:mr-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={wordVariants}
      transition={{ 
        delay: delay + (i * duration)
      }}
    >
      {word}
    </motion.span>
  ));
  
  const combinedClassName = `${className} flex flex-wrap overflow-hidden justify-center`;
  
  // Render based on selected tag
  switch (tagName) {
    case 'h1':
      return <h1 className={combinedClassName}>{animatedWords}</h1>;
    case 'h3':
      return <h3 className={combinedClassName}>{animatedWords}</h3>;
    case 'p':
      return <p className={combinedClassName}>{animatedWords}</p>;
    case 'div':
      return <div className={combinedClassName}>{animatedWords}</div>;
    default:
      return <h2 className={combinedClassName}>{animatedWords}</h2>;
  }
}