import React from 'react';
import Footer from '../Footer';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AboutAlumni from './AboutAlumni';
import '../../styles/global.css'; // Make sure this path is correct
import Banner from '../Banner'; // Adjust the import path as necessary

const Alumni = () => {
  return (
    <div className="alumni-container">
      <div className="alumni-image-container">
        <img
          src="assets/hero-1-bg.jpg"
          alt="Alumni Background"
          className="alumni-background-image"
        />
        <img
          src="assets/teacher-2.png"
          alt="Overlay"
          className="alumni-overlay-image"
        />

        <div className="alumni-overlay-text">
          <div className="alumni-main-heading">
            <span className="alumni-welcome">WELCOME TO</span>
            <span className="alumni-highlight">BIHER</span>
          </div>
          <div className="alumni-subheading">Alumni Association</div>
        </div>
      </div>

      <div className="alumni-header-bar">
        <Link to="/" className="alumni-home-link">
          <FaHome />
        </Link>
        <span>&raquo;</span>
        <span className="alumni-header-text">BIHER - ALUMNI</span>
      </div>
      <Banner/>

      <AboutAlumni />
      <Footer />
    </div>
  );
};

export default Alumni;
