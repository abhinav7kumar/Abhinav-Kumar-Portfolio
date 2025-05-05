// import React from 'react';
import { BackgroundPattern } from '../shared/BackgroundPattern';
import { SkillsHeader } from './SkillsHeader';
import { SkillsGrid } from './SkillsGrid';

export function Skills() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundPattern />
      <div className="container relative mx-auto px-4">
        <SkillsHeader />
        <SkillsGrid />
      </div>
    </section>
  );
}