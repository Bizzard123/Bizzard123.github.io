import React from 'react';

const Card = () => {
  return (
    <div style={{backgroundColor:'white',marginTop:'-25px'}}>
    <h2 style={{padding:'0% 10%'}}>Why Choose Us?</h2>
    <div className='wow bounceInUp' style={{display:'flex',justifyContent:'center'}}>
      <div className='cardContainer'>
        <div className="card">
      <div className="card-content">
        <h2>Unlock Your Digital Potential</h2>
        <p>Whether you're a startup looking to make a splash or an established business aiming to stay ahead of the curve, our tailored solutions are designed to meet your unique needs and objectives.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h2>Masterminds at Your Service</h2>
        <p>Think of us as your digital dream team – a band of misfits, innovators, and all-around cool cats ready to revolutionize your online presence.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h2>Proven Track Record</h2>
        <p>Don't just take our word for it. Our portfolio speaks volumes, showcasing a diverse range of successful projects and satisfied clients across various industries.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h2>Collaborative Approach</h2>
        <p> We believe in collaboration and transparency every step of the way. When you partner with Bizzard, you're not just a client – you're an integral part of the creative process.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
        <h2>Results-Driven Strategies</h2>
        <p>Our team of experts combines data-driven insights with creative flair to craft strategies that deliver measurable results. From increasing brand visibility to driving conversions, we're committed to your success.</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Card;
