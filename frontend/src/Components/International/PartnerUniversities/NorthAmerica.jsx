import React from 'react';
import { FaHome, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import libertyImg from '../../../assets/university-na.jpg'; // Replace with your actual image path
import '../../../styles/global.css';

const NorthAmerica = () => {
  return (
    <>
      {/* Breadcrumb Header */}
      <div className="breadcrumb-headerNA">
        <div className="breadcrumb-containerNA">
          <Link to="/" className="breadcrumb-linkNA">
            <FaHome className="breadcrumb-iconNA" />
          </Link>
          <span className="breadcrumb-separatorNA">»</span>
          <span className="breadcrumb-textNA">Partner University Organisations</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="north-america-content">
        {/* Left Image */}
        <div className="north-america-image">
          <img src={libertyImg} alt="Statue of Liberty" />
        </div>

        {/* Right Content */}
        <div className="north-america-details">
          
          <h2>Partner Universities in North America</h2>
          <ol>
  <li>
    <a href="/pdfs/dowling-college.pdf" target="_blank" rel="noopener noreferrer">
      Dowling College Manhattan, New York.
    </a>
  </li>
  <li>
    <a href="/pdfs/lipscomb-university.pdf" target="_blank" rel="noopener noreferrer">
      Lipscomb University, United States.
    </a>
  </li>
  <li>
    <a href="/pdfs/canadian-college.pdf" target="_blank" rel="noopener noreferrer">
      Canadian College for Higher Studies, Toronto, Canada
    </a>
  </li>
  <li>
    <a href="https://www.bharathuniv.ac.in/downloads/MOU_Harvard_University_USA.pdf" target="_blank" rel="noopener noreferrer">
      Harvard University, USA
    </a>
  </li>
</ol>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default NorthAmerica;
