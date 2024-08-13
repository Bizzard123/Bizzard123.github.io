import React, { useState } from 'react';
import { FaHandHoldingUsd, FaShoppingCart, FaPencilAlt, FaDesktop, FaMobileAlt, FaCog, FaTools } from "react-icons/fa";

const YourComponent = () => {
  const topics = [
    { id: 1, title: 'E-commerce', description: 'Elevate your online store with our comprehensive e-commerce solutions, driving sales and customer satisfaction.', color: '#ecf0f3', image: 'https://img.freepik.com/free-vector/shopping-mobile-app-online-store-service-smartphone-application-internet-purchase-making-order-customer-cartoon-character-adding-product-cart_335657-2557.jpg?t=st=1716156341~exp=1716159941~hmac=b0e22a37e20f2a349d4d72ce9d2c231509793750e1a78bd9a1241fe13f5d73a3&w=740', icon: FaShoppingCart },
    { id: 2, title: 'Design', description: 'From concept to creation, our design team brings your vision to life with stunning visuals and user-centric interfaces.', color: '#feefdb', image: 'https://img.freepik.com/free-vector/ui-ux-design-concept-illustration_114360-10973.jpg?t=st=1716157896~exp=1716161496~hmac=d6e51e128659808a41ba406b04c75434eb5a1ff8abbb1e8ed092ab8017e671d7&w=740', icon: FaPencilAlt },
    { id: 3, title: 'Website Development', description: 'Whether you need a simple website or a complex web application, we have the expertise to turn your ideas into reality.', color: '#E1F5FE', image: 'https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-3454.jpg?t=st=1716157922~exp=1716161522~hmac=924848af03735d6a197ad9b7d8325ddbe2d2f48a9673868de4dd27136616eb61&w=740', icon: FaDesktop },
    { id: 4, title: 'Mobile App Development', description: 'Reach your audience on the go with custom mobile apps tailored to your business objectives.', color: '#f3e5f5', image: 'https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-10976.jpg?t=st=1716157973~exp=1716161573~hmac=e9c0eccd4d37bfab81fcae2a15f698a7b07eed8f9a0de69c24bccb8b2db7218b&w=740', icon: FaMobileAlt },
    { id: 5, title: 'Digital Transformation', description: 'Embrace the future of business with our digital transformation services, optimizing processes and driving innovation.', color: '#ecf0f3', image: 'https://img.freepik.com/free-vector/saas-technology-abstract-concept-illustration_335657-2274.jpg?t=st=1716157996~exp=1716161596~hmac=2daf9cadb7720a0bf47d8e725d3f0d01c87ef818249b8e87902577e171505b4f&w=740', icon: FaCog },
    { id: 6, title: 'Legacy Modernization', description: 'Upgrade your outdated systems for improved performance, security, and scalability.', color: '#feefdb', image: 'https://img.freepik.com/free-vector/tech-company-concept-illustration_114360-9729.jpg?t=st=1716157854~exp=1716161454~hmac=ad1229ab2f11f13b47d1ee0a119e11f667876cc05f63ec23cb225176d76be1b8&w=740', icon: FaTools },
    { id: 7, title: 'Support & Maintenance', description: 'Count on us for ongoing support and maintenance to keep your digital assets running smoothly.', color: '#E1F5FE', image: 'https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1716157424~exp=1716161024~hmac=d3e80137eca98f7829776d92c1a9a5201d68f91fd2d4dd1698ec2df4d45b184b&w=740', icon: FaTools },
  ];

  const [activeTopic, setActiveTopic] = useState(0);

  const handleClick = (index) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <div className='wow fadeInUp' style={{ padding: '5%', backgroundColor: 'white', marginTop: "-30px", paddingTop: '20px', display: 'flex', flexDirection: 'column' }}>
      <div className='chips'>
        <FaHandHoldingUsd />{" "}Services
      </div>
      <div className="section-heading">
        Our Services
      </div>

      <div className="section-text">
        <p>Ready to Join the Magic Show? Take the first step towards digital success with Bizzard.</p>
        <p>Contact us today to kickstart your digital adventure, or just swing by for a chat and some virtual coffee. The stage is set – are you ready to steal the spotlight?</p>
      </div>

      <div className="section" style={{ backgroundColor: 'white', paddingTop: '50px', paddingBottom: '100px', display: 'flex' }}>
        <div className="left-column" style={{ minHeight: '500px' }}>
          {topics.map((topic, index) => (
            <div key={index} className="topic-container">
              <div
                className={`topic ${activeTopic === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
                style={{ backgroundColor: activeTopic === index ? topic.color : 'transparent', cursor: 'pointer' }}
              >
                <span style={{fontSize:'22px',gap:'5px',display:'flex',alignItems:'center'}}>{topic.icon()}{" "}
                <span>{topic.title}</span></span>
                <br />
                {activeTopic === index && (
                  <span className="topic-description">
                    {topic.description}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={`right-column ${activeTopic !== null ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
          {activeTopic !== null && (
            <div className="description" style={{ backgroundColor: topics[activeTopic].color, textAlign: 'center', padding: '5px' }}>
              <img src={topics[activeTopic].image} alt={topics[activeTopic].title} style={{marginTop: '5px' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
