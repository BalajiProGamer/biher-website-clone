import React from 'react';
import Footer from '../Footer';
import CareerPage from './CareerPage';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Banner from '../Banner';

const Career = () => (
  <div>
    {/* Top hero image (leave as‑is, or wrap in a div if you want to control height) */}
    <img src="assets/Careers.png" alt="Career" width="100%" height="100%" />

    {/* ▸▸▸  BREADCRUMB BAR  ◂◂◂ */}
    <div className="breadcrumb-bar">
      <Link to="/" className="breadcrumb-link">
        <FaHome className="breadcrumb-icon" />
      </Link>

      <span className="breadcrumb-separator">»</span>

      {/* Current page title */}
      <span className="breadcrumb-current">Careers</span>
    </div>

    {/* Rest of the page */}
    <Banner />
    <CareerPage />
    <Footer />
  </div>
);

export default Career;
