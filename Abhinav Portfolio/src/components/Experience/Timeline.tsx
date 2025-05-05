// import React from 'react';
import { TimelineItem } from './TimelineItem';

const experiences = [
  {
    year: '2024',
    company: 'Excellence Group Of Institute',
    position: 'Web Developer Intern',
    description: 'Developed responsive websites and optimized UI/UX designs during a 2-month internship.',
    achievements: [
      'Week 1-2: Mastered HTML5/CSS3 fundamentals',
      'Week 3-4: Implemented responsive designs',
      'Week 5-6: Enhanced UI/UX with JavaScript',
      'Week 7-8: Improved site load times by 30%'
    ]
  }
];

export function Timeline() {
  return (
    <div className="relative">
      {/* Central line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600/0 via-purple-600 to-indigo-600/0" />
      
      <div className="space-y-20">
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={exp.year} 
            {...exp} 
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}