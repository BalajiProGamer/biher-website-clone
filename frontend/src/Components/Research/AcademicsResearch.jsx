import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaThList } from "react-icons/fa";
import AcademicImg from "../../assets/Academic Research.png";
import BackgroundImg from "../../assets/pattern.jpg";
import Footer from "../Footer";
import Banner from "../Banner";

const AcademicsResearch = () => {
  const sidebarItems = [
    "Vision & Mission",
    "Dean Desk",
    "Faculty",
    "Download",
    "Web Portal",
  ];

  const [activeSection, setActiveSection] = useState("Vision & Mission");

  // 🔁 Open Web Portal in new tab, prevent blank screen
  useEffect(() => {
    if (activeSection === "Web Portal") {
      window.open("https://webportal.bharathuniv.ac.in", "_blank");
      setActiveSection("Vision & Mission");
    }
  }, [activeSection]);

  // === Content for each section ===
  const renderContent = () => {
    switch (activeSection) {
      case "Vision & Mission":
        return (
          <>
            <h3 className="academics-section-heading">Vision & Mission</h3>
            <h4 className="academics-subheading">Our Vision :</h4>
            <p className="academics-paragraph">
              To be the premier research - intensive University in India and to be seen as a key partner in the development and advancement of National and International research and technology initiatives. To be forerunners in the conception of a research environment that is second to none globally for the advancement of socially relevant research that dominates the world stage.
            </p>
            <h4 className="academics-subheading">Our Mission :</h4>
            <p className="academics-paragraph">
              To support and augment an organized University - wide environment of research excellence where faculty are inspired and challenged to drive the boundaries of knowledge foundation. To motivate research leaders in India and around the world to partner with us in the expansion of knowledge discovery and the translation of discoveries into tangible benefits for society internationally. To be the voice of the research community at BIHER and in all ways, ensure the optimal and effective use of intellectual, financial and physical resources to foster an environment of research excellence throughout the University.
            </p>
          </>
        );

      case "Dean Desk":
        return (
          <>
            <h3 className="academics-section-heading">Dean Desk :</h3>
            <hr className="academics-hr" />
            <div className="academics-dean-profile">
              <img
                src={require("../../assets/dean-desk.png")}
                alt="Dean"
                className="academics-dean-image"
              />
              <div className="academics-dean-details">
                <h4 className="academics-dean-name">
                  <a href="#" className="academics-dean-link">Prof. A.P. Naveenchandran</a>, <span className="academics-dean-qual">M.E., Ph.D.,</span>
                </h4>
                <p className="academics-dean-role">🎓 <em>Research & Development, BIHER</em></p>
                <p className="academics-dean-email">✉ <em>deanrd@bharathuniv.ac.in</em></p>
              </div>
            </div>
          </>
        );

      case "Faculty":
        return (
          <>
            <h3 className="academics-section-heading">R &amp; D Office :</h3>
            <hr className="academics-hr" />
            <div className="faculty-card">
              <img
                src={require("../../assets/rdfaculty.png")}
                alt="Dr. K. Sakthivel"
                className="faculty-image"
              />
              <div className="faculty-details">
                <h4 className="faculty-name">
                  <strong>Dr. K. Sakthivel</strong>, <span className="faculty-qual">B.E., M.E., Ph.D.,</span>
                </h4>
                <p className="faculty-email">📧 <em>phdsection@bharathuniv.ac.in</em></p>
                <p className="faculty-phone">
                  ☎️ +91 44 6111 6275<br />
                  📱 +91 8122969691
                </p>
              </div>
            </div>
          </>
        );

      case "Download":
        return (
          <>
            <h3 className="academics-section-heading">Downloads</h3>
            <p className="academics-paragraph">All academic forms, regulations, and templates can be downloaded here.</p>

            {/* Forms & Minutes Section */}
            <div className="download-block">
              <div className="download-header">
                <span role="img" aria-label="forms">👥</span> FORMS & MINUTES
              </div>
              <ul className="download-list">
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/Ph.D%20Application%20Form.pdf" target="_blank">Ph.D. Application - Form</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM1Acceptance-supervisor.pdf" target="_blank">Acceptance of Supervisor</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM2DC-panel-list-Engineering.pdf" target="_blank">Panel of Doctoral Committee Members Engineering</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM3DC-panel-list-Medical.pdf" target="_blank">Panel of Doctoral Committee Members Medical</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM4First%20DC-Meeting%20-%20Form.pdf" target="_blank">First DC-Meeting - Form</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM5First%20DC-Meeting%20-%20Minutes.pdf" target="_blank">First DC-Meeting - Minutes</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/Course%20Work%20Application%20Form.pdf" target="_blank">Coursework – Application Form</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM7Comph-Meeting%20-%20Form.pdf" target="_blank">Confirmation DC Meeting - Form</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM8Provisional%20Registration%20-%20Minutes.pdf" target="_blank">Provisional Registration – Minutes</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM9Pre-Synopsis%20&%20Final%20DC%20Meeting%20-%20Form.pdf" target="_blank">Pre-Synopsis & Final DC Meeting – Form</a></li>
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/FORMS%20-%20MINUTES/FM10Final%20DC.pdf" target="_blank">Final DC and Pre-Synopsis – Minutes</a></li>
              </ul>
            </div>

            {/* Course Work Exam Section */}
            <div className="download-block">
              <div className="download-header">
                <span role="img" aria-label="exam">📘</span> COURSE WORK EXAM
              </div>
              <ul className="download-list">
                <li><a href="https://www.bharathuniv.ac.in/nirf/AC-Res/CWE/Research-and-Publication-Ethics.pdf" target="_blank">Research and Publication Ethics (RPE) Syllabus (as per UGC)</a></li>
              </ul>
            </div>
          </>
        );

      case "Web Portal":
        return null;

      default:
        return null;
    }
  };

  return (
    <div>
      <img src={AcademicImg} alt="Academic Research" className="academics-banner" />
      <Banner />

      <div className="academics-breadcrumb">
        <Link to="/" className="academics-home-link">
          <FaHome className="academics-home-icon" />
        </Link>
        <span className="academics-breadcrumb-text">&nbsp; » Research » Academic Research</span>
      </div>

      <div className="academics-background" style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <div className="academics-wrapper">
          {/* Sidebar */}
          <div className="academics-sidebar">
            <div className="academics-sidebar-header">
              <FaThList /> Categories
            </div>
            {sidebarItems.map((item, idx) => (
              <div
                key={idx}
                className={`academics-sidebar-item ${activeSection === item ? "active" : ""}`}
                onClick={() => setActiveSection(item)}
                style={{ cursor: "pointer" }}
              >
                <FaBookOpen className="academics-icon" /> {item}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="academics-content">
            {renderContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AcademicsResearch;
