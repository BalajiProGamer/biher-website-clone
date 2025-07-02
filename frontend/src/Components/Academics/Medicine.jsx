import React, { useState } from "react";
import medicineImg from "../../assets/Medicine1.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from "../Banner";
import '../../styles/global.css';
import deanImg from "../../assets/medicinedean.png";

const Medicine = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="medicine-content-welcome">Welcome to School of Medicine</h5>
        <br></br>
        <h3 className="medicine-content-heading">About <span className="medicine-highlight">The School :</span></h3>
        <hr />
        <p className="medicine-content-paragraph">School of Medicine was established in the year 2003 with the aim of providing excellent medical education run by Sri Lakshmi Ammal Educational Trust established in 1984 and it has come under the ambit of BHARATH INSTITUTE OF HIGHER EDUCATION & RESEARCH. The School of Medicine has UG and PG courses in 19 specialities. School of Medicine is spread over three campuses. It is provided with state of art infrastructure in term of its blocks of buildings, which include cozy, comfortable and well-furnished departments, laboratories, classrooms for students, separate quarters for staff and nurses besides equipment of world class technological quality. The school is backed by highly qualified and experienced staff, well equipped laboratories, library, and modern teaching aids. The Hospital services are fully computerized as per the requirement of the NMC.</p>
       <br></br>
        <p className="medicine-content-paragraph">Free medical service is given to the poor and needy people. Separate rural and urban health training centres have also been established so as to impart field practice training to medical students and helping the needy people nearby .Family adoption scheme for each graduate student enables them to understand the social fabric setup for treating rural India. The school has a separate sophisticated and well equipped Research &Development Wing with adequate faculty to carry out sponsored projects.</p>
       <br></br>
        <p className="medicine-content-paragraph">Graduates thrive in healthcare, research, education, and public health systems globally.</p>
      </>
    ),

   "Vision & Mission": (
  <>
    <h3 className="medicine-content-heading">Vision & <span className="medicine-highlight">Mission</span></h3>
    <hr />
    
    <h3 className="medicine-content-heading">Our <span className="medicine-highlight">Vision :</span></h3>
    <ul className="medicine-content-list">
      <li>To provide excellent Medical Education with the Aid of latest and modern equipments.</li>
     <br></br>
      <li>To provide an excellent environment for the Medical Students to learn medicine and practice the same.</li>
     <br></br>
      <li>To provide facilities for the medical students to learn skills under the guidance of the expert teachers.</li>
      <br></br>
      <li>To provide research facilities and to motivate students and faculty members to take up research projects.</li>
      <br></br>
      <li>And finally to create an atmosphere of continuous learning keeping abreast with fast changing theories and techniques in Medicine and its allied specialities.</li>
    </ul>
 <br></br>
    <h3 className="medicine-content-heading">Our <span className="medicine-highlight">Mission :</span></h3>
    <hr />
    <p className="medicine-content-paragraph">
      Is to send into the society, well educated, well mannered, with fully equipped, socially committed Doctors who would be useful to the society at large and who would willingly commit themselves to create an atmosphere free of disease and sufferings.
    </p>
  </>
),


"Deans Desk": (
  <>
    <h3 className="medicine-content-heading">Dean's <span className="medicine-highlight">Desk</span></h3>
    <hr />
    <br />
    <div className="medicine-dean-profile">
      <img src={deanImg} alt="Dean" className="medicine-dean-image" />
      <div className="medicine-dean-details">
        <h4 className="medicine-dean-name">
          <b>Dr. W.M.S Johnson</b>, <span className="medicine-dean-qual">M.D., Ph D</span>
        </h4>
        <p className="medicine-dean-title">🩺 Professor and Dean,<br />🏛 School of Medicine, BIHER</p>
      </div>
    </div>

    <div className="medicine-dean-message">
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
        <h3 className="medicine-content-heading">Board of <span className="medicine-highlight">Studies</span></h3>
        <hr />
        <p className="medicine-content-paragraph">The board includes renowned clinicians, researchers, and public health experts shaping the medical curriculum and research agenda.</p>
        <p className="medicine-content-paragraph">» Members include doctors, scientists, and policy-makers with national and global impact.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="medicine-content-heading">Members of BOS <span className="medicine-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="medicine-bos-table">
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
              <td>Internal Medicine</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Physiology</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Pharmacology</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Anatomy</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={medicineImg} alt="Medicine" className="medicine-banner" />

      <div className="medicine-breadcrumb-header">
        <div className="medicine-breadcrumb-container">
          <Link to="/" className="medicine-breadcrumb-link"><FaHome className="medicine-breadcrumb-icon" /></Link>
          <span className="medicine-breadcrumb-separator">»</span>
          <span className="medicine-breadcrumb-text">Academics</span>
          <span className="medicine-breadcrumb-separator">»</span>
          <span className="medicine-breadcrumb-current">School of Medicine</span>
        </div>
      </div>

      <div className="medicine-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="medicine-content-container">
          <div className="medicine-sidebar">
            <div className="medicine-sidebar-header">
              <FaBook className="medicine-sidebar-icon" />
              Categories
            </div>
            <ul className="medicine-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="medicine-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="medicine-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'medicine-active-tab' : ''}
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
                    className={selectedTab === item ? 'medicine-active-tab' : ''}
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

          <div className="medicine-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
        <Banner/>
      <Footer />
    </div>
  );
};

export default Medicine;
