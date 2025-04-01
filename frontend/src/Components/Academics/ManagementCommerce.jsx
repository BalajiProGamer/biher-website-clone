 import React from "react";
import mechImg from "../../assets/management commer.jpg"; // Ensure the image path is correct
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import VisionMission from "../Pages/VisionMission";

const ManagementCommerce = () => {
  return (
    <div>
      <img src={mechImg} alt="Management Commerce" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Management Commerce)</span>
      </div>
      <VisionMission />
    </div>
  );
};

export default ManagementCommerce;