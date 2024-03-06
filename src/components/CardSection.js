import React from 'react';
const cardContents = [
  {
    title: 'Title 1',
    description: 'Description for Title 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Title 2',
    description: 'Description for Title 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Title 3',
    description: 'Description for Title 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Title 4',
    description: 'Description for Title 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Title 5',
    description: 'Description for Title 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Card = ({ title, description, index }) => {
  const topValue = 5 + index * 10;

  const cardStyle = {
    width: '95%',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    position: 'sticky',
    top: `${topValue}px`,
    backgroundColor: '#fff',
    border:'1px solid red'
  };

  return (
    <div className="" style={cardStyle}>
      <div className="card-content1">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};


const CardSection = () => {
  return (
    <section className="card-section wow fadeInUp">
        <div>
        <div id="scroller">
          <div id="scroller-in">
            <h4>TOPTRACER RANGE</h4>
            <h4>GOLF LESSONS</h4>
            <h4>ADVENTURE GOLF</h4>
            <h4>COFFEE SHOP</h4>
            <h4>LEAGUES</h4>
          </div>
          <div id="scroller-in">
            <h4>TOPTRACER RANGE</h4>
            <h4>GOLF LESSONS</h4>
            <h4>ADVENTURE GOLF</h4>
            <h4>COFFEE SHOP</h4>
            <h4>LEAGUES</h4>
          </div>
        </div>
        </div>
        <div className="container">
  <div className="left-section1">
    <div className='stickySection'>
    <h2>Main Title</h2>
    <p>Main description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
