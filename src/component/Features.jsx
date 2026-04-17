import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🏛️',
      title: 'Luxury Living',
      desc: 'Experience unparalleled comfort with our premium materials and exquisite design details throughout every apartment.'
    },
    {
      icon: '🤖',
      title: 'Smart Homes',
      desc: 'Control your home with voice commands, automated lighting, climate control, and advanced security systems.'
    },
    {
      icon: '🏋️',
      title: 'Fitness Center',
      desc: 'State-of-the-art gym with personal trainers, spa, sauna, and wellness programs just steps from your door.'
    },
    {
      icon: '🔒',
      title: '24/7 Security',
      desc: 'Advanced security systems, 24-hour concierge, surveillance, and gated access for complete peace of mind.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="features" className="features">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Premium Features
      </motion.div>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Why choose UrbanNest for your luxury lifestyle
      </motion.p>
      
      <motion.div 
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="feature-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;



