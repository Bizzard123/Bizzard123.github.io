// HamburgerButton.js
import React from 'react';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <div className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default HamburgerButton;
