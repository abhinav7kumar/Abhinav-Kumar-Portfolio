// import React from 'react';
import { motion } from 'framer-motion';
import { SkillBars } from './SkillBars';
import { SocialLinks } from './SocialLinks';

export function ContentSection() {
  return (
    <motion.div 
      className="md:w-1/2 space-y-6"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-6">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            About Me
          </span>
        </h2>
        <div className="prose prose-lg text-gray-600">
          <p className="leading-relaxed">
            I am Abhinav Kumar, a skilled UI/UX Designer and Web Developer passionate about crafting seamless, user-centric digital experiences. With expertise in front-end technologies like HTML, CSS, JavaScript, and modern frameworks, I blend aesthetic design with robust functionality.
          </p>
          <p className="leading-relaxed">
            Known for collaboration, communication, and problem-solving, I thrive in cross-functional teams and excel at translating complex ideas for diverse stakeholders. Dedicated to continuous learning and industry trends, I deliver innovative, high-performance web solutions that exceed expectations.
          </p>
        </div>
      </motion.div>
      
      <SkillBars />
      <SocialLinks />
    </motion.div>
  );
}