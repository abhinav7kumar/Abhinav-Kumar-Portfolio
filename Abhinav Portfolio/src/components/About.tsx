import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Profilepic from "../Assests/images/Profile.jpg";
export function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src={Profilepic}
              alt="Profile"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate developer with over 5 years of experience in creating beautiful and functional web applications. 
              I specialize in React, TypeScript, and modern web technologies.
            </p>
            
            <div className="space-y-4 mb-8">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>

            <div className="flex gap-4">
              <SocialLink Icon={Github} href="https://github.com" />
              <SocialLink Icon={Linkedin} href="https://linkedin.com" />
              <SocialLink Icon={Twitter} href="https://twitter.com" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function SocialLink({ Icon, href }: { Icon: React.ElementType; href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}

const skills = [
  { name: 'React', percentage: 90 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Node.js', percentage: 80 },
  { name: 'UI/UX Design', percentage: 75 },
];