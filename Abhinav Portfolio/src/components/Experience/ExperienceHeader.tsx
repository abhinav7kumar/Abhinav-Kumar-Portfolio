// import React from 'react';
import { motion } from 'framer-motion';

export function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Professional Journey
          </span>
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600/0 via-purple-600 to-indigo-600/0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        A timeline of my professional growth and key achievements in the tech industry
      </p>
    </motion.div>
  );
}