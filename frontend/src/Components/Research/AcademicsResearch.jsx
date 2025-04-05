import React from "react";
import AcademicImg from "../../assets/Academic Research.png"; // Ensure the image path is correct
import Footer from '../Footer';
import ResearchDevelopment from "./ResearchDevelopment";

const AcademicsResearch = () => {
  return (
    <div>
      <img src={AcademicImg} alt="Academic Research" width="100%" height="100%" />
      <ResearchDevelopment/>
      <Footer/>
      
    </div>
  );
};

export default AcademicsResearch;