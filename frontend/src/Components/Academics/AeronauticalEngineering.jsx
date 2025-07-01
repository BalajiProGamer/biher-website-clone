import React, { useState } from "react";
import aerospaceImg from "../../assets/arospace11.jpg";
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const AeronauticalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="content-welcome">Welcome to Aeronautical Engineering</h5>
        <h3 className="content-heading">About <span className="highlight">The School :</span></h3>
        <hr />
        <p className="content-paragraph">Twenty first century is poised to become a century of space explorations and manned missions to other planets. It will be a time of space stations and robotic probes. The world will continue to need aerospace scientists, engineers, technologists and technicians to accomplish these highly exciting and challenging missions. Keeping this in mind the Department of Aeronautical Engineering was started in Bharath University in the year 2012.</p>
        <p className="content-paragraph">The Aeronautical Engineering students are encouraged to actively involve in research projects and come out with innovative ideas. With constant support extended by the Management, the basic infra-structure needed for regular curricular programs as well as for fundamental and applied research is being established in the Department.</p>
        <p className="content-paragraph">The Department provides a conducive academic environment for both students and faculty to bring out the best outcome from them.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="content-heading">Vision & <span className="highlight">Mission</span></h3>
        <hr />
        <h3 className="content-heading">Our <span className="highlight">Vision :</span></h3>
        <p className="content-paragraph">Department of Aeronautical Engineering will endeavour to accomplish worldwide recognition with a focal point of Excellence in the field of Aeronautics by providing quality Education through world class facilities, enabling graduates turning out to be Professional Experts with specific knowledge in Aeronautical & Aerospace engineering.</p>
        <h3 className="content-heading"> Our <span className="highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To be the state of art Teaching and Learning centre with excellent infrastructure and empowered Faculties in Aeronautical & Aerospace Engineering..</i></li>
          <br />
          <li>To foster a culture of innovation among students in the field of Aeronautics and Aerospace with updated professional skills to enhance research potential for sponsored research and innovative projects.</li>
          <br />
          <li> To Nurture young individuals to be knowledgeable, skilful, and ethical professionals in their pursuit of Aeronautical & Aerospace Engineering.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="content-heading">Dean's <span className="highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="dean-profile">
          <img src={deanImg} alt="Dr. S. Elangovan" className="dean-image" />
          <div className="dean-details">
            <h4 className="dean-name">
              <b>Dr. S. Elangovan</b>, <span className="dean-qual">M.Tech., PhD (IIT–Kanpur)</span>
            </h4>
            <p className="dean-title">👨‍🏫 Professor and Dean,<br />🏛 Department of Aeronautical Engineering, BIHER</p>
          </div>
        </div>

        <div className="dean-message">
          <p>Aeronautical Engineering is a fascinating and high-technology discipline more than 100 years old, still requiring much more contribution by engineers and scientists to broaden its scope and application to develop next generation aircrafts. Aeronautical engineering is an ever developing discipline full of exciting opportunities and challenges with several private players entering the aeronautical industry, the opportunities are going to be better and better. Job opportunities for an Aeronautical Engineer in India lies with government owned air service, aircraft manufacturers and research centres.</p>
          <br />
          <p>Many of the Aeronautical Engineers get better placement opportunities in the private and public manufacturing sectors and contribute well for the development of the efficient products. The Faculty and students of our department are engaged in acquiring cutting edge technology and the excellent infrastructural facilities available in the department allowing them to delve into pushing the boundaries of the state of the art of technology.</p>
          <br />
          <p>Aeronautical department boasts of dedicated faculty who are committed in providing highest quality students in today's professional workforce. Our programs complement not only the student learning experience, but also business, government and industry. Through internship, research, and innovation we are committed to challenging, mentoring and providing an exceptional learning experience for our students. I look forward for developing and implementing strategic initiatives which will further enhance the professional education of all our students. BIHER has a strong tradition of integrity, diversity, access, responsibility and excellence. I fully support this initiative of bringing out this souvenir, which is the resultant output of the unwavering dedication of all who had worked for it. My best wishes and greetings to all the students who are aspiring to become Aeronautical Engineers and take India to the forefront of developed nations.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="content-heading">Board of <span className="highlight">Studies</span></h3>
        <hr />
        <p className="content-paragraph">The board consists of industry experts, senior professors, and academic advisors who guide curriculum development and standards.</p>
        <p className="content-paragraph">» Members include professionals from DRDO, ISRO, academic institutions, and alumni involved in the aerospace industry.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="content-heading">Members of BOS <span className="highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="bos-table">
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
              <td>Aerospace Propulsion</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Emeritus Professor, BIHER</td>
              <td>Aerodynamics (Jets)</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Dr. C. Sureshkumar</td>
              <td>Professor and Head, BIHER</td>
              <td>Aircraft Structures</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Dr. Hamza Nazeem</td>
              <td>Associate Professor, BIHER</td>
              <td>Aircraft Structures</td>
            </tr>
            <tr>
              <td>05</td>
              <td>Dr. N. Rajamurugu</td>
              <td>Associate Professor, BIHER</td>
              <td>Aerodynamics</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>06</td>
              <td>Dr. B. Elamvazhuthi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Propulsion Systems</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      {/* Banner */}
      <img src={aerospaceImg} alt="Aerospace" className="aero-banner" />

      {/* Breadcrumb */}
      <div className="breadcrumb-header">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link"><FaHome className="breadcrumb-icon" /></Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-text">Academics</span>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">School of Aeronautical Engineering</span>
        </div>
      </div>

      {/* Section */}
      <div className="aero-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="aero-content-container">

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-header">
              <FaBook className="sidebar-icon" />
              Categories
            </div>
            <ul className="sidebar-list">
              {[...Object.keys(content), "Student Innovation"].map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'active-tab' : ''}
                          >
                            » Members
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                }

                if (item === "Members") return null;

                if (item === "Student Innovation") {
                  return (
                    <li key={item}>
                      <a
                        href="https://www.bharathuniv.ac.in/aero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-link"
                      >
                        {item}
                      </a>
                    </li>
                  );
                }

                return (
                  <li
                    key={item}
                    className={selectedTab === item ? 'active-tab' : ''}
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

          {/* Dynamic Content */}
          <div className="content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AeronauticalEngineering;
