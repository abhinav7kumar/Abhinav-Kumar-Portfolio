// import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { Icon: Github, href: "https://github.com", delay: 0 },
    { Icon: Linkedin, href: "https://linkedin.com", delay: 0.1 },
    { Icon: Twitter, href: "https://twitter.com", delay: 0.2 }
  ];

  return (
    <motion.div 
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {socialLinks.map(({ Icon, href, }) => {
        return (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300" size={20} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}