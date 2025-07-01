import React, { useState } from "react";
import lawImg from "../../assets/law.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const Law = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="law-content-welcome">Welcome to School of Law</h5>
        <h3 className="law-content-heading">About <span className="law-highlight">The School :</span></h3>
        <hr />
        <p className="law-content-paragraph">The School of Law prepares students to be legal professionals equipped with a strong foundation in constitutional law, criminal law, corporate law, and human rights.</p>
        <p className="law-content-paragraph">We emphasize advocacy, critical thinking, ethics, and research through moot courts, legal clinics, and internships.</p>
        <p className="law-content-paragraph">Graduates are ready to lead in judiciary, legal practice, public service, and academia.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="law-content-heading">Vision & <span className="law-highlight">Mission</span></h3>
        <hr />
        <h3 className="law-content-heading">Our <span className="law-highlight">Vision :</span></h3>
        <p className="law-content-paragraph">To be a premier institution for legal education, justice, and societal transformation.</p>
        <h3 className="law-content-heading">Our <span className="law-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To deliver legal education that fosters justice, integrity, and leadership.</i></li>
          <br />
          <li>To promote interdisciplinary research and public policy engagement.</li>
          <br />
          <li>To empower students for ethical practice and social responsibility in legal professions.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="law-content-heading">Dean's <span className="law-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="law-dean-profile">
          <img src={deanImg} alt="Dean" className="law-dean-image" />
          <div className="law-dean-details">
            <h4 className="law-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="law-dean-qual">LL.M., PhD</span>
            </h4>
            <p className="law-dean-title">⚖️ Professor and Dean,<br />🏛 School of Law, BIHER</p>
          </div>
        </div>

        <div className="law-dean-message">
          <p>Law shapes society and ensures justice. Our school nurtures legal minds with knowledge, skill, and moral compass.</p>
          <br />
          <p>We train students to engage in advocacy, litigation, policymaking, and reform with a strong ethical foundation.</p>
          <br />
          <p>We strive to build legal professionals who uphold justice and make a global impact.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="law-content-heading">Board of <span className="law-highlight">Studies</span></h3>
        <hr />
        <p className="law-content-paragraph">The board consists of legal scholars, senior advocates, and public policy experts guiding curriculum and legal research at the school.</p>
        <p className="law-content-paragraph">» Members include judges, law firm partners, and professors from reputed law institutions.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="law-content-heading">Members of BOS <span className="law-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="law-bos-table">
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
              <td>Constitutional Law</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Corporate Law</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Criminal Law</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>International Law</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={lawImg} alt="Law" className="law-banner" />

      <div className="law-breadcrumb-header">
        <div className="law-breadcrumb-container">
          <Link to="/" className="law-breadcrumb-link"><FaHome className="law-breadcrumb-icon" /></Link>
          <span className="law-breadcrumb-separator">»</span>
          <span className="law-breadcrumb-text">Academics</span>
          <span className="law-breadcrumb-separator">»</span>
          <span className="law-breadcrumb-current">School of Law</span>
        </div>
      </div>

      <div className="law-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="law-content-container">
          <div className="law-sidebar">
            <div className="law-sidebar-header">
              <FaBook className="law-sidebar-icon" />
              Categories
            </div>
            <ul className="law-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="law-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="law-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'law-active-tab' : ''}
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
                    className={selectedTab === item ? 'law-active-tab' : ''}
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

          <div className="law-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Law;
