// import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
  index: number;
  isLast: boolean;
}

export function TimelineItem({ 
  year, 
  company, 
  position, 
  description, 
  achievements,
  index,

}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Content card */}
      <motion.div
        className={`w-full md:w-[calc(50%-2rem)] p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative ${isEven ? 'md:ml-4' : 'md:mr-4'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Year badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Calendar className="w-4 h-4 text-indigo-600" />
          </div>
          <span className="text-sm font-semibold text-indigo-600">{year}</span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-1">{company}</h3>
        <h4 className="text-lg text-indigo-600 mb-3">{position}</h4>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Achievements */}
        <div className="space-y-2">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
            >
              <Award className="w-4 h-4 text-purple-600 flex-shrink-0" />
              <span className="text-sm text-gray-600">{achievement}</span>
            </motion.div>
          ))}
        </div>

        {/* Connector line to center */}
        <div 
          className={`absolute top-1/2 ${isEven ? 'left-full' : 'right-full'} w-4 h-px bg-gradient-to-${isEven ? 'l' : 'r'} from-indigo-600 to-purple-600`}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
          <motion.div
            className="absolute inset-0 rounded-full bg-indigo-600"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}