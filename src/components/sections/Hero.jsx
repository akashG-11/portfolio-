import React from 'react';
import { MousePointer2, Download, ArrowRight } from 'lucide-react';
import './Hero.css';
import photo from '../../assets/WhatsApp Image 2026-03-08 at 7.00.42 PM.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content-wrapper fade-in">
                <div className="hero-photo-container">
                    <div className="photo-placeholder">
                        <img src={photo} alt="Karthik Sundaram" />
                    </div>
                    <div className="photo-glow"></div>
                </div>

                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Building <span className="text-gradient">Scalable Web</span> <br />
                        Solutions & Innovative Hardware.
                    </h1>

                    <p className="hero-description">
                        I'm <span className="text-highlight">Karthik Sundaram G</span>, a BTech IT student and Full-Stack Developer
                        passionate about Python, React, and creating seamless digital experiences.
                    </p>

                    <div className="hero-btns fade-in">
                        <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View My Work <ArrowRight size={20} />
                        </button>
                        <a href="/karthik_sundaram.pdf" target="_blank" rel="noopener noreferrer" download="Karthik_Sundaram_Resume.pdf" className="btn-secondary">
                            Download Resume <Download size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-scroll fade-in">
                <div className="scroll-icon">
                    <MousePointer2 size={16} />
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
