import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.h1 
                    className="hero-main-title font-display"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="block">
                        I'm Karthik <span className="text-tertiary">—</span> a BTech IT student
                    </span>
                    <span className="block text-secondary">
                        and Full-Stack Developer
                    </span>
                    <span className="block text-tertiary font-light">
                        building scalable web solutions &
                    </span>
                    <span className="block text-tertiary font-light">
                        innovative hardware.
                    </span>
                </motion.h1>
                
                <motion.blockquote 
                    className="hero-quote"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="font-mono">“Driven by a deep curiosity for how things work—both in the digital world and physical hardware.”</p>
                </motion.blockquote>
            </div>
            
            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <a href="#overview">↓</a>
            </motion.div>
        </section>
    );
};

export default Hero;
