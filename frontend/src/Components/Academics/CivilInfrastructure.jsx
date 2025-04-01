import React from "react";
import civilImg from "../../assets/civil.jpg"; // Ensure the image path is correct
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import VisionMission from "../Pages/VisionMission";

const CivilInfrastructure = () => {
  return (
    <div>
      <img src={civilImg} alt="Civil Infrastructure" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Civil Infrastructure)</span>
      </div>
      <VisionMission />
    </div>
  );
};

export default CivilInfrastructure;