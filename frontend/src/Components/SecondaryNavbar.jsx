import React from "react";
import { Link } from "react-router-dom";
import "./SecondaryNavbar.css";
import logo from "../assets/logo.png"; 


import { 
  FaHome, FaInfoCircle, FaUserGraduate, FaBook, FaFlask, 
  FaGlobe, FaUniversity, FaUsers, FaUserTie, FaBuilding, 
  FaGraduationCap, FaLightbulb, FaBriefcase, FaMicroscope, 
  FaHandshake, FaExchangeAlt, FaUserFriends, FaFlag, FaClipboardList,
  FaPlane, FaSeedling, FaPencilRuler, FaHospital, FaPalette, 
  FaAtom, FaRobot, FaCode, FaHardHat, FaTooth, FaBolt, 
  FaGavel, FaStethoscope, FaCogs, FaChartLine, FaCapsules, 

} from "react-icons/fa";


const SecondaryNavbar = () => {
  return (
    <nav className="secondary-navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="secondary-nav-links">
         <Link to="/">
          <FaHome /> Home
        </Link>

        {/* About Dropdown */}
        <div className="dropdown">
          <Link to="/about" className="dropdown-label">
            <FaInfoCircle /> About
          </Link>
          <div className="dropdown-content">
            <Link to="/about/overview"><FaUsers /> Overview</Link>
            <Link to="/about/leadership"><FaUserTie /> Leadership Team</Link>
            <Link to="/about/governance"><FaBuilding /> Governance</Link>
          </div>
        </div>

        <Link to="/admission">
          <FaUserGraduate /> Admission
        </Link>

        
        {/* Academics Dropdown */}
        <div className="dropdown academics-dropdown">
          <Link to="/academics" className="dropdown-label">
            <FaBook /> Academics
          </Link>
          <div className="dropdown-content two-column">
            <div>
              <Link to="/academics/aeronautical-engineering"><FaPlane /> Aeronautical Engineering</Link>  
              <Link to="/academics/agriculture"><FaSeedling /> Agriculture</Link>
              <Link to="/academics/architecture"><FaPencilRuler /> Architecture</Link>
              <Link to="/academics/allied-health"><FaHospital /> AlliedHealthSciences</Link>
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

        {/* Research Dropdown (Single Column) */}
        <div className="dropdown">
          <Link to="/research" className="dropdown-label">
            <FaFlask /> Research
          </Link>
          <div className="dropdown-content">
            <Link to="/research/academics-research"><FaMicroscope /> Academics Research</Link>
            <Link to="/research/publication"><FaClipboardList /> Publication</Link>
            <Link to="/research/FIST"><FaLightbulb /> FIST</Link>
            <Link to="/research/innovation"><FaLightbulb /> Innovation</Link>
            <Link to="/research/funded-research"><FaBriefcase /> Funded Research</Link>
          </div>
        </div>

        {/* International Dropdown (Single Column) */}
        <div className="dropdown">
          <Link to="/international" className="dropdown-label">
            <FaGlobe /> International
          </Link>
          <div className="dropdown-content">
            <Link to="/international/admissions"><FaUserGraduate /> Admissions</Link>
            <Link to="/international/exchange-program"><FaExchangeAlt /> Exchange Program</Link>
            <Link to="/international/higher-studies"><FaUserFriends /> Higher Studies</Link>
            <Link to="/international/other-activities"><FaUsers /> Other Activities</Link>
            <Link to="/international/events"><FaFlag /> Events</Link>
            <Link to="/international/collaboration"><FaHandshake /> Collaboration</Link>
          </div>
        </div>

        {/* Campus Life Dropdown (Single Column) */}
        <div className="dropdown">
          <Link to="/campuslife" className="dropdown-label">
            <FaUniversity /> Campus Life
          </Link>
          <div className="dropdown-content">
            <Link to="/campuslife/NCC"><FaUsers /> NCC</Link>
            <Link to="/campuslife/NSS"><FaUsers /> NSS</Link>
            <Link to="/campuslife/RRC"><FaUsers /> RRC</Link>
            <Link to="/campuslife/UBA"><FaUsers /> UBA</Link>
            <Link to="/campuslife/library"><FaBook /> Library</Link>
            <Link to="/campuslife/scholarship"><FaClipboardList /> Scholarship</Link>
            
            <Link to="/campuslife/Leave"><FaBook /> Leave</Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default SecondaryNavbar;                 