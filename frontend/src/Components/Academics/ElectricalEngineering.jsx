import React, { useState } from "react";
import electricalImg from "../../assets/electric eng.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const ElectricalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="electrical-content-welcome">Welcome to School of Electrical Engineering</h5>
        <h3 className="electrical-content-heading">About <span className="electrical-highlight">The School :</span></h3>
        <hr />
        <p className="electrical-content-paragraph">The School of Electrical Engineering equips students with a strong foundation in power systems, control systems, electronics, and electrical machines.</p>
        <p className="electrical-content-paragraph">We focus on innovation, sustainability, and industry-aligned training through labs, workshops, and internships.</p>
        <p className="electrical-content-paragraph">Graduates are well-prepared for careers in power utilities, automation, renewable energy, and research.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="electrical-content-heading">Vision & <span className="electrical-highlight">Mission</span></h3>
        <hr />
        <h3 className="electrical-content-heading">Our <span className="electrical-highlight">Vision :</span></h3>
        <p className="electrical-content-paragraph">To be a center of excellence in electrical engineering education and research.</p>
        <h3 className="electrical-content-heading">Our <span className="electrical-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To provide high-quality education and develop skilled electrical engineers.</i></li>
          <br />
          <li>To promote research, innovation, and collaboration with industry.</li>
          <br />
          <li>To foster ethical values and environmental responsibility in engineering practice.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="electrical-content-heading">Dean's <span className="electrical-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="electrical-dean-profile">
          <img src={deanImg} alt="Dean" className="electrical-dean-image" />
          <div className="electrical-dean-details">
            <h4 className="electrical-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="electrical-dean-qual">M.E., PhD</span>
            </h4>
            <p className="electrical-dean-title">⚡ Professor and Dean,<br />🏛 School of Electrical Engineering, BIHER</p>
          </div>
        </div>

        <div className="electrical-dean-message">
          <p>Electrical engineering powers modern technology and infrastructure. Our school prepares engineers to lead with innovation and integrity.</p>
          <br />
          <p>We provide hands-on training in power systems, electronics, and automation through advanced labs and projects.</p>
          <br />
          <p>We are committed to producing engineers who drive sustainable and impactful change.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="electrical-content-heading">Board of <span className="electrical-highlight">Studies</span></h3>
        <hr />
        <p className="electrical-content-paragraph">The board includes eminent electrical engineers and academicians guiding curriculum innovation and research excellence.</p>
        <p className="electrical-content-paragraph">» Members include industry leaders, faculty, and alumni shaping the future of electrical engineering.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="electrical-content-heading">Members of BOS <span className="electrical-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="electrical-bos-table">
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
              <td>Power Systems</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Control Systems</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Power Electronics</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Electrical Machines</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={electricalImg} alt="Electrical Engineering" className="electrical-banner" />

      <div className="electrical-breadcrumb-header">
        <div className="electrical-breadcrumb-container">
          <Link to="/" className="electrical-breadcrumb-link"><FaHome className="electrical-breadcrumb-icon" /></Link>
          <span className="electrical-breadcrumb-separator">»</span>
          <span className="electrical-breadcrumb-text">Academics</span>
          <span className="electrical-breadcrumb-separator">»</span>
          <span className="electrical-breadcrumb-current">School of Electrical Engineering</span>
        </div>
      </div>

      <div className="electrical-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="electrical-content-container">
          <div className="electrical-sidebar">
            <div className="electrical-sidebar-header">
              <FaBook className="electrical-sidebar-icon" />
              Categories
            </div>
            <ul className="electrical-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="electrical-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="electrical-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'electrical-active-tab' : ''}
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
                    className={selectedTab === item ? 'electrical-active-tab' : ''}
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

          <div className="electrical-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ElectricalEngineering;
