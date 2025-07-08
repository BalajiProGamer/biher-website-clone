import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import {
  FaUniversity,
  FaSearch,
  FaTrophy,
  FaUser,
  FaUserTie,
 FaSchool,
  FaCaretDown,
  FaUserGraduate,
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
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${scrollDirection === "down" ? "hidden" : ""}`}>
      <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</span>

      <div className={menuOpen ? "nav-links show" : "nav-links"}>
        {/* Open in new tab using <a> instead of <Link> */}
        <a href="https://bharathuniv.directverify.in/student/#/app/request" target="_blank" rel="noopener noreferrer">
          <FaUniversity /> Certification Verification
        </a>

        <Link to="/mou">
          <FaUniversity /> MOU
        </Link>
        <Link to="/lms">
          <FaUniversity /> LMS
        </Link>
        <Link to="/IQAC">
          <FaUniversity /> IQAC
        </Link>
        <Link to="/alumni">
          <FaUniversity /> Alumni
        </Link>
        <Link to="/career">
          <FaUniversity /> Career
        </Link>

        {/* NAD Dropdown */}
        <div className="dropdown-container">
          <span onClick={() => handleDropdownToggle("NAD")}>
            <FaSchool /> NAD  <FaCaretDown />
          </span>
          {activeDropdown === "NAD" && (
            <div className="dropdown-menu show"> {/* <--- ADD 'show' here */}
              <a href="https://www.digilocker.gov.in/dashboard" target="_blank" rel="noopener noreferrer">
                <FaUserGraduate /> NAD Portal
              </a>
              <a href="https://www.bharathuniv.ac.in/esanad/" target="_blank" rel="noopener noreferrer">
                <FaUserGraduate /> E-Sand Verification
              </a>
            </div>
          )}

        </div>

        {/* Achievements Dropdown */}
        <div className="dropdown-container">
          <span onClick={() => handleDropdownToggle("Achievements")}>
            <FaSchool /> Achievements <FaCaretDown />
          </span>
          {activeDropdown === "Achievements" && (
            <div className="dropdown-menu">
              <Link to="/achievements/staff-award">
                <FaUserGraduate /> Staff Award
              </Link>
              <Link to="/achievements/student-award">
                <FaUserGraduate /> Student Award
              </Link>
            </div>
          )}
        </div>

        {/* Login Dropdown */}
        <div className="dropdown-container">
          <span onClick={() => handleDropdownToggle("Login")}>
            <FaSchool /> Login  <FaCaretDown />
          </span>
          {activeDropdown === "Login" && (
            <div className="dropdown-menu">
              <a href="https://camu.in/" target="_blank" rel="noopener noreferrer">
                <FaUser /> Camu Portal
              </a>
              <a href="https://alumni.bharathuniv.ac.in/user/login.dz" target="_blank" rel="noopener noreferrer">
                <FaUserGraduate /> Alumni Login
              </a>
              <a href="https://ebharath.bharathuniv.ac.in/" target="_blank" rel="noopener noreferrer">
                <FaUserGraduate /> Staff Portal
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
