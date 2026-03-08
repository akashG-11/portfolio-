import React from 'react';
import { ExternalLink, Github, Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../hooks/animations';
import './Projects.css';

const projects = [
    {
        title: "E-Learning Platform",
        description: "A full-stack web application designed to deliver online courses and learning content. Features include course creation, user enrollment, authentication, and progress tracking.",
        tech: ["React.js", "Django", "REST Framework", "PostgreSQL"],
        links: { github: "#", external: "#" },
        icon: Code2,
        type: "Full-Stack"
    },
    {
        title: "Pipeline Surveillance RC Car",
        description: "Developed an RC car to monitor pipelines for surveillance purposes using Arduino, ESP32, and custom hardware integration for motor control and sensing.",
        tech: ["Arduino IDE", "ESP32", "Hardware Integration", "Sensors"],
        links: { github: "#", external: "#" },
        icon: Cpu,
        type: "Hardware / IoT"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.h2 className="section-title" {...fadeInUp}>Featured Projects</motion.h2>
            <motion.div className="projects-grid" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                {projects.map((project, idx) => (
                    <motion.div key={idx} className="project-card" variants={fadeInUp}>
                        <div className="project-header">
                            <div className="project-type">{project.type}</div>
                            <div className="project-links">
                                <a href={project.links.github} aria-label="GitHub"><Github size={18} /></a>
                                <a href={project.links.external} aria-label="Visit site"><ExternalLink size={18} /></a>
                            </div>
                        </div>

                        <div className="project-body">
                            <project.icon size={32} className="project-main-icon" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>

                        <div className="project-footer">
                            <div className="tech-stack">
                                {project.tech.map((t, tIdx) => (
                                    <span key={tIdx} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
