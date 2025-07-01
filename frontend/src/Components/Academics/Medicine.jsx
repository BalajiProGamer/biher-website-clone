import React, { useState } from "react";
import medicineImg from "../../assets/Medicine1.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const Medicine = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="medicine-content-welcome">Welcome to School of Medicine</h5>
        <h3 className="medicine-content-heading">About <span className="medicine-highlight">The School :</span></h3>
        <hr />
        <p className="medicine-content-paragraph">The School of Medicine trains future doctors with strong fundamentals in biomedical sciences, clinical skills, and patient care.</p>
        <p className="medicine-content-paragraph">Our focus is on holistic learning, hands-on experience, and evidence-based practice through labs, hospitals, and research.</p>
        <p className="medicine-content-paragraph">Graduates thrive in healthcare, research, education, and public health systems globally.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="medicine-content-heading">Vision & <span className="medicine-highlight">Mission</span></h3>
        <hr />
        <h3 className="medicine-content-heading">Our <span className="medicine-highlight">Vision :</span></h3>
        <p className="medicine-content-paragraph">To be a globally recognized medical school fostering excellence in health sciences and compassionate care.</p>
        <h3 className="medicine-content-heading">Our <span className="medicine-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To deliver world-class medical education and research opportunities.</i></li>
          <br />
          <li>To instill ethical and compassionate values in healthcare practice.</li>
          <br />
          <li>To improve health outcomes through innovation and community service.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="medicine-content-heading">Dean's <span className="medicine-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="medicine-dean-profile">
          <img src={deanImg} alt="Dean" className="medicine-dean-image" />
          <div className="medicine-dean-details">
            <h4 className="medicine-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="medicine-dean-qual">MBBS, MD</span>
            </h4>
            <p className="medicine-dean-title">🩺 Professor and Dean,<br />🏛 School of Medicine, BIHER</p>
          </div>
        </div>

        <div className="medicine-dean-message">
          <p>Medicine is a calling rooted in compassion, precision, and resilience. We cultivate doctors who heal and innovate with responsibility.</p>
          <br />
          <p>Our students learn through simulations, clinical rotations, and research-driven practice.</p>
          <br />
          <p>We aim to produce leaders who transform health systems and touch lives with dignity and care.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="medicine-content-heading">Board of <span className="medicine-highlight">Studies</span></h3>
        <hr />
        <p className="medicine-content-paragraph">The board includes renowned clinicians, researchers, and public health experts shaping the medical curriculum and research agenda.</p>
        <p className="medicine-content-paragraph">» Members include doctors, scientists, and policy-makers with national and global impact.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="medicine-content-heading">Members of BOS <span className="medicine-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="medicine-bos-table">
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
              <td>Internal Medicine</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Physiology</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Pharmacology</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Anatomy</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={medicineImg} alt="Medicine" className="medicine-banner" />

      <div className="medicine-breadcrumb-header">
        <div className="medicine-breadcrumb-container">
          <Link to="/" className="medicine-breadcrumb-link"><FaHome className="medicine-breadcrumb-icon" /></Link>
          <span className="medicine-breadcrumb-separator">»</span>
          <span className="medicine-breadcrumb-text">Academics</span>
          <span className="medicine-breadcrumb-separator">»</span>
          <span className="medicine-breadcrumb-current">School of Medicine</span>
        </div>
      </div>

      <div className="medicine-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="medicine-content-container">
          <div className="medicine-sidebar">
            <div className="medicine-sidebar-header">
              <FaBook className="medicine-sidebar-icon" />
              Categories
            </div>
            <ul className="medicine-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="medicine-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="medicine-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'medicine-active-tab' : ''}
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
                    className={selectedTab === item ? 'medicine-active-tab' : ''}
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

          <div className="medicine-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Medicine;
