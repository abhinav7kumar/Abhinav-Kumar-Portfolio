// import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML & CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'Python', percentage: 80 },
  { name: 'UI/UX Design', percentage: 85 },
];

export function SkillBars() {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            <span className="text-sm font-medium text-gray-500">{skill.percentage}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}