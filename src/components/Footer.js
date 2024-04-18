import React, {useState} from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  const [services, setServices] = useState([
    { id: 1, title: 'Design', description: 'Description for Service 1' },
    { id: 2, title: 'Web Development', description: 'Description for Service 2' },
    { id: 3, title: 'Mobile App Dev', description: 'Description for Service 1' },
    { id: 5, title: 'Cloud Services', description: 'Description for Service 2' },
    { id: 6, title: 'Custom Softwares', description: 'Description for Service 3' }
  ]);
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
        {services.map((service) => (
          <Link style={{color:'white',textDecoration:'none'}} to={`/services/${service.id}`}><li key={service.id+1}>
            {/* Use Link component to link to the Service Detail page */}
            {service.title}
          </li></Link>
        ))}
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
