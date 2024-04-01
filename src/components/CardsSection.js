import React from 'react';
import { BsStars } from "react-icons/bs";

const CardsSection = () => {
  return (
    <div className='wow fadeInUp' style={{ padding: '5%',display:'flex',flexDirection:'column',backgroundColor:'white', color: 'black' }}>
      <div style={{display:'flex',flexDirection:'column'}}>
      <div className='chips' style={{minWidth:'70px',minHeight:'20px'}}>
      <BsStars />{' '}Benefits
  </div>
      <div className="section-heading">
        Why We Stand Out?
      </div>

      <div className="section-text">
      <p>Web design involves creating and designing websites, including layout, content, and user experience.
</p>
      </div>
      </div>
      <div className='cardContainerUsp'>
        <div className='cardUsp' style={{backgroundColor:'#ecf0f3'}}>
          <img src="https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149171645.jpg?t=st=1712006682~exp=1712010282~hmac=9fd46f03f7cae62b146d887b290d6c4581ad00f9e33077b99335f52e651c0a2d&w=740" alt="Placeholder" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>Innovative technology solutions
</h2>
            <p className='cardDescriptionUsp'>We pride ourselves on our ability to develop and implement cutting-edge technologies that solve problems in unique and efficient ways.</p>
          </div>
        </div>

        <div className='cardUsp' style={{backgroundColor:'#feefdb'}}>
          <img src="https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept_23-2149171651.jpg?w=740&t=st=1712006743~exp=1712007343~hmac=f1e34657540334516c0d74bde4af047e8424cef61578b7aa6f47133be4a97be5" alt="Placeholder" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>User friendly interfaces</h2>
            <p className='cardDescriptionUsp'>We prioritise intuitive interfaces and seamless interactions by making our services easy and enjoyable to use.</p>
          </div>
        </div>

        <div className='cardUsp' style={{backgroundColor:'#ecf0f3'}}>
          <img src="https://img.freepik.com/free-vector/sporty-people-running-target-with-bar-chart-background_1262-19365.jpg?w=740&t=st=1712006744~exp=1712007344~hmac=7860620fef068d852b4bf56fc4585e8573aed444a3babf878d27a8ea48ced49e" alt="Placeholder" />
          <div className='cardContentUsp'>
            <h2 className='cardTitleUsp'>Exceptional customer service</h2>
            <p className='cardDescriptionUsp'>Whether it's offering 24/7 support, quick response times to inquiries, or personalized assistance, we go above and beyond to address customer needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
