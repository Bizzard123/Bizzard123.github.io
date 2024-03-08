import React from 'react';

const CardsSection = () => {
  return (
    <div className='wow slideInLeft' style={{ padding: '5%',backgroundColor:'#343483',color:'white' }}>
      <h1>Section Title</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ width: '280px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border:'1px solid '}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div style={{ padding: '15px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', position: 'relative',backgroundColor:'#444398'}}>
            <h2>Title 1</h2>
            <p style={{ paddingTop: '10px' }}>Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </div>
        </div>

        <div style={{ width: '280px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border:'1px solid '}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div style={{ padding: '15px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', position: 'relative',backgroundColor:'#444398'}}>
            <h2>Title 1</h2>
            <p style={{ paddingTop: '10px' }}>Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </div>
        </div>

        <div style={{ width: '280px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border:'1px solid '}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div style={{ padding: '15px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', position: 'relative',backgroundColor:'#444398'}}>
            <h2>Title 1</h2>
            <p style={{ paddingTop: '10px' }}>Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
