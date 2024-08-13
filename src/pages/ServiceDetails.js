import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams hook
import Ecommerce from './services/Ecommerce';
import Design from './services/Design';
import Website from './services/Website';
import MobileApp from './services/MobileApp';
import DigitalTransformation from './services/DigitalTransformation';
import LegacyModernization from './services/LegacyModernization';
import Support from './services/Support';

const componentsMap = {
  1: Ecommerce,
  2: Design,
  3: Website,
  4: MobileApp,
  5: DigitalTransformation,
  6: LegacyModernization,
  7: Support
};

const ServiceDetail = ({ services }) => {
  const { id } = useParams(); // Use useParams hook to access URL parameters
  const serviceId = parseInt(id);

  const ServiceComponent = componentsMap[serviceId];

  if (!ServiceComponent) {
    return <div style={{ backgroundColor: "#f1f8e9", minHeight: '60vh', marginTop: '-50px' }}>Service not found</div>;
  }

  return (
    <div style={{ backgroundColor: "#f1f8e9", minHeight: '60vh' }}>
      <ServiceComponent />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Link style={{ margin: '20px', textDecoration: 'none', marginBottom: '50px' }} className='centered-button' to="/">Back to Services</Link>
      </div>
    </div>
  );
};

export default ServiceDetail;