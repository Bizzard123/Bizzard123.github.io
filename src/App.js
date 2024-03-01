// App.js
import React,{useEffect} from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import WOW from 'wowjs';
import HeroSection from './components/HeroSection';


const App = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])


  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;