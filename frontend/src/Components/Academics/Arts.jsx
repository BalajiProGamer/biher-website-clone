import React, { useState } from "react";
import artsImg from "../../assets/arts.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import '../../styles/global.css';
import deanImg from "../../assets/dean desk.png";

const ArtsEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
      <>
        <h5 className="arts-content-welcome">Welcome to School of Arts</h5>
        <h3 className="arts-content-heading">About <span className="arts-highlight">The School :</span></h3>
        <hr />
        <p className="arts-content-paragraph">The School of Arts nurtures creativity, cultural exploration, and critical thinking across disciplines like literature, visual arts, and performance.</p>
        <p className="arts-content-paragraph">Students are empowered to express, critique, and innovate through theory and practical application across a wide range of artistic media.</p>
        <p className="arts-content-paragraph">We foster interdisciplinary learning and equip students for careers in academia, media, public service, and the creative industries.</p>
      </>
    ),

    "Vision & Mission": (
      <>
        <h3 className="arts-content-heading">Vision & <span className="arts-highlight">Mission</span></h3>
        <hr />
        <h3 className="arts-content-heading">Our <span className="arts-highlight">Vision :</span></h3>
        <p className="arts-content-paragraph">To be a leading institution for artistic expression, cultural research, and social transformation through liberal arts education.</p>
        <h3 className="arts-content-heading">Our <span className="arts-highlight">Mission :</span></h3>
        <hr />
        <br />
        <ul>
          <li><i>To encourage creative and critical inquiry across all disciplines of arts and humanities.</i></li>
          <br />
          <li>To develop socially responsible, ethical, and empathetic global citizens.</li>
          <br />
          <li>To promote cultural literacy and foster an inclusive academic environment.</li>
        </ul>
      </>
    ),

    "Deans Desk": (
      <>
        <h3 className="arts-content-heading">Dean's <span className="arts-highlight">Desk</span></h3>
        <hr />
        <br />
        <div className="arts-dean-profile">
          <img src={deanImg} alt="Dean" className="arts-dean-image" />
          <div className="arts-dean-details">
            <h4 className="arts-dean-name">
              <b>Dr. S. Elangovan</b>, <span className="arts-dean-qual">M.A., PhD</span>
            </h4>
            <p className="arts-dean-title">👨‍🏫 Professor and Dean,<br />🏛 School of Arts, BIHER</p>
          </div>
        </div>

        <div className="arts-dean-message">
          <p>The liberal arts serve as the foundation of a reflective and humane society. Our school nurtures creativity, analysis, and communication — essential tools for thriving in today’s complex world.</p>
          <br />
          <p>Through engagement in literature, philosophy, history, and the arts, our students learn to think deeply and act ethically.</p>
          <br />
          <p>We envision our graduates as agents of change, bridging cultures and ideas in meaningful ways.</p>
        </div>
      </>
    ),

    "Board of Studies": (
      <>
        <h3 className="arts-content-heading">Board of <span className="arts-highlight">Studies</span></h3>
        <hr />
        <p className="arts-content-paragraph">The board comprises experienced faculty, researchers, and cultural scholars who help shape the academic structure of the Arts programs.</p>
        <p className="arts-content-paragraph">» Members include experts from universities, government institutions, and creative industries.</p>
      </>
    ),

    "Members": (
      <>
        <h3 className="arts-content-heading">Members of BOS <span className="arts-highlight">( June 2024 – May 2025 )</span></h3>
        <hr />
        <table className="arts-bos-table">
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
              <td>Modern Literary Theory</td>
            </tr>
            <tr><td colSpan="4"><strong>Professors of the School/ Department</strong></td></tr>
            <tr>
              <td>02</td>
              <td>Dr. S. Elangovan</td>
              <td>Professor, BIHER</td>
              <td>Comparative Literature</td>
            </tr>
            <tr><td colSpan="4"><strong>Associate Professors Per Department</strong></td></tr>
            <tr>
              <td>03</td>
              <td>Dr. R. Karthikeyan</td>
              <td>Associate Professor, BIHER</td>
              <td>Media & Cultural Studies</td>
            </tr>
            <tr><td colSpan="4"><strong>Assistant Professors Per Department</strong></td></tr>
            <tr>
              <td>04</td>
              <td>Ms. P. Devi</td>
              <td>Assistant Professor, BIHER</td>
              <td>Indian Aesthetics</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  };

  return (
    <div>
      <img src={artsImg} alt="Arts" className="arts-banner" />

      <div className="arts-breadcrumb-header">
        <div className="arts-breadcrumb-container">
          <Link to="/" className="arts-breadcrumb-link"><FaHome className="arts-breadcrumb-icon" /></Link>
          <span className="arts-breadcrumb-separator">»</span>
          <span className="arts-breadcrumb-text">Academics</span>
          <span className="arts-breadcrumb-separator">»</span>
          <span className="arts-breadcrumb-current">School of Arts</span>
        </div>
      </div>

      <div className="arts-background-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="arts-content-container">
          <div className="arts-sidebar">
            <div className="arts-sidebar-header">
              <FaBook className="arts-sidebar-icon" />
              Categories
            </div>
            <ul className="arts-sidebar-list">
              {Object.keys(content).map((item) => {
                if (item === "Board of Studies") {
                  return (
                    <li key={item}>
                      <div onClick={() => setIsBoardOpen(!isBoardOpen)} className="arts-dropdown-toggle">
                        {item} {isBoardOpen ? "▾" : "▸"}
                      </div>
                      {isBoardOpen && (
                        <ul className="arts-dropdown-list">
                          <li
                            onClick={() => setSelectedTab("Members")}
                            className={selectedTab === "Members" ? 'arts-active-tab' : ''}
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
                    className={selectedTab === item ? 'arts-active-tab' : ''}
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

          <div className="arts-content-box">
            {content[selectedTab]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtsEngineering;
