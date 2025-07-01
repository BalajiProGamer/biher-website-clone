import React, { useState } from "react";
import agricultureImg from "../../assets/agriculture.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const AgriculturalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="agri-content-welcome">Welcome to Agricultural Engineering</h5>
        <h3 className="agri-content-heading">About <span className="agri-highlight">The School :</span></h3>
        <hr />
        <p className="agri-content-paragraph">The Department of Agricultural Engineering is dedicated to integrating technology with sustainable farming practices to boost agricultural productivity and rural development.</p>
        <p className="agri-content-paragraph">Students are encouraged to engage in hands-on research, innovative problem-solving, and real-world agricultural project implementation to meet global food security challenges.</p>
        <p className="agri-content-paragraph">Our department fosters an academic atmosphere that inspires both students and faculty to achieve excellence in the field.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="agri-content-heading">Vision & <span className="agri-highlight">Mission</span></h3>
        <hr />
        <h3 className="agri-content-heading">Our <span className="agri-highlight">Vision :</span></h3>
        <p className="agri-content-paragraph">To be a premier institution in Agricultural Engineering, contributing to sustainable and technologically advanced farming solutions.</p>
        <h3 className="agri-content-heading">Our <span className="agri-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To educate and develop engineers with cutting-edge knowledge in agricultural systems, soil and water conservation, and renewable energy in agriculture.</i></li>
          <br />
          <li>To promote applied research and innovation tailored to the needs of farmers and agro-industries.</li>
          <br />
          <li>To cultivate ethical professionals who will drive rural prosperity and ecological balance through engineering solutions.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="agri-content-heading">Dean's <span className="agri-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="agri-dean-profile">
          <img src={deanImg} alt="Dean" className="agri-dean-image" />
          <div className="agri-dean-details">
            <h4 className="agri-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="agri-dean-qual">M.Tech., PhD (IIT–Kanpur)</span>
            </h4>
            <p className="agri-dean-title">👨‍🏫 Professor and Dean,<br />🏛 Department of Agricultural Engineering, BIHER</p>
          </div>
        </div>

        <div className="agri-dean-message">
          <p>Agricultural Engineering plays a pivotal role in transforming traditional agriculture into modern, mechanized, and sustainable systems. The field offers immense opportunities to tackle real-world problems such as irrigation efficiency, climate change, and post-harvest management.</p>
          <br />
          <p>Our faculty and students are actively working on smart farming, drone applications, and renewable energy systems. With a strong industry-academia interface, our department ensures that students are industry-ready and socially responsible engineers.</p>
          <br />
          <p>We are committed to producing graduates who can innovate, lead, and contribute meaningfully to global agricultural sustainability.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="agri-content-heading">Board of <span className="agri-highlight">Studies</span></h3>
        <hr />
        <p className="agri-content-paragraph">The board comprises domain experts, senior faculty, and research professionals who collaboratively guide curriculum design, academic standards, and future-focused initiatives.</p>
        <p className="agri-content-paragraph">» Members include representatives from ICAR, NABARD, academia, and the agro-industrial sector.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="agri-content-heading">Members of BOS <span className="agri-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="agri-bos-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Core Competence</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colSpan="4"><strong>Chairperson</strong></td></tr>
            <tr>
              <td>01</td>
              <td>Dr. M. Sundararaj</td>
              <td>Dean Academics, BIHER</td>
              <td>Farm Machinery & Power</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Soil & Water Conservation</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Post Harvest Technology</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Irrigation Engineering</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={agricultureImg} alt="Agriculture" className="agri-banner" />

      <div className="agri-breadcrumb-header">
        <div className="agri-breadcrumb-container">
          <Link to="/" className="agri-breadcrumb-link"><FaHome className="agri-breadcrumb-icon" /></Link>
          <span className="agri-breadcrumb-separator">»</span>
          <span className="agri-breadcrumb-text">Academics</span>
          <span className="agri-breadcrumb-separator">»</span>
          <span className="agri-breadcrumb-current">School of Agricultural Engineering</span>
        </div>
      </div>

      <div className="agri-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="agri-content-container">
          <div className="agri-sidebar">
            <div className="agri-sidebar-header">
              <FaBook className="agri-sidebar-icon" />
              Categories
            </div>
            <ul className="agri-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="agri-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="agri-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'agri-active-tab' : ''}
                          >
                            » Members
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                }

                if (item === "Members") return null;

                return (
                  <li
                    key={item}
                    className={selectedTab === item ? 'agri-active-tab' : ''}
                    onClick={() => {
                      setSelectedTab(item);
                      setIsBoardOpen(false);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="agri-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgriculturalEngineering;
