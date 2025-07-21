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
                  </div>
                </div>
                <div className="submenu">
                  <span className="submenu-label">
                    Non-Statutory Bodies <span className="submenu-icon">»</span>
                  </span>
                  <div className="submenu-content">
                    <Link to="/about/governance/statutory/Committees">Committees</Link>
                    <Link to="/about/governance/statutory/studentcouncil">StudentCouncil</Link>
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
            <Link to="/research/funded-research"><FaBriefcase /> Funded Research</Link>
            <Link to="/research/consultancy"><FaMicroscope /> Consultancy</Link>
             <Link to="/research/FIST"><FaLightbulb /> FIST</Link>
              <Link to="/research/innovation"><FaLightbulb /> Innovation&Incubation Cell</Link>
              <Link to="/research/ResearchAdvisoryCommittee"><FaLightbulb />ResearchAdvisoryCommittee</Link>

          </div>
        </div>

        {/* International */}
       <div className="dropdown dropdown-international">
  <span className="dropdown-label">International <FaChevronDown /></span>

  <div className="dropdown-content dropdown-content-international">
    {/* Admissions with submenu */}
    <div className="submenu">
      <Link to="/international/admission" className="submenu-label">
        <FaUniversity /> Admission <span className="submenu-icon">»</span>
      </Link>
      <div className="submenu-content">
        <Link to="/international/admission/overviews">Overviews</Link>
        <Link to="/international/admission/eligibility">Eligibility</Link>
        <Link to="/international/admission/fees">Fees</Link>
        <Link to="/international/admission/bank-details">Bank Details</Link>
        <Link to="/international/admission/apply">Apply</Link>
        <Link to="/international/admission/biherscholarship">BIHER Scholarship</Link>
      </div>
    </div>

   {/* Collaboration Submenu */}
    <div className="submenu">
      <Link to="/international/collaboration" className="submenu-label">
        <FaHandshake /> Collaboration <span className="submenu-icon">»</span>
      </Link>
      <div className="submenu-content">
        <Link to="/international/collaboration/mou">MoUs</Link>
        <Link to="/international/collaboration/collaboration-research">Collaboration Research</Link>
        <Link to="/international/collaboration/honorary-professor">Honorary professors</Link>
        <Link to="/international/collaboration/international">International Ph.D Supervisors</Link>
      </div>
    </div>

    {/* Other Activities Submenu */}
    <div className="submenu">
      <Link to="/international/other-activities" className="submenu-label">
        <FaUsers /> Other Activities <span className="submenu-icon">»</span>
      </Link>
      <div className="submenu-content">
        <Link to="/international/other-activities/global">Global Internship</Link>
        <Link to="/international/other-activities/international">International Scholarships</Link>
        <Link to="/international/other-activities/ielts">IELTS</Link>
        <Link to="/international/other-activities/gre">GRE</Link>
      </div>
    </div>
    
    <Link to="/international/visitor"><FaExchangeAlt /> Visitor</Link>
    <Link to="/international/higher-studies"><FaUniversity /> Higher Studies</Link>
    <Link to="/international/events"><FaFlag /> Events</Link>
    <Link to="/international/contact"><FaUserFriends /> Contact</Link>
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
             <a href="https://www.bharathuniv.ac.in/nba/I.10_Rules_Policy_Service%20book_BIST.pdf" target="_blank" rel="noopener noreferrer"><FaBook /> Service Regulation</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;