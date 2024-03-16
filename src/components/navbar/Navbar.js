import React, { useState } from "react";
import "./style.css";
import logo from "./logo.jpeg";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Dropdown = () => {
  return (
    <div className="custom-dropdown">
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar wow slideInDown">
      <img style={{ width: '167px', height: '30px' }} src={logo} />
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
            {isDropdownOpen && <Dropdown />}
          </li>
          <li>About</li>
          <li>Work</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
