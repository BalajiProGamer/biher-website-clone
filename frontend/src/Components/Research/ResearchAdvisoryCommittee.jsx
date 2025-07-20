import React, { useState } from 'react';
import { FaHome, FaBook, FaList } from 'react-icons/fa';
import ResearchImg from '../../assets/Rac.jpg'; // Replace with appropriate image for research advisory
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';
import backgroundImage from '../../assets/pattern.jpg';
import Query from '../Pages/Query';

const categoryItems = [
  'About Us',
  'Vision mission',
  'Members',
  'Policy',
];

const ResearchAdvisoryCommittee = () => {
  const [activeTab, setActiveTab] = useState('About Us');

  const renderContent = () => {
    switch (activeTab) {
      case 'About Us':
  return (
    <>
      <h2 className="research-about-title">About Us</h2>

      <p className="research-about-intro">
        To render advice and guidance for future growth on research related issues to the
        top management a <strong>“Research Advisory Committee”</strong> is being constituted
        with experts from various research institutes and industries. The committee will
        provide advice on Academic Research, Sponsored Research, Consultancy,
        Industrial Training etc. The scope of the activities envisaged for the committee include.
      </p>

      <ul className="research-about-list">
        <li>
          To provide policy guidelines and direction for the growth and development of
          research activities
        </li>
        <li>
          To advice on thrust areas and disciplines for introducing research programmes
          and related activities for future development in research.
        </li>
        <li>
          To suggest measures for improving existing infrastructural facilities both for
          academic and sponsored research and enhancing research ambiance.
        </li>
        <li>
          To recommend projects and suitable for availing concession if any from State and
          Central Governments.
        </li>
        <li>Any other related issues.</li>
      </ul>
    </>
  );


    case 'Vision mission':
  return (
    <>
      <h2 className="research-vision-title">Vision</h2>
      <p className="research-vision-text">
        BIHER strives to be a <q>Research Intensive Institution</q> through various quality
        enhancement and sustainable initiatives
      </p>

      <h2 className="research-mission-title">Missions</h2>
      <ul className="research-mission-list">
        <li>
          To offer PhD and MS (by research) Programmes in all the Schools of the Institution.
        </li>
        <li>
          To offer Research Fellowships (JRF & SRF) in all the Departments to attract young talents.
        </li>
        <li>
          To conduct periodical review meetings for research scholars to ensure Quality.
        </li>
        <li>
          To disseminate the research findings through Publications.
        </li>
        <li>
          To introduce innovative Schemes to encourage quality research & to increase Research Publications.
        </li>
        <li>
          To introduce a conducive ambience so as to bring in a research culture.
        </li>
      </ul>
    </>
  );

      case 'Members':
  return (
    <>
      <h2 className="research-advisory-title">
        Research Advisory <span className="highlight-red">Committee Members</span> :
      </h2>
      <div className="research-advisory-table-wrapper">
        <table className="research-advisory-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Membership</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. M. Sundararajan</td>
              <td>Vice-Chancellor</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dr. S. Suresh Kumar</td>
              <td>Pro Vice-Chancellor ( Research )</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dr. R. Hariprakash</td>
              <td>Additional Registrar</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Prof. A.P. Naveenchandran, M.E., Ph.D.</td>
              <td>Dean, R & D</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Prof. Dr. K. Murugadoss</td>
              <td>Dean, School of Law</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Dr. A. Muthukumaravel</td>
              <td>Dean, School of Arts and Science</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Dr. S. Ravindhar</td>
              <td>Dean, School of Architecture</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Dr. V. Kalaiarasi</td>
              <td>Dean, School of Basic Sciences</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Dr. V. Balambica</td>
              <td>Dean, School of Mechanical Engineering</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Dr. M.K. Illango</td>
              <td>Dean, School of Electrical Engineering</td>
              <td>Member</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );


      case 'Policy':
  return (
    <>
      <h2 className="policy-title">Policy <span className="colon">:</span></h2>
      <div className="policy-grid">
        <a
          className="policy-card"
          href="https://www.bharathuniv.ac.in/nirf/policy/Policy-for-Research-Promotion.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Research Promotion Policy</span>
          <div className="policy-arrow">➜</div>
        </a>
        <a
          className="policy-card"
          href="https://www.bharathuniv.ac.in/nirf/policy/Plagiarism-Policy-BIHER.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Plagiarism Policy</span>
          <div className="policy-arrow">➜</div>
        </a>
        <a
          className="policy-card"
          href="https://www.bharathuniv.ac.in/nirf/policy/code%20of%20ethics.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Research Code of Ethics</span>
          <div className="policy-arrow">➜</div>
        </a>
        <a
          className="policy-card"
          href="https://www.bharathuniv.ac.in/nirf/policy/Policy%20Document%20for%20Consultancy%20Activities.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Consultancy Activities</span>
          <div className="policy-arrow">➜</div>
        </a>
        <a
          className="policy-card"
          href="https://www.bharathuniv.ac.in/nirf/policy/IPR%20Policy-BIHER.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>IPR Policy</span>
          <div className="policy-arrow">➜</div>
        </a>
      </div>
    </>
  );

      default:
        return null;
    }
  };

  return (
    <div>
      <img src={ResearchImg} alt="Research Advisory Committee" className="research-advisory-top-image" />
      <Banner />
      <Query />

     <header className="research-advisory-header">
  <a href="/" className="breadcrumb-home-link" title="Go to Home">
    <FaHome className="breadcrumb-home-icon" />
  </a>
  <span className="breadcrumb-separator">»</span>
  <span className="breadcrumb-section">Research</span>
  <span className="breadcrumb-separator">»</span>
  <span className="breadcrumb-active">Research Advisory Committee (RAC)</span>
</header>


      <div
        className="research-advisory-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="research-advisory-card">
          <div className="research-advisory-sidebar">
            <div className="research-advisory-sidebar-header">
              <FaList /> Categories
            </div>
            {categoryItems.map((item) => (
              <div
                key={item}
                className={`research-advisory-sidebar-item ${activeTab === item ? 'active' : ''}`}
                onClick={() => setActiveTab(item)}
              >
                <FaBook className="research-advisory-icon" />
                {item}
              </div>
            ))}
          </div>

          <div className="research-advisory-content">
            {renderContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResearchAdvisoryCommittee;
