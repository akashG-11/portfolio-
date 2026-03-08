import { motion } from 'framer-motion';

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut' }
};

export const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.1
        }
    },
    viewport: { once: true }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.4 }
};
