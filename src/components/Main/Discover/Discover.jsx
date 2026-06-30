import React from 'react';
import './HeroBanner.css'; // Импорт отдельного CSS файла
import backgroundImage from './image_0.png'; // Предполагается, что изображение image_0.png находится в той же папке

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      {/* Секция баннера с изображением и текстом */}
      <div 
        className="hero-banner" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content">
          {/* Заголовок */}
          <h2 className="hero-headline">
            {/* Текст заголовка "The testing lab" */}
            <span className="hero-subtitle">The testing lab</span>
            {/* Текст заголовка "Discover a behind-the-scenes look at our new testing process" */}
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