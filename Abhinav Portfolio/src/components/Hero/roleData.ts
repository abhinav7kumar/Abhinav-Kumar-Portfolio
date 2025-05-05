import { Role } from './types';

export const roles: Role[] = [
  {
    id: 'developer',
    title: 'Web Developer',
    description: 'Building responsive and user-friendly websites with modern web technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'designer',
    title: 'UI/UX Designer',
    description: 'Crafting beautiful and intuitive user experiences',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research','WireFraming','Visual Exploration','Design System','Process Thinking'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'creator',
    title: 'Digital Creator',
    description: 'Creating engaging content and innovative solutions',
    skills: ['Content Strategy', 'Visual Design', 'Brand Identity', 'Motion Graphics'],
    gradient: 'from-orange-500 to-red-500'
  }
];