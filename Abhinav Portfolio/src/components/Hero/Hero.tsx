import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, User, ChevronDown } from 'lucide-react';
import { ParticleField } from './ParticleField';
import { GlowingText } from './GlowingText';
import { RoleIcon } from './RoleIcon';
import { RoleContent } from './RoleContent';
import { roles } from './roleData';
import type { Role } from './types';

export function Hero() {
  const [activeRole, setActiveRole] = useState<Role>(roles[0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <ParticleField />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <GlowingText text="Abhinav Kumar" />
          <motion.div
            className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="flex gap-6 mb-16">
          <RoleIcon
            isActive={activeRole.id === 'developer'}
            onClick={() => setActiveRole(roles[0])}
            Icon={Code}
            text="Developer"
          />
          <RoleIcon
            isActive={activeRole.id === 'designer'}
            onClick={() => setActiveRole(roles[1])}
            Icon={Palette}
            text="Designer"
          />
          <RoleIcon
            isActive={activeRole.id === 'creator'}
            onClick={() => setActiveRole(roles[2])}
            Icon={User}
            text="Creator"
          />
        </div>

        <RoleContent role={activeRole} />

        <motion.div
          className="absolute bottom-8"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown size={32} className="text-white/80" />
        </motion.div>
      </div>
    </section>
  );
}