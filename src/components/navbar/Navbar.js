import React, { useState } from "react";
import "./style.css";
import logo from "./logo.PNG";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from "react-router-dom";

const Dropdown = ({ items, className, basePath }) => {
  return (
    <div className={`custom-dropdown ${className}`}>
      <ul>
        {items.map((item) => (
          <Link 
            style={{ color: 'black', textDecoration: 'none' }} 
            to={`/${basePath}/${item.id}`} 
            key={item.id}
          >
            <li>
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Navbar = ({ solutions }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(prevDropdown => (prevDropdown === dropdown ? null : dropdown));
  };

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

  return (
    <nav className="navbar wow slideInDown" style={{ padding: '10px 50px' }}>
      <Link to="/">
        <img style={{ width: '100px', height: '30px', mixBlendMode: 'multiply' }} src={logo} alt="Logo" />
      </Link>
      <div>
        <ul className="menu_list">
          <li><Link style={{ color: 'black' }} to="/">Home</Link></li>
          <li
            className="dropdown"
            onClick={() => toggleDropdown('solutions')}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            Our Solutions
            {openDropdown === 'solutions' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          {openDropdown === 'solutions' && <Dropdown items={solutions} className="custom-dropdown-solution" basePath="solution" />}
          <li
            className="dropdown"
            onClick={() => toggleDropdown('services')}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            Services
            {openDropdown === 'services' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          {openDropdown === 'services' && <Dropdown items={services} className="custom-dropdown-service" basePath="services" />}
          <li
            className="dropdown"
            onClick={() => toggleDropdown('technologies')}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            Technologies
            {openDropdown === 'technologies' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          {openDropdown === 'technologies' && <Dropdown items={technologies} className="custom-dropdown-technologies" basePath="technology" />}
          <li>About</li>
          <li>Blogs</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
