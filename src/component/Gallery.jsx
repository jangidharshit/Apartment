import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import './Gallery.css';

const Gallery = () => {
  const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6
  ];

  return (
    <section id="gallery" className="gallery">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Gallery
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Beautiful moments from our luxury residences
      </motion.p>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
            <div className="gallery-overlay">
              <span>+</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

