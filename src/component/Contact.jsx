import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('Thank you! We\'ll be in touch soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Ready to discover your new home? Let's talk about your dream apartment.
                    </motion.p>

                    <div className="contact-info">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h4>Visit Us</h4>
                                <p>123 Luxury Street<br />Jaipur,Rajasthan</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-text">
                                <h4>Call Us</h4>
                                <p>+91 93511537##</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-text">
                                <h4>Email</h4>
                                <a href="Proharshit541@gmail.com">Proharshit541@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                    {status && (
                        <motion.p
                            style={{ marginTop: '1rem', color: '#d4af37', fontWeight: 500 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {status}
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;

