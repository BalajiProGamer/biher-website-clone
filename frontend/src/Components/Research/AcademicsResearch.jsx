import React from "react";
import AcademicImg from "../../assets/Academic Research.png"; // Ensure the image path is correct
import Footer from '../Footer';

const AcademicsResearch = () => {
  return (
    <div>
      <img src={AcademicImg} alt="Academic Research" width="100%" height="100%" />
      <Footer/>
      
    </div>
  );
};

export default AcademicsResearch;