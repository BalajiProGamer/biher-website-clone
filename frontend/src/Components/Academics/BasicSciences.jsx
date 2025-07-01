import React, { useState } from "react";
import basicsciImg from "../../assets/basicsci.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const BasicSciences = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="basicsci-content-welcome">Welcome to School of Basic Sciences</h5>
        <h3 className="basicsci-content-heading">About <span className="basicsci-highlight">The School :</span></h3>
        <hr />
        <p className="basicsci-content-paragraph">The School of Basic Sciences is dedicated to the pursuit of foundational knowledge in physics, chemistry, mathematics, and life sciences.</p>
        <p className="basicsci-content-paragraph">We aim to build a strong conceptual base and foster innovation through scientific curiosity, hands-on research, and rigorous academic engagement.</p>
        <p className="basicsci-content-paragraph">Our programs support interdisciplinary learning and prepare students for careers in academia, industry, and research institutions.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="basicsci-content-heading">Vision & <span className="basicsci-highlight">Mission</span></h3>
        <hr />
        <h3 className="basicsci-content-heading">Our <span className="basicsci-highlight">Vision :</span></h3>
        <p className="basicsci-content-paragraph">To be a globally recognized center for excellence in basic sciences education and research.</p>
        <h3 className="basicsci-content-heading">Our <span className="basicsci-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To impart strong theoretical foundations with practical skills in scientific inquiry.</i></li>
          <br />
          <li>To nurture critical thinking and problem-solving abilities for real-world scientific challenges.</li>
          <br />
          <li>To promote ethical research and contribute to societal advancement through science.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="basicsci-content-heading">Dean's <span className="basicsci-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="basicsci-dean-profile">
          <img src={deanImg} alt="Dean" className="basicsci-dean-image" />
          <div className="basicsci-dean-details">
            <h4 className="basicsci-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="basicsci-dean-qual">M.Sc., PhD</span>
            </h4>
            <p className="basicsci-dean-title">👨‍🔬 Professor and Dean,<br />🏛 School of Basic Sciences, BIHER</p>
          </div>
        </div>

        <div className="basicsci-dean-message">
          <p>Basic sciences form the foundation for all scientific advancement. At our school, we emphasize analytical rigor, curiosity, and academic excellence.</p>
          <br />
          <p>Our faculty are dedicated to mentoring students through research projects and conceptual mastery across core science disciplines.</p>
          <br />
          <p>We prepare students to contribute meaningfully to scientific discovery and innovation worldwide.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="basicsci-content-heading">Board of <span className="basicsci-highlight">Studies</span></h3>
        <hr />
        <p className="basicsci-content-paragraph">The board consists of eminent scientists, educators, and professionals who design and oversee the academic programs in basic sciences.</p>
        <p className="basicsci-content-paragraph">» Members include faculty from IITs, central universities, and leading research institutions.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="basicsci-content-heading">Members of BOS <span className="basicsci-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="basicsci-bos-table">
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
              <td>Applied Mathematics</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Organic Chemistry</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Theoretical Physics</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Biochemistry</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={basicsciImg} alt="Basic Sciences" className="basicsci-banner" />

      <div className="basicsci-breadcrumb-header">
        <div className="basicsci-breadcrumb-container">
          <Link to="/" className="basicsci-breadcrumb-link"><FaHome className="basicsci-breadcrumb-icon" /></Link>
          <span className="basicsci-breadcrumb-separator">»</span>
          <span className="basicsci-breadcrumb-text">Academics</span>
          <span className="basicsci-breadcrumb-separator">»</span>
          <span className="basicsci-breadcrumb-current">School of Basic Sciences</span>
        </div>
      </div>

      <div className="basicsci-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="basicsci-content-container">
          <div className="basicsci-sidebar">
            <div className="basicsci-sidebar-header">
              <FaBook className="basicsci-sidebar-icon" />
              Categories
            </div>
            <ul className="basicsci-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="basicsci-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="basicsci-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'basicsci-active-tab' : ''}
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
                    className={selectedTab === item ? 'basicsci-active-tab' : ''}
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

          <div className="basicsci-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BasicSciences;
