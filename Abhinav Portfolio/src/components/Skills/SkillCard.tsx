import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

export function SkillCard({ icon: Icon, title, description, gradient, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(120deg, ${gradient})`,
          padding: '2px',
        }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="h-full w-full bg-white rounded-2xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <div className="relative mb-6">
          {/* Icon background */}
          <motion.div
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-10`}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Icon */}
          <div className={`relative p-4 rounded-xl bg-gradient-to-r ${gradient}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}