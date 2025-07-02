
import React, { useState } from "react";
import managementImg from "../../assets/managementcommer.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from "../Banner";
import '../../styles/global.css';
import deanImg from "../../assets/commerce-dean.png";

const ManagementCommerce = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="management-commerce-content-welcome">Welcome to School of Management & Commerce</h5>
        <br></br>
        <h3 className="management-commerce-content-heading">About <span className="management-commerce-highlight">The School :</span></h3>
        <hr />
        <p className="management-commerce-content-paragraph">The School of Management & Commerce develops future business leaders through a strong foundation in management, finance, marketing, and entrepreneurship.</p>
        <p className="management-commerce-content-paragraph">The department over the years has earned an enviable reputation for excellence; thanks to instruction by the highly qualified academics of distinction and it boasts of qualified faculty members with rich experience in academic, industry and research. Students who have graduated are already serving in responsible positions, in India and abroad in various capacities at senior level management and even as entrepreneurs.</p>
        <p className="management-commerce-content-paragraph">Department of Management Studies, BIHER endeavors to equip young people with the skills they need to compete in an increasingly demanding global environment. At the individual level the Department recognizes that success depends not just on our own knowledge and wisdom but also upon the ability to recruit, develop and empower an effective workforce. We also model the qualities that we require in our employees – and demonstrate the value of incorporating ethics into everyday business practice and decision making.</p>
       <p className="management-commerce-content-paragraph">The Department has carved a niche for itself in providing exemplary education and has always been a forerunner in conducting many National and International Conferences.The Department has realized how crucial innovation, entrepreneurship, creativity and critical thought are to pushing the business world forward. In an effort to stay ahead of the curve, Department of Management Studies, BIHER has also identified the increasing influence of factors such as new technology; globalization and sustainability have on the world economy.The Department of Management Studies employs a dynamic approach to education, adapting the curricula to meet emerging trends and equips students with the progressive skills necessary to succeed.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="management-commerce-content-heading">Vision & <span className="management-commerce-highlight">Mission</span></h3>
        <hr />
        <h3 className="management-commerce-content-heading">Our <span className="management-commerce-highlight">Vision :</span></h3>
        <p className="management-commerce-content-paragraph">The Department of Management Studies, Bharath Institute of Higher Education and Research aspires to be a leading Management Institution with a passion for Academic Excellence, uncompromising Human Values and an abiding commitment for the development of Business and Society through excellence in grooming Leadership, Entrepreneurial Talent and Research</p>
        <h3 className="management-commerce-content-heading">Our <span className="management-commerce-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To impart transformative education in business, commerce, and entrepreneurship.</i></li>
          <br />
          <li>To develop responsible leaders through experiential learning and innovation.</li>
          <br />
          <li>To contribute to the business ecosystem through research, ethics, and community impact.</li>
        </ul>
      </>
    ),
"Deans Desk": (
  <>
    <h3 className="management-commerce-content-heading">Deans <span className="management-commerce-highlight">Desk :</span></h3>
    <hr />
    <br />

    <div className="management-commerce-dean-profile-card">
      <img src={deanImg} alt="Dr S Praveen Kumar" className="management-commerce-dean-image" />
      <div className="management-commerce-dean-details">
        <h4 className="management-commerce-dean-name">
          <b>Dr S Praveen Kumar</b><span className="management-commerce-dean-qual">,, <u>MA, MBA, MSc, PhD</u></span>
        </h4>
        <p className="management-commerce-dean-title">🎓 Professor and Dean,</p>
        <p className="management-commerce-dean-title">🏛 School of Commerce and Management, BIHER</p>
        <p className="management-commerce-dean-email">📧 dean.scm@bharathuniv.ac.in</p>
      </div>
    </div>

    <div className="management-commerce-dean-message">
      <br></br>
      <p>
        As Dean of the School of Commerce and Management, we welcome you to our website and our School. 
        Department of Management Studies is proud to NBA accredited, placing us in the elite league. 
        We prepare our students to be outstanding business professionals—to be ready for the challenges 
        they will face in an ever more global and dynamic business environment. Our faculty members are 
        known for their commitment to teaching, while also pursuing meaningful research in their disciplines. 
        Their engagement in the business community together with their deep subject matter knowledge enables 
        them to provide excellent preparation for our students' future business careers.
      </p>

      <br />

      <p>
        The School of Commerce and Management has established and maintained a supportive community 
        that allows for a high level of interaction among students, faculty and staff. We are proud of 
        the rich array of leadership and professional development opportunities available to our students. 
        We have a non-stop schedule of events – webinars, workshops, seminars, training sessions, symposia, 
        conferences and more, designed to complement our challenging curriculum.
      </p>
      <p>We are proud to have our alumni working at prestigious across the world. Our alumni are generous with their time, and have helped us to develop a strong network of business connections around the world. We are excited about the opportunities ahead of us and delighted to be working with such devoted faculty, staff and students. We are always interested in your input and ideas about ways we can make the School of Commerce and Management a more vibrant and exciting place. Please feel free to contact us to learn more about how you can connect with our School of Business.</p>
    </div>
  </>
)
,

    "Board of Studies": (
      <>
        <h3 className="management-commerce-content-heading">Board of <span className="management-commerce-highlight">Studies</span></h3>
        <hr />
        <p className="management-commerce-content-paragraph">The board consists of experienced academicians, industry experts, and entrepreneurs who shape the curriculum and research direction of the school.</p>
        <p className="management-commerce-content-paragraph">» Members bring insight into modern business challenges and solutions.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="management-commerce-content-heading">Members of BOS <span className="management-commerce-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="management-commerce-bos-table">
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
              <td>Strategic Management</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Finance</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Marketing</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Business Analytics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={managementImg} alt="Management and Commerce" className="management-commerce-banner" />

      <div className="management-commerce-breadcrumb-header">
        <div className="management-commerce-breadcrumb-container">
          <Link to="/" className="management-commerce-breadcrumb-link"><FaHome className="management-commerce-breadcrumb-icon" /></Link>
          <span className="management-commerce-breadcrumb-separator">»</span>
          <span className="management-commerce-breadcrumb-text">Academics</span>
          <span className="management-commerce-breadcrumb-separator">»</span>
          <span className="management-commerce-breadcrumb-current">School of Management & Commerce</span>
        </div>
      </div>

      <div className="management-commerce-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="management-commerce-content-container">
          <div className="management-commerce-sidebar">
            <div className="management-commerce-sidebar-header">
              <FaBook className="management-commerce-sidebar-icon" />
              Categories
            </div>
            <ul className="management-commerce-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="management-commerce-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="management-commerce-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'management-commerce-active-tab' : ''}
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
                    className={selectedTab === item ? 'management-commerce-active-tab' : ''}
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

          <div className="management-commerce-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>
      <Banner/>
      <Footer />
    </div>
  );
};

export default ManagementCommerce;
