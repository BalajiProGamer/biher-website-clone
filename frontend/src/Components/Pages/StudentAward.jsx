import React from 'react';
import { FaHome, FaUserGraduate, FaUniversity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/pattern.jpg';
import '../../styles/global.css';
import Footer from '../Footer';
import Query from './Query';
import Banner from '../Banner';

const StudentAward = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="student-award-container">
        {/* Breadcrumb Header */}
        <div className="breadcrumb-header">
          <div className="breadcrumb-content">
            <FaHome
              className="breadcrumb-icon"
              title="Home"
              onClick={() => navigate('/')}
            />
            <span className="breadcrumb-separator">»</span>
            <span className="breadcrumb-text">Student Achievement</span>
          </div>
        </div>


        {/* Background + White Content Wrapper */}
        <div
          className="student-content-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="student-white-box">
            
        {/* Section Title Block */}
        <div className="student-title-box">
          <p className="title-label">STUDENT</p>
          <h2 className="title-heading">
            Student <span className="highlight-red">Achievement</span>
          </h2>
          <hr className="section-divider" />
        </div>
           
            {/* Red Award Card */}
            <div className="award-card">
              <p className="award-title">
                " Pre - RD Camp Organized by Ministry of Youth Affairs Govt of
                India "
              </p>
              <hr />
              <p className="award-student">
                <FaUserGraduate /> A.RAGHUL – (U17EE038)
              </p>
              <p className="award-info">
                🎓 BIHER NSS Volunteer at National College ,Trichy.
              </p>
              <p className="award-info">
                <FaUniversity /> Held On : 27th November 2020 – 6th December 2020
              </p>
            </div>
          </div>
        </div>
      </div>
      <Query  />
      <Banner />
      <Footer />
    </>
  );
};

export default StudentAward;
