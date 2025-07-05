import React, { useState } from 'react';
import NssImg from "../../assets/Nss2.jpg";
import BgImg from "../../assets/pattern.jpg";
import Footer from '../Footer';
import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaThLarge } from "react-icons/fa";
import Banner from '../Banner';
import Query from '../Pages/Query';
import bhumi from '../../assets/Bhumi.jpg';
import award2 from '../../assets/BIST.jpg';
import award3 from '../../assets/Medical.jpg';
import award4 from '../../assets/Nursing.jpg';
import award5 from '../../assets/internationanss.jpg';


const NSS = () => {
  const sidebarItems = [
    "About Us",
    "NSS Annual Report",
    "Objective",
    "NSS Events",
    "Awards"
  ];

  const [activeSection, setActiveSection] = useState("About Us");
  const [selectedReportUrl, setSelectedReportUrl] = useState(null);
  const awardImages = [bhumi, award2, award3, award4, award5,];
  const [selectedImage, setSelectedImage] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case "About Us":
        return (
          <div>
            <h2 className="nss-title">
              Campus Life <br />
              <span className="nss-subtitle">
                About <span className="nss-title-highlight">Us :</span>
              </span>
            </h2>
            <p>
             National service Scheme provides diversified opportunities to students in colleges and universities to develop their personality through community services. Community services rendered by Institution level students have covered several aspects like adoption of villages for intensive development work, mass tree plantation, technology transfer programmes, technologies for rural development, various training programmes for self-help groups and rural youth etc., Considering the benefits BIHER has made NSS Compulsory at UG level for the first two years.
            </p>
            <br />
            <p>
              I am happy to learn the activities carried out by the NSS volunteers in Engineering Colleges in BIHER on the theme HEALTHY YOUTH FOR HEALTH INDIA, for pollution free environment, Voter Awareness programme, Tree plantation, polio drops, Blood Donation Camps, General Health Camps, Creation of awareness among the public on HIV/AIDS etc.
            </p>
            <br />
            <p>I Congrat all NSS Students and participants in the BIHER NSS cell.</p>
            <br />
            <p>
              I am happy to learn the activities carried out by the NSS volunteers in Engineering Colleges in BIHER on the theme HEALTHY YOUTH FOR HEALTH INDIA, for pollution free environment, Voter Awareness programme, Tree plantation, polio drops, Blood Donation Camps, General Health Camps, Creation of awareness among the public on HIV/AIDS etc.
            </p>
          </div>
        );

      case "NSS Annual Report":
        const reports = [
          {
            year: "2023-24",
            url: "https://www.bharathuniv.ac.in/nirf/NSS/Annual%20Report/2023-2024.pdf"
          },
          {
            year: "2022-23",
            url: "https://www.bharathuniv.ac.in/nirf/NSS/Annual%20Report/2023-2024.pdf"
          },
          {
            year: "2021-22",
            url: "https://www.bharathuniv.ac.in/nirf/NSS/Annual%20Report/2021-2022.pdf"
          },
          {
            year: "2020-21",
            url: "https://www.bharathuniv.ac.in/nirf/NSS/Annual%20Report/2020-2021.pdf"
          },
          {
            year: "2019-20",
            url: "https://www.bharathuniv.ac.in/nirf/NSS/Annual%20Report/2019-2020.pdf"
          }
          // Add more years if needed
        ];

        return (
          <div>
            <h2 className="nss-title">
              NSS - <span className="nss-title-highlight">ANNUAL REPORT :</span>
            </h2>
            <blockquote style={{ borderLeft: '4px solid #007bff', paddingLeft: '15px', fontStyle: 'italic', color: '#555' }}>
              National Service Scheme popularly known as NSS, the scheme was launched in Gandhi Centenary year, 1969 and aimed at developing student’s personality through community service. The overall objective of National Service is Educational. This objective is attained through the service to the community.
            </blockquote>
            <br />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {reports.map((report, index) => (
                <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                  <span style={{ color: '#c00', marginRight: '10px' }}>⦿</span>
                  <span
                    style={{ cursor: 'pointer', color: '#000', fontWeight: '500' }}
                    onClick={() => setSelectedReportUrl(report.url)}
                  >
                    NSS ANNUAL REPORT {report.year}
                  </span>
                </li>
              ))}
            </ul>

            {selectedReportUrl && (
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ marginBottom: '10px' }}>PDF Viewer:</h3>
                <iframe
                  src={selectedReportUrl}
                  width="100%"
                  height="600px"
                  style={{ border: '1px solid #ccc' }}
                  title="NSS Report Viewer"
                />
              </div>
            )}
          </div>
        );
