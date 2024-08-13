import React from 'react';
import {Image} from "@nextui-org/image";

const EcommercePage = () => {
  return (
    <div className="containerx">
      <h1>E-commerce</h1>
      <Image
      isBlurred
      src="https://img.freepik.com/free-vector/shopping-mobile-app-online-store-service-smartphone-application-internet-purchase-making-order-customer-cartoon-character-adding-product-cart_335657-2557.jpg?t=st=1716156341~exp=1716159941~hmac=b0e22a37e20f2a349d4d72ce9d2c231509793750e1a78bd9a1241fe13f5d73a3&w=740"
      alt="NextUI Album Cover"
      className="fullwidth-image"
    />
      {/* <img 
        src="" 
        alt="E-commerce" 
        className=""
      /> */}
      <p>E-commerce has revolutionized the way businesses connect with customers, and at Bizzard, we're here to help you harness its full power. Our E-commerce solutions are designed to drive sales, enhance user experience, and maximize your online presence. Whether you're launching a new store or looking to optimize an existing one, we have the expertise and creativity to bring your vision to life. From seamless payment integrations to intuitive shopping experiences, we'll help you create an E-commerce platform that sets you apart from the competition.</p>
      <h2>Why E-commerce Matters:</h2>
      <p>In today's digital age, e-commerce isn't just an option – it's a necessity. From reaching a global audience to streamlining transactions, an effective e-commerce platform can revolutionize your business.</p>
      <h2>Benefits of Our E-commerce Solutions:</h2>
      <ul>
        <li><strong>Expanded Reach:</strong> Break free from geographical limitations and tap into new markets with a scalable e-commerce platform.</li>
        <li><strong>Enhanced User Experience:</strong> Delight your customers with intuitive interfaces, seamless navigation, and secure payment options that keep them coming back for more.</li>
        <li><strong>Increased Sales:</strong> Drive conversions and boost revenue with targeted marketing strategies, personalized recommendations, and streamlined checkout processes.</li>
        <li><strong>Efficient Management:</strong> Simplify inventory management, order processing, and customer support with robust backend systems that streamline operations and minimize overhead costs.</li>
      </ul>
      <style jsx>{`
        .containerx {
          font-family: Arial, sans-serif;
          padding: 20px 10%;
        }
        
        .fullwidth-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        h1 {
          color: #333;
        }
        
        h2 {
          color: #666;
          margin-top: 20px;
        }
        
        ul {
          list-style-type: none;
          padding-left: 20px;
        }
        
        li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default EcommercePage;
