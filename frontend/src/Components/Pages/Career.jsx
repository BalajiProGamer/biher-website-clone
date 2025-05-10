import React from 'react';
import Footer from '../Footer';
import CareerPage from './CareerPage';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Banner from '../Banner';

const Career = () => {
  return (
    <div>
      
      <img src="assets/Careers.png" alt="Career" width="100%"  height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Alumni)</span>
      </div>
      <Banner />
      <CareerPage />
      <Footer />  
    </div>
  );
};

export default Career;