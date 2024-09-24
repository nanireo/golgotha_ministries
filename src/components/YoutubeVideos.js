import React from 'react';

const YoutubeVideos = () => {
  // Array of video IDs from the channel
  const videoIds = [
    'YjQpo2Ofn5g', // Example Video 1
    '_A2X4GPiFVw', // Example Video 2
    'mT4kn2bpdHU',    // Example Video 3
    'DdpYhmwRbOo'
  ];

  return (
    <div className="youtube-video-container">
      <h2>Golgotha Ministry Videos</h2>
      <div className="video-grid">
        {videoIds.map((videoId, index) => (
          <div key={index} className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
