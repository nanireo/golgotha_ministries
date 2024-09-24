import React from 'react';

const MapLink = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* <h2>Bhaskar Medical College Location</h2> */}
      
      <a
        href="https://www.google.com/maps/dir//Bhaskar+Medical+College+Survey+No.+156+To+162,+Amdapur+X+Road,+Yenkapally,+Moinabad,+Ranga+Reddy+Hyderabad,+Telangana+500075/@17.3319252,78.2990225,1364m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bcb95517668fe55:0x8d0462ff27d44cd9!2m2!1d78.2990225!2d17.3319252?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <img
          src="https://maps.googleapis.com/maps/api/staticmap?center=17.3319252,78.2990225&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:B%7C17.3319252,78.2990225"
          alt="Bhaskar Medical College Map"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', border: '1px solid #ccc' }}
        /> */}
      </a>

      {/* Optionally Embed Google Map */}
      <div style={{ marginTop: '20px' }}>
        <iframe
          title="Bhaskar Medical College Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.4954360750298!2d78.2990225!3d17.3319252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95517668fe55%3A0x8d0462ff27d44cd9!2sBhaskar%20Medical%20College!5e0!3m2!1sen!2sin!4v1694592687712!5m2!1sen!2sin"
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



























