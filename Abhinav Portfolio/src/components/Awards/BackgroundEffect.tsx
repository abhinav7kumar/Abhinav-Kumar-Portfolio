// import React from 'react';
import { motion } from 'framer-motion';

export function BackgroundEffect() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' stroke-width='1' stroke='%234f46e5' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-[0.15]"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
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