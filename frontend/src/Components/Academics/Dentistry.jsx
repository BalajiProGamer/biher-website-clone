import React, { useState } from "react";
import dentistryImg from "../../assets/Dentistry1.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/denti-dean.png";

const Dentistry = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
   "About": (
  <>
    <h5 className="dentistry-content-welcome">Welcome to School of Dentistry</h5>
    <br></br>
    <h3 className="dentistry-content-heading">About <span className="dentistry-highlight">the School :</span></h3>
    <hr />
    <p className="dentistry-content-paragraph">
      Sree Balaji Dental College & Hospital, Bharath Institute of Higher Education and Research functions with objectives of providing accessible, affordable and quality Dental Education and Oral Health Care to the society.
    </p>
    <p className="dentistry-content-paragraph">
      The Dental College and Hospital was established in the year 1989 with an annual intake of 40 students and currently the annual intake is 100 students.
    </p>
    <p className="dentistry-content-paragraph">
      Sree Balaji Dental College & Hospital is one of the premier educational institutions offering quality and affordable Dental care in India. The Dental College has excellent infrastructure with over 1,75,000 sft. of built up area and is the largest of its kind in Tamil Nadu. It has well equipped state-of-the-art library, modern clinical departments and pre-clinical and clinical laboratories. There is free transport facility for the patients and the treatment is also provided free of cost for the deserving poor.
    </p>
    <p className="dentistry-content-paragraph">
      The Dental College has been given the highest score among all dental colleges in the state by the High Level Committee appointed by Government of Tamil Nadu. Our college has gained the students prestigious position of being recognized internationally. The college was made to provide education to poor people who can't afford to pay much money for education in high standard schools. The college was established in the year 1989. Its main motive was to spread knowledge to people of all sections and for excellent education of the candidates, library and hostels was established along with the college. The college started achieving success gradually and excellent result of students in that time gave wings to success.
    </p>
    <p className="dentistry-content-paragraph">
      Sree Balaji Dental College offers one of the most forward-looking educational environments in dental medicine in the country. Located in the capital of Tamilnadu, Chennai, the college is dedicated to training doctors of dental medicine as expert clinicians with strong biomedical backgrounds.
    </p>
    <p className="dentistry-content-paragraph">
      At Sree Balaji Dental College, research and teaching are complementary, producing professionals who possess the analytical...
    </p>
  </>
)
,
    "Vision & Mission": (
  <>
    <h3 className="dentistry-content-heading">Vision & <span className="dentistry-highlight">Mission</span></h3>
    <hr />
    <h3 className="dentistry-content-heading">Our <span className="dentistry-highlight">Vision :</span></h3>
    <p className="dentistry-content-paragraph">
      We at Bharath Institute of Higher Education and Research (BIHER) envision and constantly strive to provide an academic and research ambience for students and members of the faculties to inherit professional competence along with human dignity and values to serve the society at large.!
    </p>

    <h3 className="dentistry-content-heading">Our <span className="dentistry-highlight">Mission :</span></h3>
    <hr />
  
    <p><b><u>Mission of the department is to achieve International Recognition by:</u></b></p>
    <br></br>
    <ul className="dentistry-content-list">
      <li><i><b>MD 1</b></i> To develop as a premier University for teaching, learning, research and innovation on par with leading global universities.</li>
      <li><i><b>MD 2</b></i> To establish professional practice standards in the fields of research, innovation and emerging areas in Engineering, Medicine, Dentistry, Nursing, Physiotherapy and Allied Sciences.</li>
      <li><i><b>MD 3</b></i> To imbibe human dignities and values to our graduates through personality development and social service activities.</li>
      <li><i><b>MD 4</b></i> To impart education and training to students for a better society with morals & ethics.</li>
      <li><i><b>MD 4</b></i> To nurture the patronage and development of Alumni so as to contribute the services at national and international levels.</li>
    </ul>
  </>
)
,

    "Deans Desk": (
  <>
    <h3 className="dentistry-content-heading">Dean's <span className="dentistry-highlight">Desk</span></h3>
    <hr />
    <br />
    <div className="dentistry-dean-profile">
      <img src={deanImg} alt="Dr. S. Jimson" className="dentistry-dean-image" />
      <div className="dentistry-dean-details">
        <h4 className="dentistry-dean-name">
          <b>Dr. S. Jimson</b>, <a href="#" className="dentistry-dean-qual">MDS, FDS RCPS (Glasg)</a>
        </h4>
        <p className="dentistry-dean-title">🎓 Professor and Dean,<br />🏛 School of Dentistry, BIHER</p>
      </div>
    </div>

    <div className="dentistry-dean-message">
      <p>
        Welcome to Sree Balaji Dental College & Hospital, BIHER University. We are a teaching, research, and patient care facility that have reinvented itself in recent years. While our facility is great, it is the people that make our College what it is. Our College has great students, postgraduates, staff, faculty, and alumni.
      </p>
      <br />
      <p>
        We are the flagship oral health College in the nation. We have a strong, innovative, nationally recognized BDS & MDS program strongly abiding to regulations and curriculum of Dental Council of India with our own extensions, driven by students through integrated small group learning sessions, early entry to patient care, complete digital workflow in patient care, advanced imaging and digital diagnostic and care planning coupled with valuable experiences in our clinics. In the fourth year there is also the opportunity for students to participate in special tracks devoted to public health, early specialization, comprehensive general practice, and research.
      </p>
      <br />
      <p>
        Research success today requires large collaborations crossing what is known as trans disciplinary science. We are reinventing the College’s research enterprise along those lines, creating bridges and connections and breaking down silos, constructing linkages across campus and with the various communities of the country.
      </p>
    </div>
  </>
)
,

    "Board of Studies": (
      <>
        <h3 className="dentistry-content-heading">Board of <span className="dentistry-highlight">Studies</span></h3>
        <hr />
        <p className="dentistry-content-paragraph">The board consists of distinguished dental educators and practitioners shaping the curriculum and research direction in dental sciences.</p>
        <p className="dentistry-content-paragraph">» Members include clinicians, researchers, and public health professionals across institutions.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="dentistry-content-heading">Members of BOS <span className="dentistry-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="dentistry-bos-table">
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
              <td>Oral Pathology</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Orthodontics</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Periodontology</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Prosthodontics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={dentistryImg} alt="Dentistry" className="dentistry-banner" />

      <div className="dentistry-breadcrumb-header">
        <div className="dentistry-breadcrumb-container">
          <Link to="/" className="dentistry-breadcrumb-link"><FaHome className="dentistry-breadcrumb-icon" /></Link>
          <span className="dentistry-breadcrumb-separator">»</span>
          <span className="dentistry-breadcrumb-text">Academics</span>
          <span className="dentistry-breadcrumb-separator">»</span>
          <span className="dentistry-breadcrumb-current">School of Dentistry</span>
        </div>
      </div>

      <div className="dentistry-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="dentistry-content-container">
          <div className="dentistry-sidebar">
            <div className="dentistry-sidebar-header">
              <FaBook className="dentistry-sidebar-icon" />
              Categories
            </div>
            <ul className="dentistry-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="dentistry-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="dentistry-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'dentistry-active-tab' : ''}
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
                    className={selectedTab === item ? 'dentistry-active-tab' : ''}
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

          <div className="dentistry-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dentistry;
