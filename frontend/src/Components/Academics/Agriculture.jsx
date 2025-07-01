import React, { useState } from "react";
import agricultureImg from "../../assets/agriculture.jpg"; // Update this image path accordingly
import backgroundImg from "../../assets/pattern.jpg";
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';
import deanImg from "../../assets/Agri-Dean.png";

const AgriculturalEngineering = () => {
  const [selectedTab, setSelectedTab] = useState("About");
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const content = {
    "About": (
  <>
    <h5 className="agri-content-welcome" style={{ color: "#0077cc", letterSpacing: "1px" }}>
      Ｗｅｌｃｏｍｅ  ｔｏ  Ｓｃｈｏｏｌ  ｏｆ  Ａｇｒｉｃｕｌｔｕｒｅ
    </h5>
    <br></br>
    <h3 className="agri-content-heading">
      About <span style={{ color: "#d40000", fontWeight: "600" }}>the School</span> :
    </h3>
    <hr />

    <h4 style={{ fontStyle: "italic", fontWeight: "600", marginTop: "20px" }}>
      <u>Need and justification for establishing the new college :</u>
    </h4>

    <details style={{ marginTop: "10px", fontSize: "16px", lineHeight: "1.9", cursor: "pointer" }}>
      <summary style={{ color: "#b30000", fontWeight: "600" }}>
        ► Chengalpattu District–a glance :
      </summary>
      <p style={{ marginTop: "10px" }}>
        Chengalpattu district in Tamil Nadu was separated from Kanchipuram district on 29/11/2019.
        Originally it was known as Chingleput and subsequently changed as Chengalpattu. The city is believed to
        have been named after a lilly called “Chenkazhuneer poo” which is found abundantly in this region on
        the Palar river. Chengalpattu town is the headquarters of the District which is located 56 kms away
        from the state capital Chennai on the National Highway 45. It has two largest cities like Pallavaram
        and Tambaram. This is also called as the Gateway of Chennai for the southern districts of Tamil Nadu.
      </p>
      <p>
        The total area of the district is 2945 Sq. km. with a population of 25,56,423. Tamil is the official
        language of this district as in case of any other district of the state. It falls under the Lok Sabha
        constituency Kanchipuram and there is one Legislative Assembly constituency namely Chengalpattu.
      </p>
      <p>
        There are 3 revenue divisions, 16 panchayats, 8 municipalities, 8 panchayat unions, 12 town panchayats
        and 359 rural village panchayats in the district. The soil is predominantly sandy, alluvial and to
        little extent clay. The major crops grown in the district are paddy, sugar cane, pulses, vegetables and
        millets.
      </p>
      <p>
        Bay of Bengal is the boundary of the district in the east direction. The period from November to
        February is pleasant with a climate full of warm days and cool nights. Summer affects from middle of
        March and the temperature rise up to 38 – 40° C. during peak summer. The average temperature ranges
        from 22° C. during January to 38° C. during May – June. Summer rains are spare and the first monsoon
        southwest monsoon sets in June and continues up to September. The north east monsoon sets in October
        and continues up to December to January. The average rainfall of the district is about 1300 – 1400 mm
        annually.
      </p>
      <p>
        The district was formerly ruled by the kings of Vijayanagaram and after the defeat by the Deccan
        Sultanates at the battle of Khalikota in 1565 it was ruled by Deccan Sultans. The fortress at
        Chengalpattu was built by the Vijayanagar kings in the 16th century. Mahabalipuram, the icon of
        Pallavas...
      </p>
    </details>
  </>
),


   "Vision & Mission": (
  <>
    <h5 className="agri-content-welcome" style={{ color: "#005599", letterSpacing: "1px" }}>
      Ｖｉｓｉｏｎ ＆ Ｍｉｓｓｉｏｎ
    </h5>
    <br />
    <h3 className="agri-content-heading">
      Our <span style={{ color: "#d40000", fontWeight: "600" }}>Vision :</span>
    </h3>
    <hr />
    <p className="agri-content-paragraph" style={{ textAlign: "justify" }}>
      To excel in Agriculture through education, innovative strategies, and ideas by smart research infusion to
      multidimensional field problem of the State to ensure farm productivity, rural livelihood, food security
      and safe environmental interface in climate.
    </p>

    <h3 className="agri-content-heading" style={{ marginTop: "30px" }}>
      Our <span style={{ color: "#d40000", fontWeight: "600" }}>Mission :</span>
    </h3>
    <hr />
    <ul style={{ paddingLeft: "20px", lineHeight: "2", fontSize: "15.5px" }}>
      <li>To enable students with academic ambience for transforming education and experiences matching need of the hour.</li>
      <li>To invigorate research and infrastructure for addressing food and nutritional issues.</li>
      <li>To produce graduates to serve the state and nation for enhancing livelihood of farmers by advancing, sharing, and applying knowledge acquired by them.</li>
      <li>To translate scientifically proven concepts as economically viable and socially acceptable products.</li>
    </ul>

    <h3 className="agri-content-heading" style={{ marginTop: "30px" }}>
      Our <span style={{ color: "#d40000", fontWeight: "600" }}>Goal :</span>
    </h3>
    <hr />
    <ul style={{ paddingLeft: "20px", lineHeight: "2", fontSize: "15.5px" }}>
      <li>To develop a holistic approach in educating the students with a view to make them well equipped to address the agrarian issues.</li>
      <li>To develop technology through research which will be easily available to all groups of farmers at an affordable cost.</li>
      <li>To strengthen the extension activities and redefine the approach to help the farmers by creating an atmosphere which is farmers friendly.</li>
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
      
          <p>This course provides wider knowledge to the students giving best placement opportunities to in various Agricultural and Administrative sectors. Hence, we are happily inviting youngsters to join B.Sc (Hons.) Agriculture programme in our institution.</p>
          <br />
<p>The scientific methods of Agricultural practice can help farmers to overcome all the challenges in the field. In this point of view Bharath Institute of Higher Education and Research (BIHER) is offering B.Sc (Hons.) Agriculture programme to produce good Agricultural graduates for developing future Agricultural activity. We are providing best scientific Agricultural knowledge to the students with well qualified faculty.</p>       
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
      <Banner/>
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
