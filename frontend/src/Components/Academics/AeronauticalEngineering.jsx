import React, { useState } from "react";
import aerospaceImg from "../../assets/arospace11.jpg";
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css'; // Custom CSS

const AeronauticalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");

  const content = {
    "About": (
      <>
        <h5 className="content-welcome">Welcome to Aeronautical Engineering</h5>
        <h3 className="content-heading">About <span className="highlight">The School :</span></h3>
        <hr />
        <p className="content-paragraph">Twenty first century is poised to become a century of space explorations and manned missions to other planets. It will be a time of space stations and robotic probes...</p>
        <p className="content-paragraph">The Aeronautical Engineering students are encouraged to actively involve in research projects and come out with innovative ideas...
          lorem400
        </p>
      </>
    ),
    "Vision & Mission": (
      <>
        <h3 className="content-heading">Vision & <span className="highlight">Mission</span></h3>
        <hr />
        <p className="content-paragraph">Our vision is to become a global leader in aerospace engineering...</p>
      </>
    ),
    "Deans Desk": (
      <>
        <h3 className="content-heading">Dean's <span className="highlight">Desk</span></h3>
        <hr />
        <p className="content-paragraph">Welcome to the Aeronautical Engineering Department. Our faculty...</p>
      </>
    ),
    "Board of Studies": (
      <>
        <h3 className="content-heading">Board of <span className="highlight">Studies</span></h3>
        <hr />
        <p className="content-paragraph">The board consists of industry experts, senior professors...</p>
      </>
    ),
    "Programme Offered": (
      <>
        <h3 className="content-heading">Programme <span className="highlight">Offered</span></h3>
        <hr />
        <p className="content-paragraph">We offer B.E. in Aeronautical Engineering with electives in propulsion, flight dynamics...</p>
      </>
    ),
    "Student Innovation": (
      <>
        <h3 className="content-heading">Student <span className="highlight">Innovation</span></h3>
        <hr />
        <p className="content-paragraph">Our students have participated in national-level competitions like AeroModelling, UAV challenges...</p>
      </>
    ),
  };

  return (
    <div>
      {/* Banner */}
      <img src={aerospaceImg} alt="Aerospace" className="aero-banner" />

      {/* Breadcrumb */}
      <div className="breadcrumb-header">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link"><FaHome className="breadcrumb-icon" /></Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-text">Academics</span>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">School of Aeronautical Engineering</span>
        </div>
      </div>

      {/* Section */}
      <div className="aero-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="aero-content-container">
          
          {/* Sidebar without wrapper */}
          <div className="sidebar">
            <div className="sidebar-header">
              <FaBook className="sidebar-icon" />
              Categories
            </div>
            <ul className="sidebar-list">
              {Object.keys(content).map((item) => (
                <li
                  key={item}
                  className={selectedTab === item ? 'active-tab' : ''}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Content */}
          <div className="content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AeronauticalEngineering;
