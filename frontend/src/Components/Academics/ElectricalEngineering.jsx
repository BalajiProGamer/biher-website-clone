import React from "react";
import dentiImg from "../../assets/electric eng.jpg"; // Ensure the image path is correct
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const ElectricalEngineering= () => {
  return (
    <div>
      <img src={dentiImg} alt="deni" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (Law)</span>
      </div>

    </div>
  );
};

export default ElectricalEngineering;