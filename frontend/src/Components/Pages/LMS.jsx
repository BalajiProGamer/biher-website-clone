import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { FaHome } from "react-icons/fa";
import './LMS.css';
import Form from './Form';

const LMS = () => {
  return (
    <div>
      <img src="assets/LMS-BG.png" alt="LMS" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (LMS)</span>
      </div> 
      <div>
        
        <img src="assets/shadow.png" alt="LMS" width="" height="" />
        <Form/>
      </div>
      <Footer />
    </div>
  );
};

export default LMS;