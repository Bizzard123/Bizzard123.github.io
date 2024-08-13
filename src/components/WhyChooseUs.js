import React from 'react';

const WhyChooseUs = () => {
  const textContent = [
    {
      title: "Tailored Solutions",
      description: "We don't believe in one-size-fits-all approaches. Every project is unique, and we tailor our solutions to meet your specific needs and goals."
    },
    {
      title: "Expertise in Microsoft Applications",
      description: "With a deep understanding of Microsoft applications like SharePoint, Automate, and Power Apps, we bring unparalleled expertise to the table, ensuring seamless integration and optimized performance."
    },
    {
      title: "Innovative Design",
      description: "Our team doesn't just follow trends – we set them. From stunning website designs to intuitive mobile apps, we combine creativity with functionality to deliver experiences that captivate and convert."
    },
    {
      title: "Digital Transformation",
      description: "Embrace the future of business with our digital transformation services. We help you harness the power of technology to streamline processes, enhance productivity, and drive growth."
    },
    {
      title: "Legacy Modernization",
      description: "Don't let outdated systems hold you back. We specialize in modernizing legacy applications, bringing them up to speed with the latest technologies for improved performance and scalability."
    },
    {
      title: "Unmatched Support",
      description: "Your journey with Bizzard doesn't end at project delivery. We provide ongoing support and maintenance to ensure your digital assets remain secure, optimized, and ready to adapt to future challenges."
    },
  ];

  const renderPoints = (points) => {
    return points.map((point, index) => (
      <div key={index} className="point-item_c">
        <h4>{point.title}</h4>
        <p>{point.description}</p>
      </div>
    ));
  };

  return (
    <div className="container_c">
      <h2 className="title_c">Why Choose Bizzard?</h2>
      <p>What sets Bizzard apart? It's our relentless pursuit of perfection. We don't just build websites and applications; we craft experiences. Our team of experts blends cutting-edge technology with creative ingenuity to bring your vision to life. We ensure that your digital ecosystem is not only efficient but also future-proof.</p>
      
      <div className="section_c">
        <img src="https://img.freepik.com/free-vector/tech-company-concept-illustration_114360-9729.jpg?t=st=1716157854~exp=1716161454~hmac=ad1229ab2f11f13b47d1ee0a119e11f667876cc05f63ec23cb225176d76be1b8&w=740" alt="Why Choose Bizzard" className="image_c" />
        <div className="points_c">
          {renderPoints(textContent.slice(0, 3))}
        </div>
      </div>
      
      <div className="section_c reversed_c">
        <img src="https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?t=st=1716157964~exp=1716161564~hmac=599f44fda24f0e111bcac83515e201851767c4c5ed6c8326e202a14d8b60e273&w=740" alt="Why Choose Bizzard" className="image_c" />
        <div className="points_c">
          {renderPoints(textContent.slice(3))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
