import React from "react";
import aerospaceImg from "../../assets/arospace11.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import VisionMission from "../Pages/VisionMission";

const AeronauticalEngineering = () => {
  return (
    <div>
      <img src={aerospaceImg} alt="Aerospace" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Aeronautical)</span>
      </div>
     <VisionMission/>
     
    
    </div>
  );
};

export default AeronauticalEngineering;
