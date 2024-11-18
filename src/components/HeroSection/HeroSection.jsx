import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="content">
          <h1>Explore Dream Destination</h1>
          <p>
            It encourages exploration of unfamiliar territories, embracing diverse cultures
            and landscapes, while pursuing the desired destination that captivates the heart
            and ignites a sense of wonder.
          </p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
