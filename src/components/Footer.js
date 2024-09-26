import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer_logo">
                    <img src="logo/GM_Logo.png" alt="Golgotha Church Logo" />
                </div>
                <div className="contact-info">
                    <h3 className="Contact-Uscolor">Golgotha Church</h3>
                    <p><b>Contact Person:</b> Samuel &nbsp; &nbsp; <br></br> <br></br><b>Email:</b> golgothaministryarmr@gmail.com</p>
                    <p>Phone: +91 85008 15334</p>
                </div>
                <div className="social_media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} color="#F1F1F1" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="#F1F1F1" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} color="#F1F1F1" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <hr className="divider" />
                <div className="copyright-notice">
                    &copy; 2024 Golgotha Church
                </div>
            </div>
        </footer>
    );
}

export default Footer;
