// SectionComponent.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="section-container">
      <div style={{ padding: '8px 12px', margin: '4px', borderRadius: '18px', backgroundColor: 'white', color: 'black', display: 'inline-block', border: '1px solid #ccc' }}>
    Welcome to Bizzad!
  </div>
        <p className="main-heading">Welcome to Bizzard</p>
        <p className="sub-heading">Turning Digital Snowflakes into Avalanche Success Stories!</p>
      <div className="button-container">
        <button className="centered-button">Click me</button>
        <button className="centered-button-inverted">Click me</button>
      </div>
    </div>
  );
};

export default HeroSection;