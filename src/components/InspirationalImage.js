import React from 'react';
 
const InspirationalImage = () => {
  return (
    <div className="bible-widgets">
      <h2>Inspirational Image of the Day Widget</h2>
      <div className="widget">
      <iframe
    src="https://www.kingjamesbibleonline.org/inspiring-images-widget.php"
    style={{
        width: '344px',
        height: '344px',
        border: '0',
        borderRadius: '8px', // Rounded corners
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Shadow for depth
        backgroundColor: '#000000', // Background color (if supported)
    }}
    title="Inspiring Images"
></iframe>

      </div>
    </div>
  );
};

export default InspirationalImage;
