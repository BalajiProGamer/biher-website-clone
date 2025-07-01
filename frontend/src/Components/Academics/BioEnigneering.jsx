import React, { useState } from "react";
import bioengImg from "../../assets/bioeng.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const BioEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="bioeng-content-welcome">Welcome to School of Bioengineering</h5>
        <h3 className="bioeng-content-heading">About <span className="bioeng-highlight">The School :</span></h3>
        <hr />
        <p className="bioeng-content-paragraph">The School of Bioengineering bridges life sciences and engineering to solve complex biological and medical challenges.</p>
        <p className="bioeng-content-paragraph">We foster innovation in biomedical devices, tissue engineering, and molecular diagnostics through interdisciplinary learning and research.</p>
        <p className="bioeng-content-paragraph">Our programs prepare students for impactful careers in healthcare, pharmaceuticals, biotechnology, and research institutions.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="bioeng-content-heading">Vision & <span className="bioeng-highlight">Mission</span></h3>
        <hr />
        <h3 className="bioeng-content-heading">Our <span className="bioeng-highlight">Vision :</span></h3>
        <p className="bioeng-content-paragraph">To be a pioneering institution in bioengineering education, research, and innovation for human well-being.</p>
        <h3 className="bioeng-content-heading">Our <span className="bioeng-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To blend biological science with engineering principles for real-world applications.</i></li>
          <br />
          <li>To promote excellence in biomedical research and healthcare solutions.</li>
          <br />
          <li>To develop ethical professionals capable of addressing global biomedical challenges.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="bioeng-content-heading">Dean's <span className="bioeng-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="bioeng-dean-profile">
          <img src={deanImg} alt="Dean" className="bioeng-dean-image" />
          <div className="bioeng-dean-details">
            <h4 className="bioeng-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="bioeng-dean-qual">M.Tech., PhD</span>
            </h4>
            <p className="bioeng-dean-title">👨‍🔬 Professor and Dean,<br />🏛 School of Bioengineering, BIHER</p>
          </div>
        </div>

        <div className="bioeng-dean-message">
          <p>Bioengineering is at the heart of modern healthcare innovation. Our school focuses on nurturing engineers who understand biology and apply it meaningfully.</p>
          <br />
          <p>We train students in a variety of interdisciplinary domains including biomaterials, biomechanics, and regenerative medicine.</p>
          <br />
          <p>We aim to produce leaders who drive healthcare transformation with compassion and scientific rigor.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="bioeng-content-heading">Board of <span className="bioeng-highlight">Studies</span></h3>
        <hr />
        <p className="bioeng-content-paragraph">The board includes leading academicians and professionals shaping the curriculum and direction of bioengineering education.</p>
        <p className="bioeng-content-paragraph">» Members are drawn from research institutes, medical device companies, and global biotech firms.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="bioeng-content-heading">Members of BOS <span className="bioeng-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="bioeng-bos-table">
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
              <td>Biomedical Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Biomaterials</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Medical Imaging</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Cell Biology</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={bioengImg} alt="Bioengineering" className="bioeng-banner" />

      <div className="bioeng-breadcrumb-header">
        <div className="bioeng-breadcrumb-container">
          <Link to="/" className="bioeng-breadcrumb-link"><FaHome className="bioeng-breadcrumb-icon" /></Link>
          <span className="bioeng-breadcrumb-separator">»</span>
          <span className="bioeng-breadcrumb-text">Academics</span>
          <span className="bioeng-breadcrumb-separator">»</span>
          <span className="bioeng-breadcrumb-current">School of Bioengineering</span>
        </div>
      </div>

      <div className="bioeng-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="bioeng-content-container">
          <div className="bioeng-sidebar">
            <div className="bioeng-sidebar-header">
              <FaBook className="bioeng-sidebar-icon" />
              Categories
            </div>
            <ul className="bioeng-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="bioeng-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="bioeng-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'bioeng-active-tab' : ''}
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
                    className={selectedTab === item ? 'bioeng-active-tab' : ''}
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

          <div className="bioeng-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BioEngineering;
