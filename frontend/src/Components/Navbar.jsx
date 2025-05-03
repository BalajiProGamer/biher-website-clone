 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaCertificate,
  FaFileContract,
  FaGraduationCap,
  FaUsers,
  FaBriefcase,
  FaSearch,
  FaTrophy,
  FaUser,
  FaUserTie,
  FaCheckCircle,
  FaCaretDown,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    document.body.style.overflow = searchOpen ? "hidden" : "";

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </span>

      <div className={menuOpen ? "nav-links show" : "nav-links"}>
        <Link to="/certificate-verification">
          <FaCertificate /> Certification Verification
        </Link>

        <Link to="/mou">
          <FaFileContract /> MOU
        </Link>

        <Link to="/lms">
          <FaGraduationCap /> LMS
        </Link>

        <Link to="/IQAC">
          <FaUsers /> IQAC
        </Link>

        <Link to="/alumni">
          <FaUsers /> Alumni
        </Link>

        <Link to="/career">
          <FaBriefcase /> Career
        </Link>

        {/* NAD Dropdown */}
        <div className="dropdown-container">
          <span onClick={() => handleDropdownToggle("NAD")}>
            <FaUser /> NAD<FaCaretDown />
          </span>
          {activeDropdown === "NAD" && (
            <div className="dropdown-menu">
              <a
                href="https://www.digilocker.gov.in/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUser /> NAD Portal
              </a>
              <a
                href="https://www.bharathuniv.ac.in/esanad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCheckCircle /> E-Sand Verification
              </a>
            </div>
          )}
        </div>

        {/* Achievement Dropdown */}
        <div className="dropdown-container">
          <span onClick={() => handleDropdownToggle("Achievement")}>
            <FaTrophy /> Achievement <FaCaretDown />
          </span>
          {activeDropdown === "Achievement" && (
            <div className="dropdown-menu">
              <a
                href="https://www.bharathuniv.ac.in/student-achiv.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTrophy /> Student Award
              </a>
              <a
                href="https://www.bharathuniv.ac.in/Staff-Awards.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUserTie /> Staff Award
              </a>
            </div>
          )}
        </div>

        {/* Login Dropdown */}
        <div className="dropdown-container">
          <span onClick={() => handleDropdownToggle("Login")}>
            <FaUserTie /> Login<FaCaretDown />
          </span>
          {activeDropdown === "Login" && (
            <div className="dropdown-menu">
              <a
                href="https://camu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUser /> User Login
              </a>
              <a
                href="https://alumni.bharathuniv.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUserTie /> Admin Login
              </a>
            </div>
          )}
        </div>

        <span className="search-icon" onClick={() => setSearchOpen(!searchOpen)}>
          <FaSearch />
        </span>
      </div>

      {searchOpen && (
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      )}
    </nav>
  );
};

export default Navbar;