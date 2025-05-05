import React from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  content: string;
  delay: number;
}

export function ContactCard({ icon: Icon, title, content, delay }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </motion.div>
  );
}