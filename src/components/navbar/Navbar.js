import React, { useState } from "react";
import "./style.css";
import logo from "./logo.PNG";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from "react-router-dom";

// Define Dropdown as a separate component that receives services as props
const Dropdown = ({ services }) => {
  return (
    <div className="custom-dropdown">
      <ul>
        {/* Map through the services array to display each service title */}
        {services.map((service) => (
          <Link style={{color:'black',textDecoration:'none'}} to={`/services/${service.id}`}><li key={service.id}>
            {/* Use Link component to link to the Service Detail page */}
            {service.title}
          </li></Link>
        ))}
      </ul>
    </div>
  );
};

const Navbar = ({ services }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar wow slideInDown">
      <img style={{ width: '100px', height: '35px',mixBlendMode:'multiply' }} src={logo} alt="Logo" />
      <div>
        <ul className="menu_list">
          <li>Home</li>
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            style={{display:'flex',alignItems:'center'}}
          >
            Services
            {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {/* Pass services as props to Dropdown component */}
            {isDropdownOpen && <Dropdown services={services} />}
          </li>
          <li>About</li>
          <li>Work</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
