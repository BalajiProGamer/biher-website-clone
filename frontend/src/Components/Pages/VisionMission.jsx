import React, { useState } from "react";
import Footer from "../Footer";
import "./VisionMission.css";
import Sidebar from "./Sidebar";

const VisionMission = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="vision-container">
      <Sidebar /> 

      {/* Main Content */}
      <div className="vision-content">
        <h2>📖 Vision & Mission</h2>

        <div className="vision-section">
          <h3>Our Vision :</h3>
          <p>
            "To create the benchmark in defining the quality of BIHER in professional higher education 
            in Medical and allied Sciences and engineering and technology in quality evaluation 
            in teaching, learning, research & development, an extension in the upkeep & maintenance of 
            infrastructure, and in promotion and sustenance of the institutional and human values."
          </p>
        </div>

        <div className="mission-section">
          <h3>Our Mission :</h3>
          <ul>
            <li>To ensure periodic assessment and accreditation of BIHER of the academic programmes and projects.</li>
            <li>To promote the conducive academic environment in the quality of teaching, learning, and evaluation.</li>
            <li>To make self-evaluation, accountability, autonomy and innovations as an ongoing process in BIHER.</li>
            <li>To create a conducive ambience in quality-related research studies, consultancy and training programmes.</li>
            <li>To collaborate with other stakeholders for quality evaluation, promotion and sustenance.</li>
          </ul>
        </div>

        <div className="values-section">
          <h3>🔹 CORE VALUES:</h3>
          <ul>
            <li>Contributing to the growth of human civilization, community, society and the national development.</li>
            <li>Inculcating global Competencies & Human Excellence among the Students.</li>
            <li>Promoting the use of technology for a green environment.</li>
            <li>Pursuit of excellence a permanent commitment.</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default VisionMission;