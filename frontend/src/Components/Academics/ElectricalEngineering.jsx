import React, { useState } from "react";
import electricalImg from "../../assets/electric eng.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/EEdean.png";
import Banner from "../Banner";

const ElectricalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
  "About": (
  <>
    <h5 className="electrical-content-welcome">Welcome to School of Electrical Engineering</h5>
    <br></br>
    <h3 className="electrical-content-heading">About <span className="electrical-highlight">the School :</span></h3>
    <hr />

    <h4 className="electrical-content-subtitle">The School Consists of two Departments:</h4>
    <br></br>
    <ul className="electrical-department-list">
      <li><strong><em>Electrical and Electronics Engineering (EEE)</em></strong></li>
      <li><strong><em>Electronics and Communication Engineering (ECE)</em></strong></li>
    </ul>
    <br></br>

    <div className="electrical-about-paragraphs">
      <p>It started in 1992 with two undergraduate programs and in 2003 six post-graduate programs were added (M.Tech in Power Systems and Power Electronics & Drives offered by EEE, M.Tech in Digital Communication and Networking, Embedded System Design, VLSI Design and Applied Electronics offered by ECE). The school also offers research programs (Ph.D.) in various fields related to Electrical & Electronics Engineering and Electronics & Communication Engineering to cater to the ever-challenging needs of technical excellence in all areas of both departments such as Communication systems, Wireless networks, Signal and Image Processing, RF MEMS and MIC, Microwave antennas, Optical Communication and Photonics, VLSI technologies, IoT and Embedded Systems, Power System, HVDC transmission, Modern Electric Drives, Electric Mobility and Renewable Energy. Both B.Tech (EEE) & B.Tech (ECE) programs are accredited by the Accreditation Board for Engineering and Technology (ABET), USA.</p>
      <br></br>
      <p>The department is equipped with state-of-the-art facilities to carry out research work at all levels. The research focus of the department is in the area of power electronics, renewable energy systems, control systems, etc. The department also actively involves in multi-disciplinary research activities. The department has dedicated faculty, support staff, state-of-the-art teaching and research laboratories and is recognized for its excellence in research, teaching and service to the Nation.</p>
      <br></br>
      <p>The department provides healthy & competitive environment for all-round development of students leading to several remarkable achievements in GATE, CAT, GRE, TOEFL, PSUs etc. The faculties and students of EEE & ECE.</p>
   
   <br></br> 
   <p>The School has MoU with Blue Hora University, Ethiopia, East Africa to share knowledge and experience to our students. The school also has Centre of Excellence in Electric mobility, VLSI Design and RF & Microwave Engineering in order to enhance the skills of faculty and students. Our placements are consistently above 90% for the past three years. Our students are placed in both core industries and software industries. Students are guided for placements right from the first year. We cater to various needs of our students. Students are encouraged to be part of various Student Development Clubs and are encouraged to participate in social activities through NSS.</p>
   <br></br>
   <p>It is an engineering discipline that deals with transfer of information using electrical and electronic means, enabling the development of a wide range of products and services. This field has grown exponentially, with the development of new technologies such as radio, television, and computer. With the advent of internet, the field has seen a huge surge in growth, with the development of new communication technologies such as mobile phones and satellite communication.</p>
   </div>
  </>
),


   "Vision & Mission": (
  <>
    <h3 className="electrical-content-heading">Vision & <span className="electrical-highlight">Mission</span></h3>
    <hr />

    <h3 className="electrical-content-heading">Our <span className="electrical-highlight">Vision :</span></h3>
    <p className="electrical-content-paragraph">
      Department of Electronics and Communication Engineering envisions with innovation in academics to inherit the professional competence along with cognitive skills and research ability to meet industrial standards and to cater the societal needs by embedding in teaching and learning.
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
    <h3 className="electrical-content-heading">Dean's <span className="electrical-highlight">Desk</span></h3>
    <hr />
    <br />
    <div className="electrical-dean-profile">
      <img src={deanImg} alt="Dean" className="electrical-dean-image" />
      <div className="electrical-dean-details">
        <h4 className="electrical-dean-name">
          <b>Dr. Ilampooranan</b>, <span className="electrical-dean-qual">B.E, M.E, Ph.D.</span>
        </h4>
        <p className="electrical-dean-title">🎓 Professor and Dean,<br />🏛 School of Electrical Engineering, BIHER</p>
      </div>
    </div>

    <div className="electrical-dean-message">
      <p>Welcome to the School of Electrical Engineering at Bharath Institute of Higher Education and Research, BIHER. The School works with the objective of addressing critical issues faced by the industry, society and the academia. Perhaps we give utmost importance to academic and skill development with unceasing commitment to our students. We are helping them to enhance learning and also guiding them to achieve their goals to excel in professional career.</p>
      <br />
      <p>School of Electrical Engineering is one of the oldest School in Bharath Institute of Higher Education and Research with ABET and NAAC accreditation started in the Year of 1992. The School’s graduate programs continue to draw from a very strong application pool. The School was established in the year 1992 and since its inception the School has evolved from offering only undergraduate courses to offer post graduate in Power Electronics and Power System Engineering offered by Electrical and Electronics Engineering Department, similarly Digital Communication and Networking, Embedded System Design, VLSI Design and Applied Electronics offered by Electronics and Communication Engineering Department. The Doctoral programme in key areas of electrical engineering has produced high quality researchers with significant contribution to our nation.</p>
      <br />
      <p>During every semester, the calendar of events is prepared, which implicitly incorporates all the curricular and extra-curricular activities of the School and is followed meticulously without any deviation. Special care is taken about the students whose attendance is poor and those who have any kind of academic deficiency. We are constantly evolving to stay ahead of the rapidly changing engineering landscape.</p>
    </div>
  </>
),

    "Board of Studies": (
      <>
        <h3 className="electrical-content-heading">Board of <span className="electrical-highlight">Studies</span></h3>
        <hr />
        <p className="electrical-content-paragraph">The board includes eminent electrical engineers and academicians guiding curriculum innovation and research excellence.</p>
        <p className="electrical-content-paragraph">» Members include industry leaders, faculty, and alumni shaping the future of electrical engineering.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="electrical-content-heading">Members of BOS <span className="electrical-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="electrical-bos-table">
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
              <td>Power Systems</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Control Systems</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Power Electronics</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Electrical Machines</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={electricalImg} alt="Electrical Engineering" className="electrical-banner" />

      <div className="electrical-breadcrumb-header">
        <div className="electrical-breadcrumb-container">
          <Link to="/" className="electrical-breadcrumb-link"><FaHome className="electrical-breadcrumb-icon" /></Link>
          <span className="electrical-breadcrumb-separator">»</span>
          <span className="electrical-breadcrumb-text">Academics</span>
          <span className="electrical-breadcrumb-separator">»</span>
          <span className="electrical-breadcrumb-current">School of Electrical Engineering</span>
        </div>
      </div>

      <div className="electrical-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="electrical-content-container">
          <div className="electrical-sidebar">
            <div className="electrical-sidebar-header">
              <FaBook className="electrical-sidebar-icon" />
              Categories
            </div>
            <ul className="electrical-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="electrical-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="electrical-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'electrical-active-tab' : ''}
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
                    className={selectedTab === item ? 'electrical-active-tab' : ''}
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

          <div className="electrical-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
    <Banner />
      <Footer />
    </div>
  );
};

export default ElectricalEngineering;
