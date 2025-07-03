import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import FistImg from "../../assets/FIST.png";
import Footer from "../Footer";
import Banner from "../Banner";
import "../../styles/global.css";

const fundedResearchList = {
  Government: {
    "Tamil Nadu State Council For Science and Technology - (TNSCST)": [
      {
        title:
          'TNSCST – S & T Project on " Green Synthesis Methods Megneto – Optical and Catalytic properties of Spinel M-dropped AFe2O4 Nanostructures "',
        researcher: "Dr. A. Manikandan",
        position: "Associate Professor , Dept. of Chemistry",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#b22222",
      },
      {
        title:
          'TNSCST – S & T Project on " Development of TETRA – ARMS PCR based cost effective rapid diagnostic method for Screening Obesity & Diabetic linked Gene Polymorphism in polycystic Ovarian Syndrome ( PCOS ) among South Indian Tamil Population "',
        researcher: "",
        position: "",
        institution: "",
        color: "#003049",
      },
    ],
    "Ministry Of Defence Government of India": [
      {
        title:
          "Studies on Pitch, Yaw and Roll Control through Secondary Injection in a Transitional Convergent – Divergent Nozzle",
        researcher: "Dr. M. Sundaraj ( PI )",
        position: "Dept of Aeronautical Engineering",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        email1: "sundarsonic@yahoo.com",
        email2: "hodaero@bharathuniv.ac.in",
        color: "#003049",
      },
    ],
    "Science and Engineering Research Board - (SERB)": [
      {
        title:
          "Advanced Research on Nano Composites for Aerospace Applications",
        researcher: "Dr. R. Elango",
        position: "Professor, Dept. of Nanotechnology",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#264653",
      },
    ],
    "Department Of Science and Technology - (DST)": [
      {
        title: "Development of AI-based Monitoring for Rural Health Centers",
        researcher: "Dr. S. Priya",
        position: "Assistant Professor, Dept. of Computer Science",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#6a040f",
      },
    ],
    "Entrepreneurship Development and Innovation Institute - (EDII)": [
      {
        title: "Start-Up Incubation Model for Tier-2 Cities",
        researcher: "Dr. V. Kumar",
        position: "Associate Professor, Dept. of Management Studies",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#2a9d8f",
      },
    ],
  },
  "Non-Government": {
    "Infosys Foundation": [
      {
        title: "Digital Literacy and Rural Outreach through Mobile Labs",
        researcher: "Dr. J. Meenakshi",
        position: "Professor, Dept. of Information Technology",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#1d3557",
      },
    ],
    "Tata Trusts": [
      {
        title: "Sustainable Water Harvesting Techniques in Tamil Nadu",
        researcher: "Dr. K. Ganesh",
        position: "Professor, Civil Engineering",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#e76f51",
      },
    ],
    "Bill & Melinda Gates Foundation": [
      {
        title: "AI for Malaria Prediction and Eradication",
        researcher: "Dr. N. Suresh",
        position: "Professor, Bioinformatics",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#457b9d",
      },
    ],
  },
};

const FIST = () => {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedAgency, setSelectedAgency] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const handleAgencySelect = (agency) => {
    setSelectedAgency(agency);
  };

  const getProjects = () => {
    if (!selectedAgency) return [];
    for (const group of Object.values(fundedResearchList)) {
      if (selectedAgency in group) {
        return group[selectedAgency];
      }
    }
    return [];
  };

  return (
    <div className="fist-container">
      <img src={FistImg} alt="FIST" className="fist-banner" />
      <Banner />

      <div className="fist-breadcrumb">
        <FaHome
          onClick={() => navigate("/")}
          className="fist-breadcrumb-icon"
          title="Go to Home"
        />
        <span>»</span>
        <span>Research</span>
        <span>»</span>
        <span className="fist-breadcrumb-highlight">Funded Research</span>
      </div>

      <div className="fist-wrapper">
        <div className="fist-sidebar">
          <div className="fist-sidebar-header">
            <FaBars style={{ marginRight: "10px" }} />
            Categories
          </div>

          {Object.entries(fundedResearchList).map(([category, agencies]) => (
            <div key={category}>
              <div
                className="fist-sidebar-category"
                onClick={() => toggleCategory(category)}
              >
                » {category}
              </div>
              {expandedCategory === category &&
                Object.keys(agencies).map((agency, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleAgencySelect(agency)}
                    className={`fist-sidebar-agency${
                      selectedAgency === agency ? " selected" : ""
                    }`}
                  >
                    ▪ {agency}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="fist-content">
          <h2 className="fist-title">
            {selectedAgency || "Select a Funding Agency"}
          </h2>

          {getProjects().length > 0 ? (
            getProjects().map((project, index) => (
              <div
                key={index}
                className="fist-project-card"
                style={{ background: project.color }}
              >
                <h4>{project.title}</h4>
                {project.researcher && (
                  <>
                    <p style={{ marginTop: "16px" }}>
                      <strong>👤 {project.researcher}</strong>
                    </p>
                    <p>📌 {project.position}</p>
                    <p>🏛️ {project.institution}</p>
                    {project.email1 && <p>📧 {project.email1}</p>}
                    {project.email2 && <p>📧 {project.email2}</p>}
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="fist-placeholder">
              {selectedAgency
                ? "No project data available for this agency."
                : "Please select a funding agency to view details."}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FIST;