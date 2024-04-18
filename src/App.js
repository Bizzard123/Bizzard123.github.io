// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
import WOW from 'wowjs';
import Footer from './components/Footer';
import MobileNavbar from './components/navbar/MobileNav';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetails';

const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  const [services, setServices] = useState([
    { id: 1, title: 'Design', description: 'Description for Service 1' },
    { id: 2, title: 'Web Development', description: 'Description for Service 2' },
    { id: 3, title: 'Mobile App Dev', description: 'Description for Service 1' },
    { id: 5, title: 'Cloud Services', description: 'Description for Service 2' },
    { id: 6, title: 'Custom Softwares', description: 'Description for Service 3' }
  ]);

  return (
    <Router>
      <div>
        <Navbar services={services} />
        <MobileNavbar services={services}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail services={services} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
