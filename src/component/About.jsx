import React from 'react';
import { motion } from 'framer-motion';
import apt1 from '../assets/apt1.jpg';
import './About.css';

const About = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
  };

  const staggerList = {
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-image"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={apt1} alt="UrbanNest Luxury Living" />
        </motion.div>
        
        <motion.div 
          className="about-content"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="about-title">
            About UrbanNest
          </motion.h2>
          <motion.p className="about-subtitle">
            Redefining Modern Luxury Living
          </motion.p>
          <motion.p className="about-desc">
            UrbanNest represents the pinnacle of contemporary urban living, where sophisticated design meets unparalleled comfort. Our residences feature cutting-edge architecture, intelligent home technology, and world-class amenities designed for the modern elite. 
            Every detail has been meticulously crafted to create spaces that inspire excellence and elevate everyday living to extraordinary heights.
          </motion.p>
          
          <motion.div 
            className="features-list"
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="feature-item" variants={itemVariants}>
              <span className="feature-icon">📍</span>
              <div>
                <h4>Prime Locations</h4>
                <p>Strategically located in the heart of thriving urban centers</p>
              </div>
            </motion.div>
            <motion.div className="feature-item" variants={itemVariants}>
              <span className="feature-icon">🏛️</span>
              <div>
                <h4>Modern Architecture</h4>
                <p>Award-winning design with contemporary aesthetics</p>
              </div>
            </motion.div>
            <motion.div className="feature-item" variants={itemVariants}>
              <span className="feature-icon">⭐</span>
              <div>
                <h4>Premium Amenities</h4>
                <p>Exclusive facilities for discerning residents</p>
              </div>
            </motion.div>
            <motion.div className="feature-item" variants={itemVariants}>
              <span className="feature-icon">🤖</span>
              <div>
                <h4>Smart Living</h4>
                <p>Advanced technology integrated throughout</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

