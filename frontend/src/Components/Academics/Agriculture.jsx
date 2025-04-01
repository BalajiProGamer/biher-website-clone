import React from "react";
import agriImg from "../../assets/arch.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import VisionMission from "../Pages/VisionMission";

const Agriculture= () => {
  return (
    <div>
      <img src={agriImg} alt="Aerospace" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Agriculture)</span>
      </div>
     <VisionMission/>
     
    
    </div>
  );
};
export default Agriculture
