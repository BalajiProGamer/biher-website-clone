import React from 'react';
import Footer from '../Footer';
import './Alumni.css';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Alumni = () => {
  return (
    <div className="alumni-container">
      <h1>Alumni</h1>
      <div className="image-container">
        <img src="assets/hero-1-bg.jpg" alt="Alumni" className="background-image"  />
        <img src="assets/teacher-2.png" alt="Overlay" className="overlay-image" />
        <div className="overlay-text">
          <h1>WELCOME TO <span className="highlight">BIHER</span></h1>
          <p className="subheading">Alumni Association</p>
        </div>
      </div>
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Alumni)</span>
      </div>
      <p>Content for Alumni page.</p>
      <Footer />
    </div>
  );
};

export default Alumni;
