import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./DropDown";
import { 
  FaCertificate, FaFileContract, FaGraduationCap, FaUsers, 
  FaBriefcase, FaSearch, FaTrophy, FaUser, FaUserTie, FaCheckCircle
} from "react-icons/fa";

const Navbar = () => {                                       
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the open dropdown

  // Function to handle dropdown open/close
  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="navbar">
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

        <Dropdown 
  label="NAD" 
  options={[
    {
      label: "NAD Portal",
      icon: <FaUser />,
      link: "https://www.digilocker.gov.in/dashboard",
      newTab: true
    },
    {
      label: "E-Sand Verification",
      icon: <FaCheckCircle />,
      link: "https://www.bharathuniv.ac.in/esanad/",
      newTab: true
    }
  ]}
  icon={<FaUser />} 
  isOpen={activeDropdown === "NAD"}
  onToggle={() => handleDropdownToggle("NAD")}
/>

      
       
 {/* Achievement Dropdown */}
 <Dropdown 
          label="Achievement" 
          options={[
            { label: "Student BiAward", icon: <FaTrophy /> },
            { label: "Staff Award", icon: <FaUserTie /> }
          ]}
          icon={<FaTrophy />} 
          isOpen={activeDropdown === "Achievement"}
          onToggle={() => handleDropdownToggle("Achievement")}
        />
        
        <Dropdown 
  label="Login" 
  options={[
    {
      label: "User Login",
      icon: <FaUser />,
      link: "https://example.com/user-login", // replace with real login URL
      newTab: true
    },
    {
      label: "Admin Login",
      icon: <FaUserTie />,
      link: "https://example.com/admin-login", // replace with real login URL
      newTab: true
    }
  ]}
  icon={<FaUserTie />} 
  isOpen={activeDropdown === "Login"}
  onToggle={() => handleDropdownToggle("Login")}
/>

 

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
