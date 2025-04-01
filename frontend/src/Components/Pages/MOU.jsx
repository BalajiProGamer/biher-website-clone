import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { FaHome } from "react-icons/fa";
import './MOU.css';

const MOU = () => {
  return (
    <div>
      <h1>MOU</h1>
      <img src="assets/MOU.jpg" alt="MOU" width="100%" height="100%" />
      <p>Content for MOU page.</p>
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER -(MOU)</span>
      </div>
      <Footer />
    </div>
  );
};

export default MOU;