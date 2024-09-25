import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YoutubeChannelVideos = () => {
  const [videos, setVideos] = useState([]);

  // API key and YouTube channel ID
  const apiKey = 'AIzaSyATrznS4XaSWBtP20ApibX3bgiASjpXN3g';
  const channelId = 'UCUvqZ3JiWs4Aj4AhK2062xQ'; // Golgotha Ministry Armoor channel ID

  // Fetch YouTube videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: apiKey,
              channelId: channelId,
              part: 'snippet',
              maxResults: 8, // You can modify the result limit
              order: 'date',  // Sort videos by date (newest first)
              type: 'video',
            }
          }
        );

        // Check if the response contains any items
        if (videoResponse.data.items) {
          setVideos(videoResponse.data.items);
        } else {
          console.error('No videos found.');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <div className="youtube-video-container">
      <h2>Golgotha Ministry Armoor Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-wrapper">
            <h3>{video.snippet.title}</h3>
            {/* Embed the YouTube video using iframe */}
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeChannelVideos;
