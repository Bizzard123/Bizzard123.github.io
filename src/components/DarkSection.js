// DarkSection.jsx

import React from 'react';

const DarkSection = () => {
  return (
    <div className="DarkSection">
      <div className="left-content">
        <h2>Crafting Digital Success with Codify</h2>
        <p>Discover the innovative marketing strategies that set Codify apart, driving success in the digital landscape.</p>
        <button>Schedule a Call</button>
      </div>

      <div className="right-content">
        <h3>Get in Touch!</h3>
        <form>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="tel" placeholder="Number" />
          </div>
          <button className='centered-button-inverted' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DarkSection;
