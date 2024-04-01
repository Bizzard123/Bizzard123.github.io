import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams hook
import BlogPost from '../components/BlogPost';

const ServiceDetail = ({ services }) => {
  const { id } = useParams(); // Use useParams hook to access URL parameters

  const service = services.find(service => service.id === parseInt(id));

  if (!service) {
    return     <div style={{backgroundColor:"#f1f8e9",minHeight:'60vh',marginTop:'-50px'}}>Service not found</div>;
  }

  return (
    <div style={{backgroundColor:"#f1f8e9",minHeight:'60vh'}}>
      <BlogPost
        title={service.title}
        date={service.description}
        tags="React, JavaScript, Web Development"
        imageUrl="https://example.com/image.jpg"
        imageAlt="Sample Image"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nec nisi eget vestibulum. Sed nec arcu vel felis accumsan posuere. Sed auctor est sit amet justo ultrices, ac pharetra ligula fringilla."
      />
      <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
      <Link style={{margin:'20px',textDecoration:'none',marginBottom:'50px'}} className='centered-button' to="/">Back to Services</Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
