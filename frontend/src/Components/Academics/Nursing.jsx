import React, { useState } from "react";
import nursingImg from "../../assets/Nursingp.jpg"; // Update the path if needed
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from "../Banner";
import '../../styles/global.css';
import deanImg from "../../assets/nursingdean.png";

const Nursing = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="nursing-content-welcome">Welcome to School of Nursing</h5>
        <br></br>
        <h3 className="nursing-content-heading">About <span className="nursing-highlight">The School :</span></h3>
        <hr />
        <p className="nursing-content-paragraph">Nursing is a Challenging and unique profession, whose primary focus is caring the sick as well as managing the Preventive, Promotive and Rehabilitative Health Needs of the clients. In the past, the nurse was simply a person trained to perform specific task. Later, nursing was recognized as a profession; demanded quality care.</p>
        <p className="nursing-content-paragraph">We provide practical exposure through hospital training, community outreach, and research, focusing on compassionate care and professionalism.</p>
        <p className="nursing-content-paragraph">Scientific advancements in healthcare system and research made today’s nursing to focus on evidence-based nursing practice. Patient care is the main focus of this modern world and Nurses play a vital role in health care system. The turbulent swirl of change within this country’s health care industry has provided challenges and opportunities for Nursing. Competent nurses are in demand all over the world. Sree Balaji college of Nursing started with B.Sc. Nursing course in the year 1992 with 4 years of Duration, In the year 2005 started M.Sc. Nursing programme with 10 intake and seat was increased to 25 in the year 2008 and P.B.Sc.Nursing in the year 2012 with 15 intake and Nurse Practitioner course in Critical care (NPCC) in the year 2019 with 10 intakes .All the Nursing courses are affiliated to Indian Nursing council, The Tamil Nādu nurses and Midwives council also Affiliated to Bharath Institute of Higher education and Research. As a Miles stone in our profession, we are started the Doctoral degree in the year 2013.</p>
        <p className="nursing-content-paragraph">Hostel is the Safe Nest for students who are away from home.Hostel is situated out of the college campus, at a walkable distance which give the fresh homely feel; with good infrastructure and basic amenities like, adequately furnished rooms, 24 hours Water Facility, Generator back up for electricity, spacious dining hall, provision of Sick room in case any student get sick. Round the clock Residential Warden & Security service which makes .student feel safe and comfortable. During the stay in hostel, the student will strictly adhere to the hostel rules and regulations to maintain the discipline in the hostel. Our students are privileged to develop the skills of nursing care at our own hospital which is Multispecialty all the facility . We also have a tie-up with various specialty hospitals for Clinical Postings of the students. Our students will be given Community Nursing Field experience during which they will be taken to the realistic situation where people live and students will learn skills of assessing preventing various health problems.</p>
      <p className="nursing-content-paragraph">The students will also participate in celebrating the international health days and programs. We aim at holistic development of the students; for which we have Student Nurses’ Association to conduct and participate various literary and cultural competitions. The students will be encouraged to participate in intercollegiate as well as state and National Level Competitions. Regular awareness camps were conducted to motivate the students in extension activities.</p>
      </>
    ),

    "Vision & Mission": (
  <>
    <h3 className="nursing-content-heading">Vision & <span className="nursing-highlight">Mission</span></h3>
    <hr />

    <h3 className="nursing-content-heading">Our <span className="nursing-highlight">Vision :</span></h3>
    <p className="nursing-content-paragraph">
      The Institution Information aims to be the premier research and education program for 21st century information professionals, 
      who will apply the theoretical and practical knowledge necessary to preserve the past, manage the present, and design the future.
    </p>

    <br />

    <p className="nursing-content-subheading"><b><u>Mission of the department is to achieve International Recognition by:</u></b></p>
   <br></br>
    <ul className="nursing-content-list">
      <li><i>Our mission is to shape the field of information studies for human and social benefit by.</i></li>
      <br></br>
      <li><i>Discovering new and vital knowledge about information.</i></li>
      <br></br>
      <li><i>Educating the next generation of leaders in the information professions.</i></li>
      <br></br>
      <li><i>Developing new scholars who will advance knowledge.</i></li>
      <br></br>
      <li><i>Improving society through service and collaboration.</i></li>
      <br></br>
      <li><i>Applying human-centered values to all our work.</i></li>
      <br></br>
    </ul>
  </>
)
,

    "Deans Desk": (
  <>
    <h3 className="nursing-content-heading">Deans <span className="nursing-highlight">Desk :</span></h3>
    <hr />
    <br />

    <div className="nursing-dean-profile-card">
      <img src={deanImg} alt="Dr. V. Hemavathy" className="nursing-dean-image" />
      <div className="nursing-dean-details">
        <h4 className="nursing-dean-name">
          <b>Dr.V.Hemavathy</b><span className="nursing-dean-qual">,, <u>B.Sc, M.Sc, Ph.D</u></span>
        </h4>
        <p className="nursing-dean-title">👩‍⚕️ Professor and Dean,</p>
        <p className="nursing-dean-title">🏥 Department of Nursing, BIHER</p>
      </div>
    </div>

    <div className="nursing-dean-message">
      <p>
        Sree Balaji College of Nursing was established in the year 1992, under Sri Lakshmi Ammal Educational Trust. Government
        of Tamil Nadu sanctioned permission to start B.Sc. Nursing degree programme for intake of 100 students per year. 
        (Govt. of Tamil Nadu G.O.M.S.No.772/Health, Dt. 03.07.1992). College is recognized by Indian Nursing Council, New Delhi 
        and Tamil Nadu Nurses and Midwives Council and it is affiliated to Bharath University. College has collaborative 
        arrangements with various other tie-up Hospitals and Community Health Centre to cater to the needs of the students. 
        College is offering Bachelor of Science in Nursing and also offers Master of Science of Nursing course with 
        specialization in Medical Surgical Nursing, Child Health Nursing, Maternity Nursing, Community Health Nursing and 
        Mental Health Nursing. The college of nursing crossed many milestones in history. Started post graduate residential 
        course like NPCC in the year 2019.
      </p>

      <br />

      <p>
        The college of nursing having parent and affiliated hospital facilities for the clinical exposure. Placement also 
        done every year with corporate hospital as well as training given for OET and other foreign eligibility tests. 
        Students makes their placement in state, central and foreign countries.
      </p>

      <br />

      <p>
        The College is situated in beautiful surroundings in a spacious ground with all infrastructural facilities. 
        It has spacious...
      </p>
    </div>
  </>
)
,

    "Board of Studies": (
      <>
        <h3 className="nursing-content-heading">Board of <span className="nursing-highlight">Studies</span></h3>
        <hr />
        <p className="nursing-content-paragraph">Our board comprises experienced healthcare educators and practitioners ensuring curriculum excellence and relevance.</p>
        <p className="nursing-content-paragraph">» Members advise on curriculum development, clinical standards, and emerging trends in nursing practice.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="nursing-content-heading">Members of BOS <span className="nursing-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="nursing-bos-table">
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
              <td>Nursing Education</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Community Health Nursing</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Medical-Surgical Nursing</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Obstetric and Gynecologic Nursing</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={nursingImg} alt="Nursing" className="nursing-banner" />

      <div className="nursing-breadcrumb-header">
        <div className="nursing-breadcrumb-container">
          <Link to="/" className="nursing-breadcrumb-link"><FaHome className="nursing-breadcrumb-icon" /></Link>
          <span className="nursing-breadcrumb-separator">»</span>
          <span className="nursing-breadcrumb-text">Academics</span>
          <span className="nursing-breadcrumb-separator">»</span>
          <span className="nursing-breadcrumb-current">School of Nursing</span>
        </div>
      </div>

      <div className="nursing-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="nursing-content-container">
          <div className="nursing-sidebar">
            <div className="nursing-sidebar-header">
              <FaBook className="nursing-sidebar-icon" />
              Categories
            </div>
            <ul className="nursing-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="nursing-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="nursing-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'nursing-active-tab' : ''}
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
                    className={selectedTab === item ? 'nursing-active-tab' : ''}
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

          <div className="nursing-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
    <Banner/>
      <Footer />
    </div>
  );
};

export default Nursing;
