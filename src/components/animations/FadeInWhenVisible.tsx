
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = '',
  y = 30,
  x = 0,
  scale = 1,
  rotate = 0,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, isInView, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0, 
          y, 
          x,
          scale: scale * 0.95,
          rotate: rotate * 0.8
        },
        visible: { 
          opacity: 1, 
          y: 0, 
          x: 0, 
          scale,
          rotate,
          transition: {
            type: 'spring',
            damping: 15,
            stiffness: 80,
            duration, 
            delay, 
          }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
