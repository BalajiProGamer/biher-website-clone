import React from "react";
import basicsciImg from "../../assets/basicsci.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import VisionMission from "../Pages/VisionMission";

const BasicSciences= () => {
  return (
    <div>
      <img src={basicsciImg} alt="basicsci" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Basicscience)</span>
      </div>
     <VisionMission/>
     
    
    </div>
  );
};
export default BasicSciences