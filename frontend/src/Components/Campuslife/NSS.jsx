import React from 'react';
import NssImg from "../../assets/Nss2.jpg";
import BgImg from "../../assets/pattern.jpg";
import Footer from '../Footer';
import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaThLarge } from "react-icons/fa";
import Banner from '../Banner';

const NSS = () => {
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
    <span className="nss-breadcrumb-text">» Campus Life » NSS</span>
  </div>
</div>


      {/* Main Section with Flex Layout */}
      <div className="nss-main-section" style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="nss-layout-container">
          {/* Sidebar */}
          <div className="nss-sidebar">
            <div className="nss-sidebar-header">
              <FaThLarge className="nss-sidebar-icon" />
              Categories
            </div>

            {["About Us", "NSS Annual Report", "Objective", "NSS Events", "Awards"].map((item, index) => (
              <div key={index} className="nss-sidebar-item">
                <FaBookOpen className="nss-sidebar-item-icon" />
                {item}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="nss-content">
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
            <p>
              I Congrat all NSS Students and participants in the BIHER NSS cell.
            </p>
            <br />
            <p>
              Like last year, the year 2016-2017 shall be another year with vibrant NSS activities on the theme HEALTHY YOUTH FOR HEALTH INDIA. The Hand Book suggest only a few activities to be carried out, there could be many more.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NSS;
