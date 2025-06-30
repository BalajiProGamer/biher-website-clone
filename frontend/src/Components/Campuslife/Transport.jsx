import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import NssImg from "../../assets/transport.png";
import backgroundImage from "../../assets/pattern.jpg"; // Background image
import '../../styles/global.css'; // Global styles

const Scholarship = () => {
  return (
    <div>
      {/* Top banner image */}
      <img src={NssImg} alt="Transport" width="100%" height="100%" />

      {/* Breadcrumb Navigation */}
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">» Campus Life » Transport</span>
      </div>

      {/* Content Section */}
      <div
        className="transport-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="transport-content-container">
          <h5 className="transport-title">Transport Department</h5>

          <h3 className="transport-subheading">
            About <span className="highlight-red">Us :</span>
          </h3>
          
          {/* PDF Button Right-Aligned */}
          <div className="pdf-button-wrapper">
            <a
              href="https://www.bharathuniv.ac.in/nirf/transport/ROUTE%20%20LIST%20(2025-2026).pdf" // ✅ Update this path
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-button"
            >
              <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
              BIHER Bus & Route ( 2025 - 2026 )
            </a>
          </div>
          <hr className="transport-divider" />

          <p className="transport-paragraph">
            The Institution provides transport facility from almost all parts of the city.
            One need not worry about commuting to the varsity.
          </p>


          <h3 className="transport-subheading">
            Bus Routes for <span className="highlight-red">2025 - 2026 :</span>
          </h3>
          <hr className="transport-divider" />

          <ul className="transport-list">
            <li>The fees will be accepted subject to the availability of Seats.</li>
            <li>Bus fees once paid will not be refunded / adjusted under any circumstances.</li>
            <li>Students must submit 2 stamp-size photographs for ID cards.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Scholarship;
