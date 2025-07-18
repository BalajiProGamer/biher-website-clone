import React from 'react';
import { FaHome, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import japanImg from '../../../assets/japancon.png'; // Make sure this image exists
import '../../../styles/global.css';

const Japan = () => {
  return (
    <>
      {/* Breadcrumb Header */}
      <div className="breadcrumb-headerJP">
        <div className="breadcrumb-containerJP">
          <Link to="/" className="breadcrumb-linkJP">
            <FaHome className="breadcrumb-iconJP" />
          </Link>
          <span className="breadcrumb-separatorJP">»</span>
          <span className="breadcrumb-textJP">Partner University Organisations</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="japan-content">
        {/* Left Image */}
        <div className="japan-image">
          <img src={japanImg} alt="University in Japan" />
        </div>

        {/* Right Content */}
        <div className="japan-details">
          <h2>Partner Universities in Japan</h2>
          <ol>
            <li>
              <a href="https://www.bharathuniv.ac.in/downloads/signMOUGeorgia_BIHER.pdf" target="_blank" rel="noopener noreferrer">
                1. Tokyo Institute of Technology, Japan
              </a>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Japan;
