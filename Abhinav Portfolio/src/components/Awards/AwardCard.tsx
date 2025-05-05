import React from 'react';
import { motion } from 'framer-motion';

interface AwardCardProps {
  icon: React.ElementType;
  title: string;
  organization: string;
  description: string;
  gradient: string;
  index: number;
}

export function AwardCard({ 
  icon: Icon, 
  title, 
  organization, 
  description, 
  gradient,
  index 
}: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
        <div className="mb-4">
          <motion.div
            className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-indigo-600 mb-3">{organization}</p>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to right, ${gradient})`
          }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
        />
      </div>
    </motion.div>
  );
}