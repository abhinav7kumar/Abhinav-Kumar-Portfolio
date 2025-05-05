// import React from 'react';
import { motion } from 'framer-motion';

export function ProfileImage() {
  return (
    <motion.div 
      className="md:w-1/2 relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <img
        src="/public/images/Profile.jpg"
        alt="abhinav"
        className="relative rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
      />
    </motion.div>
  );
}