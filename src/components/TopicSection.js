import React, { useState } from 'react';

const YourComponent = () => {
  const topics = [
    { title: 'Topic 1', description: 'Description for Topic 1.' },
    { title: 'Topic 2', description: 'Description for Topic 2.' },
    { title: 'Topic 3', description: 'Description for Topic 3.' },
    { title: 'Topic 4', description: 'Description for Topic 4.' },
    { title: 'Topic 5', description: 'Description for Topic 5.' },
  ];
  const [activeTopic, setActiveTopic] = useState(0);

  const handleClick = (index) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <div className="section wow slideInRight">
      <div className="left-column">
        {topics.map((topic, index) => (
          <div key={index} className="topic-container">
            <div
              className={`topic ${activeTopic === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
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
          <div className="description">
            <h2>{topics[activeTopic].title}</h2>
            <p>{topics[activeTopic].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourComponent;
