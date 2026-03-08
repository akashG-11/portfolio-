import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import CommandPalette from './components/layout/CommandPalette';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="app-container">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="main-wrapper">
          <TopBar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
          <CommandPalette isOpen={isCommandPaletteOpen} setIsOpen={setIsCommandPaletteOpen} />
          <main className="content">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
