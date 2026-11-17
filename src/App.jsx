import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';

import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import Skills from './components/Skills';
import HowIWork from './components/HowIWork';
import Creative from './components/Creative';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggle } = useTheme();
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <Header theme={theme} toggleTheme={toggle} />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Hackathons />
        <Skills />
        <HowIWork />
        <Creative />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
