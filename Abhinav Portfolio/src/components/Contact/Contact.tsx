// import React from 'react';
import { BackgroundPattern } from '../shared/BackgroundPattern';
import { ContactHeader } from './ContactHeader';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';


export function Contact() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundPattern />
      <div className="container relative mx-auto px-4">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}