// import React from 'react';
import { motion } from 'framer-motion';

export function ProfileSection() {
  return (
    <motion.div 
      className="md:w-1/2 relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        {/* Animated border */}
        <motion.div
          className="absolute -inset-1 rounded-2xl z-0"
          style={{
            background: 'linear-gradient(120deg, #4f46e5, #7c3aed, #db2777, #4f46e5)',
            backgroundSize: '300% 300%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Image container */}
        <div className="relative z-10 m-1 bg-white rounded-xl overflow-hidden">
          <div className="aspect-square">
            <img
              src="/public/images/Profile.jpg"
              alt="abhinav"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}