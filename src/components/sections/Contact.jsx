import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../hooks/animations';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <section id="contact" className="contact-section">
            <motion.h2 className="section-title" {...fadeInUp}>Get In Touch</motion.h2>
            <motion.div className="contact-grid" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                <motion.div className="contact-info" variants={fadeInUp}>
                    <h3>Let's collaborate on something great.</h3>
                    <p>
                        I'm currently looking for internships and new opportunities.
                        Whether you have a question or just want to say hi, I'll try
                        my best to get back to you!
                    </p>

                    <div className="info-items">
                        <div className="info-item">
                            <Mail size={20} />
                            <div>
                                <span>Email</span>
                                <p>akashkarthi10g@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone size={20} />
                            <div>
                                <span>Phone</span>
                                <p>+91 9344650044</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin size={20} />
                            <div>
                                <span>Location</span>
                                <p>Pudukkottai, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeInUp}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message <Send size={18} />
                    </button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default Contact;
