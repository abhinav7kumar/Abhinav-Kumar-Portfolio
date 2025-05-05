import React from 'react';
import { motion } from 'framer-motion';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function FormTextarea({ label, ...props }: FormTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <motion.textarea
        {...props}
        rows={4}
        whileFocus={{ scale: 1.01 }}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
      />
    </div>
  );
}