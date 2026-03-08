import React from 'react';
import { motion } from 'framer-motion';
import {
    FileCode2, Database, Layout, GitBranch,
    Cpu, Figma, Github, Terminal
} from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../../hooks/animations';
import './Skills.css';

const skillGroups = [
    {
        title: "Programming & Web",
        skills: [
            { name: "Python / Django", icon: FileCode2, level: 90 },
            { name: "React.js", icon: Layout, level: 85 },
            { name: "HTML / CSS", icon: FileCode2, level: 95 },
            { name: "JavaScript", icon: FileCode2, level: 80 }
        ]
    },
    {
        title: "Databases & Tools",
        skills: [
            { name: "MySQL", icon: Database, level: 85 },
            { name: "Git / GitHub", icon: GitBranch, level: 90 },
            { name: "Figma", icon: Figma, level: 75 },
            { name: "Arduino IDE", icon: Cpu, level: 80 }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <motion.h2 className="section-title" {...fadeInUp}>Skills & Tools</motion.h2>
            <motion.div className="skills-grid" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                {skillGroups.map((group, idx) => (
                    <motion.div key={idx} className="skill-group" variants={fadeInUp}>
                        <h3>{group.title}</h3>
                        <div className="skill-items">
                            {group.skills.map((skill, sIdx) => (
                                <motion.div key={sIdx} className="skill-card" variants={scaleIn}>
                                    <div className="skill-header">
                                        <skill.icon size={20} className="skill-icon" />
                                        <span>{skill.name}</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <motion.div
                                            className="skill-bar-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
