// import React from 'react';
import { BackgroundPattern } from '../shared/BackgroundPattern';
import { ExperienceHeader } from './ExperienceHeader';
import { Timeline } from './Timeline';

export function Experience() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundPattern />
      <div className="container relative mx-auto px-4">
        <ExperienceHeader />
        <Timeline />
      </div>
    </section>
  );
}