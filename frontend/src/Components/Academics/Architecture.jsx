import React, { useState } from "react";
import architectureImg from "../../assets/Architecture.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const ArchitectureEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="arch-content-welcome">Welcome to Architecture</h5>
        <h3 className="arch-content-heading">About <span className="arch-highlight">The School :</span></h3>
        <hr />
        <p className="arch-content-paragraph">The School of Architecture aims to blend creativity with technical knowledge to build innovative, sustainable spaces for the future.</p>
        <p className="arch-content-paragraph">Students are nurtured to become visionary architects with a strong understanding of environmental and cultural contexts.</p>
        <p className="arch-content-paragraph">We promote design excellence, hands-on studio practice, and exposure to global architectural trends.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="arch-content-heading">Vision & <span className="arch-highlight">Mission</span></h3>
        <hr />
        <h3 className="arch-content-heading">Our <span className="arch-highlight">Vision :</span></h3>
        <p className="arch-content-paragraph">To be a globally recognized school for architectural education and sustainable design innovation.</p>
        <h3 className="arch-content-heading">Our <span className="arch-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To provide comprehensive education in design, planning, and construction technologies.</i></li>
          <br />
          <li>To foster creativity, critical thinking, and cultural awareness in future architects.</li>
          <br />
          <li>To engage with communities through sustainable and socially responsive design solutions.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="arch-content-heading">Dean's <span className="arch-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="arch-dean-profile">
          <img src={deanImg} alt="Dean" className="arch-dean-image" />
          <div className="arch-dean-details">
            <h4 className="arch-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="arch-dean-qual">M.Tech., PhD (IIT–Kanpur)</span>
            </h4>
            <p className="arch-dean-title">👨‍🏫 Professor and Dean,<br />🏛 School of Architecture, BIHER</p>
          </div>
        </div>

        <div className="arch-dean-message">
          <p>Architecture bridges functionality with aesthetics. Our department fosters a culture of design excellence, research, and real-world application through studio-based learning.</p>
          <br />
          <p>Our students and faculty are committed to pushing the boundaries of architectural design while addressing the needs of society and the environment.</p>
          <br />
          <p>We empower students to shape the built environment with innovation, ethics, and empathy.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="arch-content-heading">Board of <span className="arch-highlight">Studies</span></h3>
        <hr />
        <p className="arch-content-paragraph">The board comprises domain experts, senior faculty, and research professionals who collaboratively guide curriculum design, academic standards, and future-focused initiatives.</p>
        <p className="arch-content-paragraph">» Members include representatives from COA, academia, and industry professionals in architecture and planning.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="arch-content-heading">Members of BOS <span className="arch-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="arch-bos-table">
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
              <td>Architectural Design & Planning</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Sustainable Design</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Urban Design</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>History of Architecture</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={architectureImg} alt="Architecture" className="arch-banner" />

      <div className="arch-breadcrumb-header">
        <div className="arch-breadcrumb-container">
          <Link to="/" className="arch-breadcrumb-link"><FaHome className="arch-breadcrumb-icon" /></Link>
          <span className="arch-breadcrumb-separator">»</span>
          <span className="arch-breadcrumb-text">Academics</span>
          <span className="arch-breadcrumb-separator">»</span>
          <span className="arch-breadcrumb-current">School of Architecture</span>
        </div>
      </div>

      <div className="arch-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="arch-content-container">
          <div className="arch-sidebar">
            <div className="arch-sidebar-header">
              <FaBook className="arch-sidebar-icon" />
              Categories
            </div>
            <ul className="arch-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="arch-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="arch-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'arch-active-tab' : ''}
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
                    className={selectedTab === item ? 'arch-active-tab' : ''}
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

          <div className="arch-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArchitectureEngineering;
