import React, { useState } from "react";
import artsImg from "../../assets/arts.jpg"; // Update path if needed
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css'; // Make sure your CSS uses .arts- class names

const ArtsEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");

  const content = {
    "About": (
      <>
        <h5 className="arts-content-welcome">Welcome to Arts</h5>
        <h3 className="arts-content-heading">About <span className="arts-highlight">The School :</span></h3>
        <hr />
        <p className="arts-content-paragraph">Architecture blends creativity, technology, and functionality to shape spaces where people live, work, and thrive...</p>
        <p className="arts-content-paragraph">Our students are trained to approach building design with sustainable practices, urban planning concepts, and smart design philosophies...</p>
      </>
    ),
    "Vision & Mission": (
      <>
        <h3 className="arts-content-heading">Vision & <span className="arts-highlight">Mission</span></h3>
        <hr />
        <p className="arts-content-paragraph">To become a center of excellence in arts education by nurturing creative minds and shaping future artists and cultural leaders...</p>
      </>
    ),
    "Deans Desk": (
      <>
        <h3 className="arts-content-heading">Dean's <span className="arts-highlight">Desk</span></h3>
        <hr />
        <p className="arts-content-paragraph">Welcome to the School of Arts. We aim to empower students with traditional and contemporary tools to explore creative expression...</p>
      </>
    ),
    "Board of Studies": (
      <>
        <h3 className="arts-content-heading">Board of <span className="arts-highlight">Studies</span></h3>
        <hr />
        <p className="arts-content-paragraph">The Board comprises renowned artists, educators, and researchers who guide curriculum and ensure academic excellence...</p>
      </>
    ),
    "Programme Offered": (
      <>
        <h3 className="arts-content-heading">Programme <span className="arts-highlight">Offered</span></h3>
        <hr />
        <p className="arts-content-paragraph">We offer B.A., BFA, M.A., and MFA programs in Fine Arts, Performing Arts, Visual Communication, and Cultural Studies...</p>
      </>
    ),
    "Student Innovation": (
      <>
        <h3 className="arts-content-heading">Student <span className="arts-highlight">Innovation</span></h3>
        <hr />
        <p className="arts-content-paragraph">Our students present their work in national art festivals, exhibitions, film screenings, and collaborate with cultural organizations...</p>
      </>
    ),
  };

  return (
    <div>
      {/* Top Banner */}
      <img src={artsImg} alt="Arts" className="arts-banner" />

      {/* Breadcrumb */}
      <div className="arts-breadcrumb-header">
        <div className="arts-breadcrumb-container">
          <Link to="/" className="arts-breadcrumb-link"><FaHome className="arts-breadcrumb-icon" /></Link>
          <span className="arts-breadcrumb-separator">»</span>
          <span className="arts-breadcrumb-text">Academics</span>
          <span className="arts-breadcrumb-separator">»</span>
          <span className="arts-breadcrumb-current">School of Arts</span>
        </div>
      </div>

      {/* Background Section */}
      <div className="arts-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="arts-content-container">

          {/* Sidebar */}
          <div className="arts-sidebar">
            <div className="arts-sidebar-header">
              <FaBook className="arts-sidebar-icon" />
              Categories
            </div>
            <ul className="arts-sidebar-list">
              {Object.keys(content).map((item) => (
                <li
                  key={item}
                  className={selectedTab === item ? 'arts-active-tab' : ''}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="arts-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtsEngineering;
