// import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Role } from './types';

export function RoleContent({ role }: { role: Role }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={role.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <motion.h2 
          className={`text-2xl font-bold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}
          layoutId="roleTitle"
        >
          {role.title}
        </motion.h2>
        <motion.p 
          className="text-gray-300 max-w-md mx-auto"
          layoutId="roleDescription"
        >
          {role.description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-2"
          layout
        >
          {role.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${role.gradient} text-white text-sm`}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}