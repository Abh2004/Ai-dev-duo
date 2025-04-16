import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hoverEffect = true,
  glowEffect = false,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`relative ${className} ${
        glowEffect ? 'overflow-visible' : 'overflow-hidden'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay,
      }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={
        hoverEffect
          ? {
              y: -10,
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      {children}
      
      {/* Conditional glow effect */}
      {glowEffect && (
        <motion.div
          className="absolute -z-10 inset-0 rounded-xl bg-[#0066FF] opacity-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 0.15, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}