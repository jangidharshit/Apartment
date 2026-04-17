import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import About from "../component/About";
import Features from '../component/Features';
import Apartments from '../component/Apartments';
import Gallery from '../component/Gallery';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Apartments />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

