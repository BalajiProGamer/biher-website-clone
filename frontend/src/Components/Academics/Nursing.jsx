import React, { useState } from "react";
import nursingImg from "../../assets/Nursingp.jpg"; // Update the path if needed
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const Nursing = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="nursing-content-welcome">Welcome to School of Nursing</h5>
        <h3 className="nursing-content-heading">About <span className="nursing-highlight">The School :</span></h3>
        <hr />
        <p className="nursing-content-paragraph">The School of Nursing offers an integrated education in healthcare practices, clinical nursing, and patient care excellence.</p>
        <p className="nursing-content-paragraph">We provide practical exposure through hospital training, community outreach, and research, focusing on compassionate care and professionalism.</p>
        <p className="nursing-content-paragraph">Our graduates serve in top hospitals, clinics, and global health organizations.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="nursing-content-heading">Vision & <span className="nursing-highlight">Mission</span></h3>
        <hr />
        <h3 className="nursing-content-heading">Our <span className="nursing-highlight">Vision :</span></h3>
        <p className="nursing-content-paragraph">To be a premier institution in nursing education and healthcare innovation.</p>
        <h3 className="nursing-content-heading">Our <span className="nursing-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To produce competent and ethical nursing professionals.</i></li>
          <br />
          <li>To integrate clinical research and patient care into education.</li>
          <br />
          <li>To promote health equity through service and leadership.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="nursing-content-heading">Dean's <span className="nursing-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="nursing-dean-profile">
          <img src={deanImg} alt="Dean" className="nursing-dean-image" />
          <div className="nursing-dean-details">
            <h4 className="nursing-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="nursing-dean-qual">M.Sc (Nursing), PhD</span>
            </h4>
            <p className="nursing-dean-title">👩‍⚕️ Professor and Dean,<br />🏥 School of Nursing, BIHER</p>
          </div>
        </div>

        <div className="nursing-dean-message">
          <p>Nurses are the backbone of healthcare. Our programs are designed to instill compassion, skill, and clinical excellence.</p>
          <br />
          <p>We provide hands-on experience through clinical rotations, simulation labs, and interdisciplinary collaboration.</p>
          <br />
          <p>We aim to nurture future nurse leaders who advance health and care for humanity.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="nursing-content-heading">Board of <span className="nursing-highlight">Studies</span></h3>
        <hr />
        <p className="nursing-content-paragraph">Our board comprises experienced healthcare educators and practitioners ensuring curriculum excellence and relevance.</p>
        <p className="nursing-content-paragraph">» Members advise on curriculum development, clinical standards, and emerging trends in nursing practice.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="nursing-content-heading">Members of BOS <span className="nursing-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="nursing-bos-table">
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
              <td>Nursing Education</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Community Health Nursing</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Medical-Surgical Nursing</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Obstetric and Gynecologic Nursing</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={nursingImg} alt="Nursing" className="nursing-banner" />

      <div className="nursing-breadcrumb-header">
        <div className="nursing-breadcrumb-container">
          <Link to="/" className="nursing-breadcrumb-link"><FaHome className="nursing-breadcrumb-icon" /></Link>
          <span className="nursing-breadcrumb-separator">»</span>
          <span className="nursing-breadcrumb-text">Academics</span>
          <span className="nursing-breadcrumb-separator">»</span>
          <span className="nursing-breadcrumb-current">School of Nursing</span>
        </div>
      </div>

      <div className="nursing-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="nursing-content-container">
          <div className="nursing-sidebar">
            <div className="nursing-sidebar-header">
              <FaBook className="nursing-sidebar-icon" />
              Categories
            </div>
            <ul className="nursing-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="nursing-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="nursing-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'nursing-active-tab' : ''}
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
                    className={selectedTab === item ? 'nursing-active-tab' : ''}
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

          <div className="nursing-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Nursing;
