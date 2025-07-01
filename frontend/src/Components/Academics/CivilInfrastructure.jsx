import React, { useState } from "react";
import civilinfraImg from "../../assets/civil.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const CivilInfrastructure = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="civilinfra-content-welcome">Welcome to School of Civil Infrastructure</h5>
        <h3 className="civilinfra-content-heading">About <span className="civilinfra-highlight">The School :</span></h3>
        <hr />
        <p className="civilinfra-content-paragraph">The School of Civil Infrastructure equips students with skills in structural engineering, sustainable development, construction management, and geotechnics.</p>
        <p className="civilinfra-content-paragraph">We emphasize practical problem-solving, design thinking, and innovation through fieldwork, labs, and research.</p>
        <p className="civilinfra-content-paragraph">Graduates are prepared for impactful roles in construction, public works, infrastructure consulting, and policy planning.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="civilinfra-content-heading">Vision & <span className="civilinfra-highlight">Mission</span></h3>
        <hr />
        <h3 className="civilinfra-content-heading">Our <span className="civilinfra-highlight">Vision :</span></h3>
        <p className="civilinfra-content-paragraph">To be a leader in civil infrastructure education, research, and sustainable development practices.</p>
        <h3 className="civilinfra-content-heading">Our <span className="civilinfra-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To deliver quality education integrating theory and field-based knowledge.</i></li>
          <br />
          <li>To encourage innovation and ethical practice in infrastructure planning and design.</li>
          <br />
          <li>To contribute to nation-building through resilient and sustainable civil systems.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="civilinfra-content-heading">Dean's <span className="civilinfra-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="civilinfra-dean-profile">
          <img src={deanImg} alt="Dean" className="civilinfra-dean-image" />
          <div className="civilinfra-dean-details">
            <h4 className="civilinfra-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="civilinfra-dean-qual">M.Tech., PhD</span>
            </h4>
            <p className="civilinfra-dean-title">👷‍♂️ Professor and Dean,<br />🏛 School of Civil Infrastructure, BIHER</p>
          </div>
        </div>

        <div className="civilinfra-dean-message">
          <p>Civil infrastructure is foundational to societal growth. Our school blends engineering excellence with social responsibility and environmental care.</p>
          <br />
          <p>We train students to innovate in areas like smart cities, earthquake engineering, and green construction.</p>
          <br />
          <p>We aim to nurture engineers who build strong, safe, and sustainable communities worldwide.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="civilinfra-content-heading">Board of <span className="civilinfra-highlight">Studies</span></h3>
        <hr />
        <p className="civilinfra-content-paragraph">The board includes eminent civil engineers and academic experts guiding the curriculum and research strategies in infrastructure studies.</p>
        <p className="civilinfra-content-paragraph">» Members represent top universities, consultancy firms, and public infrastructure authorities.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="civilinfra-content-heading">Members of BOS <span className="civilinfra-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="civilinfra-bos-table">
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
              <td>Structural Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Construction Management</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Geotechnical Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Environmental Engineering</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={civilinfraImg} alt="Civil Infrastructure" className="civilinfra-banner" />

      <div className="civilinfra-breadcrumb-header">
        <div className="civilinfra-breadcrumb-container">
          <Link to="/" className="civilinfra-breadcrumb-link"><FaHome className="civilinfra-breadcrumb-icon" /></Link>
          <span className="civilinfra-breadcrumb-separator">»</span>
          <span className="civilinfra-breadcrumb-text">Academics</span>
          <span className="civilinfra-breadcrumb-separator">»</span>
          <span className="civilinfra-breadcrumb-current">School of Civil Infrastructure</span>
        </div>
      </div>

      <div className="civilinfra-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="civilinfra-content-container">
          <div className="civilinfra-sidebar">
            <div className="civilinfra-sidebar-header">
              <FaBook className="civilinfra-sidebar-icon" />
              Categories
            </div>
            <ul className="civilinfra-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="civilinfra-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="civilinfra-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'civilinfra-active-tab' : ''}
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
                    className={selectedTab === item ? 'civilinfra-active-tab' : ''}
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

          <div className="civilinfra-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CivilInfrastructure;
