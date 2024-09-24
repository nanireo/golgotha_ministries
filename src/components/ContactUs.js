import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-info">
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
          <p><a href="tel:+918500815334">+91 85008 15334</a></p>
        </div>

        <div className="info-item">
          <h3>Location:</h3>
          <p><a href="https://maps.app.goo.gl/mDJjv5AEaU9taGhd7" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
