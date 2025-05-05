import React from 'react';
import { ChevronDown, Code, Briefcase, User } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <IconBox Icon={Code} text="Developer" />
          <IconBox Icon={Briefcase} text="Designer" />
          <IconBox Icon={User} text="Creator" />
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

function IconBox({ Icon, text }: { Icon: React.ElementType; text: string }) {
  return (
    <div className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
      <Icon size={24} className="group-hover:scale-110 transition-transform" />
      <span className="text-sm">{text}</span>
    </div>
  );
}