import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ConsultancyImg from "../../assets/R-PUBLICATION (1).jpg";
import ResearchDevelopment from "./ResearchDevelopment";
import Footer from "../Footer";
import Banner from "../Banner";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const consultancyList = {
  ConsultancyProjects: {
    "2016-2017": [
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
    "2017-2018": [
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
    "2018-2019": [
      {
        title: "Advanced Research on Nano Composites for Aerospace Applications",
        researcher: "Dr. R. Elango",
        position: "Professor, Dept. of Nanotechnology",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#264653",
      },
    ],
    "2019-2020": [
      {
        title: "Development of AI-based Monitoring for Rural Health Centers",
        researcher: "Dr. S. Priya",
        position: "Assistant Professor, Dept. of Computer Science",
        institution:
          "Bharath Institute of Higher Education and Research, Chennai–600 073",
        color: "#6a040f",
      },
    ],
    "2020-2021": [
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
 
};

const Consultancy = () => {
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
    for (const group of Object.values(consultancyList)) {
      if (selectedAgency in group) {
        return group[selectedAgency];
      }
    }
    return [];
  };

  return (
    <div>
      <img src={ConsultancyImg} alt="Consultancy Projects" className="consultancy-img" />
      <Banner />
       <ResearchDevelopment />

      <div className="consultancy-breadcrumb-header">
        <div className="consultancy-breadcrumb-container">
          <Link to="/" className="consultancy-breadcrumb-icon-link">
            <FaHome className="consultancy-breadcrumb-icon" title="Go to Home" />
          </Link>
          <span className="consultancy-breadcrumb-separator">»</span>
          <span className="consultancy-breadcrumb-text">Research</span>
          <span className="consultancy-breadcrumb-separator">»</span>
          <span className="consultancy-breadcrumb-text-bold">Consultancy</span>
        </div>
      </div>

      <div className="consultancy-container">
        <div className="consultancy-sidebar">
          <div className="consultancy-sidebar-header">
            <FaBars style={{ marginRight: "10px" }} />
            Categories
          </div>

          {Object.entries(consultancyList).map(([category, agencies]) => (
            <div key={category}>
              <div
                className="consultancy-category"
                onClick={() => toggleCategory(category)}
              >
                » {category}
              </div>
              {expandedCategory === category &&
                Object.keys(agencies).map((agency, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleAgencySelect(agency)}
                    className={`consultancy-agency ${
                      selectedAgency === agency ? "active" : ""
                    }`}
                  >
                     » {agency}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="consultancy-content">
          <h2 className="consultancy-title">
            {selectedAgency || "Select a Consultancy Agency"}
          </h2>

          {getProjects().length > 0 ? (
            getProjects().map((project, index) => (
              <div
                key={index}
                className="consultancy-project"
                style={{ background: project.color }}
              >
                <h4>{project.title}</h4>
                {project.researcher && (
                  <>
                    <p className="consultancy-researcher">
                      <strong>{project.researcher}</strong>
                    </p>
                    <p>{project.position}</p>
                    <p>{project.institution}</p>
                    {project.email1 && <p>{project.email1}</p>}
                    {project.email2 && <p>{project.email2}</p>}
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="consultancy-empty">
              {selectedAgency
                ? "No project data available for this agency."
                : "Please select a consultancy agency to view details."}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultancy;
