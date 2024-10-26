import React, { useEffect, useState } from 'react';

function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Define the callback function
    window.cb = (response) => {
      setVisitorCount(response.value);
    };

    // Load the CountAPI script
    const script = document.createElement('script');
    script.src = 'https://api.countapi.xyz/hit/golgotha-ministries.onrender.com/visits?callback=cb';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
      delete window.cb; // Clean up the callback function
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Website!</h1>
      <h2>Visitor Count: {visitorCount}</h2>
    </div>
  );
}

export default VisitorCount;
