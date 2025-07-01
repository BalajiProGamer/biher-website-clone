import React, { useState } from "react";
import architectureImg from "../../assets/Architecture.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/Dean-Arch.png";
import Banner from "../Banner";

const ArchitectureEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
  "About": (
  <>
    <h5 className="arch-content-welcome">Welcome to Architecture</h5>
    <br></br>
    <h3 className="arch-content-heading">About <span className="arch-highlight">The School :</span></h3>
    <hr />
    <p className="arch-content-paragraph">
      The Bachelor of Architecture program of ten semester duration is recognized as one of India’s premier and most comprehensive programs in architecture due to the thrust on contemporary issues like sustainability, urban redevelopment, and housing. The course offers a large number of elective studies, ensuring flexibility and a choice-based education tailored to the student’s area of special interest which may be urban design, landscape architecture, housing and project management. The students are also well exposed to current software techniques like Autodesk Revit and Google Sketch Up. The program is approved by the Council of Architecture, New Delhi and was the first one in South India to be accredited by National Board Accreditation, in 2001.
    </p>
    <br />
    <p className="arch-content-paragraph">
      The department combines traditional learning with practice-based work, prepares and shapes professional Architects. The course is comprehensive and holistic covering topics from History / Theory of Architecture to materials and construction, design of structure, climatology, site planning, urban designing, urban economics, sociology, cost estimation, budgeting, project management and more.
    </p>
    <br />
    <p className="arch-content-paragraph">
      Leading Architects visit the department for guest and part-time lectures and guide the students in their studios. The course is approved by the Council of Architecture (COA) and students are encouraged to actively participate in all NASA activities (National Architectural Students Association).
    </p>
    <br />
    <p className="arch-content-paragraph">
      The department of Architecture offers both full time and part time Ph.D programs in all major areas of Architecture design such as architectural conservation, landscape architecture, urban design, housing studies, project management, interior design, digital architecture and environmental planning.
    </p>
  </>
),

"Vision & Mission": (
  <>
    <h3 className="arch-content-heading">Vision & <span className="arch-highlight">Mission</span></h3>
    <hr />

    <h3 className="arch-content-heading">Our <span className="arch-highlight">Vision :</span></h3>
    <p className="arch-content-paragraph">
      The Department of Architecture is committed to excellence in the field of architectural education and the discipline of architecture through its pedagogical, research, extension and outreach activities, directed towards the betterment of the world that we inhabit, in all realms shaped by architecture. It shall uphold universal moral and ethical values in all endeavours that it undertakes and be exemplary in creating positive transformations.
    </p>

    <h3 className="arch-content-heading">Our <span className="arch-highlight">Mission :</span></h3>
    <hr />
    <p className="arch-content-paragraph">
      <strong><u>Mission of the department is to achieve International Recognition by:</u></strong>
    </p>

    <ul>
      <li>
        <em><strong>M1</strong></em> - To tap and strengthen the innate potential of each student and deepen their knowledge/skills in order to enable them to self-actualise as well as become catalysts for positive change.
      </li>
      <br />
      <li>
        <em><strong>M2</strong></em> - To contribute to immediate context, larger society and the world through knowledge creation and dissemination.
      </li>
      <br />
      <li>
        <em><strong>M3</strong></em> - To engage and extend the expertise of the department in addressing and solving of issues/problems related to the built environment.
      </li>
      <br />
      <li>
        <em><strong>M4</strong></em> - To actively interact and collaborate with professionals, educational institutions and other related organizations at all scales in order to collectively further the cause of appropriate architecture.
      </li>
    </ul>
  </>
),


"Deans Desk": (
  <>
    <h3 className="arch-content-heading">Deans <span className="arch-highlight">Desk :</span></h3>
    <hr />
    <br />
    <div className="arch-dean-profile" style={{
      display: "flex",
      alignItems: "center",
      background: "#f9f9f9",
      padding: "15px",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>
      <img
        src={deanImg}
        alt="Dean"
        className="arch-dean-image"
        style={{ width: "120px", height: "150px", objectFit: "cover", borderRadius: "6px", marginRight: "20px" }}
      />
      <div className="arch-dean-details">
        <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#b30000" }}>
          <u>Dr Ravindhar Sarathchandran</u><span style={{ color: "#555", fontWeight: "normal" }}>, B Arch., M Arch., PhD.,</span>
        </h4>
        <p style={{ margin: "5px 0" }}>🎓 <i>Professor and Dean,</i></p>
        <p style={{ margin: "5px 0" }}>🏛 <i>School of Architecture, BIHER</i></p>
      </div>
    </div>

    <div className="arch-dean-message" style={{ marginTop: "25px", textAlign: "justify", fontSize: "15.5px", lineHeight: "1.9" }}>
      <p>Education in Architecture and design in current century is evolving at a rapid pace. It will look very different from what it looked like a decade ago. Increasingly, students and family members are realizing about high design research projects in collaboration with professionals, public entities and partners from industry. More and more, these collaborative enterprises have begun to challenge designers to further enhance their ability to integrate diverse and often unfamiliar array of skills and knowledge.</p>
      <br />
      <p>Here at Bharath Institute of Higher Education and Research, we strive to be at the forefront of changes that will enable the best and brightest students to pursue entrepreneurial initiatives, to lead creative terms, and to accelerate innovation. Through design research, our aim is to bring about healthy sustainable communities, drive advancement in building technology, and connect our research with industry in order to create new economic opportunities for the citizens of this country, state, the region, and beyond. The experience here builds the foundations of the independent person, cultivating understanding through demanding educational and life experiences. The learning program integrates practical knowledge and skill with a sense of responsibility and self-awareness. Students and Faculty recognize that every task and experience, from the simple to the complex, requires attention to quality.</p>
    </div>
  </>
),

    "Board of Studies": (
      <>
        <h3 className="arch-content-heading">Board of <span className="arch-highlight">Studies</span></h3>
        <hr />
        <p className="arch-content-paragraph">The board comprises domain experts, senior faculty, and research professionals who collaboratively guide curriculum design, academic standards, and future-focused initiatives.</p>
        <p className="arch-content-paragraph">» Members include representatives from COA, academia, and industry professionals in architecture and planning.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="arch-content-heading">Members of BOS <span className="arch-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="arch-bos-table">
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
              <td>Architectural Design & Planning</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Sustainable Design</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Urban Design</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>History of Architecture</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={architectureImg} alt="Architecture" className="arch-banner" />

      <div className="arch-breadcrumb-header">
        <div className="arch-breadcrumb-container">
          <Link to="/" className="arch-breadcrumb-link"><FaHome className="arch-breadcrumb-icon" /></Link>
          <span className="arch-breadcrumb-separator">»</span>
          <span className="arch-breadcrumb-text">Academics</span>
          <span className="arch-breadcrumb-separator">»</span>
          <span className="arch-breadcrumb-current">School of Architecture</span>
        </div>
      </div>

      <div className="arch-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="arch-content-container">
          <div className="arch-sidebar">
            <div className="arch-sidebar-header">
              <FaBook className="arch-sidebar-icon" />
              Categories
            </div>
            <ul className="arch-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="arch-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="arch-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'arch-active-tab' : ''}
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
                    className={selectedTab === item ? 'arch-active-tab' : ''}
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

          <div className="arch-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
     <Banner />
      <Footer />
    </div>
  );
};

export default ArchitectureEngineering;
