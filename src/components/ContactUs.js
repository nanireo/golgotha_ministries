import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import the phone icon
import ContactForm from './Contactform';
import MapLink from './MapLink';
 
const ContactUs = () => {
  return (
    <main>
      <div className="contact-container">
        <h2>Contact Us</h2>

        <div className="contact-infob">
          <div className="info-item">
            <h3>Church Name:</h3>
            <p>Golgotha Church</p>
          </div>

          <div className="info-item">
            <h3>Contact Person:</h3>
            <p>Samuel</p>
          </div>

          <div className="info-item">
            <h3>Email:</h3>
            <p><a href="mailto:golgothaministryarmr@gmail.com">golgothaministryarmr@gmail.com</a></p>
          </div>

          <div className="info-item">
            <h3>Phone:</h3>
            <p>
              <a href="tel:+918309439956" className="phone-link">
              +91 85008 15334

                <span className="phone-icon">
                  <FaPhone />
                </span>
              </a>
            </p>
          </div>

          <div className="info-item">
            <h3>Location:</h3>
            <p>
              <a href="https://maps.app.goo.gl/mDJjv5AEaU9taGhd7" target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>

      <div>
        <MapLink />
      </div>
    </main>
  );
};

export default ContactUs;
