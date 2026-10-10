import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top">
                <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span className="font-mono text-xs">Alive / Online</span>
                </div>
                <div className="footer-links font-mono">
                    <a href="https://github.com/KarthikSundaram" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/karthiksundaram" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:hello@example.com">Email</a>
                </div>
            </div>
            
            <motion.div 
                className="footer-graphic"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="huge-name font-display">KARTHIK</h1>
            </motion.div>
        </footer>
    );
};

export default Footer;
