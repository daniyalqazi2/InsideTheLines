import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Episodes.css';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Fetch episodes data
    fetch('/api/episodes')
      .then(response => response.json())
      .then(data => setEpisodes(data));
  }, []);

  return (
    <div className="episodes">
      <h2>All Episodes</h2>
      <div className="episode-list">
        {episodes.map(episode => (
          <div key={episode.id} className="episode">
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
            <Link to={`/episodes/${episode.id}`} className="listen-button">Listen Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
