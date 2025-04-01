import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../Footer';
import { FaHome } from "react-icons/fa";
import './IQAC.css';
import VisionMission from './VisionMission';

const IQAC = () => {
  return (
    <div>
      <img src="assets/iqac.jpg" alt="IQAC" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (IQAC)</span>
      </div> 
      <div>
        
        
        <VisionMission/>
        <Footer />
        
      </div>
    
    </div>
  );
};

export default IQAC;