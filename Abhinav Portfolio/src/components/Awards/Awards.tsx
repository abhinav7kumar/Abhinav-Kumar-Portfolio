// import React from 'react';
import { AwardsHeader } from './AwardsHeader';
import { AwardsGrid } from './AwardsGrid';
import { BackgroundEffect } from './BackgroundEffect';

export function Awards() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundEffect />
      <div className="container mx-auto px-4">
        <AwardsHeader />
        <AwardsGrid />
      </div>
    </section>
  );
}