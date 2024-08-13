import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Cards';
import CardSection from '../components/CardSection';
import CardsSection from '../components/CardsSection';
import YourComponent from '../components/TopicSection';
import DarkSection from '../components/DarkSection';
import FAQSection from '../components/Faqs';
import CallSection from '../components/CallSection';
import AboveFooter from '../components/AboveFooter';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  const darkSectionRef = useRef(null);

  const scrollToDarkSection = () => {
    darkSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onButtonClick={scrollToDarkSection} />
      <Card />
      <CardsSection />
      <YourComponent />
      <CardSection />
      <WhyChooseUs />
      <div ref={darkSectionRef}>
        <DarkSection />
      </div>
      <FAQSection />
      <AboveFooter />
    </div>
  );
};

export default Home;
