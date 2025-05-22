import React from "react";
import bioImg from "../../assets/bio-eng.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


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
     
     
    
    </div>
  );
};
export default BioEngineering
