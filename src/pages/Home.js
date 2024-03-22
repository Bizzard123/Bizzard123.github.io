import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Cards';
import CardSection from '../components/CardSection';
import CardsSection from '../components/CardsSection';
import YourComponent from '../components/TopicSection';
import DarkSection from '../components/DarkSection';
import FAQSection from '../components/Faqs';
import CallSection from '../components/CallSection';
import AboveFooter from '../components/AboveFooter';


const Home = () => {

  return (
    <div>
      <HeroSection />
      <Card />
      <CardsSection />
      <CardSection />
      <YourComponent />
      <CallSection />
      <DarkSection />
      <FAQSection />
      <AboveFooter />
    </div>
  );
};

export default Home;