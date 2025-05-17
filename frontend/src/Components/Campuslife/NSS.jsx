 import React from 'react';
import NssImg from "../../assets/Nss2.jpg";
import BgImg from "../../assets/pattern.jpg";
import Footer from '../Footer';
import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaThLarge } from "react-icons/fa";

const NSS = () => {
  return (
    <div>
      {/* Top Banner */}
      <img src={NssImg} alt="NSS Banner" style={{ width: "100%", height: "auto" }} />

      {/* Breadcrumb */}
      <div style={{
        background: '#b30000',
        padding: '10px 20px',
        color: '#fff',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <FaHome />
        </Link>
        <span style={{ marginLeft: '10px' }}>» NSS</span>
      </div>

      {/* Main Section with Sidebar and Content */}
      <div style={{
        display: 'flex',
        backgroundImage: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 50px',
      }}>
        {/* Left Sidebar - Categories */}
        <div style={{
          width: '250px',
          borderRadius: '15px 15px 0 0',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          backgroundColor: '#012b3c',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Sidebar Header */}
          <div style={{
            backgroundColor: '#f6b800',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '18px',
            borderBottom: '1px solid #fff',
            borderRadius: '15px 15px 0 0',
            color:'#333',
          }}>
            <FaThLarge style={{ marginRight: '10px' }} /> Categories
          </div>

          {/* Sidebar Links */}
          {["About Us", "NSS Annual Report", "Objective", "NSS Events", "Awards"].map((item, index) => (
            <div key={index} style={{
              padding: '12px 20px',
              borderBottom: index !== 4 ? '1px solid #033645' : 'none',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontWeight: '500',
              fontSize: '16px',
              transition: 'background 0.3s'
            }}>
              <FaBookOpen style={{ marginRight: '10px' }} />
              {item}
            </div>
          ))}
        </div>

        {/* Right Content Area */}
        <div style={{
          flex: 1,
          marginLeft: '60px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          color: '#333',
          fontSize: '16px',
          lineHeight: '1.8'
        }}>
          <h2 style={{
            color: '#a10000',
            fontSize: '24px',
            borderBottom: '2px solid #ccc',
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            Campus Life <br />
            <span style={{ color: '#000' }}>
              About <span style={{ color: '#a10000' }}>Us :</span>
            </span>
          </h2>

          <p>
            National Service Scheme provides diversified opportunities to students in colleges and universities to develop their personality through community services. Community services rendered by Institution level students have covered several aspects like adoption of villages for intensive development work, mass tree plantation, technology transfer programmes, technologies for rural development, various training programmes for self-help groups and rural youth etc. Considering the benefits, BIHER has made NSS Compulsory at UG level for the first two years.
          </p>

          <p>
            I am happy to learn the activities carried out by the NSS volunteers in Engineering Colleges in BIHER on the theme <strong>HEALTHY YOUTH FOR HEALTH INDIA</strong>, for pollution free environment, Voter Awareness programme, Tree plantation, polio drops, Blood Donation Camps, General Health Camps, Creation of awareness among the public on HIV/AIDS etc.
          </p>
      
          <p>
            I Congrat all NSS Students and participants in the BIHER NSS cell.
          </p>
         
          <p>
            Like last year, the year 2016-2017 shall be another year with vibrant NSS activities on the theme HEALTHY YOUTH FOR HEALTH INDIA. The Hand Book suggest only a few activities to be carried out, there could be many more.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NSS;
