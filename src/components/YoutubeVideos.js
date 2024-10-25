import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronDown, FaChevronUp, FaYoutube } from 'react-icons/fa';

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
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <div className="youtube-container">
      <h1 className="youtube-title">SAMUEL MORIES ON YouTube</h1>
 
      {/* Subscribe button */}
      <div className="subscribe-btn-wrapper">
        <a
          href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
          className="subscribe-btn"
        >
          <FaYoutube className="youtube-icon" /> Subscribe
        </a>
      </div>

      {/* Featured video */}
      {featuredVideo && (
        <div className="featured-video">
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${featuredVideo.id.videoId}`}
            title={featuredVideo.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Other videos grid */}
      <div className="videos-grid">
        {otherVideos.slice(0, videosLimit).map((video) => (
          <div key={video.id.videoId} className="video-item">
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

      {/* Show more/less button */}
      <button
        className="toggle-btn"
        onClick={() => {
          setShowMoreVideos(!showMoreVideos);
          setVideosLimit(showMoreVideos ? 3 : otherVideos.length);
        }}
      >
        {showMoreVideos ? 'Show Less ' : 'Show More '}
        {showMoreVideos ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
};

export default YoutubeChannelVideos;
