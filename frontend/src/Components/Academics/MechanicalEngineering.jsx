import React from "react";
import mechImg from "../../assets/mech1 (1).jpg"; // Ensure the image path is correct
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const MechanicalEngineering = () => {
  return (
    <div>
      <img src={mechImg} alt="Mechanical Engineering" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Mechanical Engineering)</span>
      </div>
      
    </div>
  );
};

export default MechanicalEngineering;