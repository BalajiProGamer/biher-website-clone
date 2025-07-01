import React, { useState } from "react";
import pharmacyImg from "../../assets/Pharmacy.jpg"; // Update the path as needed
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const Pharmacy = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="pharmacy-content-welcome">Welcome to School of Pharmacy</h5>
        <h3 className="pharmacy-content-heading">About <span className="pharmacy-highlight">The School :</span></h3>
        <hr />
        <p className="pharmacy-content-paragraph">The School of Pharmacy offers an integrated education in pharmaceutical sciences, clinical practice, and drug development.</p>
        <p className="pharmacy-content-paragraph">We provide practical exposure through labs, internships, and research projects, focusing on innovation and patient care.</p>
        <p className="pharmacy-content-paragraph">Our graduates pursue careers in hospitals, pharma companies, R&D labs, and regulatory bodies worldwide.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="pharmacy-content-heading">Vision & <span className="pharmacy-highlight">Mission</span></h3>
        <hr />
        <h3 className="pharmacy-content-heading">Our <span className="pharmacy-highlight">Vision :</span></h3>
        <p className="pharmacy-content-paragraph">To be a leader in pharmaceutical education and research with a focus on healthcare innovation.</p>
        <h3 className="pharmacy-content-heading">Our <span className="pharmacy-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To produce skilled and ethical pharmacy professionals.</i></li>
          <br />
          <li>To foster interdisciplinary research in pharmaceutical and clinical sciences.</li>
          <br />
          <li>To enhance community health through pharmaceutical care and outreach.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="pharmacy-content-heading">Dean's <span className="pharmacy-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="pharmacy-dean-profile">
          <img src={deanImg} alt="Dean" className="pharmacy-dean-image" />
          <div className="pharmacy-dean-details">
            <h4 className="pharmacy-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="pharmacy-dean-qual">Pharm.D, PhD</span>
            </h4>
            <p className="pharmacy-dean-title">💊 Professor and Dean,<br />🏛 School of Pharmacy, BIHER</p>
          </div>
        </div>

        <div className="pharmacy-dean-message">
          <p>Pharmacists play a vital role in patient health and safety. Our curriculum prepares students to lead in this evolving field.</p>
          <br />
          <p>With modern labs and hospital collaborations, we ensure hands-on training in pharmaceutical science and care.</p>
          <br />
          <p>We aim to shape healthcare innovators who impact lives through science and compassion.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="pharmacy-content-heading">Board of <span className="pharmacy-highlight">Studies</span></h3>
        <hr />
        <p className="pharmacy-content-paragraph">Our board comprises leading academicians and industry experts who ensure that the curriculum is future-ready and industry-aligned.</p>
        <p className="pharmacy-content-paragraph">» Members contribute through research, curriculum design, and pharmaceutical innovation strategies.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="pharmacy-content-heading">Members of BOS <span className="pharmacy-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="pharmacy-bos-table">
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
              <td>Pharmacology</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Clinical Pharmacy</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Pharmaceutical Chemistry</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Pharmaceutics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={pharmacyImg} alt="Pharmacy" className="pharmacy-banner" />

      <div className="pharmacy-breadcrumb-header">
        <div className="pharmacy-breadcrumb-container">
          <Link to="/" className="pharmacy-breadcrumb-link"><FaHome className="pharmacy-breadcrumb-icon" /></Link>
          <span className="pharmacy-breadcrumb-separator">»</span>
          <span className="pharmacy-breadcrumb-text">Academics</span>
          <span className="pharmacy-breadcrumb-separator">»</span>
          <span className="pharmacy-breadcrumb-current">School of Pharmacy</span>
        </div>
      </div>

      <div className="pharmacy-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="pharmacy-content-container">
          <div className="pharmacy-sidebar">
            <div className="pharmacy-sidebar-header">
              <FaBook className="pharmacy-sidebar-icon" />
              Categories
            </div>
            <ul className="pharmacy-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="pharmacy-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="pharmacy-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'pharmacy-active-tab' : ''}
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
                    className={selectedTab === item ? 'pharmacy-active-tab' : ''}
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

          <div className="pharmacy-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pharmacy;
