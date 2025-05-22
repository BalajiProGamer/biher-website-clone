import React from "react";
import artsImg from "../../assets/arts.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const Arts= () => {
  return (
    <div>
      <img src={artsImg} alt="Arts" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Arts)</span>
      </div>
     
     
    
    </div>
  );
};
export default Arts