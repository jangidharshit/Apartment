import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero.jpg';
import './Hero.css';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <motion.div 
        className="hero-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeInUp}>Discover UrbanNest Living</motion.h1>
        <motion.p className="subtitle" variants={fadeInUp}>Elevate your lifestyle with world-class residences</motion.p>
        <motion.p variants={fadeInUp}>
          UrbanNest offers sophisticated apartments featuring contemporary design, premium finishes, and exceptional amenities for discerning residents.
        </motion.p>
        <motion.a 
          href="#apartments" 
          className="cta-button"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Apartments
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

