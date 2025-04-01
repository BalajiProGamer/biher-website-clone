import React from "react";
import bioImg from "../../assets/bio-eng.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import VisionMission from "../Pages/VisionMission";

const BioEngineering= () => {
  return (
    <div>
      <img src={bioImg} alt="bio" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (BioEngineering)</span>
      </div>
     <VisionMission/>
     
    
    </div>
  );
};
export default BioEngineering
