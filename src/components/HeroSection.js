// SectionComponent.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="section-container ">
        <p className="main-heading wow fadeInUp" data-wow-delay="0.5s">Welcome to Bizzard</p>
        <p className="sub-heading wow fadeIn" data-wow-delay="0.5s">Turning Digital Snowflakes into Avalanche Success Stories!</p>
      <div className="button-container">
        <button className="centered-button wow fadeInUp" data-wow-delay="0.5s">Click me</button>
        <button className="centered-button-inverted wow fadeInUp" data-wow-delay="0.5s">Click me</button>
      </div>
    </div>
  );
};

export default HeroSection;