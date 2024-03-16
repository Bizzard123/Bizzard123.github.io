import React, { useState } from 'react';

const YourComponent = () => {
  const topics = [
    { title: 'Design', description: 'Our expert designers combine user-centered design principles with cutting-edge technologies to create interfaces that are not only visually stunning but also highly functional and user-friendly.', color: '#ecf0f3' },
    { title: 'Tech Wizardy', description: 'Custom Software Development Tailored software solutions to streamline operations, enhance efficiency, and drive growth.', color: '#f3e5f5' },
    { title: 'Web Enchantment', description: 'Say goodbye to boring websites and hello to digital masterpieces that will leave your audience spellbound.', color: '#feefdb' },
    { title: 'Digital Marketing', description: 'Strategic digital campaigns to boost your online presence, engage your audience, and maximize ROI.', color: '#E1F5FE' },
  ];

  const [activeTopic, setActiveTopic] = useState(0);

  const handleClick = (index) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <div className=' wow fadeInUp' style={{backgroundColor:'white',marginTop:"-30px",paddingTop:'20px',display:'flex',flexDirection:'column'}}>
      <div style={{ padding: '8px 12px',textAlign:'center', margin: '4px auto', borderRadius: '18px', backgroundColor: 'white', color: 'black', display: 'inline-block', border: '1px solid #ccc' }}>
    Services
  </div>
      <div className="section-heading" style={{ textAlign: 'center', fontSize: '30px', fontWeight: '700', margin: '20px 0' }}>
        Our Services
      </div>

      <div className="section-text" style={{ textAlign: 'center', fontSize: '20px', margin: '0 10%',fontWeight:'400',color:'#383838' }}>
      <p>Ready to Join the Magic Show? Take the first step towards digital success with Bizzard.</p><p>
Contact us today to kickstart your digital adventure, or just swing by for a chat and some virtual coffee. The stage is set – are you ready to steal the spotlight?
</p>
      </div>

      <div className="section" style={{ backgroundColor: 'white', paddingTop: '50px', paddingBottom: '100px' }}>
        <div className="left-column" style={{ minHeight: '500px' }}>
          {topics.map((topic, index) => (
            <div key={index} className="topic-container">
              <div
                className={`topic ${activeTopic === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
                style={{ backgroundColor: activeTopic === index ? topic.color : 'transparent' }}
              >
                {topic.title}
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
        <div className={`right-column ${activeTopic !== null ? 'active' : ''}`}>
          {activeTopic !== null && (
            <div className="description" style={{ backgroundColor: topics[activeTopic].color }}>
              <h2>{topics[activeTopic].title}</h2>
              <p>{topics[activeTopic].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
