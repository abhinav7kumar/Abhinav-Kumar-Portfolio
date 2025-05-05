// import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Awards } from './components/Awards/Awards';
import { Contact } from './components/Contact/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="awards">
        <Awards />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
  
}