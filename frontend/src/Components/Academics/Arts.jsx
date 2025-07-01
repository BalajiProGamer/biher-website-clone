import React, { useState } from "react";
import artsImg from "../../assets/arts.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';
import deanImg from "../../assets/arts-dean.png";

const ArtsEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
   "About": (
  <>
    <h5 className="arts-content-welcome">Welcome to School of Arts</h5>
    <br></br>
    <h3 className="arts-content-heading">About <span className="arts-highlight">the School :</span></h3>
    <hr />
    <p className="arts-content-paragraph">
      BIHER – Faculty of Arts and Science comprises several divisions, each offering different courses for students. School of Basic Sciences and School of Commerce and Management Studies are the names of various divisions in the curriculum.
    </p>
    <p className="arts-content-paragraph">
      Students can pursue both undergraduate and postgraduate courses that are offered by this college. These include – B.Com. (General, Accounting and Finances, Corporate Secretaryship, Honors, Data Analytics in association with IIT), B.Sc. (Physics, Chemistry, Mathematics, Statistics, Microbiology, Biotechnology, Visual Communication), B.A. (Tamil, English, Economics), M.Com. M.Sc. (Physics, Chemistry, Mathematics, Statistics, Microbiology, Biotechnology, Biochemistry), M.A. (Tamil, English, Economics).
    </p>
    <p className="arts-content-paragraph">
      The development of students’ life is worth the effort, time and energy spent. The Management team of BIHER consistent and unflinching effort helps in the progress of students through clubs such as NSS, NCC, Youth Red Cross, Entrepreneurial Development Cell, Women’s Empowerment Cell, Internal Quality Assurance Cell, Alumni Club, Value Education Club, Sports Council Committee etc.
    </p>
    <p className="arts-content-paragraph">
      The Physical Education department of the college has received various accolades for its consistent and energetic performance in all the events the students participate in, won trophies in many tournaments both national and state level.
    </p>
  </>
),


  "Vision & Mission": (
  <>
    <h3 className="arts-content-heading">Vision & <span className="arts-highlight">Mission</span></h3>
    <hr />
    
    <h3 className="arts-content-heading">Our <span className="arts-highlight">Vision :</span></h3>
    <p className="arts-content-paragraph">
      The School of Arts strives to embrace and engage a diverse group of students, faculty, staff, and community 
      participants in the production and discourse of the arts – empowering the artists, scholars, educators, 
      audiences, and advocates who will shape the culture of the twenty-first century.
    </p>

    <h3 className="arts-content-heading">Our <span className="arts-highlight">Mission :</span></h3>
    <p className="arts-content-paragraph">
      School of Arts mission is to make a significant contribution to the larger institutional mission to provide 
      students with an excellent undergraduate and graduate liberal arts education because being broadly educated 
      is a primary attribute of leading a successful life.
    </p>
  </>
),


   "Deans Desk": (
  <>
    <h3 className="arts-content-heading">Dean's <span className="arts-highlight">Desk</span></h3>
    <hr />
    <br />
    <div className="arts-dean-profile">
      <img src={deanImg} alt="Dean" className="arts-dean-image" />
      <div className="arts-dean-details">
        <h4 className="arts-dean-name">
          <b>Dr. A. Muthukumaravel</b>, <span className="arts-dean-qual">M.Com, M.C.A., M.Phil., PhD.,</span>
        </h4>
        <p className="arts-dean-title">👨‍🏫 Professor and Dean,<br />🏛 School of Arts & Science, BIHER</p>
      </div>
    </div>

    <div className="arts-dean-message">
      <blockquote style={{ fontStyle: "italic", color: "#0077b6", fontWeight: "600" }}>
        "Education is the most powerful weapon which you can use to change the world"
      </blockquote>
      <br />
      <p>
        I take this opportunity to highlight the multidimensional architectural education provided by this institution
        to the young and talented candidates who are to explore the resources to the maximum extent. The Adolescents
        who step in to our institution are the young buds to be blossomed, raw materials to be molded and fabricated,
        the innocents to be expertise. Though their life in our institution a small span of life it will be the deciding
        factor for the rest of their life. You can be an example for life, can be a person creating history, can be a person
        achieving national goals, can be a person uplifting the society, can be a person safe guarding the national
        integrity, can be a person of no cast or creed.
      </p>
      <br />
      <p>
        We strongly believe that education begins with teacher student interaction and education is not a mere knowledge
        of facts but of values. Our College is committed to the development of emotional growth along with the intellectual
        excellence of our Students. This empowers them to develop their Self-esteem, Self-awareness and Self-confidence.
        We believe in giving our students strong values along with a set of wings that can carry them far and wide.
        In other words, our students are equipped to face the challenges of the rapidly changing world.
      </p>
    </div>
  </>
),


    "Board of Studies": (
      <>
        <h3 className="arts-content-heading">Board of <span className="arts-highlight">Studies</span></h3>
        <hr />
        <p className="arts-content-paragraph">The board comprises experienced faculty, researchers, and cultural scholars who help shape the academic structure of the Arts programs.</p>
        <p className="arts-content-paragraph">» Members include experts from universities, government institutions, and creative industries.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="arts-content-heading">Members of BOS <span className="arts-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="arts-bos-table">
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
              <td>Modern Literary Theory</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Comparative Literature</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Media & Cultural Studies</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Indian Aesthetics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={artsImg} alt="Arts" className="arts-banner" />

      <div className="arts-breadcrumb-header">
        <div className="arts-breadcrumb-container">
          <Link to="/" className="arts-breadcrumb-link"><FaHome className="arts-breadcrumb-icon" /></Link>
          <span className="arts-breadcrumb-separator">»</span>
          <span className="arts-breadcrumb-text">Academics</span>
          <span className="arts-breadcrumb-separator">»</span>
          <span className="arts-breadcrumb-current">School of Arts</span>
        </div>
      </div>

      <div className="arts-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="arts-content-container">
          <div className="arts-sidebar">
            <div className="arts-sidebar-header">
              <FaBook className="arts-sidebar-icon" />
              Categories
            </div>
            <ul className="arts-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="arts-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="arts-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'arts-active-tab' : ''}
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
                    className={selectedTab === item ? 'arts-active-tab' : ''}
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

          <div className="arts-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
    <Banner/>
      <Footer />
    </div>
  );
};

export default ArtsEngineering;
