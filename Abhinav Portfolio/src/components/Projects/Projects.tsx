// import React from 'react';
import { ProjectsHeader } from './ProjectsHeader';
import { ProjectsGrid } from './ProjectsGrid';
import { BackgroundEffect } from './BackgroundEffect';

export function Projects() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundEffect />
      <div className="container mx-auto px-4">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </section>
  );
}