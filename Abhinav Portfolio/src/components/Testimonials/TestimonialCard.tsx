// import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  image: string;
  index: number;
}

export function TestimonialCard({ content, author, position, image, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <Quote className="absolute top-4 right-4 text-indigo-100" size={48} />
      
      <p className="text-gray-600 mb-6 relative z-10">{content}</p>
      
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}