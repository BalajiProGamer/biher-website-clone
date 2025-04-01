import React from "react";
import architectureImg from "../../assets/Architecture.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import VisionMission from "../Pages/VisionMission";

const Architecture= () => {
  return (
    <div>
      <img src={architectureImg} alt="Architecture" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Architecture)</span>
      </div>
     <VisionMission/>
     
    
    </div>
  );
};
export default Architecture