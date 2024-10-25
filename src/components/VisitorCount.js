import React, { useEffect, useState } from 'react';

function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Check local storage for existing visitor count
    const count = localStorage.getItem('visitorCount');
    if (count) {
      setVisitorCount(Number(count));
    }

    // Increment visitor count
    const newCount = visitorCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount);
  }, [visitorCount]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Website!</h1>
      <h2>Visitor Count: {visitorCount}</h2>
    </div>
  );
}

 
export default VisitorCount;
