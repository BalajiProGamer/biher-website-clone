import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import rrcBg from '../../assets/pattern.jpg';
import Banner from '../Banner';

const RRC = () => {
  return (
    <div>
      {/* Breadcrumb Header */}
      <div className="rrc-header">
        <Link to="/" className="rrc-home-link">
          <FaHome className="rrc-home-icon" />
        </Link>
        <span className="rrc-separator">›</span>
        <span className="rrc-breadcrumb-text">RRC</span>
      </div>

      <Banner />

      {/* Background image section */}
      <div className="rrc-background-section"></div>

      <Footer />
    </div>
  );
};

export default RRC;
