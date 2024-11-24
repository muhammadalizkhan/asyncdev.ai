import React from 'react';
import './Hero.scss';

export default function Hero() {
  return (
    <div className="hero-body">
      <div className="hero-content">
        <div className="hero-container">
          <p className="hero-pretitle">Optimize Your Path with Our Services</p>
          <h1 className="hero-title">
            Spark Your Evolution with Our Comprehensive 
            <span className="animated-word"> Software Development </span>
            Offerings
          </h1>
          <p className="hero-subtitle">
            As an accomplished development company, <span className="animated-asyndev">AsynDev</span> is steadfast in providing our clients with top-notch solutions of the highest quality.
          </p>
          <button className="hero-button">Book Free Consultation</button>
        </div>
      </div>
    </div>
  );
}
