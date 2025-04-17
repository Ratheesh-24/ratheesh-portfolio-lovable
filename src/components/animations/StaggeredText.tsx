
import React from 'react';
import { motion } from 'framer-motion';

interface StaggeredTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

const StaggeredText: React.FC<StaggeredTextProps> = ({
  text,
  delay = 0,
  duration = 0.05,
  className = '',
  component = 'h2',
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Component = component;

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
