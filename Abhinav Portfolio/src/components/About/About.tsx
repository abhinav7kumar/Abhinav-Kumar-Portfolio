// import React from 'react';
import { BackgroundPattern } from '../shared/BackgroundPattern';
import { ProfileSection } from './ProfileSection';
import { ContentSection } from './ContentSection';

export function About() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundPattern />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <ProfileSection />
          <ContentSection />
        </div>
      </div>
    </section>
  );
}