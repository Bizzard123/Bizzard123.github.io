import React from 'react';

const CardsSection = () => {
  return (
    <div className='wow slideInLeft' style={{ padding: '5%' }}>
      <h1>Section Title</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ width: '280px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border:'1px solid black'}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div style={{ padding: '15px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#fff', position: 'relative' }}>
            <h2>Title 1</h2>
            <p style={{ paddingTop: '10px' }}>Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '20px', background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }} />
          </div>
        </div>

        <div style={{ width: '280px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', border:'1px solid black' }}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div style={{ padding: '15px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#fff', position: 'relative' }}>
            <h2>Title 2</h2>
            <p style={{ paddingTop: '10px' }}>Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '20px', background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }} />
          </div>
        </div>

        <div style={{ width: '280px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' , border:'1px solid black'}}>
          <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div style={{ padding: '15px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#fff', position: 'relative' }}>
            <h2>Title 3</h2>
            <p style={{ paddingTop: '10px' }}>Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '20px', background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
