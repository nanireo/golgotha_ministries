import React, { useEffect, useState } from 'react';

function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Fetch visitor count from CountAPI and increment it
    fetch('https://api.countapi.xyz/hit/golgotha-ministries.onrender.com//visitorCount')
      .then((response) => response.json())
      .then((data) => {
        setVisitorCount(data.value);
      })
      .catch((error) => console.error('Error fetching visitor count:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Website!</h1>
      <h2>Visitor Count: {visitorCount}</h2>
    </div>
  );
}

export default VisitorCount;
