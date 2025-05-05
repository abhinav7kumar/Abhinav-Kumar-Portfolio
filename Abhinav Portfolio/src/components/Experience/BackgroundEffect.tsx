// import React from 'react';
import { motion } from 'framer-motion';

export function BackgroundEffect() {
  return (
    <>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      
      {/* Animated patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-[0.15]"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${
                i === 0 ? '#818cf8' : i === 1 ? '#c084fc' : '#e879f9'
              }, transparent)`,
            }}
            animate={{
              x: [
                `${Math.sin(i * 4) * 40}%`,
                `${Math.cos(i * 2) * 40}%`,
                `${Math.sin(i * 4) * 40}%`,
              ],
              y: [
                `${Math.cos(i * 4) * 25}%`,
                `${Math.sin(i * 2) * 25}%`,
                `${Math.cos(i * 4) * 25}%`,
              ],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </>
  );
}