import React from 'react';
import './App.css';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />

      <nav className="top-nav">
        <a href="/" className="logo">KG</a>
        <div className="nav-links font-mono">
          <a href="https://github.com/akashG-11" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/karthiksg11/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="mailto:akashkarthi10g@gmail.com">akashkarthi10g@gmail.com</a>
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
