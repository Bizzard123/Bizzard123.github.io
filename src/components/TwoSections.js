import React from 'react';

const TwoSectionsPage = () => {
  return (
    <div className="page-container">
      {/* Left Section */}
      <div className="left-section wow fadeInLeft" data-wow-duration="2s">
      <div style={{position:'sticky',top:'0',color:'white',  paddingBottom:"40px"}}>
        <h1>Our Services</h1>
        <img src="https://join.travelmanagers.com.au/wp-content/uploads/2017/09/default-placeholder-300x300.png" alt="Sample Image" />
        <p>Ready to Join the Magic Show?</p>
        <p>Take the first step towards digital success with Bizzard.</p><p>
Contact us today to kickstart your digital adventure, or just swing by for a chat and some virtual coffee. The stage is set – are you ready to steal the spotlight?
</p>
        <button className='joinButton'>Join Us</button>
      </div>
      </div>

      {/* Right Section */}
      <div className="right-section wow fadeInRight" data-wow-duration="2s">
        {/* Cards go here */}
        <div className="card1">
          <h2></h2>
          <p></p>
        </div>
        <div className="card1">
          <h2></h2>
          <p></p>
        </div>
        <div className="card1">
          <h2></h2>
          <p></p>
        </div>
        <div className="card1">
          <h2></h2>
          <p></p>
        </div>
        {/* Repeat for other cards */}
      </div>
    </div>
  );
};

export default TwoSectionsPage;
