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
import CallPage from './pages/CallPage';
import SolutionDetail from './pages/SolutionDetail';

const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);


  const [solutions, setsolutions] = useState([
    { id: 3, title: 'Share Point', description: <Footer/> },
    { id: 2, title: 'Power Apps', description: 'Description for Service 1' },
    { id: 1, title: 'O365', description: 'Description for Service 2' },
  ]);

  const services = [
    { id: 1, title: 'E-commerce Management', description: 'Elevate your online store with our comprehensive e-commerce solutions, driving sales and customer satisfaction.' },
    { id: 2, title: 'Design', description: 'From concept to creation, our design team brings your vision to life with stunning visuals and user-centric interfaces.' },
    { id: 3, title: 'Website Development', description: 'Whether you need a simple website or a complex web application, we have the expertise to turn your ideas into reality.' },
    { id: 4, title: 'Mobile App Development', description: 'Reach your audience on the go with custom mobile apps tailored to your business objectives.' },
    { id: 5, title: 'Digital Transformation', description: 'Embrace the future of business with our digital transformation services, optimizing processes and driving innovation.' },
    { id: 6, title: 'Legacy Modernization', description: 'Upgrade your outdated systems for improved performance, security, and scalability.' },
    { id: 7, title: 'Support & Maintenance', description: 'Count on us for ongoing support and maintenance to keep your digital assets running smoothly.' },
  ];

  return (
    <Router>
      <div>
        <Navbar solutions={solutions} />
        <MobileNavbar solutions={solutions}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/call" exact element={<CallPage />} />
          <Route path="/services/:id" element={<ServiceDetail services={services} />} />
          <Route path="/solution/:id" element={<SolutionDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
