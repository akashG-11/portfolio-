import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        id: "01",
        title: "E-Learning Platform",
        type: "Full-Stack Web App",
        role: "React, Django",
        year: "2025",
        desc: "A full-stack web application designed to deliver online courses and learning content. Features include course creation, user enrollment, authentication, and progress tracking.",
        stack: "React.js, Django, PostgreSQL",
        link: "#",
        bg: "linear-gradient(to bottom, #111, #000)"
    },
    {
        id: "02",
        title: "Pipeline RC Car",
        type: "Hardware / IoT",
        role: "Arduino, ESP32",
        year: "2024",
        desc: "Developed an RC car to monitor pipelines for surveillance purposes using Arduino, ESP32, and custom hardware integration for motor control and sensing.",
        stack: "Arduino IDE, ESP32, Sensors",
        link: "#",
        bg: "linear-gradient(to bottom, #1a1a1a, #000)"
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Projects = () => {
    return (
        <section id="projects" className="section-container">
            <div className="section-sticky-header">
                <span className="section-label font-mono">[ 02 // SELECTED WORKS ]</span>
                <h2 className="section-title font-display">Selected Works</h2>
                <p className="section-desc">Engineered systems, interactive web applications, and hardware solutions focusing on performance and architecture.</p>
                <div className="resume-link font-mono">
                    <a href="https://github.com/KarthikSundaram" target="_blank" rel="noopener noreferrer">
                        Explore on GitHub ↗
                    </a>
                </div>
            </div>

            <div className="section-content projects-content">
                {projects.map((proj) => (
                    <motion.article key={proj.id} className="project-card-wrapper" {...fadeInUp}>
                        <div className="project-header-top">
                            <h3 className="project-title font-display">
                                <a href={proj.link}>{proj.title} <span className="font-mono text-xs">[OPEN ↗]</span></a>
                            </h3>
                            <span className="project-id font-mono">[ {proj.id} ]</span>
                        </div>
                        
                        <a href={proj.link} className="project-image-container" style={{ background: proj.bg }}>
                            <div className="project-hover-btn font-mono">Inspect Code →</div>
                        </a>

                        <div className="project-details">
                            <div className="project-specs font-mono">
                                <span className="spec-label">TYPE</span>
                                <span className="spec-value">{proj.type}</span>
                                <span className="spec-label">ROLE</span>
                                <span className="spec-value">{proj.role}</span>
                                <span className="spec-label">YEAR</span>
                                <span className="spec-value">{proj.year}</span>
                            </div>
                            <div className="project-desc-container">
                                <p className="project-desc-text">{proj.desc}</p>
                                <div className="project-stack font-mono">
                                    <span className="stack-label">STACK</span>
                                    <span className="stack-value">{proj.stack}</span>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
