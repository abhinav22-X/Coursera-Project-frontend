import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import SocialMediaLinks from '../../pages/SocialMediaLinks/SocialMediaLinks';

function Home({ searchResults }) {  // Receive searchResults as prop
  return (
    <div>
      <HeroSection />
      <SocialMediaLinks />
  
      {/* Render search results */}
      {searchResults.length > 0 ? (
        <div className="results-box">
          {searchResults.map((result, index) => (
            <div key={index} className="result-item">
              <img src={result.image} alt={result.name} />
              <h3>{result.city}, {result.name}</h3>
              <p>{result.description}</p>
              <button className="visit-btn">Visit</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">No results found</div>  // Display if no results are found
      )}
    </div>
  );
}

export default Home;
