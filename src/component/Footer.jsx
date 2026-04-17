import React from 'react';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <a href="#home" className="footer-logo">UrbanNest</a>
          <p className="footer-desc">
            Redefining luxury urban living with impeccable design and unmatched service for the elite.
          </p>


          <div className="social-links">
            <a
              href="https://instagram.com/harshitzangid"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/harshit-jangid-125b72385"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <nav>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#apartments">Apartments</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div>
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact Info</h4>
          <ul className="footer-links">
            <li>📍 123 Luxury Street</li>
            <li>📞 +91 93511537##</li>
            <li>✉️ Proharshit541@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 UrbanNest Luxury Residences. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

