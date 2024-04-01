import React, { useState } from "react";
import "./style.css";
import { FaBars, FaTimes, FaAngleUp, FaAngleDown } from "react-icons/fa";
import logo from './logo.PNG';
import logoDark from './logoDark.png';

const MobileNavbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [servicesSublistVisible, setServicesSublistVisible] = useState(false);

  // Toggle the Mobile Nav open / close
  const handleMobileNavClick = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
  };

  // Toggle the visibility of the Services sublist
  const handleServicesClick = () => {
    setServicesSublistVisible(!servicesSublistVisible);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });

  return (
    <nav className={`mobileNav_container wow slideInDown ${mobileNavIsOpen ? 'mobileNav_open_bg' : ''}`} style={{marginTop:'10px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
      <img style={{ width: '100px', height: '30px',margin:'10px' }} src={mobileNavIsOpen ? logoDark : logo} />
      {mobileNavIsOpen ? (
        <FaTimes
          className="menu_icon"
          alt="close icon"
          onClick={handleMobileNavClick}
        />
      ) : (
        <FaBars
          className="menu_icon"
          alt="hamburger menu icon"
          onClick={handleMobileNavClick}
        />
      )}
      <div className="mobileNav_menu_container">
        <ul
          className={`${
            mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
          } mobileNav_menu_list`}
        >
          <li>Home</li>
          <li style={{display:'flex',alignItems:'center',width:'89%',justifyContent:'space-between'}} onClick={handleServicesClick}>
            Services
            {servicesSublistVisible ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          {servicesSublistVisible && (
            <ul className="sublist" style={{}}>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          )}
          <li>About</li>
          <li>Work</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
