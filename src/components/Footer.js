import React, {useState} from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import logo from "./navbar/logoDark.png"

const Footer = () => {
  const services = [
    { id: 1, title: "E-commerce Management", description: "Elevate your online store with our comprehensive e-commerce solutions, driving sales and customer satisfaction." },
    { id: 2, title: "Design", description: "From concept to creation, our design team brings your vision to life with stunning visuals and user-centric interfaces." },
    { id: 3, title: "Website Development", description: "Whether you need a simple website or a complex web application, we have the expertise to turn your ideas into reality." },
    { id: 4, title: "Mobile App Development", description: "Reach your audience on the go with custom mobile apps tailored to your business objectives." },
    { id: 5, title: "Digital Transformation", description: "Embrace the future of business with our digital transformation services, optimizing processes and driving innovation." },
    { id: 6, title: "Legacy Modernization", description: "Upgrade your outdated systems for improved performance, security, and scalability." },
    { id: 7, title: "Support & Maintenance", description: "Count on us for ongoing support and maintenance to keep your digital assets running smoothly." }
  ];
  return (
    <section className="sectionFooter wow fadeInUp">
      <div className="componentIcon">
      <img alt="Logo" style={{ width: '100px', height: '30px' }} src={logo} />
        <p>Your Ultimate Task Management Solution for Enhanced Productivity and Efficiency</p>
        <div style={{display:'flex',gap:'5px'}}>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/permalink.php?story_fbid=122099454782323208&id=61559696252735"><FaFacebook style={{height:'46px',width:'46px'}}/></a>
          <a href="#" target="_blank" rel="noreferrer"><FaTwitter style={{height:'46px',width:'46px'}}/></a>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7196770176745259008" target="_blank" rel="noreferrer"><FaLinkedin style={{height:'46px',width:'46px'}}/></a>
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
      <div style={{color:'#8e8e8e'}}>Our Solutions</div>
        <ul>
            <li><Link to="/solution/1">Sharepoints</Link></li>
            <li><Link to="/solution/2">Power Apps</Link></li>
            <li><Link to="/solution/3">O365</Link></li>
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
