import React from 'react';
import { motion } from 'framer-motion';

interface IconBoxProps {
  Icon: React.ElementType;
  text: string;
  index: number;
}

export function IconBox({ Icon, text, index }: IconBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.1 }}
      className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-pointer overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
      />
      
      <Icon size={24} className="relative z-10 mb-2 group-hover:scale-110 transition-transform" />
      <span className="relative z-10 text-sm">{text}</span>
      
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl transition-opacity"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}