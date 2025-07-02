import React, { useState } from "react";
import mechanicalImg from "../../assets/mechanical.jpg"; // Update the path as needed
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/mechdean.png";
import Banner from "../Banner";

const MechanicalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
  <>
    <h5 className="mechanical-content-welcome">Welcome to School of Mechanical Engineering</h5>
    <br></br>
    <h3 className="mechanical-content-heading">About <span className="mechanical-highlight">the School :</span></h3>
    <hr />

    <p className="mechanical-content-paragraph">
      The School of Mechanical Engineering is one of the pioneering departments of BIHER. More than 1000+ research papers have been published in international or national journals and conferences.
    </p>

    <ul className="mechanical-content-list">
      <li><em><strong>Mechanical Engineering.</strong></em></li><br></br>
      <li><em><strong>Mechatronics Engineering.</strong></em></li><br></br>
      <li><em><strong>Automobile Engineering.</strong></em></li><br></br>
    </ul>

    <p className="mechanical-content-paragraph">
       The National Board of Accreditation had accredited the Automobile Engineering program, and other 2 departments are going for accreditation in this academic year. The school also offers Doctoral programs in these three areas of specializations.The department has qualified and experienced faculty members; most of them are with Ph.D. degree. The faculty members actively engage in research and constantly publish papers in International and National Journals. The department regularly organizes technical workshops for the faculty members to expose them to emerging areas. The department has state-of-the art facilities for various laboratories, department library and classrooms to support e-learning. The department has a well-equipped centralized workshop facility which caters to the needs of various departments. Guest lectures and industrial visits are periodically arranged for the students to supplement their curriculum. We strive for all round excellence in students, encouraging them in all extracurricular activities..
    </p>
    <p className="mechanical-content-paragraph">
      The department has qualified and experienced faculty members; most of them are with Ph.D. degree. The faculty members actively engage in research and constantly publish papers in International and National Journals.
    </p>
    <p className="mechanical-content-paragraph">
      The department regularly organizes technical workshops for the faculty members to expose them to emerging areas. The department has state-of-the-art facilities for various laboratories, department library and classrooms to support e-learning.
    </p>
    <p className="mechanical-content-paragraph">
      The department has a well-equipped centralized workshop facility which caters to the needs of various departments. Guest lectures and industrial visits are organized regularly to bridge the gap between industry and academics.
    </p>
  </>
)
,

  
   "Vision & Mission": (
  <>
    <h3 className="electrical-content-heading">Vision & <span className="electrical-highlight">Mission</span></h3>
    <hr />

    <h3 className="electrical-content-heading">Our <span className="electrical-highlight">Vision :</span></h3>
    <p className="electrical-content-paragraph">
      Department of Mechanical  Engineering envisions with innovation in academics to inherit the professional competence along with cognitive skills and research ability to meet industrial standards and to cater the societal needs by embedding in teaching and learning.
    </p>

    <h3 className="electrical-content-heading">Our <span className="electrical-highlight">Mission :</span></h3>
    <hr />

    <p className="electrical-content-bold">
      <strong><u>Mission of the department is to achieve International Recognition by:</u></strong>
    </p>
    <br />

    <ul className="electrical-content-list">
      <li><em><strong>MD 1</strong></em> – To inherit the professional competence among the Electronics and Communication Engineering students.</li>
    <br></br> 
     <li><em><strong>MD 2</strong></em> – To enable the students to develop cognitive skills to meet the multidimensional technological problems of current environment.</li>
    <br></br> 
      <li><em><strong>MD 3</strong></em> – To establish the learning environment to enable the students to meet the industrial standards.</li>
     <br></br>
      <li><em><strong>MD 4</strong></em> – To inculcate the faculty and students to enrich research in societal needs.</li>
    </ul>
  </>
),

"Deans Desk": (
  <>
    <h3 className="mechanical-content-heading">Dean's <span className="mechanical-highlight">Desk</span></h3>
    <hr />
    <br />
    <div className="mechanical-dean-profile">
      <img src={deanImg} alt="Dean" className="mechanical-dean-image" />
      <div className="mechanical-dean-details">
        <h4 className="mechanical-dean-name">
          <b>Dr.M.Senthil Kumar, M.E, Ph.D,</b>, <span className="mechanical-dean-qual">, M.E, Ph.D</span>
        </h4>
        <p className="mechanical-dean-title">🩺 Professor and Dean,<br />🏛Department of Mechanical Engineering, BIHER</p>
      </div>
    </div>

    <div className="mechanical-dean-message">
      <p>The School of Medicine, offers a patient-centered collaborative learning experience, driven by the primary value, <i>"The needs of the patient comes first."</i></p>
      <br />
      <p>Our vision in a rapidly changing era of health care reform is to educate physician leaders in patient-centered, science-driven, team-based, high-value health care. A highly selective admissions process, inter professional team learning and a student centered, flexible, innovative curriculum make our graduates highly sought after by residency directors.</p>
      <br />
      <p>Our medical school curriculum leverages innovative scientific capabilities, expertise and resources to provide medical education focused on preparing physicians for the medicine of tomorrow.</p>
      <br />
      <p>The school provides diverse learning opportunities in a variety of clinical settings across the country. Our students have access to exceptional experiential learning facilities, including a state-of-the-art Central Research.</p>
      <br />
      <p>Facility. We leverage the rich scientific and clinical resources to offer students a deep range of educational opportunities, including the Program in Professionalism and Ethics, Center for Innovation, and specialized centers that combine resources of research and practice. The faculty-to-student ratio is much higher than the ratio proposed by Medical Council of India.</p>
    </div>
  </>
)
,
    "Board of Studies": (
      <>
        <h3 className="mechanical-content-heading">Board of <span className="mechanical-highlight">Studies</span></h3>
        <hr />
        <p className="mechanical-content-paragraph">The board includes eminent academicians and industry professionals who regularly revise the curriculum for mechanical relevance and innovation.</p>
        <p className="mechanical-content-paragraph">» Members provide critical input on teaching methodologies and emerging technologies.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="mechanical-content-heading">Members of BOS <span className="mechanical-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="mechanical-bos-table">
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
              <td>Thermal Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Design Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Manufacturing</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Robotics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={mechanicalImg} alt="Mechanical Engineering" className="mechanical-banner" />

      <div className="mechanical-breadcrumb-header">
        <div className="mechanical-breadcrumb-container">
          <Link to="/" className="mechanical-breadcrumb-link"><FaHome className="mechanical-breadcrumb-icon" /></Link>
          <span className="mechanical-breadcrumb-separator">»</span>
          <span className="mechanical-breadcrumb-text">Academics</span>
          <span className="mechanical-breadcrumb-separator">»</span>
          <span className="mechanical-breadcrumb-current">School of Mechanical Engineering</span>
        </div>
      </div>

      <div className="mechanical-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="mechanical-content-container">
          <div className="mechanical-sidebar">
            <div className="mechanical-sidebar-header">
              <FaBook className="mechanical-sidebar-icon" />
              Categories
            </div>
            <ul className="mechanical-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="mechanical-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="mechanical-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'mechanical-active-tab' : ''}
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
                    className={selectedTab === item ? 'mechanical-active-tab' : ''}
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

          <div className="mechanical-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
     <Banner />
      <Footer />
    </div>
  );
};

export default MechanicalEngineering;
