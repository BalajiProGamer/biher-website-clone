import React from "react";

const CareerPage = () => {
  return (
    <div className="career-page-wrapper">
      <h1 className="career-main-title">C a r e e r s</h1>

      <div className="career-flex-container">
        {/* ─── Administration Section ─── */}
        <div className="career-column">
          <h2 className="career-heading">
            <span className="career-icon">🏛️</span> Administration :
          </h2>
          <ul className="career-list">
            <li>» Controller of Examination / Deputy COE</li>
            <li>» Dean - ( Alumni Relations )</li>
            <li>» Dean - ( HR )</li>
            <li>» Dean - ( Admission )</li>
            <li>» Dean - ( Campus Maintance )</li>
            <li>» Dean - ( IQAC )</li>
            <li>» Dean - ( Internatnal Relations )</li>
            <li>» Dean - ( ICT )</li>
            <li>» Dean - ( ODL & MOOC )</li>
            <li>» Dean - ( Student Affairs )</li>
            <li>» Dean - ( Placement & Training )</li>
            <li>» Deputy Registrars</li>
            <li>» Dean - ( Librarian )</li>
            <li>» Dean - ( Physical Education )</li>
            <li>» Dean - ( Events )</li>
            <li>» Dean - ( Rankings )</li>
          </ul>
        </div>

        {/* ─── Academics Section ─── */}
        <div className="career-column">
          <h2 className="career-heading">
            <span className="career-icon">🏛️</span> Academics - ( Dean / Professor / Associate / Assistant Professor ) :
          </h2>
          <ul className="career-list">
            <li>» Department of Aeronautical Engineering</li>
            <li>» Department of Computing Engineering</li>
            <li>» Department of Mechanical Engineering</li>
            <li>» Department of Civil And Infrastructure Engineering</li>
            <li>» Department of Electrical Engineering</li>
            <li>» Department of Electronics and Communication Engineering</li>
            <li>» Department of Information Technology</li>
            <li>» Department of Bio-Medical</li>
            <li>» Department of MBA</li>
            <li>» Department of Architecture</li>
            <li>» Department of Maths</li>
            <li>» Department of Physics</li>
            <li>» Department of Chemistry</li>
            <li>» Department of English</li>
          </ul>
        </div>
      </div>

      {/* ─── Technical Section ─── */}
      <div className="career-tech-section">
        <h2 className="career-tech-heading">💻 Technical Assistant</h2>
        <ul className="career-list">
          <li>» Technical Assistant</li>
          <li>» Computer Operators</li>
        </ul>
      </div>

      {/* ─── Apply Button ─── */}
      <div className="career-button-wrapper">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfuLo7tZV9kEN_OxCWPjqwehFbOW8INpo1_dI4V3f3cPJodLw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="career-apply-button"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CareerPage;
