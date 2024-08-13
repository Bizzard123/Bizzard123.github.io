import React from 'react';
import { Link, useParams } from 'react-router-dom';
import O365 from './solutions/O365';
import PowerApps from './solutions/PowerApps';
import SharePoint from './solutions/SharePoint';

const componentsMap = {
  1: O365,
  2: PowerApps,
  3: SharePoint,
  // Add other solution components here if needed
};

const SolutionDetail = () => {
  const { id } = useParams();
  const solutionId = parseInt(id);
  
  const SolutionComponent = componentsMap[solutionId];

  if (!SolutionComponent) {
    return <div style={{ backgroundColor: "#f1f8e9", minHeight: '60vh', marginTop: '-50px' }}>Solution not found</div>;
  }

  return (
    <div style={{ backgroundColor: "#f1f8e9", minHeight: '60vh' }}>
      <SolutionComponent />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Link style={{ margin: '20px', textDecoration: 'none', marginBottom: '50px' }} className='centered-button' to="/">Back to Solutions</Link>
      </div>
    </div>
  );
};

export default SolutionDetail;
