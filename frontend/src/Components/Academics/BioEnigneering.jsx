import React, { useState } from "react";
import bioengImg from "../../assets/bioeng.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/bioengdean.png";

const BioEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
  <>
    <h5 className="bioeng-content-welcome">Welcome to School of Bio-Engineering</h5>
    <br></br>
    <h3 className="bioeng-content-heading">
      About <span className="bioeng-highlight">The School :</span>
    </h3>
    <hr className="bioeng-divider" />
    
    <p className="bioeng-content-paragraph">
      The School of Bioengineering was started in the year 2003. The School has teaching and research programmes which encompass various basic and applied aspects of modern biotechnology. The main objective of the School of Bioengineering is to impart academic training and conduct research in the interdisciplinary areas of Biotechnology and Biomedical engineering with a particular emphasis on extending the knowledge generated from these studies towards the development of technologies of commercial significance. The school has ever since demonstrated an unfailing commitment towards research and development in frontier areas of integrative biology. This school since its inception emphasizes on appointing and inculcating meritorious faculty in various specialized branches in Bioengineering.
    </p>

    <p className="bioeng-content-paragraph">
      As technology continues to evolve, so does the field of medicine. Biomedical engineering has become an increasingly popular field of study for those interested in combining their passion for science and technology. B.Tech Biomedical Engineering is a degree program that focuses on the application of engineering principles to the design and development of medical equipment and devices. With advances in medical technology, there has been a growing demand for professionals who can bridge the gap between medicine and engineering. B.Tech Biomedical Engineering is an exciting and challenging field that offers a wide range of career opportunities. The best engineering college in Chennai that offers B.Tech Biomedical Engineering college in Tamilnadu, its scope, and the various career paths available to those who pursue this degree. So, whether you are a student or a professional looking to switch careers, keep reading to learn more about this dynamic field.
    </p>

    <p className="bioeng-content-paragraph">
      The school offers UG and PG programmes in Biotechnology and Biomedical Engineering. The curriculum is designed in such a manner that the students can be placed in various giant industrial establishments like Biocon, Shantha Biotech, Reddy’s Lab, Life Cell, Siemens healthcare, Wipro biomedical etc. Fortunately, the IT companies like Accenture, Infosys, Wipro, HCL, Cognizant also hire our students with attractive salary packages.
    </p>
  </>
),


    "Vision & Mission": (
  <>
  <br></br>
    <h5 className="bioeng-content-welcome">Vision & Mission</h5>
    <br></br>
    <h3 className="bioeng-content-heading">Our <span className="bioeng-highlight">Vision :</span></h3>
    <hr className="bioeng-divider" />
    <p className="bioeng-content-paragraph">
      To provide an excellent academic environment for the benefit of diverse learners of divergent background and
      faculty to acquire technological competence on par with global heads in bioengineering research by adopting
      ethical and sustainable growth.
    </p>

    <h3 className="bioeng-content-heading">Our <span className="bioeng-highlight">Mission :</span></h3>
    <hr className="bioeng-divider" />
    <ul className="bioeng-mission-list">
      <li>
        <i><b>SM 1</b></i> To attain quality education in pursuit of fundamental knowledge involving creativity and
        logical reasoning in the rapidly advancing field of bioengineering.
      </li>
      <li>
        <i><b>SM 2</b></i> To acquire specialised knowledge in research par excellence with global standards.
      </li>
      <li>
        <i><b>SM 3</b></i> To provide exposure to cutting edge technologies by integrating experiential and skill-based
        teaching methodologies adopting ethical environment.
      </li>
      <li>
        <i><b>SM 4</b></i> To impart education to the bioengineers by ensuing activities for the welfare of society and
        sustainable environment.
      </li>
    </ul>
  </>
),


    "Deans Desk": (
  <>
    <h3 className="bioeng-content-heading">
      Dean's <span className="bioeng-highlight">Desk :</span>
    </h3>
    <hr className="bioeng-divider" />
    <br />
    <div className="bioeng-dean-profile">
      <img src={deanImg} alt="Dr. L. Jeyanthi Rebecca" className="bioeng-dean-image" />
      <div className="bioeng-dean-details">
        <h4 className="bioeng-dean-name">
          <b>Dr. L. Jeyanthi Rebecca</b>,
          <span className="bioeng-dean-qual">
            &nbsp;B.Sc. (For), M.Sc. (Ag), D.Sc.
          </span>
        </h4>
        <p className="bioeng-dean-title">
          🎓 Professor and Dean,<br />
          🏛 <em>School of Bio - Engineering, BIHER</em>
        </p>
      </div>
    </div>

    <div className="bioeng-dean-message">
      <p>
        Greetings! On behalf of the faculty members and students of the Department of Agricultural Biotechnology at
        Bharath Institute of Higher Education and Research (BIHER), I welcome you all to the creative world of
        Biotechnology. I believe the Biotechnology has been widely recognized as an essential source and technique for
        the advancements in all spheres of human endeavour now and in future.
      </p>
      <br />
      <p>
        In BIHER all the students get the opportunity to excel in their academic activities. This is the department
        where students are nurtured to publish papers in international and national journals, present papers in
        conferences and symposium apart from helping them to achieve some recognition in extra-curricular and
        co-curricular activities.
      </p>
      <br />
      <p>
        Among the reasons why our BIHER graduates are such favourites of industries is the consistent hands-on
        experience-based approach of our curriculum, our excellent laboratories, the long-time connections between
        Department and the industry. We hope you will also have the opportunity to visit us to see our
        state-of-the-art facilities.
      </p>
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
