import React, { useState } from "react";
import lawImg from "../../assets/law.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/lawdean.png";
import Banner from "../Banner";

const Law = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="law-content-welcome">Welcome to School of Law</h5>
        <br />
        <h3 className="law-content-heading">About <span className="law-highlight">The School :</span></h3>
        <hr />
        <p className="law-content-paragraph">Bharath Institute of Law (BIL) enters Indian legal education domain, and hosts new vistas of learning at comparatively comfortable cost. The world is looking at India to associate with modern institutions and come around designing ways and means to attract Indian youth to study abroad. The road to superior and competitively higher standards leads to India’s great many IITs, IIMs all over. Today the experiment for qualitatively enriched legal education came up effectively in the national law schools. BIL, a variant of legal education, is a modern species of its own kind and looks forward to bring in a wholesome environment blended with professional learning and training in advocacy, mastering methods and inner depth of the legal concepts thoroughly and has brought forth a realisable agenda to focus on research. Fine tuning its immense necessity, BIL plans to introduce a number of advanced centres of specialisation exclusively to concentrate on research. Students will be able to prosecute all these courses in the portals of the Institute and attain distinction.</p>
       <br></br>
        <p className="law-content-paragraph">The avowed object of the Institute is to cater to the needs of a cross section of the population. It is not for the elite to deny access to the ordinary to become extraordinary, instead, its aim is underlying in its principle of inclusive education and it pledges for producing extraordinary results identifying talents and skills and research acumen in every single student admitted to learn from BIL. It is open for the students to freely exercise choice of any subject, by option and make them comfortable to learn and master it. Learning is ones enjoyable pursuit as it communicates knowledge and inculcates intelligible intelligence to the budding lawyers of tomorrow. By providing and instilling in the young the confidence in what has been learnt and how to face the challenges of the world in giving solutions for the client the alumni of Bharath will have his merit tested by the training and exposure he earns through the regular courses and suitable training in clinical and court work. It is not only that Bharath aims for enablement and empowerment of the scholars under its fold, it is also that it has a quality textured and fine-tuned to be fit for professionalism in the bar, corporate concerns, administration, national and international policy making in a political market and services thereon.</p>
        <br></br>
        <p className="law-content-paragraph">Giving them a space and identity, Bharath will endeavour to build its infrastructure suitable for all types of learning leading one to be a complete lawyer.The primary objective of the Bharath Institute of Law is to evolve and impart the quality legal education. Recent evidence has demonstrated the continuing need for clinical legal education and the universities have to a serious and proactive stance to this form of pedagogic instruction.So on the wake of this scenario, our respected Dean , a visionary with practical insight made this law school to impart clinical legal education which class room based education fails.So this is a small step to enshrine the philosophy of legal education along with ethical values.</p>
      </>
    ),

   "Vision & Mission": (
  <>
    <h3 className="law-content-heading">Vision & <span className="law-highlight">Mission</span></h3>
    <hr />

    <h3 className="law-content-heading">Our <span className="law-highlight">Vision :</span></h3>
    <ul className="law-content-list">
      <li>To achieve the peak of perfection in legal education by providing academic and conductive ethos in order to attain distinct eminence.</li>
      <br></br>
      <li>To nurture outstanding lawyers to serve national and global communities with brilliance and strive towards contributing to the development of the law and a more just society.</li>
      <br></br>
      <li>To be an institution in producing global excellence in legal education, training, research and innovation by maintaining and enhancing the quality and reputation.</li>
      <br></br>
      <li>To educate charismatic leaders who create positive, sustainable change in the legal fraternity and wider society.</li>
      <br></br>
      <li>To intensify the legal education in order to promote the legal awareness and to ensure the social justice by providing legal aid to the underprivileged sections of the society.</li>
      
      <br></br>
      <li>To achieve the peak of excellence by restructuring and perfecting quality legal education thereby striving to train and mould a new generation of students in law, meritorious and brilliant with their aptitude conductive to upgrade the standards of legal education and legal profession with ethics and discipline sustaining the nobility of its tradition to realize and meet the challenges of the future, sensitized of global social justice.</li>
    </ul>

    <h3 className="law-content-heading">Our <span className="law-highlight">Mission :</span></h3>
    <hr />
    <ul className="law-content-list">
      
      <li>To emphasize on the quality legal education by propagating and focusing on creation and sustenance of research by grounding in values of social justice and excellence.</li>
      <br></br>
      <li>To craft the law graduates in attaining appropriate knowledge through outstanding legal education, futuristic training and extensive legal research, to ensure an eminent socio-welfare legal fraternity.</li>
    </ul>
  </>
),


    "Deans Desk": (
  <>
    <h3 className="law-content-heading">Dean's <span className="law-highlight">Desk</span></h3>
    <hr />
    <br />
    <div className="law-dean-profile">
      <img src={deanImg} alt="Dean" className="law-dean-image" />
      <div className="law-dean-details">
        <h4 className="law-dean-name">
          <b>Prof. Dr. K. Murugadoss</b>, <span className="law-dean-qual">B.Com., M.L., Ph.D (Law), M.B.A.</span>
        </h4>
        <p className="law-dean-title">⚖️ DEAN – LAW,<br />🏛 Department of Law, BIHER</p>
      </div>
    </div>

    <div className="law-dean-message">
      <p>Welcome to Bharath Institute of Law, where I am honoured to serve as Dean. Ours is a unique and engaged community, and I am pleased to introduce you to it. We are a community of bright and engaged students, talented faculty, dedicated administrators and staff, and accomplished alumni.</p>
      <br />
      <p>Since the founding in 2016, our Law School has earned a national reputation for educational excellence, academic rigor, and the highest standards of professionalism. We realize that the theory and practice of law are complementary rather than conflicting. We stress professional responsibility throughout the curriculum. We believe the practice of law stands for something beyond detached analysis and neutral professional skills. Many of our classes and co-curricular activities connect directly to seek justice. Our relevant and challenging curriculum prepares students to thrive in a variety of sectors and settings. The Law School is the cradle of various interdisciplinary legal fields and Interdisciplinary here at the Law School encompasses fields such as history, philosophy, political science, and sociology.</p>
      <br />
      <p>Our faculty consider teaching a privilege, and we especially prize the opportunity to teach law students. The pandemic or the subsequent lockdown never hindered the enthusiasm of our faculty community. They continued to deliver regular classes online, conducted numerous webinars and workshops online. Our faculty continue to gain national and international recognition for their work in numerous areas of law, even as they remain focused on teaching. Our students have extraordinary credentials and life experiences. Diverse student groups also work together on common projects.</p>
    </div>
  </>
),


    "Board of Studies": (
      <>
        <h3 className="law-content-heading">Board of <span className="law-highlight">Studies</span></h3>
        <hr />
        <p className="law-content-paragraph">The board consists of legal scholars, senior advocates, and public policy experts guiding curriculum and legal research at the school.</p>
        <p className="law-content-paragraph">» Members include judges, law firm partners, and professors from reputed law institutions.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="law-content-heading">Members of BOS <span className="law-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="law-bos-table">
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
              <td>Constitutional Law</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Corporate Law</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Criminal Law</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>International Law</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={lawImg} alt="Law" className="law-banner" />

      <div className="law-breadcrumb-header">
        <div className="law-breadcrumb-container">
          <Link to="/" className="law-breadcrumb-link"><FaHome className="law-breadcrumb-icon" /></Link>
          <span className="law-breadcrumb-separator">»</span>
          <span className="law-breadcrumb-text">Academics</span>
          <span className="law-breadcrumb-separator">»</span>
          <span className="law-breadcrumb-current">School of Law</span>
        </div>
      </div>

      <div className="law-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="law-content-container">
          <div className="law-sidebar">
            <div className="law-sidebar-header">
              <FaBook className="law-sidebar-icon" />
              Categories
            </div>
            <ul className="law-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="law-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="law-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'law-active-tab' : ''}
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
                    className={selectedTab === item ? 'law-active-tab' : ''}
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

          <div className="law-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
     <Banner />
      <Footer />
    </div>
  );
};

export default Law;
