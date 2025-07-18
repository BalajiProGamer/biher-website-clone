import React from 'react';
import { FaHome, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import russiaImg from '../../../assets/Russia.jpg'; // Make sure this image exists
import '../../../styles/global.css';

const Russia = () => {
  return (
    <>
      {/* Breadcrumb Header */}
      <div className="breadcrumb-headerRU">
        <div className="breadcrumb-containerRU">
          <Link to="/" className="breadcrumb-linkRU">
            <FaHome className="breadcrumb-iconRU" />
          </Link>
          <span className="breadcrumb-separatorRU">»</span>
          <span className="breadcrumb-textRU">Partner University Organisations</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="russia-content">
        {/* Left Image */}
        <div className="russia-image">
          <img src={russiaImg} alt="Moscow University" />
        </div>

        {/* Right Content */}
        <div className="russia-details">
          <h2>Partner Universities in Russia</h2>
          <ol>
            <li>
              <a href="https://www.bharathuniv.ac.in/downloads/Summer%20Internship%20Program%20Uraf,%20Russia.pdf" target="_blank" rel="noopener noreferrer">
              1. URAL FEDERAL University, Russia
              </a>
            </li>
           
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Russia;
