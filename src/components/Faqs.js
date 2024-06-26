import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How do I install React?", answer: "You can install React using npm or yarn. For example, 'npm install react'." },
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How do I install React?", answer: "You can install React using npm or yarn. For example, 'npm install react'." },
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How do I install React?", answer: "You can install React using npm or yarn. For example, 'npm install react'." },
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How do I install React?", answer: "You can install React using npm or yarn. For example, 'npm install react'." },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="wow fadeInUp" style={{padding:'5%',backgroundColor:'white',paddingTop:'50px',paddingBottom:'50px',display:'flex',flexDirection:'column'}}>
      <div className="chips">
    FAQs 
  </div>
        <div className="section-heading">
        Frequently Asked Questions
      </div>
    <div className="faq-section">
      {faqData.map((faq, index) => (
        <div className={`faq-item ${index === openIndex ? "open" : ""}`} key={index}>
          <div className="faq-question">
            <div className="question-content" onClick={() => toggleAccordion(index)}>
              {faq.question}
            </div>
            <button
              className={`toggle-button ${index === openIndex ? "rotate" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <FaPlus/>
            </button>
          </div>
          <div className="faq-answer"><div style={{padding:'10px'}}>{faq.answer}</div></div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQSection;
