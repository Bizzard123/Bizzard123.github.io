// SectionComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ onButtonClick }) => {
  return (
    <div className="section-container  wow fadeInUp">
      <div className="content">
        <div className="text-content">
          <div style={{ padding: '8px 12px', margin: '4px', borderRadius: '18px', backgroundColor: 'white', color: 'black', display: 'inline-block', border: '1px solid #ccc' }}>
            Welcome to Bizzard!
          </div>
          <p className="main-heading">Welcome to Bizzard: Crafting Digital Excellence</p>
          <p className="sub-heading">At Bizzard, we believe in more than just creating websites and web apps – we're dedicated to crafting digital solutions that propel your business forward. Our team specializes in custom website and Web/Mobile app development, leveraging cutting-edge technologies alongside Microsoft applications such as SharePoint, Automate, and Power Apps. With a keen eye for innovation and a passion for problem-solving, we're here to revolutionize your digital presence.</p>
          <div className="button-container">
          <Link to="/call">
            <button className="centered-button" href='/call'>Schedule a Call</button>
            </Link>
            <button className="centered-button-inverted" onClick={onButtonClick}>Get in Touch</button>
          </div>
        </div>
        <div className="image-content">
          <img src="/hero.jpeg" alt="Hero" style={{ maxWidth: '100%', height: '90%' }} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
