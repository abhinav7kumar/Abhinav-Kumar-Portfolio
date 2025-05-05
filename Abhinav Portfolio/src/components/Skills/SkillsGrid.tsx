// import React from 'react';
import { Code2, Palette, Database, Globe, Cpu, PenTool } from 'lucide-react';
import { SkillCard } from './SkillCard';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Expert in HTML5, CSS3, and modern JavaScript with a focus on performance and accessibility.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Proficient in PHP, Python and database design with experience in building robust server-side applications.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with Figma and Adobe Creative Suite.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing web applications for speed, SEO, and core web vitals.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: PenTool,
    title: 'Blogging & Content',
    description: 'Creating engaging technical content, tutorials, and articles to share knowledge and experiences in web development.',
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    icon: Cpu,
    title: 'Technical Writing',
    description: 'Crafting clear, concise documentation and technical guides for developers and users.',
    gradient: 'from-orange-500 to-amber-500'
  }
];

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <SkillCard key={skill.title} {...skill} index={index} />
      ))}
    </div>
  );
}