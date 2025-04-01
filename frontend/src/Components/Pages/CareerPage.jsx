import React from 'react';
import './CareerPage.css';
// Ensure the image is in the assets folder

const CareerPage = () => {
  return (
    <div className="career-container">
      <h1 className="career-title">Careers</h1>
      
      
      <div className="career-content">
        <div className="career-section">
          <h2>📌 Administration</h2>
          <ul>
            <li>Controller of Examination / Deputy COE</li>
            <li>Dean - ( Alumni Relations )</li>
            <li>Dean - ( HR )</li>
            <li>Dean - ( Admission )</li>
            <li>Dean - ( Campus Maintenance )</li>
            <li>Dean - ( IQAC )</li>
            <li>Dean - ( International Relations )</li>
            <li>Dean - ( ICT )</li>
            <li>Dean - ( ODL & MOOC )</li>
            <li>Dean - ( Student Affairs )</li>
            <li>Dean - ( Placement & Training )</li>
            <li>Deputy Registrars</li>
            <li>Dean - ( Librarian )</li>
            <li>Dean - ( Physical Education )</li>
            <li>Dean - ( Events )</li>
            <li>Dean - ( Rankings )</li>
          </ul>
        </div>

        <div className="career-section">
          <h2>📚 Academics</h2>
          <ul>
            <li>Department of Aeronautical Engineering</li>
            <li>Department of Computing Engineering</li>
            <li>Department of Mechanical Engineering</li>
            <li>Department of Civil and Infrastructure Engineering</li>
            <li>Department of Electrical Engineering</li>
            <li>Department of Electronics and Communication Engineering</li>
            <li>Department of Information Technology</li>
            <li>Department of Bio-Medical</li>
            <li>Department of MBA</li>
            <li>Department of Architecture</li>
            <li>Department of Mathematics</li>
            <li>Department of Physics</li>
            <li>Department of Chemistry</li>
            <li>Department of English</li>
          </ul>
        </div>

        <div className="career-section">
          <h2>💻 Technical & Support Staff</h2>
          <ul>
            <li>Technical Assistant</li>
            <li>Computer Operators</li>
          </ul>
        </div>
      </div>

      <button className="apply-button">Apply Now</button>

      
    </div>
  );
};

export default CareerPage;
