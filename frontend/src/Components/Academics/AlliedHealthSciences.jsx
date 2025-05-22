import React from "react";
import computingimg from "../../assets/Founder.png"; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const AlliedHealthSciences= () => {
  return (
    <div>
      <img src={computingimg} alt="Computing" />

      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (computing)</span>
      </div>
     
     
    
    </div>
  );
};
export default AlliedHealthSciences
