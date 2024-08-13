import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaAngleUp, FaAngleDown } from "react-icons/fa";
import logo from './logo.PNG';
import logoDark from './logoDark.png';

const MobileNavbar = ({ solutions }) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // state to track which dropdown is open

  const services = [
    { id: 1, title: "E-commerce Management", description: "Elevate your online store with our comprehensive e-commerce solutions, driving sales and customer satisfaction." },
    { id: 2, title: "Design", description: "From concept to creation, our design team brings your vision to life with stunning visuals and user-centric interfaces." },
    { id: 3, title: "Website Development", description: "Whether you need a simple website or a complex web application, we have the expertise to turn your ideas into reality." },
    { id: 4, title: "Mobile App Development", description: "Reach your audience on the go with custom mobile apps tailored to your business objectives." },
    { id: 5, title: "Digital Transformation", description: "Embrace the future of business with our digital transformation services, optimizing processes and driving innovation." },
    { id: 6, title: "Legacy Modernization", description: "Upgrade your outdated systems for improved performance, security, and scalability." },
    { id: 7, title: "Support & Maintenance", description: "Count on us for ongoing support and maintenance to keep your digital assets running smoothly." }
  ];

  const technologies = [
    { id: 1, title: "Web", description: "Create powerful web applications using modern web technologies." },
    { id: 2, title: "Mobile", description: "Develop mobile applications for iOS and Android platforms." },
    { id: 3, title: "Cloud", description: "Leverage the scalability and flexibility of cloud computing." }
  ];

  // Toggle the Mobile Nav open / close
  const handleMobileNavClick = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
    setOpenDropdown(null); // close all dropdowns when the nav is toggled
  };

  // Function to handle dropdown click
  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`mobileNav_container wow slideInDown ${mobileNavIsOpen ? 'mobileNav_open_bg' : ''}`} style={{ marginTop: '10px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
      <Link to="/">
        <img alt="Logo" style={{ width: '100px', height: '30px', margin: '10px' }} src={mobileNavIsOpen ? logoDark : logo} />
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
          <li
            style={{ display: 'flex', alignItems: 'center', width: '89%', justifyContent: 'space-between' }}
            onClick={() => handleDropdownClick('solutions')}
          >
            Our Solutions
            {openDropdown === 'solutions' ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          {openDropdown === 'solutions' && (
            <ul className="sublist">
              {solutions.map((solution) => (
                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/solution/${solution.id}`} key={solution.id}>
                  <li>
                    {solution.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
          <li
            style={{ display: 'flex', alignItems: 'center', width: '89%', justifyContent: 'space-between' }}
            onClick={() => handleDropdownClick('services')}
          >
            Services
            {openDropdown === 'services' ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          {openDropdown === 'services' && (
            <ul className="sublist">
              {services.map((service) => (
                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/services/${service.id}`} key={service.id}>
                  <li>
                    {service.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
          <li
            style={{ display: 'flex', alignItems: 'center', width: '89%', justifyContent: 'space-between' }}
            onClick={() => handleDropdownClick('technologies')}
          >
            Technologies
            {openDropdown === 'technologies' ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          {openDropdown === 'technologies' && (
            <ul className="sublist">
              {technologies.map((technology) => (
                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/technology/${technology.id}`} key={technology.id}>
                  <li>
                    {technology.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
