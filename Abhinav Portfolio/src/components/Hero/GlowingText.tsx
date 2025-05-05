// import React from 'react';
import { motion } from 'framer-motion';

interface GlowingTextProps {
  text: string;
  delay?: number;
}

export function GlowingText({ text, delay = 0 }: GlowingTextProps) {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + delay,
      },
    }),
  };

  return (
    <span className="relative inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block relative"
        >
          {char === ' ' ? '\u00A0' : char}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg -z-10 opacity-50"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.span>
      ))}
    </span>
  );
}