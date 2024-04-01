import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <section className="sectionFooter wow fadeInUp">
      <div className="componentIcon">
        <h2>Bizzard</h2>
        <p>Your Ultimate Task Management Solution for Enhanced Productivity and Efficiency</p>
        <div>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <div className="componentFooter">
        <div style={{color:'#8e8e8e'}}>Services</div>
        <ul>
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
      </div>
      <div className="componentFooter">
      <div style={{color:'#8e8e8e'}}>Pages</div>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Extra</a></li>
        </ul>
      </div>
      <div className="componentFooter">
      <div style={{color:'#8e8e8e'}}>Resources</div>
        <ul>
          
            <li><a href="#">Blogs</a></li>
          
        </ul>
      </div>
    </section>
  );
};

export default Footer;
