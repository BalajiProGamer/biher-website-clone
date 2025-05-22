 import React from "react";
import medicineImg from "../../assets/Medicine (1).jpg"; // Ensure the image path is correct
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const Medicine = () => {
  return (
    <div>
      <img src={medicineImg} alt="Medicine" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Medicine)</span>
      </div>
      
    </div>
  );
};

export default Medicine;