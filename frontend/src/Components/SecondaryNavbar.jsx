// SecondaryNavbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import logo from "../assets/bharath-logo.png";
import {
  FaHome, FaUsers, FaUniversity, FaBuilding, FaUserTie, FaBook,
  FaUserGraduate, FaPlane, FaSeedling, FaPencilRuler, FaHospital,
  FaPalette, FaAtom, FaRobot, FaCode, FaHardHat, FaTooth, FaBolt,
  FaGavel, FaStethoscope, FaCogs, FaChartLine, FaCapsules,
  FaClipboardList, FaLightbulb, FaBriefcase, FaMicroscope, FaHandshake,
  FaExchangeAlt, FaUserFriends, FaFlag, FaChevronDown, FaUserSecret,

  FaUserNurse, FaWalking            // ⬅ NEW icons
} from "react-icons/fa";


const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`secondary-navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "active" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>

      <div className="secondary-nav-links">
        <Link to="/" className="home-icon-box"><FaHome size={24} color="white" /></Link>

        {/* About */}
        <div className="dropdown dropdown-about">
          <span className="dropdown-label">About BIHER <FaChevronDown /></span>
          <div className="dropdown-content dropdown-content-about">
            <Link to="/about/overview"><FaUsers /> Overview</Link>
            <Link to="/about/leadership"><FaUserTie /> Leadership Team</Link>
            <div className="submenu">
              <span className="submenu-label"> <FaUserSecret /> Governance <span className="submenu-icon">»</span></span>
              <div className="submenu-content">
                <div className="submenu">
                  <span className="submenu-label">Statutory Bodies <span className="submenu-icon">»</span></span>
                  <div className="submenu-content">
                    <Link to="/about/governance/statutory/ExecutiveCouncilMember">Executive Council</Link>
                    <Link to="/about/governance/statutory/academiccouncil">Academic Council</Link>
                    <Link to="/about/governance/statutory/financecommittee">Finance Committee</Link>
                    <Link to="/about/governance/statutory/planningmonitoring">Planning & Monitoring</Link>
                  </div>
                </div>
                <div className="submenu">
                  <span className="submenu-label">
                    Non-Statutory Bodies <span className="submenu-icon">»</span>
                  </span>
                  <div className="submenu-content">
                    <Link to="/about/governance/statutory/Committees">Committees</Link>
                    <Link to="/about/governance/statutory/studentcouncil">Student Council</Link>
                    <Link to="/about/governance/statutory/studentCouncelling">Student Counselling</Link>
                  </div>

                </div>
              </div>
            </div>
            <Link to=""><FaUniversity /> Administration</Link>
          </div>
        </div>

        {/* ——— Academics (UPDATED) ——— */}
        <div className="dropdown dropdown-academics">
          <span className="dropdown-label">Academics <FaChevronDown /></span>

          {/* Two-column grid that mirrors your screenshot */}
          <div className="dropdown-content dropdown-content-academics">
            {/* Column 1 */}
            <div>
              <Link to="/academics/aeronautical-engineering"><FaPlane /> School of Aeronautical Engineering</Link>
              <Link to="/academics/agriculture"><FaSeedling /> School of Agriculture</Link>
              <Link to="/academics/architecture"><FaPencilRuler /> School of Architecture</Link>
              <Link to="/academics/arts"><FaPalette /> School of Arts</Link>
              <Link to="/academics/basic-sciences"><FaAtom /> School of Basic Sciences</Link>
              <Link to="/academics/bio-engineering"><FaRobot /> School of Bio-Engineering</Link>
              <Link to="/academics/computing"><FaCode /> School of Computing</Link>
              <Link to="/academics/civil-infrastructure"><FaHardHat /> School of Civil &amp; Infrastructure Engg</Link>
            </div>

            {/* Column 2 */}
            <div>
              <Link to="/academics/dentistry"><FaTooth /> School of Dentistry</Link>
              <Link to="/academics/electrical-engineering"><FaBolt /> School of Electrical Engineering</Link>
              <Link to="/academics/law"><FaGavel /> School of Law</Link>
              <Link to="/academics/medicine"><FaStethoscope /> School of Medicine</Link>
              <Link to="/academics/mechanical-engineering"><FaCogs /> School of Mechanical Engineering</Link>
              <Link to="/academics/management-commerce"><FaChartLine /> School of Management &amp; Commerce</Link>
              <Link to="/academics/nursing"><FaUserNurse /> School of Nursing</Link>
              <Link to="/academics/pharmacy"><FaCapsules /> School of Pharmacy</Link>

            </div>
          </div>
        </div>

        <a
          href="https://bharathuniv.ac.in/admission"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link white-text" // <-- added class
        >
          Admission
        </a>


        {/* Research */}
        <div className="dropdown dropdown-research">
          <span className="dropdown-label">Research <FaChevronDown /></span>
          <div className="dropdown-content dropdown-content-research">
            <Link to="/research/academics-research"><FaMicroscope /> Academics Research</Link>
            <Link to="/research/publication"><FaClipboardList /> Publication</Link>
            <Link to="/research/FIST"><FaLightbulb /> FIST</Link>
            <Link to="/research/innovation"><FaLightbulb /> Innovation</Link>
            <Link to="/research/funded-research"><FaBriefcase /> Funded Research</Link>

          </div>
        </div>

        {/* International */}
        <div className="dropdown dropdown-international">
          <span className="dropdown-label">International <FaChevronDown /></span>
          <div className="dropdown-content dropdown-content-international">
            <div className="submenu">
              <span className="submenu-label"><FaUniversity /> Admissions <span className="submenu-icon">»</span></span>
              <div className="submenu-content">
                <Link to="/international/admissions/overview">Overview</Link>
                <Link to="/international/admissions/eligibility">Eligibility</Link>
                <Link to="/international/admissions/fees">Fees</Link>
                <Link to="/international/admissions/bank-details">Bank Details</Link>

              </div>
            </div>
            <Link to="/international/collaboration"><FaHandshake /> Collaboration</Link>
            <Link to="/international/visitor"><FaExchangeAlt /> Visitor</Link>
            <Link to="/international/higher-studies"><FaUniversity/> Higher Studies</Link>
            <Link to="/international/other-activities"><FaUsers /> Other Activities</Link>
            <Link to="/international/events"><FaFlag /> Events</Link>

          </div>
        </div>

        {/* Campus Life */}
        <div className="dropdown dropdown-campus">
          <span className="dropdown-label">Campus Life <FaChevronDown /></span>
          <div className="dropdown-content dropdown-content-campus">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfK_3gLJn5euBfGqIMY_MpoQE79s4VchF6vRS2jc2eyIrNNBA/viewform" target="_blank" rel="noopener noreferrer"><FaBook /> Leave</a>
            <a href="https://www.bharathuniv.ac.in/nba/I.10_Rules_Policy_Service%20book_BIST.pdf" target="_blank" rel="noopener noreferrer"><FaBook /> Leave Policy</a>
            <Link to="/campuslife/NCC"><FaUsers /> NCC</Link>
            <Link to="/campuslife/NSS"><FaUsers /> NSS</Link>
            <Link to="/campuslife/RRC"><FaUsers /> RRC</Link>
            <Link to="/campuslife/hostel"><FaBuilding /> Hostel</Link>
            <Link to="/campuslife/library"><FaBook /> Library</Link>
            <Link to="/campuslife/transport"><FaClipboardList /> Transport</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;