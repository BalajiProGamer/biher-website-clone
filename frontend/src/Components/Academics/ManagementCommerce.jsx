
import React, { useState } from "react";
import managementImg from "../../assets/managementcommer.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const ManagementCommerce = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="management-commerce-content-welcome">Welcome to School of Management & Commerce</h5>
        <h3 className="management-commerce-content-heading">About <span className="management-commerce-highlight">The School :</span></h3>
        <hr />
        <p className="management-commerce-content-paragraph">The School of Management & Commerce develops future business leaders through a strong foundation in management, finance, marketing, and entrepreneurship.</p>
        <p className="management-commerce-content-paragraph">With industry-aligned training, experiential learning, and research-driven insights, we nurture innovation and business ethics.</p>
        <p className="management-commerce-content-paragraph">Our graduates thrive in corporate leadership, consulting, startups, and public sector roles worldwide.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="management-commerce-content-heading">Vision & <span className="management-commerce-highlight">Mission</span></h3>
        <hr />
        <h3 className="management-commerce-content-heading">Our <span className="management-commerce-highlight">Vision :</span></h3>
        <p className="management-commerce-content-paragraph">To be a global hub of excellence in business education, innovation, and ethical leadership.</p>
        <h3 className="management-commerce-content-heading">Our <span className="management-commerce-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To impart transformative education in business, commerce, and entrepreneurship.</i></li>
          <br />
          <li>To develop responsible leaders through experiential learning and innovation.</li>
          <br />
          <li>To contribute to the business ecosystem through research, ethics, and community impact.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="management-commerce-content-heading">Dean's <span className="management-commerce-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="management-commerce-dean-profile">
          <img src={deanImg} alt="Dean" className="management-commerce-dean-image" />
          <div className="management-commerce-dean-details">
            <h4 className="management-commerce-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="management-commerce-dean-qual">MBA, PhD</span>
            </h4>
            <p className="management-commerce-dean-title">📈 Professor and Dean,<br />🏛 School of Management & Commerce, BIHER</p>
          </div>
        </div>

        <div className="management-commerce-dean-message">
          <p>Business leadership today requires adaptability, ethical grounding, and global insight. Our programs prepare students for this challenge.</p>
          <br />
          <p>We combine theory with real-world practice via case studies, simulations, and industry internships.</p>
          <br />
          <p>Our mission is to develop thought leaders who create positive economic and social impact.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="management-commerce-content-heading">Board of <span className="management-commerce-highlight">Studies</span></h3>
        <hr />
        <p className="management-commerce-content-paragraph">The board consists of experienced academicians, industry experts, and entrepreneurs who shape the curriculum and research direction of the school.</p>
        <p className="management-commerce-content-paragraph">» Members bring insight into modern business challenges and solutions.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="management-commerce-content-heading">Members of BOS <span className="management-commerce-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="management-commerce-bos-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Core Competence</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colSpan="4"><strong>Chairperson</strong></td></tr>
            <tr>
              <td>01</td>
              <td>Dr. M. Sundararaj</td>
              <td>Dean Academics, BIHER</td>
              <td>Strategic Management</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Finance</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Marketing</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Business Analytics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={managementImg} alt="Management and Commerce" className="management-commerce-banner" />

      <div className="management-commerce-breadcrumb-header">
        <div className="management-commerce-breadcrumb-container">
          <Link to="/" className="management-commerce-breadcrumb-link"><FaHome className="management-commerce-breadcrumb-icon" /></Link>
          <span className="management-commerce-breadcrumb-separator">»</span>
          <span className="management-commerce-breadcrumb-text">Academics</span>
          <span className="management-commerce-breadcrumb-separator">»</span>
          <span className="management-commerce-breadcrumb-current">School of Management & Commerce</span>
        </div>
      </div>

      <div className="management-commerce-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="management-commerce-content-container">
          <div className="management-commerce-sidebar">
            <div className="management-commerce-sidebar-header">
              <FaBook className="management-commerce-sidebar-icon" />
              Categories
            </div>
            <ul className="management-commerce-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="management-commerce-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="management-commerce-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'management-commerce-active-tab' : ''}
                          >
                            » Members
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                }

                if (item === "Members") return null;

                return (
                  <li
                    key={item}
                    className={selectedTab === item ? 'management-commerce-active-tab' : ''}
                    onClick={() => {
                      setSelectedTab(item);
                      setIsBoardOpen(false);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="management-commerce-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ManagementCommerce;
