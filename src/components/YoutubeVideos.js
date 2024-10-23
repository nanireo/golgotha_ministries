import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for show more/less
import { FaYoutube } from 'react-icons/fa'; // YouTube icon for the subscribe button

const YoutubeChannelVideos = () => {
  const [featuredVideo, setFeaturedVideo] = useState(null);
  const [otherVideos, setOtherVideos] = useState([]);
  const [videosLimit, setVideosLimit] = useState(3);
  const [showMoreVideos, setShowMoreVideos] = useState(false);

  const apiKey = 'AIzaSyDwik4Q41czZQPe0ke6zcIHFW6Wu7YmnIU'; // Replace with your API key
  const channelId = 'UCUvqZ3JiWs4Aj4AhK2062xQ'; // Replace with your channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: apiKey,
              channelId: channelId,
              part: 'snippet',
              maxResults: 10,
              order: 'date',
              type: 'video',
            }
          }
        );

        const videos = videoResponse.data.items;

        if (videos && videos.length) {
          setFeaturedVideo(videos[0]); // Set the first video as the featured video
          setOtherVideos(videos.slice(1)); // Remaining videos in the list
        } else {
          console.log('No videos found.');
        }
      } catch (error) {
        if (error.response) {
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <div className="youtube-video-container">
      <h1 style={{ fontSize: '32px', color: '#ffffff', textAlign: 'center' }}>YouTube</h1>
    
      <h1>SAMUEL MORIES ON YouTube</h1>

      {/* Subscribe button */}
      <div className="subscribe-button-container">
        <a
          href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
          className="subscribe-button"
        >
          <FaYoutube className="youtube-icon" /> Subscribe
        </a>
      </div>

      <div className="video-section">
        <div className="video-row">
          {/* Featured (big) video */}
          <div className="featured-video-wrapper">
            {featuredVideo && (
              <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${featuredVideo.id.videoId}`}
                title={featuredVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Smaller videos */}
          <div className="small-videos-wrapper">
            {otherVideos.slice(0, videosLimit).map((video) => (
              <div key={video.id.videoId} className="video-wrapper">
                <iframe
                  width="100%"
                  height="150"
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
      </div>

      <button 
        className="show-more-btn" 
        onClick={() => {
          setShowMoreVideos(!showMoreVideos);
          setVideosLimit(showMoreVideos ? 3 : otherVideos.length);
        }}>
        {showMoreVideos ? 'Show Less ' : 'Show More '}
        {showMoreVideos ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
};

export default YoutubeChannelVideos;
