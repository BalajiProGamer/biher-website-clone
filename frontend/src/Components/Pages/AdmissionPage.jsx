import React from 'react';
import './AdmissionPage.css'; // Ensure you create and style this CSS file

const AdmissionPage = ({ option }) => {
  return (
    <div className="admission-container">
      <div className="admission-content">
        <h4 className="admission-subtitle">ABOUT US</h4>
        <h2 className="admission-title">{option.name} Admission</h2>
        <p className="admission-text">
          To support and augment an organized University-wide environment of research excellence 
          where faculty are inspired and challenged to drive the boundaries of knowledge foundation. 
          To motivate research leaders in India and around the world to partner with us in the 
          expansion of knowledge discovery and the translation of discoveries into tangible benefits 
          for society internationally.
        </p>
        <p className="admission-text">
          To be the voice of the research community at BIHER and in all ways, ensure the optimal and 
          effective use of intellectual, financial, and physical resources to foster an environment 
          of research excellence throughout the University. Explore {option.name} Admissions 2025 today!
        </p>
      </div>
    </div>
  );
};

export default AdmissionPage;