import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../hooks/animations';
import './Experience.css';

const experiences = [
    {
        role: "Full-Stack Developer Intern",
        company: "Vdart, Trichy",
        period: "May 2025 - Present",
        description: [
            "Developed an online e-learning platform with course creation, enrollment, and video hosting features.",
            "Built responsive and user-friendly interfaces using React.js.",
            "Designed and implemented backend APIs and authentication using Django and Django REST Framework.",
            "Managed database content and structures using Django Admin."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <motion.h2 className="section-title" {...fadeInUp}>Experience</motion.h2>
            <motion.div className="timeline" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                {experiences.map((exp, idx) => (
                    <motion.div key={idx} className="timeline-item" variants={fadeInUp}>
                        <div className="timeline-dot"></div>
                        <div className="experience-card">
                            <div className="experience-header">
                                <h3>{exp.role}</h3>
                                <span className="experience-period">{exp.period}</span>
                            </div>
                            <h4 className="experience-company">{exp.company}</h4>
                            <ul className="experience-details">
                                {exp.description.map((item, iIdx) => (
                                    <li key={iIdx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
