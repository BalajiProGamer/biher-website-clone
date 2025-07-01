import React, { useState } from "react";
import basicsciImg from "../../assets/basicsci.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';
import deanImg from "../../assets/basic-dean.png";

const BasicSciences = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
  <>
    <h5 className="basicsci-content-welcome">Welcome to School of Basic Sciences</h5>
    <br></br>
    <h3 className="basicsci-content-heading">About <span className="basicsci-highlight">the School :</span></h3>
    <hr />
    <p className="basicsci-content-paragraph">
      The School of Basic Sciences offers B.Sc. programmes in Chemistry, Physics, Mathematics, Visual Communication, 
      Information Technology, Microbiology, Statistics, Catering Science & Hotel Management and Computer Sciences. 
      The School also offers Bachelor of Computer Applications. In PG level, the School offers M.Sc. in Mathematics, 
      Physics, Chemistry, Biochemistry, Biotechnology, Microbiology and Computer Science. The main purpose of the school 
      is to lay a strong foundation in basic scientific principles.
    </p>
    <p className="basicsci-content-paragraph">
      The School of Basic Sciences functions with a commitment to impart knowledge in pure sciences. 
      This academic endeavor forms the basis for further academic pursuits in the fields of Science and Technology, 
      and enhances the prospects of pursuing a career in research and higher-level teaching. 
      The strength of the department is its highly qualified faculty and quality of academic education. 
      All the faculty members are committed to guide the students at all times with their valuable suggestions. 
      There are numerous opportunities for our students to participate in different activities.
    </p>
    <p className="basicsci-content-paragraph">
      All programs are designed to blend core science and interdisciplinary topics that will serve as a launching pad 
      for attractive career opportunities in academia and industry. Further, the department organizes interdisciplinary 
      workshops and seminars regularly for students. In general, the school offers competitive academics meeting global standards.
    </p>
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
          <b>Dr. P. Kamaraj</b>, <span className="basicsci-dean-qual">M.Sc., Ph.D.</span>
        </h4>
        <p className="basicsci-dean-title">🎓 Professor and Dean,<br />🏛 School of Basic Science & Humanities, BIHER</p>
      </div>
    </div>

    <div className="basicsci-dean-message">
      <p>The School of Basic Sciences is a resource-rich academic unit that comprises of Mathematics, Physics, Computer Science and Viscom Departments. These departments engage in strategic research collaborations, continuing education, student projects, conferences and year-long academic activities.</p>
      <br />
      <p>Bharath being a specialized Technical University, a meticulously designed, competitive Technical curriculum is followed. Deanery of Basic Sciences offers high quality teaching with competent domain experts who are academically driven. Each department has an intellectual community of doctoral faculty members whose primary commitment is to inculcate scientific reasoning and the spirit of innovative entrepreneurship among the students. The teachers offer the most satisfying classroom experience. Regular faculty-enrichment programmes are conducted and regular research publications are made in high impact journals. The School organizes International and National Conferences to create a platform for sharing research experience with scientists in different parts of the world.</p>
      <br />
      <p>In addition to the academic ventures, the School of Basic Sciences offers a vibrant community culture by exposing students to a comprehensive holistic learning. On the whole, School of Basic Sciences prepares young Students to meet industry standards with professional excellence.</p>
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
      <Banner/>
      <Footer />
    </div>
  );
};

export default BasicSciences;
