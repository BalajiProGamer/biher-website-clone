import React from "react";
import computingimg from "../../assets/computing.jpg"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const Computing= () => {
  return (
    <div>
      <img src={computingimg} alt="Computing"  width="100%" />

      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (computing)</span>
      </div>
     
     
    
    </div>
  );
};
export default Computing
