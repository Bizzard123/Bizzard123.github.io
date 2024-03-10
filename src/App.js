// App.js
import React,{useEffect} from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import WOW from 'wowjs';
import HeroSection from './components/HeroSection';
import FloatingText from './components/Scroll';
import Card from './components/Cards';
import TwoSectionsPage from './components/TwoSections';
import Footer from './components/Footer';
import CardSection from './components/CardSection';
import CardsSection from './components/CardsSection';
import YourComponent from './components/TopicSection';
import MobileNavbar from './components/navbar/MobileNav';
import DarkSection from './components/DarkSection';


const App = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])


  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <HeroSection />
      {/* <FloatingText /> */}
      <Card />
      <CardSection />
      <YourComponent />
      <CardsSection />
      <DarkSection />
      <Footer />
    </div>
  );
};

export default App;