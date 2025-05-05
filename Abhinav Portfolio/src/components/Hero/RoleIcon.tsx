// import React from 'react';
import { motion } from 'framer-motion';
import { RoleIconProps } from './types';

export function RoleIcon({ isActive, onClick, Icon, text }: RoleIconProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative group flex flex-col items-center gap-2 p-4 rounded-xl backdrop-blur-sm transition-all cursor-pointer ${
        isActive 
          ? 'bg-white text-indigo-600 shadow-lg' 
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={isActive ? { rotate: 360 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Icon size={24} className="transition-transform" />
      </motion.div>
      <span className="text-sm font-medium">{text}</span>
      
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-1/2 w-12 h-1 bg-indigo-600 rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ x: '-50%' }}
        />
      )}
    </motion.button>
  );
}