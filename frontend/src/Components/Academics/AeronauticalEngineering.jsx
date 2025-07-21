import React, { useState } from "react";
import aeronauticalImg from "../../assets/arospace11.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';

import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const AeronauticalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="aero-content-welcome" style={{ color: "#0077cc", letterSpacing: "1px" }}>
          Ｗｅｌｃｏｍｅ  ｔｏ  Ｓｃｈｏｏｌ  ｏｆ  Ａｅｒｏｎａｕｔｉｃａｌ  Ｅｎｇｉｎｅｅｒｉｎｇ
        </h5>
        <br />
        <h3 className="aero-content-heading">
          About <span style={{ color: "#d40000", fontWeight: "600" }}>the School</span> :
        </h3>
        <hr />
        <p style={{ textAlign: "justify", lineHeight: "1.9", fontSize: "16px" }}>
        Twenty first century is poised to become a century of space explorations and manned missions to other planets. It will be a time of space stations and robotic probes. The world will continue to need aerospace scientists, engineers, technologists and technicians to accomplish these highly exciting and challenging missions. Keeping this in mind the Department of Aeronautical Engineering was started in Bharath University in the year 2012.
        </p>
        <br></br>
        <p>
          The Aeronautical Engineering students are encouraged to actively involve in research projects and come out with innovative ideas. With constant support extended by the Management, the basic infra-structure needed for regular curricular programs as well as for fundamental and applied research is being established in the Department.
        </p>
        <br></br>
        <p>
          The Department provides a conducive academic environment for both students and faculty to bring out the best outcome from them.
        </p>
        
      </>
    
    ),

    "Vision & Mission": (
      <>
        <h5 className="aero-content-welcome" style={{ color: "#005599", letterSpacing: "1px" }}>
          Ｖｉｓｉｏｎ ＆ Ｍｉｓｓｉｏｎ
        </h5>
        <br />
        <h3 className="aero-content-heading">
          Our <span style={{ color: "#d40000", fontWeight: "600" }}>Vision :</span>
        </h3>
        <hr />
        <p className="aero-content-paragraph" style={{ textAlign: "justify" }}>
          To be a center of excellence in Aeronautical Engineering education and research, fostering innovation and preparing industry-ready professionals.
        </p>

        <h3 className="aero-content-heading" style={{ marginTop: "30px" }}>
          Our <span style={{ color: "#d40000", fontWeight: "600" }}>Mission :</span>
        </h3>
        <hr />
        <ul style={{ paddingLeft: "20px", lineHeight: "2", fontSize: "15.5px" }}>
          <li>To provide quality education that meets industry needs.</li>
          <li>To conduct innovative research and development activities.</li>
          <li>To collaborate with aerospace industries for real-time projects.</li>
          <li>To develop ethical and responsible engineers with global competence.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="aero-content-heading">Dean's <span className="aero-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="aero-dean-profile">
          <img src={deanImg} alt="Dean" className="aero-dean-image" />
          <div className="aero-dean-details">
            <h4 className="aero-dean-name">
              <b>Dr. A. K. Sharma</b>, <span className="aero-dean-qual">PhD in Aerospace Engineering</span>
            </h4>
            <p className="aero-dean-title">👨‍🏫 Professor and Dean,<br />🏛 Department of Aeronautical Engineering, BIHER</p>
          </div>
        </div>

        <div className="aero-dean-message">
          <p>Welcome to the School of Aeronautical Engineering, where we aim to develop world-class aerospace engineers who can lead the future of aviation and space exploration.</p>
          <br />
          <p>Our department is committed to innovation, interdisciplinary research, and hands-on training with cutting-edge technologies. Join us to elevate your career to new heights.</p>
        </div>
      </>
    ),
  };

  return (
    <div>
      <img src={aeronauticalImg} alt="Aeronautical" className="aero-banner" />

      <div className="aero-breadcrumb-header">
        <div className="aero-breadcrumb-container">
          <Link to="/" className="aero-breadcrumb-link"><FaHome className="aero-breadcrumb-icon" /></Link>
          <span className="aero-breadcrumb-separator">»</span>
          <span className="aero-breadcrumb-text">Academics</span>
          <span className="aero-breadcrumb-separator">»</span>
          <span className="aero-breadcrumb-current">School of Aeronautical Engineering</span>
        </div>
      </div>

      <Banner />

      <div className="aero-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="aero-content-container">
          <div className="aero-sidebar">
            <div className="aero-sidebar-header">
              <FaBook className="aero-sidebar-icon" />
              Categories
            </div>
            <ul className="aero-sidebar-list">
              {Object.keys(content).map((item) => (
                <li
                  key={item}
                  className={selectedTab === item ? 'aero-active-tab' : ''}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="aero-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AeronauticalEngineering;
