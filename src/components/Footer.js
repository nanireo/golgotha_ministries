import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
// import VisitorCount from './VisitorCount';



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
                    <p>Phone: +91 8309439956</p>
                </div>
                <div className="social_media">
                    <a href="https://www.facebook.com/Golgothaministriesarmoor" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} color="#F1F1F1" />
                    </a>
                    <a href="https://www.instagram.com/golgotha_ministries_official/profilecard/?igsh=d2JjbzY2cjdpbXFn" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="#F1F1F1" />
                    </a>
                    <a href="https://youtube.com/@golgothaministryarmoor?si=ETmxZNb6MCvTRIbw" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} color="#F1F1F1" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <hr className="divider" />
                <div className="copyright-notice"> 
                &copy; 2024 Golgotha Church &nbsp;&nbsp;&nbsp; <br></br><br></br> Powered By  &nbsp;
                <a href="https://www.n-reo.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                    N-Reo Software Solutions
                </a>
                {/* <div>
                    <VisitorCount />
                </div> */}
                </div>

            </div>
        </footer>
    );
}

export default Footer;
