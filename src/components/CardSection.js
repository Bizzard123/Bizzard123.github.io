import React from 'react';


const cardContents = [
  {
    title: 'Idea',
    description: 'We meet with your team to learn more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.',
    color: '#f1f8e9'
  },
  {
    title: 'Research',
    description: 'We will share a detailed questionnaire to analyze your business in-depth. After that, we will be able to create a tailor-made design to reach your business goals.',
    color:'#ecf0f3'
  },
  {
    title: 'Web Design',
    description: 'We will design a mockup or prototype of your website and present it to you. Once with the initial mockup, we will start the revision process to perfect it.',
    color:'#f3e5f5'
  },
  {
    title: 'Development',
    description: 'We develop websites using the best practices and standards. So you have a perfectly responsive, SEO-friendly, and highly conversion-oriented website.',
    color:'#feefdb'
  },
  {
    title: 'Launch',
    description: 'When the project is completed, we will schedule a 2hr session to train your team on using, editing, and taking advantage of your new website.',
    color:'#E1F5FE'
  },
  {
    title: "Support",
    description: "We keep a close relationship and communication with your team so we can help you with future design or development needs in the long term.",
    color:'#ecf0f3'
  }
];

const Card = ({ title, description, index, color }) => {
  const topValue = 30 + index * 20;

  const cardStyle = {
    width: '95%',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    position: 'sticky',
    top: `${topValue}px`,
    backgroundColor: `${color}`,
    border:`1px solod ${color}`
  };

  return (
    <div className="" style={cardStyle}>
      <div className="card-content1">
        <h2>{title}</h2>
        <p>{description}</p>
        {/* <button>Read More</button> */}
      </div>
    </div>
  );
};


const CardSection = () => {
  return (
    <section className="card-section wow fadeInUp" style={{backgroundColor:'white'}}>
        <div className="container">
  <div className="left-section1">
    <div className='stickySection'>
    <div style={{ padding: '8px 12px', margin: '4px auto', borderRadius: '18px', backgroundColor: 'white', color: 'black', display: 'inline-block', border: '1px solid #ccc' }}>
    Navigating Success Together
  </div>
    <h2 style={{fontSize:'2.5rem'}}>We lead you through every step</h2>
    <p style={{fontSize:'1.5rem',color:'#383838'}}>From creative design to technical solutions, our services define industry excellence.</p>
  </div>
  </div>
  <div className="right-section1">
  <div className="card-container">
      {cardContents.map((content, index) => (
        <Card key={index} index={index} {...content} />
      ))}
    </div>
      </div>
      </div>
    </section>
  );
};

export default CardSection;
