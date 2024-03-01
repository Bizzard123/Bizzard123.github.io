// SectionComponent.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="section-container ">
        <p className="gradient-text wow fadeInDown" data-wow-delay="0.5s">Digital Marketing Design Agency</p>
        <p className="main-heading wow fadeInUp" data-wow-delay="0.5s">One Agency to Rule Them All</p>
        <p className="sub-heading wow fadeIn" data-wow-delay="0.5s">Our Priority is Attending to the Demands of Your Clientele. By developing the newest web experiences, we propel our clients quickly into the future.</p>
      <div className="button-container">
        <button className="centered-button wow fadeInUp" data-wow-delay="0.5s">Click me</button>
      </div>
    </div>
  );
};

export default HeroSection;