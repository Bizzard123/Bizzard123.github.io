// Navbar.js
import React, { useState } from 'react';
import CustomDropdown from '../CustomDropdown';
import HamburgerButton from '../Hamburger';
import logo from "./logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''} wow fadeInDown`}>
        <img style={{width:'150px',height:'40px'}} src={logo}/>
      <div className="menu-button" onClick={toggleMenu}>
        <a className="menu-text">
          {isMenuOpen ? 'Close' : 'Menu'}
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </a>
      </div>
      {isMenuOpen && <CustomDropdown />}
    </nav>
  );
};

export default Navbar;
