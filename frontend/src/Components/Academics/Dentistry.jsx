import React, { useState } from "react";
import dentistryImg from "../../assets/Dentistry1.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const Dentistry = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="dentistry-content-welcome">Welcome to School of Dentistry</h5>
        <h3 className="dentistry-content-heading">About <span className="dentistry-highlight">The School :</span></h3>
        <hr />
        <p className="dentistry-content-paragraph">The School of Dentistry prepares students in clinical expertise, oral health sciences, dental surgery, and patient-centered care.</p>
        <p className="dentistry-content-paragraph">We emphasize hands-on learning, ethical practice, and community service through clinical rotations, labs, and research.</p>
        <p className="dentistry-content-paragraph">Graduates are ready to lead in dental clinics, hospitals, public health, and academic settings worldwide.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="dentistry-content-heading">Vision & <span className="dentistry-highlight">Mission</span></h3>
        <hr />
        <h3 className="dentistry-content-heading">Our <span className="dentistry-highlight">Vision :</span></h3>
        <p className="dentistry-content-paragraph">To be a global leader in dental education, clinical research, and oral healthcare excellence.</p>
        <h3 className="dentistry-content-heading">Our <span className="dentistry-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To deliver high-quality dental education with a strong foundation in science and clinical skills.</i></li>
          <br />
          <li>To foster innovation, empathy, and ethical responsibility in dental practice.</li>
          <br />
          <li>To improve community oral health through research and outreach initiatives.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="dentistry-content-heading">Dean's <span className="dentistry-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="dentistry-dean-profile">
          <img src={deanImg} alt="Dean" className="dentistry-dean-image" />
          <div className="dentistry-dean-details">
            <h4 className="dentistry-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="dentistry-dean-qual">MDS., PhD</span>
            </h4>
            <p className="dentistry-dean-title">🦷 Professor and Dean,<br />🏛 School of Dentistry, BIHER</p>
          </div>
        </div>

        <div className="dentistry-dean-message">
          <p>Oral health is vital to overall wellness. Our school instills technical skill and compassionate care in every dental student.</p>
          <br />
          <p>We train future dentists to lead in oral diagnostics, surgery, preventive care, and research.</p>
          <br />
          <p>We strive to create professionals who serve with integrity and make a lasting impact on community oral health.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="dentistry-content-heading">Board of <span className="dentistry-highlight">Studies</span></h3>
        <hr />
        <p className="dentistry-content-paragraph">The board consists of distinguished dental educators and practitioners shaping the curriculum and research direction in dental sciences.</p>
        <p className="dentistry-content-paragraph">» Members include clinicians, researchers, and public health professionals across institutions.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="dentistry-content-heading">Members of BOS <span className="dentistry-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="dentistry-bos-table">
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
              <td>Oral Pathology</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Orthodontics</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Periodontology</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Prosthodontics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={dentistryImg} alt="Dentistry" className="dentistry-banner" />

      <div className="dentistry-breadcrumb-header">
        <div className="dentistry-breadcrumb-container">
          <Link to="/" className="dentistry-breadcrumb-link"><FaHome className="dentistry-breadcrumb-icon" /></Link>
          <span className="dentistry-breadcrumb-separator">»</span>
          <span className="dentistry-breadcrumb-text">Academics</span>
          <span className="dentistry-breadcrumb-separator">»</span>
          <span className="dentistry-breadcrumb-current">School of Dentistry</span>
        </div>
      </div>

      <div className="dentistry-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="dentistry-content-container">
          <div className="dentistry-sidebar">
            <div className="dentistry-sidebar-header">
              <FaBook className="dentistry-sidebar-icon" />
              Categories
            </div>
            <ul className="dentistry-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="dentistry-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="dentistry-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'dentistry-active-tab' : ''}
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
                    className={selectedTab === item ? 'dentistry-active-tab' : ''}
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

          <div className="dentistry-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dentistry;
