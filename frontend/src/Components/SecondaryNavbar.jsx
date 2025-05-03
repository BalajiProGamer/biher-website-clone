import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "./SecondaryNavbar.css";
import logo from "../assets/bharath-logo.png"; // Update path if needed

import {
  FaHome, FaInfoCircle, FaUserGraduate, FaBook, FaFlask,
  FaGlobe, FaUniversity, FaUsers, FaUserTie, FaBuilding,
  FaGraduationCap, FaLightbulb, FaBriefcase, FaMicroscope,
  FaHandshake, FaExchangeAlt, FaUserFriends, FaFlag, FaClipboardList,
  FaPlane, FaSeedling, FaPencilRuler, FaHospital, FaPalette,
  FaAtom, FaRobot, FaCode, FaHardHat, FaTooth, FaBolt,
  FaGavel, FaStethoscope, FaCogs, FaChartLine, FaCapsules,
  FaChevronDown
} from "react-icons/fa";

const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <nav className={`secondary-navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "active" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <div className="secondary-nav-links">
        <Link to="/" className="home-icon-box">
          <FaHome size={24} color="white" />
        </Link>

        {/* About Dropdown */}
        <div className="dropdown">
          <span className="dropdown-label">
            About <FaChevronDown className="dropdown-icon" />
          </span>
          <div className="dropdown-content">
            <Link to="/about/overview"><FaUsers /> Overview</Link>
            <Link to="/about/leadership"><FaUserTie /> Leadership Team</Link>
            <Link to="/about/governance"><FaBuilding /> Governance</Link>
          </div>
        </div>

        {/* External Admission Link (target blank) */}
        <a
          href="https://bharathuniv.ac.in/admission"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admission
        </a>

        {/* Academics Dropdown */}
        <div className="dropdown">
          <span className="dropdown-label">
            Academics <FaChevronDown className="dropdown-icon" />
          </span>
          <div className="dropdown-content two-column">
            <div>
              <Link to="/academics/aeronautical-engineering"><FaPlane /> Aeronautical Engineering</Link>
              <Link to="/academics/agriculture"><FaSeedling /> Agriculture</Link>
              <Link to="/academics/architecture"><FaPencilRuler /> Architecture</Link>
              <Link to="/academics/allied-health"><FaHospital /> Allied Health Sciences</Link>
              <Link to="/academics/arts"><FaPalette /> Arts</Link>
              <Link to="/academics/basic-sciences"><FaAtom /> Basic Sciences</Link>
              <Link to="/academics/bio-engineering"><FaRobot /> BioEngineering</Link>
              <Link to="/academics/computing"><FaCode /> Computing</Link>
            </div>
            <div>
              <Link to="/academics/civil-infrastructure"><FaHardHat /> Civil & Infrastructure</Link>
              <Link to="/academics/dentistry"><FaTooth /> Dentistry</Link>
              <Link to="/academics/electrical-engineering"><FaBolt /> Electrical Engineering</Link>
              <Link to="/academics/law"><FaGavel /> Law</Link>
              <Link to="/academics/medicine"><FaStethoscope /> Medicine</Link>
              <Link to="/academics/mechanical-engineering"><FaCogs /> Mechanical Engineering</Link>
              <Link to="/academics/management-commerce"><FaChartLine /> Management & Commerce</Link>
              <Link to="/academics/pharmacy"><FaCapsules /> Pharmacy</Link>
            </div>
          </div>
        </div>

        {/* Research Dropdown */}
        <div className="dropdown">
          <span className="dropdown-label">
            Research <FaChevronDown className="dropdown-icon" />
          </span>
          <div className="dropdown-content">
            <Link to="/research/academics-research"><FaMicroscope /> Academics Research</Link>
            <Link to="/research/publication"><FaClipboardList /> Publication</Link>
            <Link to="/research/FIST"><FaLightbulb /> FIST</Link>
            <Link to="/research/innovation"><FaLightbulb /> Innovation</Link>
            <Link to="/research/funded-research"><FaBriefcase /> Funded Research</Link>
          </div>
        </div>

        {/* International Dropdown */}
        <div className="dropdown">
          <span className="dropdown-label">
            International <FaChevronDown className="dropdown-icon" />
          </span>
          <div className="dropdown-content">
            <Link to="/international/admissions"><FaUserGraduate /> Admissions</Link>
            <Link to="/international/exchange-program"><FaExchangeAlt /> Exchange Program</Link>
            <Link to="/international/higher-studies"><FaUserFriends /> Higher Studies</Link>
            <Link to="/international/other-activities"><FaUsers /> Other Activities</Link>
            <Link to="/international/events"><FaFlag /> Events</Link>
            <Link to="/international/collaboration"><FaHandshake /> Collaboration</Link>
          </div>
        </div>

        {/* Campus Life Dropdown */}
        <div className="dropdown">
          <span className="dropdown-label">
            Campus Life <FaChevronDown className="dropdown-icon" />
          </span>
          <div className="dropdown-content">
            <Link to="/campuslife/NCC"><FaUsers /> NCC</Link>
            <Link to="/campuslife/NSS"><FaUsers /> NSS</Link>
            <Link to="/campuslife/RRC"><FaUsers /> RRC</Link>
            <Link to="/campuslife/UBA"><FaUsers /> UBA</Link>
            <Link to="/campuslife/library"><FaBook /> Library</Link>
            <Link to="/campuslife/scholarship"><FaClipboardList /> Scholarship</Link>
            <Link to="/campuslife/leave"><FaBook /> Leave</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