case "Objective":
  return (
    <div className="objective-container">
      <h2 className="objective-heading">OBJECTIVE</h2>
      <p className="objective-paragraph">
        The overall objective of NSS is <strong>Personality Development through community service</strong>.
      </p>
      <br />
      <p className="objective-paragraph">
        The broad objectives of NSS are to:
      </p>
      <ul className="objective-list">
        <li>Understand the community in which they work</li>
        <li>Understand themselves in relation to their community</li>
        <li>Identify the needs and problems of the community and involve them in problem solving process</li>
        <li>Develop among themselves a sense of social and civic responsibility</li>
        <li>Utilize their knowledge in finding practical solution to individual and community problems</li>
        <li>Develop competence required for group-living and sharing of responsibilities</li>
        <li>Gain skills in mobilizing community participation</li>
        <li>Acquire leadership qualities and democratic attitude</li>
        <li>Develop capacity to meet emergencies and natural disaster and</li>
        <li>Practice national integration and social harmony</li>
      </ul>
    </div>
  );


     case "NSS Events":
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '30px', lineHeight: '1.8', fontFamily: 'Georgia, serif' }}>
      <h2 style={{ color: '#b22222', fontWeight: 'bold', fontSize: '28px', textAlign: 'left' }}>NSS EVENTS</h2>
      <br></br>
      <p>
        NSS activities have been divided in two major groups. These are regular NSS activities and special camping programme.
      </p>
      <br></br>
      <p>
        <strong>(a) Regular NSS Activity:</strong> Under this, students undertake various programmes in the adopted villages, college / school campuses and urban slums during weekends or after college hours;
      </p>
      <br></br>
      <p>
        <strong>(b) Special Camping Programme:</strong> Under this, camps of 7 days duration are organised in adopted villages or urban slums during vacations with some specific projects by involving local communities. 50% NSS volunteers are expected to participate in these camps.
      </p>
      <br></br>
      <ul style={{ marginTop: '20px' }}>
        <li><a href="#">Click Here To View NSS Events</a></li>
        <li><a href="#">NATIONAL SERVICE SCHEME 2017–18–ACTIVITIES & Gallery</a></li>
        <li><a href="#">Create Awareness on The Impact of Land Debris on Marine Life</a></li>
      </ul>
    </div>
  );

case "Awards":
  return (
    <div className="awards-section">
      <h2 className="awards-title">Awards :</h2>

      <div className="awards-grid">
        {awardImages.map((src, index) => (
          <div className="award-card" key={index}>
            <img
              src={src}
              alt={`Award ${index + 1}`}
              className="award-image"
              onClick={() => setSelectedImage(src)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <span className="modal-close">&times;</span>
          <img src={selectedImage} alt="Full View" className="modal-image" />
        </div>
      )}
    </div>
  );



      default:
        return null;
    }
  };

  return (
    <div>
      {/* Top Banner */}
      <img src={NssImg} alt="NSS Banner" className="nss-top-banner" />
      <Banner />

      {/* Breadcrumb */}
      <div className="nss-breadcrumb-bar">
        <div className="nss-breadcrumb-container">
          <Link to="/" className="nss-home-link">
            <FaHome />
          </Link>
          <span className="nss-breadcrumb-text">» Campus Life » {activeSection}</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="nss-main-section" style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="nss-layout-container">
          {/* Sidebar */}
          <div className="nss-sidebar">
            <div className="nss-sidebar-header">
              <FaThLarge className="nss-sidebar-icon" />
              Categories
            </div>
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`nss-sidebar-item ${activeSection === item ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item);
                  setSelectedReportUrl(null); // Clear iframe if switching sections
                }}
                style={{ cursor: 'pointer' }}
              >
                <FaBookOpen className="nss-sidebar-item-icon" />
                {item}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="nss-content">
            {renderContent()}
          </div>
        </div>
      </div>
      <Query/>

      <Footer />
    </div>
  );
};

export default NSS;
