import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  const faqData = [
    { question: "How can I be assured of your company's technical expertise to deliver the customized solutions my business needs?", 
    answer: "Remainder ensured our group makes up extremely competent experts with substantial experience in web/mobile growth as well as Microsoft solutions. With a tried and tested track record of efficiently applying complicated tasks plus keeping abreast of the current technical developments we have the technological expertise needed to bring your vision to life. In addition our qualifications plus collaborations with industry-leading innovation carriers highlight our dedication to quality." },
  { question: "What differentiates your approach to custom solution development from other providers in terms of technical proficiency?", 
    answer: "Our technique to personalized option growth is based on a deep understanding of modern technology plus its prospective to drive organization change. Capitalizing on our know-how in web/mobile advancement plus Microsoft solutions such as SharePoint Power Automate, Power Application as well as Office 365, we engineer options that are not just innovative however additionally practically durable together with scalable. Our dedication to constant understanding as well as renovation makes sure that we continue to be at the leading edge of technical improvements, supplying remedies that surpass your assumptions." },
  { question: "How do you ensure that the solutions you deliver are technically sound and capable of upscaling my business?", 
    answer: "Technical quality goes to the core of whatever we do. From the first evaluation of your needs to the last release of your option, we stick to sector finest techniques and also extensive high quality criteria to make sure that every element of the option is practically audio and also aligned with your company objectives. Our group of skilled programmers plus designers take advantage of their knowledge in modern technologies to create coupled with apply options that not just satisfy your existing demands however likewise place your organization for future development and also scalability." },
  { question: "What measures do you have in place to handle unexpected technical challenges or complexities during the project?", 
    answer: "While we pursue smooth task implementation, we recognize that technological difficulties might develop all of a sudden. Our group is furnished with the abilities along with experience to deal with also one of the most intricate technological problems head-on. We utilize active techniques that highlight ability plus cooperation, enabling us to attend to difficulties without delay and also lessen task disruptions. With our aggressive strategy to run the risk of administration and also analytic you can rely on that your task remains in qualified hands." }
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
