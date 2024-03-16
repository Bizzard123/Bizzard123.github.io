import React from 'react';
import { FaPhone, FaRegClipboard, FaPen } from 'react-icons/fa';


const CallSection = () => {
  return (
    <div className="call-section wow fadeInUp">
        <div className="call-item">
        <h2 style={{fontSize:'2.5rem',marginTop:'15px',marginBottom:'5px'}}>What Awaits you to Call?</h2>
      </div>
      <div className="call-item">
      <FaPhone style={{ fontSize: '1.5rem',padding:'10px', marginRight: '10px', backgroundColor: '#feefdb', borderTopLeftRadius: '50%',borderTopRightRadius:'50%',borderBottomRightRadius:'50%',color: 'black' }} />
        <h2>Introduction call</h2>
        <p>Free 30-minute video intro call, first meeting on us.</p>
      </div>
      <div className="call-item">
      <FaRegClipboard style={{ fontSize: '1.5rem',padding:'10px', marginRight: '10px', backgroundColor: '#e1f5fe',borderTopLeftRadius: '50%',borderTopRightRadius:'50%',borderBottomRightRadius:'50%', color: 'black' }} />
        <h2>Design board</h2>
        <p>Your company gains exclusive access to a dedicated design board.</p>
      </div>
      <div className="call-item">
      <FaPen style={{ fontSize: '1.5rem', marginRight: '10px',padding:'10px', backgroundColor: '#f3e5f5', borderTopLeftRadius: '50%',borderTopRightRadius:'50%',borderBottomRightRadius:'50%', color: 'black' }} />
        <h2>Request designs</h2>
        <p>Begin with your initial design request for the journey!</p>
      </div>
    </div>
  );
};

export default CallSection;
