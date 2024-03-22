import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams hook

const ServiceDetail = ({ services }) => {
  const { id } = useParams(); // Use useParams hook to access URL parameters

  const service = services.find(service => service.id === parseInt(id));

  if (!service) {
    return     <div style={{backgroundColor:"#f1f8e9",minHeight:'60vh',marginTop:'-50px'}}>Service not found</div>;
  }

  return (
    <div style={{backgroundColor:"#f1f8e9",minHeight:'60vh',marginTop:'-50px'}}>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <Link to="/">Back to Services</Link>
    </div>
  );
};

export default ServiceDetail;
