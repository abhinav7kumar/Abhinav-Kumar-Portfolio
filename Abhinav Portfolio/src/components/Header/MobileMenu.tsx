// import React from 'react';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const handleClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-x-0 top-16 z-40 bg-white/80 backdrop-blur-lg shadow-lg md:hidden"
    >
      <nav className="container mx-auto py-4">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>
    </motion.div>
  );
}