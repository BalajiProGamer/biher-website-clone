import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import patentImg from "../../assets/patent.jpg";
import innovationBg from "../../assets/pattern.jpg";
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';

const Innovation = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="innovation-container">
      <img src={patentImg} alt="Patent" className="innovation-header-img" />
      <Banner />

      <div className="innovation-breadcrumb">
        <Link to="/" className="innovation-home-link">
          <FaHome size={24} className="innovation-home-icon" />
          <span>» Innovation and Incubation Cell</span>
        </Link>
      </div>

      <div className="innovation-main">
        <div className="innovation-sidebar">
          <div className="innovation-sidebar-header" onClick={() => setIsOpen(!isOpen)}>
            <div><FaBook className="innovation-icon" /> Categories</div>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen && (
            <ul className="innovation-category-list">
              <li>
                <Link to="/incubator-certificates" className="innovation-category-link">
                  <FaBook className="innovation-icon" /> Incubator and Registration Certificates
                </Link>
              </li>
              <li>
                <Link to="https://bharathtbi.bharathuniv.ac.in/" className="innovation-category-link">
                  <FaBook className="innovation-icon" /> Bharath Technology Business Incubator
                </Link>
              </li>
              <li>
                <Link to="https://bharathtbi.bharathuniv.ac.in/" className="innovation-category-link">
                  <FaBook className="innovation-icon" /> Bharath Healthcare Innovation And Bio-Incubator Society
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="innovation-content">
          <p className="innovation-subheading">Innovation Cell</p>
          <h2>Incubator and <span className="highlight-red">Registration Certificates :</span></h2>

          <table className="innovation-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Certificate Issued On</th>
                <th>CV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Bharath Technology Business Incubator</td>
                <td>11-11-2019</td>
                <td>
                  <a href="https://www.bharathuniv.ac.in/nirf/Innovationcell/Incubator/INC-01.pdf" target="_blank" rel="noreferrer">Click Here</a>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>Bharath Healthcare Innovation And Bioincubator Society</td>
                <td>02-03-2021</td>
                <td>
                  <a href="https://www.bharathuniv.ac.in/nirf/Innovationcell/Incubator/INC-01.pdf" target="_blank" rel="noreferrer">Click Here</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Innovation;