import React from 'react';

const TwoSectionsPage = () => {
  return (
    <div className="page-container">
      {/* Left Section */}
      <div className="left-section wow fadeInLeft" data-wow-duration="2s">
      <div style={{position:'sticky',top:'0'}}>
        <h1>Title</h1>
        <img src="https://placekitten.com/200/200" alt="Sample Image" />
        <p>Description text goes here.</p>
      </div>
      </div>

      {/* Right Section */}
      <div className="right-section wow fadeInRight" data-wow-duration="2s">
        {/* Cards go here */}
        <div className="card1">
          <h2>Card 1</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 2</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 1</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 2</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 1</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 2</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 1</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 2</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 1</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 2</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 1</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card1">
          <h2>Card 2</h2>
          <p>Card description goes here.</p>
        </div>
        {/* Repeat for other cards */}
      </div>
    </div>
  );
};

export default TwoSectionsPage;
