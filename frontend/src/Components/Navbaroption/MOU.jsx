import React, { useState } from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaThList } from 'react-icons/fa';
import NssImg from "../../assets/transport.png";
import "../../styles/global.css";

const MOU = () => {
  const [selectedCategory, setSelectedCategory] = useState("Training & Placement");

  const categories = ["Training & Placement", "Academics", "Research"];

  return (
    <div>
      <img src={NssImg} alt="Transport" width="100%" height="100%" />

      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Transport)</span>
      </div>

      <div className="mou-wrapper">
        {/* Sidebar */}
        <div className="mou-sidebar">
          <div className="mou-sidebar-header">
            <FaThList className="sidebar-icon" />
            <span>Categories</span>
          </div>
          <ul className="mou-category-list">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`mou-category-item ${selectedCategory === cat ? "active" : ""}`}
              >
                <FaBook className="category-icon" />
                <span>{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="mou-content">
          <h2 className="mou-title">{selectedCategory} <span className="highlight">:</span></h2>

          {selectedCategory === "Training & Placement" && (
            <table className="mou-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name of the Company and Location</th>
                  <th>MoU Category</th>
                  <th>MoU Date</th>
                  <th>Event Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Centre for Medical Genetics (CMG), CHENNAI</td>
                  <td>Research and Development & Training</td>
                  <td>25/03/2015</td>
                  <td><a href="https://www.bharathuniv.ac.in/nirf/Training/Center%20of%20Medical%20Genetics.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>INDO - BRITISH FRCR GROUP (BRADFORD TEACHING HOSPITALS, UNITED KINGDOM)</td>
                  <td>Training & Placement</td>
                  <td>22/05/2015</td>
                 <td><a href="https://www.bharathuniv.ac.in/nirf/Training/1.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>The North American Institute of Pharmaceutical Technology, Toronto, Canada</td>
                  <td>Training and Development</td>
                  <td>22/05/2015</td>
                 <td><a href="https://www.bharathuniv.ac.in/nirf/Training/1.pdff" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>The London North West Healthcare NHS Trust London, United Kingdom</td>
                  <td>Training and Placement</td>
                  <td>28/05/2015</td>
                  <td><a href="https://www.bharathuniv.ac.in/nirf/Training/The%20London%20North%20West%20Healthcare.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Dowling College Manhattan, New York</td>
                  <td>Academic and Training Activities</td>
                  <td>06/10/2015</td>
                 <td><a href="https://www.bharathuniv.ac.in/nirf/Training/Dowling.pdff" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>MEDGENOME LABS PVT.LTD. BANGALORE</td>
                  <td>Research and Development & Training</td>
                  <td>17/06/2015</td>
                  <td><a href="https://www.bharathuniv.ac.in/nirf/Training/Medgenome.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>Vectra Technosoft Pvt Ltd, Chennai</td>
                  <td>Training in Software Development</td>
                  <td>10/10/2015</td>
                  <td><a href="https://www.bharathuniv.ac.in/nirf/Training/01.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>08</td>
                  <td>Alfrd School of Leadership, Chennai</td>
                  <td>Training Activities</td>
                  <td>10/10/2015</td>
                  <td><a href="https://www.bharathuniv.ac.in/nirf/Training/02.pdff" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Center for Entrepreneurship Development, Madurai</td>
                  <td>Training and Development</td>
                  <td>15/10/2015</td>
                  <td><a href="https://www.bharathuniv.ac.in/nirf/Training/03.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>M/s.Synergy Sbs,Chennai</td>
                  <td>Training and Development</td>
                  <td>5/02/2015</td>
                  <td><a href="https://www.bharathuniv.ac.in/nirf/Training/04.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedCategory !== "Training & Placement" && (
            <p style={{ marginTop: "20px" }}>
              Content for <strong>{selectedCategory}</strong> will be added soon.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MOU;
