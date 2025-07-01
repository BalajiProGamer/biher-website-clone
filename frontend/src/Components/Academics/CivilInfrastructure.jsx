import React, { useState } from "react";
import civilinfraImg from "../../assets/civil.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';
import deanImg from "../../assets/civil-dean.png";

const CivilInfrastructure = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
  "About": (
  <>
    <h5 className="civilinfra-content-welcome">Welcome to School of Civil And Infrastructure Engineering</h5>
    <br></br>
    <h3 className="civilinfra-content-heading">About <span className="civilinfra-highlight">the School :</span></h3>
    <hr />
    <p className="civilinfra-content-paragraph">
      The department of Civil Engineering is committed to the task of providing quality education, which will transform the students into efficient and successful engineers. Students who have graduated from the department are already serving in responsible positions, in India and abroad.
    </p>
    <p className="civilinfra-content-paragraph">
      The department has earned over the years an enviable reputation for excellence; thanks to the highly qualified academics of distinction, staffing the department. The uniquely designed course offered by the department has already placed it on par with some of its counterparts, both at home and abroad.
    </p>
    <p className="civilinfra-content-paragraph">
      The department of Civil Engineering interacts with leading construction firms through M.O.U., in the fields of Structural Designs, Soil Investigations and Design of Foundations, Earthquake Engineering, Development of High Performance Concrete, Rehabilitation of Structures, Environmental Pollution Control, etc.
    </p>
    <p className="civilinfra-content-paragraph">
      Our Institute has achieved a prestigious position as one of the <strong>Top Institutes offering B.Tech Civil Engineering Program, in Tamil Nadu since 1984.</strong> Civil engineering is a field of engineering that focuses on the design, construction, and maintenance of the built environment. There are many reasons why someone might choose to pursue a career in civil engineering.
    </p>
    <p className="civilinfra-content-paragraph">
      B.Tech. program commenced in the year 1984, the School of Civil and Infrastructure Engineering, is one of the primary departments at BIHER well equipped with State-of-the-Art Facilities providing new and innovative insights to the budding engineers of our country. The arena of civil engineering is vast, ever-changing with testing, Research and Development based detailed road map in the world of construction. In a nut shell, Civil Engineering is all about shapes and structures towards evolution of modern society.
    </p>
    <p className="civilinfra-content-paragraph">B.Tech. program commenced in the year 1984, the School of Civil and Infrastructure Engineering, is one of the primary departments at BIHER well equipped with State-of-the-Art Facilities providing new and innovative insights to the budding engineers of our country. The arena of civil engineering is vast, ever-changing with testing, Research and Development based detailed road map in the world of construction. In a nut shell, Civil Engineering is all about shapes and structures towards evolution of modern society.</p>
    <p className="civilinfra-content-paragraph">Civil Engineering is a well-paying field with competitive salaries, particularly for those with advanced degrees and experience. A degree in Civil Engineering can lead to many different career paths, including Construction Management, Structural Engineering, Transportation Engineering, Environmental Engineering, and more. Civil Engineering is a challenging field that requires a strong work ethic, attention to detail, and problem-solving skills. However, it can also be very rewarding to see the tangible results of your work, such as a new building, bridge, or roadway.</p>
    <p className="civilinfra-content-paragraph">Keeping in view about worldwide demand for Civil Engineers, BIHER has implemented revised Curriculum and structure by incorporating following specific courses adhering to BIHER Regulations 2024 with effect from Academic Year 2025-26. These courses are brought out taking into account of computer and Data Science applications in Civil Engineering in order to update the BIHER graduating Civil Engineers</p>
  </>
),

   "Vision & Mission": (
  <>
    <h3 className="civilinfra-content-heading">Vision & <span className="civilinfra-highlight">Mission</span></h3>
    <hr />
    <h3 className="civilinfra-content-heading">Our <span className="civilinfra-highlight">Vision :</span></h3>
    <p className="civilinfra-content-paragraph">
      Department of Civil Engineering is striving to become as a world class academic centre for quality education and research in diverse areas of civil engineering, with a strong social commitment.
    </p>

    <h3 className="civilinfra-content-heading">Our <span className="civilinfra-highlight">Mission :</span></h3>
    <hr />
    <p className="civilinfra-content-paragraph">
      <strong>Mission of the department is to achieve International Recognition by:</strong>
    </p>
    <ul className="civilinfra-content-paragraph">
      <li><i><strong>MD 1 -</strong></i> Producing highly competent and technologically capable professionals</li>
      <li><i><strong>MD 2 -</strong></i> Providing quality education in undergraduate and post graduate levels, with strong emphasis on professional ethics and social commitment.</li>
      <li><i><strong>MD 3 -</strong></i> Developing a scholastic environment for the state–of–art research, resulting in practical applications.</li>
      <li><i><strong>MD 4 -</strong></i> Undertaking professional consultancy services in specialized areas of civil engineering.</li>
    </ul>
  </>
)
,
"Deans Desk": (
  <>
    <h3 className="civilinfra-content-heading">Dean's <span className="civilinfra-highlight">Desk</span></h3>
    <hr />
    <br />
    <div className="civilinfra-dean-profile">
      <img src={deanImg} alt="Dr. C. Gurumoorthy" className="civilinfra-dean-image" />
      <div className="civilinfra-dean-details">
        <h4 className="civilinfra-dean-name">
          <b>Dr. C. Gurumoorthy</b>, <a href="#" className="civilinfra-dean-qual">Ph.D. (IIT Bombay)</a>
        </h4>
        <p className="civilinfra-dean-title">👷‍♂️ <em>Professor and Dean,</em><br />🏛 <em>School of Civil and Infrastructure Engineering, BIHER</em></p>
      </div>
    </div>

    <div className="civilinfra-dean-message">
      <p>The School of Civil and Infrastructure Engineering is consisting of one of the oldest departments of this institution – the Department of Civil Engineering, as it started in the year 1984, the year of start of the institution itself. The Department has sound faculty strength of 4 Professors, 3 Associate Professors and 14 Assistant Professors and total of 21 faculty members.</p>
      <br />
      <p>The Department offers Undergraduate Programme in Civil Engineering and Postgraduate Programmes in Structural Engineering, Construction Engineering and Management, Environmental Engineering and Geotechnical Engineering. The Overall student strength in UG program is 302 and 27 in PG program.</p>
      <br />
      <p>This Department is equipped with 9 laboratories, including Advanced Structural Engineering Laboratory. A well-equipped Smart classroom is also available to conduct Workshops, Technical Seminars, Guest Lecture Programs, etc. To improve the teaching pedagogy sufficient number of LCD Projectors are also available. Power point presentations are made often to teach the students as and when required.</p>
      <br />
      <p>Every year the Department organizes various student and faculty activities like Faculty Development Program, Students Symposium, National Conference, International Conference, Seminars, Workshops, Industrial Visits, Model Making Competitions, Poster Presentation, Drawing Competition, Intercollegiate Competitions, Career Development Program, Value Added Courses, Alumni Interaction, etc.</p>
    </div>
  </>
)
,

    "Board of Studies": (
      <>
        <h3 className="civilinfra-content-heading">Board of <span className="civilinfra-highlight">Studies</span></h3>
        <hr />
        <p className="civilinfra-content-paragraph">The board includes eminent civil engineers and academic experts guiding the curriculum and research strategies in infrastructure studies.</p>
        <p className="civilinfra-content-paragraph">» Members represent top universities, consultancy firms, and public infrastructure authorities.</p>
      </>
    ),
    
    "Members": (
      <>
        <h3 className="civilinfra-content-heading">Members of BOS <span className="civilinfra-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="civilinfra-bos-table">
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
              <td>Structural Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Construction Management</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Geotechnical Engineering</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Environmental Engineering</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={civilinfraImg} alt="Civil Infrastructure" className="civilinfra-banner" />

      <div className="civilinfra-breadcrumb-header">
  <div className="civilinfra-breadcrumb-container">
    <Link to="/" className="civilinfra-breadcrumb-link">
      <FaHome className="civilinfra-breadcrumb-icon" />
    </Link>
    <span className="civilinfra-breadcrumb-separator">»</span>
    <span className="civilinfra-breadcrumb-text">Academics</span>
    <span className="civilinfra-breadcrumb-separator">»</span>
    <span className="civilinfra-breadcrumb-current">School of Civil And Infrastructure Engineering</span>
  </div>
</div>


      <div className="civilinfra-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="civilinfra-content-container">
          <div className="civilinfra-sidebar">
            <div className="civilinfra-sidebar-header">
              <FaBook className="civilinfra-sidebar-icon" />
              Categories
            </div>
            <ul className="civilinfra-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="civilinfra-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="civilinfra-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'civilinfra-active-tab' : ''}
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
                    className={selectedTab === item ? 'civilinfra-active-tab' : ''}
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

          <div className="civilinfra-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
      <Banner/>
      <Footer />
    </div>
  );
};

export default CivilInfrastructure;
