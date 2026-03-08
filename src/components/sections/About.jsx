import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../hooks/animations';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.h2 className="section-title" {...fadeInUp}>About Me</motion.h2>
            <motion.div className="about-content" {...fadeInUp}>
                <div className="about-text">
                    <p>
                        I am a <span className="text-highlight">BTech IT student</span> at Kalasalingam Academy of Research and Education,
                        driven by a deep curiosity for how things work—both in the digital world and physical hardware.
                        My journey in tech began with a curiosity for problem-solving, which led me to master
                        <span className="text-highlight"> Python</span>, <span className="text-highlight">React</span>, and <span className="text-highlight">MySQL</span>.
                    </p>
                    <p>
                        During my internship at <span className="text-highlight">Vdart</span>, I had the opportunity to build a scaleable
                        e-learning platform, transforming complex requirements into user-friendly interfaces and robust backends
                        using Django.
                    </p>
                    <p>
                        I believe in the power of continuous learning. Whether it's developing an RC car for pipeline surveillance
                        or optimizing a database, I approach every challenge with a focus on efficiency, scalability, and
                        practicality.
                    </p>
                </div>

                <div className="about-stats">
                    <div className="stat-card">
                        <h3>8.55</h3>
                        <span>Current CGPA</span>
                    </div>
                    <div className="stat-card">
                        <h3>2+</h3>
                        <span>Years of Coding</span>
                    </div>
                    <div className="stat-card">
                        <h3>10+</h3>
                        <span>Projects Built</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
