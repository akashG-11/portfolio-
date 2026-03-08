import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../hooks/animations';
import './Education.css';

const education = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        major: "Information Technology",
        institution: "Kalasalingam Academy of Research and Education",
        period: "2023 - Present",
        score: "CGPA: 8.55",
        details: "Consistently maintained high academic performance and participated in technical events."
    },
    {
        degree: "Class 12th",
        institution: "Vairams Matric Hr Sec School, Pudukkottai",
        period: "2022 - 2023",
        score: "Percentage: 75.0%",
        details: "Focus on Mathematics, Physics, and Computer Science."
    }
];

const certifications = [
    "Python Programming – IIT Bombay",
    "Git, GitHub – Microsoft Learn",
    "MATLAB Simulink - Mathworks",
    "MATLAB Simscape – Mathworks"
];

const Education = () => {
    return (
        <section id="education" className="education-section">
            <motion.h2 className="section-title" {...fadeInUp}>Education & Certifications</motion.h2>
            <motion.div className="education-grid" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                <motion.div className="education-list" variants={fadeInUp}>
                    {education.map((edu, idx) => (
                        <div key={idx} className="edu-card">
                            <div className="edu-icon">
                                <GraduationCap size={24} />
                            </div>
                            <div className="edu-content">
                                <span className="edu-period">{edu.period}</span>
                                <h3>{edu.degree}</h3>
                                <h4>{edu.institution || edu.major}</h4>
                                {edu.major && edu.institution && <p className="edu-inst">{edu.institution}</p>}
                                <div className="edu-footer">
                                    <span className="edu-score">{edu.score}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div className="certifications-list" variants={fadeInUp}>
                    <h3><Award size={20} /> Certifications</h3>
                    <div className="cert-items">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="cert-item">
                                <div className="cert-dot"></div>
                                <span>{cert}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Education;
