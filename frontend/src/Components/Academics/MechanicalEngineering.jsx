import React, { useState } from "react";
import mechanicalImg from "../../assets/mechanical.jpg"; // Update the path as needed
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const MechanicalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="mechanical-content-welcome">Welcome to School of Mechanical Engineering</h5>
        <h3 className="mechanical-content-heading">About <span className="mechanical-highlight">The School :</span></h3>
        <hr />
        <p className="mechanical-content-paragraph">The School of Mechanical Engineering provides rigorous training in design, thermal, and manufacturing engineering fundamentals.</p>
        <p className="mechanical-content-paragraph">We emphasize innovation, hands-on learning, and research in robotics, CAD/CAM, materials, and sustainable technologies.</p>
        <p className="mechanical-content-paragraph">Our graduates are equipped for careers in automotive, aerospace, energy, manufacturing, and research sectors.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="mechanical-content-heading">Vision & <span className="mechanical-highlight">Mission</span></h3>
        <hr />
        <h3 className="mechanical-content-heading">Our <span className="mechanical-highlight">Vision :</span></h3>
        <p className="mechanical-content-paragraph">To be a leader in mechanical engineering education, innovation, and industrial collaboration.</p>
        <h3 className="mechanical-content-heading">Our <span className="mechanical-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To develop engineers with strong technical and ethical foundations.</i></li>
          <br />
          <li>To integrate research, entrepreneurship, and industrial exposure into the learning process.</li>
          <br />
          <li>To contribute to sustainable development through mechanical engineering solutions.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="mechanical-content-heading">Dean's <span className="mechanical-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="mechanical-dean-profile">
          <img src={deanImg} alt="Dean" className="mechanical-dean-image" />
          <div className="mechanical-dean-details">
            <h4 className="mechanical-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="mechanical-dean-qual">M.E., PhD</span>
            </h4>
            <p className="mechanical-dean-title">🛠️ Professor and Dean,<br />🏛 School of Mechanical Engineering, BIHER</p>
          </div>
        </div>

        <div className="mechanical-dean-message">
          <p>Mechanical engineers build the backbone of industries. Our curriculum integrates fundamentals with modern technologies and innovation.</p>
          <br />
          <p>Through labs, projects, and industry tie-ups, we offer an immersive and applied learning experience.</p>
          <br />
          <p>We aim to nurture problem-solvers and technology leaders for a better tomorrow.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="mechanical-content-heading">Board of <span className="mechanical-highlight">Studies</span></h3>
        <hr />
        <p className="mechanical-content-paragraph">The board includes eminent academicians and industry professionals who regularly revise the curriculum for mechanical relevance and innovation.</p>
        <p className="mechanical-content-paragraph">» Members provide critical input on teaching methodologies and emerging technologies.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="mechanical-content-heading">Members of BOS <span className="mechanical-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="mechanical-bos-table">
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
              <td>Thermal Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Design Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Manufacturing</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Robotics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={mechanicalImg} alt="Mechanical Engineering" className="mechanical-banner" />

      <div className="mechanical-breadcrumb-header">
        <div className="mechanical-breadcrumb-container">
          <Link to="/" className="mechanical-breadcrumb-link"><FaHome className="mechanical-breadcrumb-icon" /></Link>
          <span className="mechanical-breadcrumb-separator">»</span>
          <span className="mechanical-breadcrumb-text">Academics</span>
          <span className="mechanical-breadcrumb-separator">»</span>
          <span className="mechanical-breadcrumb-current">School of Mechanical Engineering</span>
        </div>
      </div>

      <div className="mechanical-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="mechanical-content-container">
          <div className="mechanical-sidebar">
            <div className="mechanical-sidebar-header">
              <FaBook className="mechanical-sidebar-icon" />
              Categories
            </div>
            <ul className="mechanical-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="mechanical-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="mechanical-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'mechanical-active-tab' : ''}
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
                    className={selectedTab === item ? 'mechanical-active-tab' : ''}
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

          <div className="mechanical-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MechanicalEngineering;
