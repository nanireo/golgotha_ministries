import React, { useEffect } from 'react';

function VisitorCount() {
  useEffect(() => {
    // Create a callback function to handle the response
    window.cb = (response) => {
      document.getElementById('visits').innerText = response.value;
    };

    // Load the CountAPI script
    const script = document.createElement('script');
    script.src = 'https://api.countapi.xyz/hit/golgotha-ministries.onrender.com/visits?callback=cb';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
      delete window.cb; // Clean up the callback reference
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Website!</h1>
      <h2>Visitor Count: <span id="visits">0</span></h2>
    </div>
  );
}

export default VisitorCount;
 