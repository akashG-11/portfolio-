import React from 'react';
import { motion } from 'framer-motion';
import './Overview.css';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const Overview = () => {
    return (
        <section id="overview" className="section-container">
            <div className="section-sticky-header">
                <span className="section-label font-mono">[ 01 // OVERVIEW ]</span>
                <h2 className="section-title font-display">Background</h2>
                <p className="section-desc">Where I’ve worked, learned, and built.</p>
                <div className="resume-link font-mono">
                    <a href="/karthik_sundaram.pdf" target="_blank" rel="noopener noreferrer">
                        [ Open Curriculum Vitae ] ↗
                    </a>
                </div>
            </div>

            <div className="section-content">
                <motion.div className="overview-group" {...fadeInUp}>
                    <h3 className="overview-title">Experience</h3>
                    <div className="overview-list">
                        <div className="overview-item">
                            <div className="overview-item-header">
                                <span className="item-role">Full-Stack Developer Intern</span>
                                <span className="item-date font-mono">May 2025 - Present</span>
                            </div>
                            <span className="item-company font-mono">Vdart, Trichy</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="overview-group" {...fadeInUp}>
                    <h3 className="overview-title">Education</h3>
                    <div className="overview-list">
                        <div className="overview-item">
                            <div className="overview-item-header">
                                <span className="item-role">B.Tech Information Technology</span>
                                <span className="item-date font-mono">2023 - Present</span>
                            </div>
                            <span className="item-company font-mono">Kalasalingam Academy of Research and Education · CGPA: 8.55</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="overview-group" {...fadeInUp}>
                    <h3 className="overview-title">Skills</h3>
                    <div className="overview-list">
                        <div className="overview-item">
                            <span className="item-role">Programming & Web</span>
                            <span className="item-desc">Python, Django, React.js, JavaScript, HTML/CSS</span>
                        </div>
                        <div className="overview-item">
                            <span className="item-role">Databases & Tools</span>
                            <span className="item-desc">MySQL, Git/GitHub, Figma, Arduino IDE</span>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div className="overview-group" {...fadeInUp}>
                    <h3 className="overview-title">Certifications</h3>
                    <div className="overview-list">
                        <div className="overview-item">
                            <span className="item-role">Python Programming</span>
                            <span className="item-company font-mono">IIT Bombay</span>
                        </div>
                        <div className="overview-item">
                            <span className="item-role">Git, GitHub</span>
                            <span className="item-company font-mono">Microsoft Learn</span>
                        </div>
                        <div className="overview-item">
                            <span className="item-role">MATLAB Simulink & Simscape</span>
                            <span className="item-company font-mono">Mathworks</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Overview;
