import React, { useState } from "react";
import pharmacyImg from "../../assets/Pharmacy.jpg"; // Update the path as needed
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from "../Banner";
import '../../styles/global.css';
import deanImg from "../../assets/pharmacy-dean.png";

const Pharmacy = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
   "About": (
  <>
    <h5 className="pharmacy-content-welcome">Welcome to Pharmacy</h5>
    <br></br>
    <h3 className="pharmacy-content-heading">About <span className="pharmacy-highlight">the School :</span></h3>
    <hr />
    <p className="pharmacy-content-paragraph">
      Faculty of Pharmacy, Bharath Institute of Higher Education and Research (BIHER) is a reputable institution located in a multilevel building with well-equipped research laboratories. 
      The college offers a 4 year professional degree in pharmacy (B.Pharm.) which teaches pharmacology, pharmaceutical chemistry, pharmaceutics, pharmaceutical analysis and chemistry of natural products as part of the course. 
      Diploma holders in Pharmacy are admitted to the II year of the B.Pharm. degree course under Lateral Entry. 
      State of the art equipment and up to date information on the latest drugs and therapies equip the students to practice anywhere in the world.
    </p>

    <h3 className="pharmacy-content-heading">Key <span className="pharmacy-highlight">Points :</span></h3>
    <hr />
    <p className="pharmacy-content-paragraph">
      A Bachelor of Pharmacy Course makes you able to enter the Pharmacy sector in Medical and Health Care Industry. 
      One who pursues this degree studies core subjects including Pharmaceutics, Pharmacology, Pharmaceutical Chemistry and Pharmacognosy. 
      Bachelor of Pharmacy (B.Pharm) is an undergraduate degree program in the field of Pharmacy. 
      The students those are interested in the paramedical field can choose this course after the completion of class 12th (PCM/B). 
      B.Pharm syllabus – including health care & biochemical science.
    </p>

    <h3 className="pharmacy-content-heading pharmacy-approval-title">

      The Pharmacy Courses are approved by Pharmacy Council of India (PCI):
      <p>Bachelor of Pharmacy (B.Pharm) is an undergraduate degree program in the field of Pharmacy. The students those are interested in the paramedical field can choose this course after the completion of class 12th (PCM/B). B. pharm syllabus - including health care & biochemical science.</p>
    </h3>
  </>
),

   "Vision & Mission": (
  <>
    <h3 className="pharmacy-content-heading">Vision & <span className="pharmacy-highlight">Mission</span></h3>
    <hr />
    <h3 className="pharmacy-content-heading">Our <span className="pharmacy-highlight">Vision :</span></h3>
    <p className="pharmacy-content-paragraph">
      "To educate students to meet global standards, challenges and opportunities in the field of Pharmaceutical Education and Research."
    </p>

    <h3 className="pharmacy-content-heading">Our <span className="pharmacy-highlight">Mission :</span></h3>
    <hr />
    <br />
    <ul className="pharmacy-content-list">
      <li><i><b>MD 1 –</b></i> To develop highly skilled professionals in Pharmaceutical health care sectors & enriched with excellent abilities in communication, research & services enabling them to get connected to universal opportunities.</li>
      <br />
      <li><i><b>MD 2 –</b></i> To provide research facilities, which motivate students & faculty members to take up research projects.</li>
      <br />
      <li><i><b>MD 3 –</b></i> To educate & develop competent, ethically sound & socially responsible Pharmacists.</li>
      <br />
      <li><i><b>MD 4 –</b></i> To provide excellent Pharmacy Education with the help of sophisticated technologies & eminent professionals.</li>
      <br />
      <li><i><b>MD 5 –</b></i> To make our students scientifically superior, who shall improve the quality of life in the human race.</li>
      <br />
      <li><i><b>MD 6 –</b></i> To provide institute – industry interaction to meet the emerging challenges in the global scenario.</li>
    </ul>
  </>
),


   "Deans Desk": (
  <>
    <h3 className="pharmacy-content-heading">Deans <span className="pharmacy-highlight">Desk :</span></h3>
    <hr />
    <br />

    <div className="pharmacy-dean-profile-card">
      <img src={deanImg} alt="Dr. R. Srinivasan" className="pharmacy-dean-image" />
      <div className="pharmacy-dean-details">
        <h4 className="pharmacy-dean-name">
          <b>Dr.R.Srinivasan</b>, <span className="pharmacy-dean-qual"><u>M.Pharm., Ph.D., FAGE., FIP</u></span>
        </h4>
        <p className="pharmacy-dean-title">💊 Professor and Dean,</p>
        <p className="pharmacy-dean-title">🏛 Faculty of Pharmacy, BIHER</p>
      </div>
    </div>

    <div className="pharmacy-dean-message">
      <p>
        With noble thought of let all be happy, let all be healthy, let all be safe, let the sorrows not come in life, 
        I welcome you all to the Faculty of Pharmacy, Bharath Institute of Higher Education and Research (BIHER), 
        established in 2019 to provide quality education in the field of pharmacy and to develop competent technocrats 
        who are socially sensitive and committed to excel at global arena.
      </p>

      <br />

      <p>
        Faculty of Pharmacy, BIHER., is conscious of need to prepare the students for a life of leadership, 
        service and personal fulfillment. While recognizing the value of traditions, it also seeks to instill 
        in its pupils an independence of thought, a scientific spirit of enquiry, a positive and healthy attitude 
        towards life. The students are taught to have a certain respect for original research & development, creativity 
        & readiness to respond to the demands of society in the rapidly changing world.
      </p>

      <br />

      <p>
        Our Faculty of Pharmacy, BIHER by profession by synergizing knowledge, skill and technology to transform lives 
        through the advancement of patient – centre care and healthcare delivery by providing differentiated health care 
        professionals and ethical pharmacists.
      </p>
    </div>
  </>
)
,

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
        <Banner/>
      <Footer />
    </div>
  );
};

export default Pharmacy;
