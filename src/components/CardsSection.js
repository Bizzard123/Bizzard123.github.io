import React from 'react';
import { BsStars } from "react-icons/bs";
import {Image} from "@nextui-org/image";

const CardsSection = () => {
  return (
    <div className='wow fadeInUp' style={{ padding: '5%',display:'flex',flexDirection:'column',backgroundColor:'white', color: 'black' }}>
      <div style={{display:'flex',flexDirection:'column'}}>
      <div className='chips' style={{minWidth:'70px',minHeight:'20px'}}>
      <BsStars />{' '}Benefits
  </div>
      <div className="section-heading">
      How We Can Help Your Business?
      </div>

      <div className="section-text">
      <p>At Bizzard, we're not just in the business of building websites and apps – we're in the business of building success stories. Here's how we can help your business shine.
</p>
      </div>
      </div>
      <div className='cardContainerUsp'>
        <div className='cardUsp' style={{backgroundColor:'#ecf0f3'}}>
          <img src="https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149171645.jpg?t=st=1712006682~exp=1712010282~hmac=9fd46f03f7cae62b146d887b290d6c4581ad00f9e33077b99335f52e651c0a2d&w=740" alt="Innovative" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>Problem Solving
</h2>
            <p className='cardDescriptionUsp'>Whether you're facing technical challenges or seeking innovative solutions, we're here to solve your problems and drive results..</p>
          </div>
        </div>

        <div className='cardUsp' style={{backgroundColor:'#feefdb'}}>
        <Image
      isBlurred src="https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept_23-2149171651.jpg?w=740&t=st=1712006743~exp=1712007343~hmac=f1e34657540334516c0d74bde4af047e8424cef61578b7aa6f47133be4a97be5" alt="UserFriendly" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>Generating Value</h2>
            <p className='cardDescriptionUsp'>Our solutions aren't just about aesthetics – they're about generating tangible value for your business, from increased efficiency to higher ROI.</p>
          </div>
        </div>

        <div className='cardUsp' style={{backgroundColor:'#ecf0f3'}}>
          <img src="https://img.freepik.com/free-vector/sporty-people-running-target-with-bar-chart-background_1262-19365.jpg?w=740&t=st=1712006744~exp=1712007344~hmac=7860620fef068d852b4bf56fc4585e8573aed444a3babf878d27a8ea48ced49e" alt="CustomerService" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>Delivering Upscaling</h2>
            <p className='cardDescriptionUsp'>As your business grows, so do your digital needs. We're here to scale alongside you, providing flexible solutions that evolve with your success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
