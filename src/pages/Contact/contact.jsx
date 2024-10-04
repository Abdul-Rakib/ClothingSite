import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p className="contact-description">
                We'd love to hear from you! Reach out to us using the information below or send us a message.
            </p>
            <div className="contact-content">
                {/* Contact Information */}
                <div className="contact-info">
                    <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <p>+91 9888884568</p>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <p>info@clothingsite.com</p>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <p>Jorethang, Sikkim, 737121</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
