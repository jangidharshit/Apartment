import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import apt1 from '../assets/apt1.jpg';
import apt2 from '../assets/apt2.jpg';
import apt3 from '../assets/apt3.jpg';
import apt4 from '../assets/apt4.jpg';
import './Apartments.css';

const Apartments = () => {
  const apartments = [
    {
      image: apt1,
      title: 'Penthouse Suite',
      price: '₹7,00,000 / mo',
      desc: '3 bedrooms • 250 sqm • Skyline view • Fully furnished'
    },
    {
      image: apt2,
      title: 'Executive Residence',
      price: '₹5,15,000 / mo',
      desc: '2 bedrooms • 180 sqm • Balcony • Smart home system'
    },
    {
      image: apt3,
      title: 'Luxury Studio',
      price: '₹3,15,000 / mo',
      desc: '1 bedroom • 95 sqm • Modern design • Gym access'
    },
    {
      image: apt4,
      title: 'Family Apartment',
      price: '₹4,90,000 / mo',
      desc: '3 bedrooms • 210 sqm • Garden terrace • Parking included'
    }
  ];

  return (
    <section id="apartments" className="apartments">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Available Apartments
      </motion.div>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Choose your perfect home from our exclusive collection
      </motion.p>
      
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1400: { slidesPerView: 4 }
        }}
        className="apt-swiper"
      >
        {apartments.map((apt, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className="apt-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <img src={apt.image} alt={apt.title} className="apt-image" />
              <div className="apt-content">
                <h3 className="apt-title">{apt.title}</h3>
                <div className="apt-price">{apt.price}</div>
                <p className="apt-desc">{apt.desc}</p>
                <a href="#contact" className="apt-cta">
                  View Details →
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Apartments;

