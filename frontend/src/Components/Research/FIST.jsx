 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import FistImg from "../../assets/FIST.png";
import Footer from "../Footer";
import Banner from "../Banner";

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
    <div>
      {/* Banner */}
      <img src={FistImg} alt="FIST" width="100%" height="auto" />
      <Banner />

      {/* Breadcrumb */}
      <div
        style={{
          background: "linear-gradient(to right, #a62820, #ec1c24)",
          color: "white",
          padding: "12px 20px",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "bold",
        }}
      >
        <FaHome
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", fontSize: "18px" }}
          title="Go to Home"
        />
        <span>»</span>
        <span>Research</span>
        <span>»</span>
        <span style={{ fontStyle: "italic" }}>Funded Research</span>
      </div>

      {/* Layout */}
      <div style={{ display: "flex", padding: "20px" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "260px",
            backgroundColor: "#fbc02d",
            borderRadius: "12px 12px 0 0",
            marginRight: "24px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "inline-block",
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              borderBottom: "1px solid #ddd",
            }}
          >
            <FaBars style={{ marginRight: "10px" }} />
            Categories
          </div>

          {Object.entries(fundedResearchList).map(([category, agencies]) => (
            <div key={category}>
              <div
                style={{
                  padding: "10px 16px",
                  backgroundColor: "#003049",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => toggleCategory(category)}
              >
                » {category}
              </div>
              {expandedCategory === category &&
                Object.keys(agencies).map((agency, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleAgencySelect(agency)}
                    style={{
                      padding: "10px 24px",
                      backgroundColor:
                        selectedAgency === agency ? "#014f86" : "#ffffff",
                      color: selectedAgency === agency ? "#fff" : "#000",
                      borderBottom: "1px solid #e0e0e0",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    ▪ {agency}
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <h2 style={{ marginBottom: "16px", color: "#c62828" }}>
            {selectedAgency || "Select a Funding Agency"}
          </h2>

          {getProjects().length > 0 ? (
            getProjects().map((project, index) => (
              <div
                key={index}
                style={{
                  background: project.color,
                  color: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
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
            <p style={{ color: "#555" }}>
              {selectedAgency
                ? "No project data available for this agency."
                : "Please select a funding agency to view details."}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FIST;
