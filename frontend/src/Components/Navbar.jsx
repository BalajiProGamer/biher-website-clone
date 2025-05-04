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
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        scrollDirection === "down" ? "hidden" : ""
      }`}
    >
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
            <FaUser /> NAD <FaCaretDown />
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