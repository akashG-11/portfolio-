import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      {/* Ghost Mouse Tracking */}
      <div 
        className="cursor-ghost" 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>

      <nav className="top-nav">
        <a href="/" className="logo">KG</a>
        <div className="nav-links font-mono">
          <a href="https://github.com/akashG-11" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/karthiksg11/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="mailto:akashkarthi10g@gmail.com">email</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Overview />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
