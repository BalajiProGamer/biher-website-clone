import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="home-link">
        <FaHome className="header-icon" />
      </Link>
      <span className="header-text">BIHER - (Alumni)</span>
    </div>
  );
};

export default Header;