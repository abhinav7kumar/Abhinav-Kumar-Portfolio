// import React from 'react';
import { motion } from 'framer-motion';

export function BackgroundPattern() {
  return (
    <>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      {/* Animated patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
        
        {/* Floating shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              background: `radial-gradient(circle, ${
                i === 0 ? '#4f46e5' : i === 1 ? '#7c3aed' : '#db2777'
              }, transparent)`,
            }}
            animate={{
              x: [
                `${Math.sin(i * 4) * 50}%`,
                `${Math.cos(i * 2) * 50}%`,
                `${Math.sin(i * 4) * 50}%`,
              ],
              y: [
                `${Math.cos(i * 4) * 30}%`,
                `${Math.sin(i * 2) * 30}%`,
                `${Math.cos(i * 4) * 30}%`,
              ],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </>
  );
}