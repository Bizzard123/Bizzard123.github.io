import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
          {[...Array(5)].map((_, index) => (
            <li key={index}><a href="#">Link {index + 1}</a></li>
          ))}
        </ul>
      </div>
      <div className="componentFooter">
      <div style={{color:'#8e8e8e'}}>Pages</div>
        <ul>
          {[...Array(5)].map((_, index) => (
            <li key={index}><a href="#">Link {index + 6}</a></li>
          ))}
        </ul>
      </div>
      <div className="componentFooter">
      <div style={{color:'#8e8e8e'}}>Others</div>
        <ul>
          {[...Array(5)].map((_, index) => (
            <li key={index}><a href="#">Link {index + 11}</a></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
