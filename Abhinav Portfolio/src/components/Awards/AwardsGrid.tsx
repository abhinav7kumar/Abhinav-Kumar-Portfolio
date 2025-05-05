// import React from 'react';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import { AwardCard } from './AwardCard';

const awards = [
  {
    icon: Trophy,
    title: 'Two-Time CR Election Winner',
    organization: 'College Representative',
    description: 'Elected as Class Representative for two consecutive terms, demonstrating strong leadership and peer trust. Successfully represented student interests and organized various academic and cultural events.',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Award,
    title: 'Two-Time Head Boy',
    organization: 'School Leadership',
    description: 'Served as Head Boy for two academic years, leading school initiatives and maintaining discipline. Coordinated between students and administration to enhance school environment.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Medal,
    title: 'Drawing Competition Runner-up',
    organization: 'Art Competition',
    description: 'Secured second place in the inter-school drawing competition, showcasing artistic talent and creative expression through visual arts.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Star,
    title: 'Hackathon Achievement',
    organization: 'Tech Competition',
    description: 'Won third place in hackathon for innovative problem-solving and technical implementation, demonstrating coding skills and teamwork.',
    gradient: 'from-green-500 to-emerald-500'
  }
];

export function AwardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {awards.map((award, index) => (
        <AwardCard key={award.title} {...award} index={index} />
      ))}
    </div>
  );
}