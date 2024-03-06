import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container wow slideInDown">
      <div className="footer-links">
        <div style={{flex:'1'}} className="wow fadeInLeft">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>
        <div style={{flex:'1'}} className="wow fadeInUp">
          <h4>More Links</h4>
          <ul>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
            <li><a href="#">Link 7</a></li>
            <li><a href="#">Link 8</a></li>
          </ul>
        </div>
        <div className="right-column wow fadeInRight" data-wow-duration="2s">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* React Icons */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="icon-link"><FaFacebook className="icon" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="icon-link"><FaTwitter className="icon" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="icon-link"><FaInstagram className="icon" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin className="icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
