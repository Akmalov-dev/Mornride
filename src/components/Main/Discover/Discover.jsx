import React from 'react';
import './Discover.css';  
import backgroundImage from './Rectangle.png';  

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
       <div 
        className="hero-banner" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content">
           <h2 className="hero-headline">
             <span className="hero-subtitle">The testing lab</span>
             <span className="hero-main-text">
              Discover a behind-the-scenes look at our new testing process
            </span>
          </h2>
        </div>
      </div>

       <div className="hero-action">
        <button className="cta-button">
          View all collection
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;