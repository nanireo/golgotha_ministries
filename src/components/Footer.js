import React from 'react';

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer_logo">
                <img src="logo/main_logo.png" alt="Logo" />
            </div>
            <div className="social_media">
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="icons/facebook.png" alt="Facebook" />
                </a> */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="icons/x.png" alt="Twitter" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="icons/Emailicon.png" alt="Instagram" />
                </a>
            </div>
        </div>
    
        <hr className="divider" />
    
        <div className="info-container">
            <div className="contact-info">
                <h3 className="Contact-Uscolor">Contact Us</h3>
                <p>Campus: Bhaskar Medical College & Bhaskar General Hospital</p>
                <p>Bhaskar Nagar, Moinabad Mandal</p>
                <p>R.R. District, Hyderabad</p>
                <p>Telangana State, India-500075</p>
                <p>Phone: 9876543210, 9876543211</p>
                <p>Fax: 08413-235446</p>
                <p>Email: principal.bhaskarmc@gmail.com</p>
            </div>
    
            <div className="corporate-office-info">
                <h3 className="Contact-Uscolor">Corporate Office</h3>
                <p>Bhaskar Plaza, Beside CARE Banjara Hospital</p>
                <p>4th Floor, Road No.1, Banjara Hills</p>
                <p>Hyderabad - 500 034</p>
                <p>Phone: 40 2330 1523, 40 2339 1979</p>
                <p>Mobile: 92463 70069, 99491 64876</p>
            </div>
        </div>
    
        <div className="footer-bottom">
            <hr className="divider" />
            <div className="copyright-notice">
                &copy; 2024 Bhaskar Medical College & General Hospital
            </div>
        </div>
    </footer>
    
    );
}

export default Footer;
