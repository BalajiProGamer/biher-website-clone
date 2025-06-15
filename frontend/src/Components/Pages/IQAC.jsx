import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Banner from '../Banner';
import { FaHome } from "react-icons/fa";
import bgImage from '../../assets/pattern.jpg';
import '../../styles/global.css';

const IQAC = () => {
  const [selectedCategory, setSelectedCategory] = useState('AQAR');
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (category) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    "Vision & Mission",
    "IQAC Composition",
    "AUDIT",
    "AQAR",
    "SSR Report – 2024",
    "Maintenance",
    "DVV – Clarification",
    "Academic Schedule"
  ];

  const contentMap = {
    "Vision & Mission": `
      <div class="vision-mission-block">
      
        <h4><span class="vm-heading">Our Vision :</span></h4>
        <p class="vm-quote">To create the bench mark in defining the quality of BIHER in professional higher education in Medical and allied Sciences and engineering and technology in quality evaluation in teaching, learning, research & development, an extension in the upkeep & maintenance of infrastructure, and in promotion and sustenance of the institutional and human values."</p>
        <h4><span class="vm-heading">Our Mission :</span></h4>
        <ul class="vm-list">
          <li>To ensure periodic assessment and accreditation...</li>
          <li>To promote the conductive academic environment...</li>
          <li>To make self-evaluation, accountability, autonomy...</li>
          <li>To create a conducive ambience in quality-related research...</li>
          <li>To collaborate with other stakeholders...</li>
        </ul>
        <br>
         <h4><span class="vm-heading">Core Values :</span></h4>
         <p class="vm-quote">BIHER is a multi-campus and multi faculty institution. In order to ensure the quality maintenance and for administrative feasibility each of six institutions has a separate IQAC with a Coordinator from the respective institution, getting direction, guidance and support from IQAC BIHER, headed by a Director . Each IQAC in the Constituent College prepare their annual reports and based on which Annual Quality Assurance Report of the BIHER is prepared and submitted to NAAC."</p>

      </div>
    `,
    "IQAC Composition": `
      <table class="iqac-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Faculty</th>
            <th>Designation/Department</th>
            <th>IQAC Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1.</td><td>Dr.M.Sundararajan</td><td>Vice - Chancellor</td><td>Chairman</td></tr>
          <tr><td>2.</td><td>Dr.R.Arasu</td><td>Professor, Management Studies,<br/>University of Madras</td><td>Management Representative</td></tr>
          <tr><td>3.</td><td>Dr.S.Bhuminathan</td><td>Registrar</td><td>Secretary</td></tr>
          <tr><td>4.</td><td>Dr.M.S.Kannan</td><td>Dean, SBDCH</td><td>Member</td></tr>
          <tr><td>5.</td><td>Dr. P.Sasikumar</td><td>Dean, SBMCH</td><td>Member</td></tr>
          <tr><td>6.</td><td>Dr. G. Jayalakshmi</td><td>Dean, SLIMS</td><td>Member</td></tr>
          <tr><td>7.</td><td>Dr S Praveen Kumar</td><td>IQAC – Coordinator - BIST</td><td>Member</td></tr>
        </tbody>
      </table>
    `,
    "AUDIT": {
      "Energy Audit": [
        { label: "ENERGY AUDIT 2018–2019", url: "https://www.bharathuniv.ac.in/IQAC/ENERGE/ENERGY%20AUDIT%2018-19.pdf" },
        { label: "ENERGY AUDIT 2019–2020", url: "https://www.bharathuniv.ac.in/IQAC/ENERGE/ENERGY%20AUDIT%2019-20.pdf" },
        { label: "ENERGY AUDIT 2020–2021", url: "https://www.bharathuniv.ac.in/IQAC/ENERGE/ENERGY%20AUDIT%2020-21.pdf" },
        { label: "ENERGY AUDIT 2021–2022", url: "https://www.bharathuniv.ac.in/IQAC/ENERGE/ENERGY%20AUDIT%2021-22.pdf" },
        { label: "ENERGY AUDIT 2022–2023", url: "https://www.bharathuniv.ac.in/IQAC/ENERGE/ENERGY%20AUDIT%2022-23.pdf" }
      ],
      "Green Audit": [
        { label: "Green Audit 2018–2019", url: "https://www.bharathuniv.ac.in/IQAC/Green%20Audit/Green%20Audit-2018-2019.pdf" },
        { label: "Green Audit 2019–2020", url: "https://www.bharathuniv.ac.in/IQAC/Green%20Audit/Green%20Audit-2019-2020.pdf" },
        { label: "Green Audit 2020–2021", url: "https://www.bharathuniv.ac.in/IQAC/Green%20Audit/Green%20Audit-2020-2021.pdf" },
        { label: "Green Audit 2021–2022", url: "https://www.bharathuniv.ac.in/IQAC/Green/Green%20Audit%2021-22.pdf" },
        { label: "Green Audit 2022–2023", url: "https://www.bharathuniv.ac.in/IQAC/Green/Green%20Audit%2022-23.pdf" }
      ]
    },
    
     "AQAR": [
      { label: "2016 - 2017", pdfUrl: "https://www.bharathuniv.ac.in/Source-doc/NAAC/IQAC/AQAR/AQAR%202016-17.pdf" },
      { label: "2017 - 2018", pdfUrl: "https://www.bharathuniv.ac.in/Source-doc/NAAC/IQAC/AQAR/AQAR%202017-18.pdf" },
      { label: "2018 - 2019", pdfUrl: "https://www.bharathuniv.ac.in/Source-doc/NAAC/IQAC/AQAR/AQAR%202018-19.pdf" },
      { label: "2019 - 2020", pdfUrl: "https://www.bharathuniv.ac.in/Source-doc/NAAC/IQAC/AQAR/AQAR%202019-20.pdf" },
      { label: "2020 - 2021", pdfUrl: "https://www.bharathuniv.ac.in/Source-doc/NAAC/IQAC/AQAR/AQAR%202020-21.pdf" },
      { label: "2023 - 2024", pdfUrl: "https://www.bharathuniv.ac.in/Source-doc/NAAC/IQAC/AQAR/AQAR%202023-24.pdf" }
    ],
    "SSR Report – 2024": [
  {
    label: "SSR Report (2024)",
    pdfUrl:
      "https://www.bharathuniv.ac.in/Source-doc/NAAC/IQAC/SSR2024/SSR%20NAAC%20BIHER%202024.pdf"
  }
],

    "Maintenance": ["Lab Maintenance", "Infrastructure"],
    
  "DVV – Clarification": [
    { title: "Annexure - I", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/1.3.3%20BOS%20and%20ACM.pdf" },
    { title: "Annexure - II", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/1.4.1%20feedback.pdf" },
    { title: "Annexure - III", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/2.1.2-quota.pdf" },
    { title: "Annexure - IV", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/exp%20certificate.pdf" },
    { title: "Annexure - V", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/Phd%20details.pdf" },
    { title: "Annexure - VI", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/2.5.3-CAMU%20Exam.pdf" },
    { title: "Annexure - VII", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/2.6.2-Final%20yr%20pass.pdf" },
    { title: "Annexure - VIII", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/3.1.2.docx" },
    { title: "Annexure - IX", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/3.2.2.research%20projects.pdf" },
    { title: "Annexure - X", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/3.4.2_Patents.pdf" },
    { title: "Annexure - XI", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/3.4.3.xlsx" },
    { title: "Annexure - XII", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/3.1.2.docx" },
    { title: "Annexure - XIII", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/3.4.6_LMS(2022-23).pdf" },
    { title: "Annexure - XIV", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/4.1.2_5Yrs-Infra.pdf" },
    { title: "Annexure - XV", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/4.4.1_5Yrs-Maintanence.pdf" },
    { title: "Annexure - XVI", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/5.1.4%20Staff%20&%20Students%20Grievances.pdf" },
    { title: "Annexure - XVII", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/6.3.2_Audit%20statement_merged_2022-2018_final.pdff" },
    { title: "Annexure - XVIII", url: "https://www.bharathuniv.ac.in/nirf/DVV%20Clarification/7.1.6-environ.pdf" },
  ],
  // ... other categories


    "Academic Schedule": [
  { label: "Academic Schedule (2023–2024)", pdfUrl: "https://www.bharathuniv.ac.in/AQAR/AQAR-%20academic%20schedule.pdf" }
],

  };

  const pageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    minHeight: '100vh',
    paddingBottom: '2rem'
  };

  return (
    <div className="iqac-page" style={pageStyle}>
      <img src="/assets/iqac.jpg" alt="IQAC" className="iqac-hero" />

      <div className="iqac-header">
        <Link to="/" className="iqac-home-link">
          <FaHome className="iqac-header-icon" />
        </Link>
        <span className="iqac-header-text">BIHER - (IQAC)</span>
      </div>

      <div className="iqac-container">
        <div className="iqac-sidebar">
          <div className="iqac-sidebar-title">📚 Categories</div>
          <ul className="iqac-sidebar-menu">
            {categories.map((item, idx) => (
              <li key={idx} className="iqac-sidebar-list-item">
                <div
                  className={`iqac-sidebar-link ${selectedCategory === item ? 'iqac-active-link' : ''}`}
                  onClick={() => {
                    if (item === "AUDIT") {
                      toggleMenu(item);
                    } else {
                      setSelectedCategory(item);
                    }
                  }}
                >
                  📚 | {item}
                  {item === "AUDIT" && (
                    <span className="iqac-dropdown-arrow">{expandedMenus["AUDIT"] ? "▲" : "▼"}</span>
                  )}
                </div>
                {item === "AUDIT" && expandedMenus["AUDIT"] && (
                  <ul className="iqac-submenu">
                    {Object.keys(contentMap["AUDIT"]).map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        className="iqac-submenu-item"
                        onClick={() => setSelectedCategory(subItem)}
                      >
                        » {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="iqac-content">
          <h3 className="section-title">{selectedCategory}</h3>

          {selectedCategory === "Energy Audit" && contentMap["AUDIT"]["Energy Audit"] ? (
            <div className="energy-audit-grid">
              {contentMap["AUDIT"]["Energy Audit"].map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="audit-item">
                  <span>{item.label}</span>
                  <div className="audit-icon">→</div>
                </a>
              ))}
            </div>
          ) : selectedCategory === "Green Audit" && contentMap["AUDIT"]["Green Audit"] ? (
            <div className="energy-audit-grid">
              {contentMap["AUDIT"]["Green Audit"].map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="audit-item">
                  <span>{item.label}</span>
                  <div className="audit-icon">→</div>
                </a>
              ))}
            </div>
          ) : selectedCategory === "AQAR" ? (
            <ul className="aqar-list">
              {contentMap["AQAR"].map((entry, index) => (
                <li key={index}>
                  <span className="aqar-icon">»</span>
                  <a href={entry.pdfUrl} target="_blank" rel="noopener noreferrer">
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
            
          
             ) : selectedCategory === "SSR Report – 2024" ? (
  <ul className="aqar-list">
    {contentMap["SSR Report – 2024"].map((entry, index) => (
      <li key={index}>
        <span className="aqar-icon">»</span>
        <a href={entry.pdfUrl} target="_blank" rel="noopener noreferrer">
          {entry.label}
        </a>
      </li>
    ))}
  </ul>
  
  
  ):selectedCategory === "DVV – Clarification" ? (
  <div className="dvv-grid">
    {contentMap["DVV – Clarification"].map((item, index) => (
      <a
        key={index}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="dvv-item"
      >
        <span className="aqar-icon">»</span>
        <span>{item.title}</span>
      </a>
    ))}
  </div>




   ): selectedCategory === "Academic Schedule" ? (
   <ul className="aqar-list">
    {contentMap["Academic Schedule"].map((entry, index) => (
      <li key={index}>
        <span className="aqar-icon">»</span>
        <a href={entry.pdfUrl} target="_blank" rel="noopener noreferrer">
          {entry.label}
        </a>
      </li>
    ))}
  </ul>
  

          ) : selectedCategory === "Vision & Mission" || selectedCategory === "IQAC Composition" ? (
            <div
              className="generic-content"
              dangerouslySetInnerHTML={{ __html: contentMap[selectedCategory] }}
            />
          ) : (
            <p>No content available for this section.</p>
          )}
        </div>
      </div>

      <Banner />
    <>
    <Footer />  
    </>
    </div>
  );
};

export default IQAC;
