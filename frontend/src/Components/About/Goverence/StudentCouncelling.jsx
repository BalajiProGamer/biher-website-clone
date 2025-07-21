import React from 'react';
import bgImage from '../../../assets/pattern.jpg'; // Adjust if needed
import '../../../styles/global.css';
import Footer from '../../Footer';

const StudentCouncelling = () => {
  return (
    <>
      <div
        className="student-counselling-container"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="student-counselling-content">
          <h4 className="student-subheading">Non-Statutory Bodies</h4>
          <h2 className="student-heading">
            Students Counselling<span> :</span>
          </h2>

          {/* PDF link */}
          <a
            href="https://www.bharathuniv.ac.in/nirf/Non-statutory/Students%20Counselling/Procedure%20for%20counselling.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="counselling-card"
          >
            <span className="card-title">
              Procedure for <strong>E-Counselling</strong>
            </span>
            <div className="arrow-button">➝</div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentCouncelling;
