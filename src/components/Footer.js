// Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Column 1</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Column 2</h3>
          <ul>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>Link 6</li>
          </ul>
        </div>
        {/* <div className="footer-column form-column">
          <h3>Ask for Orders</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <button type="submit">Submit</button>
          </form>
        </div> */}
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
