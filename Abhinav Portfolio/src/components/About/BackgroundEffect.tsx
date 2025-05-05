// import React from 'react';
import { motion } from 'framer-motion';

export function BackgroundEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? '#4f46e5' : i === 1 ? '#7c3aed' : '#db2777'
            }, transparent)`,
            width: `${400 + i * 100}px`,
            height: `${400 + i * 100}px`,
          }}
          animate={{
            x: [
              `${Math.sin(i * 4) * 100}%`,
              `${Math.cos(i * 2) * 100}%`,
              `${Math.sin(i * 4) * 100}%`,
            ],
            y: [
              `${Math.cos(i * 4) * 20}%`,
              `${Math.sin(i * 2) * 20}%`,
              `${Math.cos(i * 4) * 20}%`,
            ],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}