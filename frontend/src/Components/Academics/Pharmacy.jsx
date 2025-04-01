import React from "react";
import pharmacyImg from "../../assets/Pharmacy.jpg"; // Ensure the image path is correct
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import VisionMission from "../Pages/VisionMission";

const Pharamacy = () => {
  return (
    <div>
      <img src={pharmacyImg} alt="Pharmacy" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Pharmacy)</span>
      </div>
      <VisionMission />
    </div>
  );
};

export default Pharamacy;