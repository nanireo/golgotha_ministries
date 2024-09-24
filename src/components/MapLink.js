import React from 'react';

const MapLink = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Optionally Embed Google Map */}
      <div style={{ marginTop: '20px' }}>
        <iframe
          title="Bhaskar Medical College Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.787796744373!2d78.28627237386722!3d18.80246596050529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc008dfc5f567%3A0x2023b81a2e048e5a!2sGolgotha%20Church!5e1!3m2!1sen!2sus!4v1727173236206!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: '0', width: '100%', borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapLink;
