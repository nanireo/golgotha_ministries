import React, { useEffect, useState } from 'react';

function VisitorCount() {
  const [visits, setVisits] = useState(0);
  const apiUrl = 'https://api.countapi.xyz/hit/golgotha-ministries.onrender.com/visits';

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setVisits(data.value);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    // Fetch visitor count when the component mounts
    fetchVisitorCount();
  }, [apiUrl]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Website!</h1>
      <h2>Visitor Count: <span>{visits}</span></h2>
    </div>
  );
}

export default VisitorCount;
