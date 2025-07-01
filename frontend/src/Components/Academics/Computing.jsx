import React, { useState } from "react";
import computingImg from "../../assets/computing.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const Computing = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="computing-content-welcome">Welcome to School of Computing</h5>
        <h3 className="computing-content-heading">About <span className="computing-highlight">The School :</span></h3>
        <hr />
        <p className="computing-content-paragraph">The School of Computing empowers students with core knowledge in software development, data science, cybersecurity, and emerging computing technologies.</p>
        <p className="computing-content-paragraph">We focus on practical problem-solving, computational thinking, and real-world application through projects, research, and innovation.</p>
        <p className="computing-content-paragraph">Our graduates are prepared to excel in industries such as IT, AI, FinTech, and research-driven enterprises.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="computing-content-heading">Vision & <span className="computing-highlight">Mission</span></h3>
        <hr />
        <h3 className="computing-content-heading">Our <span className="computing-highlight">Vision :</span></h3>
        <p className="computing-content-paragraph">To be a center of excellence in computing education, research, and innovation.</p>
        <h3 className="computing-content-heading">Our <span className="computing-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To deliver high-quality computing education with real-world relevance.</i></li>
          <br />
          <li>To nurture innovation, analytical thinking, and ethical technology usage.</li>
          <br />
          <li>To contribute to societal advancement through cutting-edge research in computing.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="computing-content-heading">Dean's <span className="computing-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="computing-dean-profile">
          <img src={deanImg} alt="Dean" className="computing-dean-image" />
          <div className="computing-dean-details">
            <h4 className="computing-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="computing-dean-qual">M.Tech., PhD</span>
            </h4>
            <p className="computing-dean-title">👨‍💻 Professor and Dean,<br />🏛 School of Computing, BIHER</p>
          </div>
        </div>

        <div className="computing-dean-message">
          <p>In a digital-first world, computing is the engine of transformation. Our school fosters a learning ecosystem grounded in technical depth and creative innovation.</p>
          <br />
          <p>We mentor students to lead with knowledge in AI, cloud computing, cybersecurity, and software engineering.</p>
          <br />
          <p>We aim to shape computing professionals who drive innovation and solve real-world challenges globally.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="computing-content-heading">Board of <span className="computing-highlight">Studies</span></h3>
        <hr />
        <p className="computing-content-paragraph">The board comprises experienced academicians and industry leaders who shape the curriculum and research direction in computing disciplines.</p>
        <p className="computing-content-paragraph">» Members include professionals from tech firms, research labs, and universities worldwide.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="computing-content-heading">Members of BOS <span className="computing-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="computing-bos-table">
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
              <td>Cloud Computing</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Machine Learning</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Cybersecurity</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Full Stack Development</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={computingImg} alt="Computing" className="computing-banner" />

      <div className="computing-breadcrumb-header">
        <div className="computing-breadcrumb-container">
          <Link to="/" className="computing-breadcrumb-link"><FaHome className="computing-breadcrumb-icon" /></Link>
          <span className="computing-breadcrumb-separator">»</span>
          <span className="computing-breadcrumb-text">Academics</span>
          <span className="computing-breadcrumb-separator">»</span>
          <span className="computing-breadcrumb-current">School of Computing</span>
        </div>
      </div>

      <div className="computing-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="computing-content-container">
          <div className="computing-sidebar">
            <div className="computing-sidebar-header">
              <FaBook className="computing-sidebar-icon" />
              Categories
            </div>
            <ul className="computing-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="computing-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="computing-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'computing-active-tab' : ''}
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
                    className={selectedTab === item ? 'computing-active-tab' : ''}
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

          <div className="computing-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Computing;
