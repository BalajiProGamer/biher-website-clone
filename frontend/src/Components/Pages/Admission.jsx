import React from 'react';
import './Admission.css'; // Import CSS for styling
import Admissioncontent from './Admissioncontent';
import AdmissionPage from './AdmissionPage';

const Admission = () => {
  const defaultOption = { name: 'B.Tech', icon: '🌍' }; // Default option to display details

  return (
    <>
      <div className="image-container">  
        {/* Background Image */}
        <img src="assets/ad.jpg" alt="Alumni" className="background-image" />
        
        {/* Overlay Image */}
        <img src="assets/robo.png" alt="Overlay" className="overlay-image" />
      </div>
  
      <div className="admission-content-container">
        {/* Admission Options */}
        <Admissioncontent />
        
        {/* Admission Page Details */}
        <div className="admission-page-container">
          <AdmissionPage option={defaultOption} />
        </div>
      </div>
    </>
  );
};

export default Admission;