import React, { useState } from "react";
import architectureImg from "../../assets/Architecture.jpg";
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';

const ArchitectureEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");

  const content = {
    "About": (
      <>
        <h5 className="archit-content-welcome">Welcome to Architecture</h5>
        <h3 className="archit-content-heading">About <span className="archit-highlight">The School :</span></h3>
        <hr />
        <p className="archit-content-paragraph">Architecture blends creativity, technology, and functionality to shape spaces where people live, work, and thrive...</p>
        <p className="archit-content-paragraph">Our students are trained to approach building design with sustainable practices, urban planning concepts, and smart design philosophies...</p>
      </>
    ),
    "Vision & Mission": (
      <>
        <h3 className="archit-content-heading">Vision & <span className="archit-highlight">Mission</span></h3>
        <hr />
        <p className="archit-content-paragraph">To become a center of excellence in architectural education by nurturing creative minds and shaping future architects who build for tomorrow...</p>
      </>
    ),
    "Deans Desk": (
      <>
        <h3 className="archit-content-heading">Dean's <span className="archit-highlight">Desk</span></h3>
        <hr />
        <p className="archit-content-paragraph">Welcome to the School of Architecture. We aim to empower students with both traditional and modern design tools to rethink the built environment...</p>
      </>
    ),
    "Board of Studies": (
      <>
        <h3 className="archit-content-heading">Board of <span className="archit-highlight">Studies</span></h3>
        <hr />
        <p className="archit-content-paragraph">The Board comprises renowned architects, urban designers, and professors who guide curriculum and ensure alignment with industry standards...</p>
      </>
    ),
    "Programme Offered": (
      <>
        <h3 className="archit-content-heading">Programme <span className="archit-highlight">Offered</span></h3>
        <hr />
        <p className="archit-content-paragraph">We offer B.Arch and M.Arch programs focusing on design thinking, sustainable architecture, history of architecture, and computational design...</p>
      </>
    ),
    "Student Innovation": (
      <>
        <h3 className="archit-content-heading">Student <span className="archit-highlight">Innovation</span></h3>
        <hr />
        <p className="archit-content-paragraph">Our students present work at national design competitions, urban renewal challenges, and collaborate on community architecture projects...</p>
      </>
    ),
  };

  return (
    <div>
      {/* Top Banner */}
      <img src={architectureImg} alt="Architecture" className="archit-banner" />

      {/* Breadcrumb */}
      <div className="archit-breadcrumb-header">
        <div className="archit-breadcrumb-container">
          <Link to="/" className="archit-breadcrumb-link"><FaHome className="archit-breadcrumb-icon" /></Link>
          <span className="archit-breadcrumb-separator">»</span>
          <span className="archit-breadcrumb-text">Academics</span>
          <span className="archit-breadcrumb-separator">»</span>
          <span className="archit-breadcrumb-current">School of Architecture</span>
        </div>
      </div>

      {/* Background Section */}
      <div className="archit-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="archit-content-container">

          {/* Sidebar */}
          <div className="archit-sidebar">
            <div className="archit-sidebar-header">
              <FaBook className="archit-sidebar-icon" />
              Categories
            </div>
            <ul className="archit-sidebar-list">
              {Object.keys(content).map((item) => (
                <li
                  key={item}
                  className={selectedTab === item ? 'archit-active-tab' : ''}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="archit-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArchitectureEngineering;
