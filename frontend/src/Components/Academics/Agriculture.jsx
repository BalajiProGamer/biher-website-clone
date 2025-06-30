import React, { useState } from "react";
import agricultureImg from "../../assets/agriculture.jpg";
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';

const AgriculturalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");

  const content = {
    "About": (
      <>
        <h5 className="agri-content-welcome">Welcome to Agricultural Engineering</h5>
        <h3 className="agri-content-heading">About <span className="agri-highlight">The School :</span></h3>
        <hr />
        <p className="agri-content-paragraph">The 21st century in agriculture is witnessing advancements in precision farming, sustainable practices, and agri-technology...</p>
        <p className="agri-content-paragraph">The Agricultural Engineering students are encouraged to innovate in areas like irrigation systems, soil health monitoring, and smart farm equipment...</p>
      </>
    ),
    "Vision & Mission": (
      <>
        <h3 className="agri-content-heading">Vision & <span className="agri-highlight">Mission</span></h3>
        <hr />
        <p className="agri-content-paragraph">Our vision is to produce engineers who revolutionize sustainable agriculture through technology and innovation...</p>
      </>
    ),
    "Deans Desk": (
      <>
        <h3 className="agri-content-heading">Dean's <span className="agri-highlight">Desk</span></h3>
        <hr />
        <p className="agri-content-paragraph">Welcome to the Agricultural Engineering Department. Our dedicated faculty guides students in addressing real-world farming challenges...</p>
      </>
    ),
    "Board of Studies": (
      <>
        <h3 className="agri-content-heading">Board of <span className="agri-highlight">Studies</span></h3>
        <hr />
        <p className="agri-content-paragraph">Our Board includes agronomists, soil scientists, and agricultural machinery experts working toward curriculum excellence...</p>
      </>
    ),
    "Programme Offered": (
      <>
        <h3 className="agri-content-heading">Programme <span className="agri-highlight">Offered</span></h3>
        <hr />
        <p className="agri-content-paragraph">We offer B.Tech in Agricultural Engineering with electives in irrigation, GIS, food processing, and mechanized farming...</p>
      </>
    ),
    "Student Innovation": (
      <>
        <h3 className="agri-content-heading">Student <span className="agri-highlight">Innovation</span></h3>
        <hr />
        <p className="agri-content-paragraph">Our students participate in agricultural hackathons, design low-cost tools for rural farms, and engage in hands-on field research...</p>
      </>
    ),
  };

  return (
    <div>
      {/* Top Banner */}
      <img src={agricultureImg} alt="Agriculture" className="agri-banner" />

      {/* Breadcrumb */}
      <div className="agri-breadcrumb-header">
        <div className="agri-breadcrumb-container">
          <Link to="/" className="agri-breadcrumb-link"><FaHome className="agri-breadcrumb-icon" /></Link>
          <span className="agri-breadcrumb-separator">»</span>
          <span className="agri-breadcrumb-text">Academics</span>
          <span className="agri-breadcrumb-separator">»</span>
          <span className="agri-breadcrumb-current">School of Agricultural Engineering</span>
        </div>
      </div>

      {/* Background Section */}
      <div className="agri-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="agri-content-container">

          {/* Sidebar */}
          <div className="agri-sidebar">
            <div className="agri-sidebar-header">
              <FaBook className="agri-sidebar-icon" />
              Categories
            </div>
            <ul className="agri-sidebar-list">
              {Object.keys(content).map((item) => (
                <li
                  key={item}
                  className={selectedTab === item ? 'agri-active-tab' : ''}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="agri-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgriculturalEngineering;
