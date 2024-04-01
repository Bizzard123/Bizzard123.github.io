import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
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

  return (
    <nav className={`mobileNav_container wow slideInDown ${mobileNavIsOpen ? 'mobileNav_open_bg' : ''}`} style={{marginTop:'10px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
      <Link to="/">
        <img style={{ width: '100px', height: '30px',margin:'10px' }} src={mobileNavIsOpen ? logoDark : logo} />
      </Link>
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li style={{display:'flex',alignItems:'center',width:'89%',justifyContent:'space-between'}} onClick={handleServicesClick}>
            Services
            {servicesSublistVisible ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          {servicesSublistVisible && (
            <ul className="sublist" style={{}}>
              <li>
                <Link to="/services/1">Service 1</Link>
              </li>
              <li>
                <Link to="/services/2">Service 2</Link>
              </li>
              <li>
                <Link to="/services/3">Service 3</Link>
              </li>
              <li>
                <Link to="/services/4">Service 4</Link>
              </li>
              <li>
                <Link to="/services/5">Service 5</Link>
              </li>
              <li>
                <Link to="/services/6">Service 6</Link>
              </li>
            </ul>
          )}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
