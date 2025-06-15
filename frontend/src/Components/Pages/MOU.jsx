 import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaBook } from 'react-icons/fa';
import Footer from '../Footer';
import mouBanner from '../../assets/mou.jpg';

const MOU = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #fff;
          overflow-y: auto;
        }

        .mou-banner {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          display: block;
        }

        .header {
          display: flex;
          align-items: center;
          background-color: #f5f5f5;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .home-link {
          margin-right: 10px;
          color: #333;
          text-decoration: none;
        }

        .header-icon {
          font-size: 24px;
        }

        .header-text {
          font-size: 20px;
          font-weight: bold;
          color: #a92a24;
        }

        .page-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          padding: 40px 20px;
          gap: 40px;
          flex: 1;
        }

        .sidebar {
          width: 260px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          border-radius: 12px;
          overflow: hidden;
          height: fit-content;
        }

        .sidebar-header {
          background: #ffcb05;
          color: #333;
          font-weight: bold;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          font-size: 17px;
          gap: 10px;
        }

        .sidebar-item {
          background: #002c3e;
          color: #fff;
          padding: 14px 18px;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-top: 1px solid #004f6e;
        }

        .main-content {
          flex: 1;
          min-height: 600px;
        }

        .content-title {
          font-size: 26px;
          font-weight: bold;
          color: #a92a24;
          margin-bottom: 20px;
          border-bottom: 2px solid #a92a24;
          padding-bottom: 6px;
        }

        .mou-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .mou-table th, .mou-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }

        .mou-table th {
          background: #f4f4f4;
          font-weight: bold;
        }

        .mou-table tbody tr:nth-child(even) {
          background: #f9f9f9;
        }

        .event-link {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
        }

        .footer-wrapper {
          margin-top: auto;
        }
      `}</style>

      {/* Marquee Section (optional if you need it) */}
      <marquee style={{ backgroundColor: "#ffe", padding: "10px", color: "#a92a24", fontWeight: "bold" }}>
        Notification & Latest Exam Result: Academic Schedule – U22 & P23 Batch Arts Academic Year 2024–25 Even Term
      </marquee>

      {/* Banner Image */}
      <img src={mouBanner} alt="MOU Banner" className="mou-banner" />

      {/* Header */}
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (MOU)</span>
      </div>

      {/* Main Layout */}
      <div className="page-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <FaList /> Categories
          </div>
          <div className="sidebar-item">
            <FaBook /> Training & Placement
          </div>
          <div className="sidebar-item">
            <FaBook /> Academics
          </div>
          <div className="sidebar-item">
            <FaBook /> Research
          </div>
        </div>

        {/* Content */}
        <div className="main-content">
          <div className="content-title">Training & Placement :</div>
          <table className="mou-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Company and Location</th>
                <th>MoU Category</th>
                <th>MoU Date</th>
                <th>Event Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Centre for Medical Genetics (CMG), Chennai</td>
                <td>Research and Development & Training</td>
                <td>25/03/2015</td>
                <td><a href="#" className="event-link">Click Here</a></td>
              </tr>
              <tr>
                <td>02</td>
                <td>INDO - BRITISH FRCR GROUP (Bradford Teaching Hospitals, UK)</td>
                <td>Training & Placement</td>
                <td>22/05/2015</td>
                <td><a href="#" className="event-link">Click Here</a></td>
              </tr>
              <tr>
                <td>03</td>
                <td>The North American Institute of Pharmaceutical Technology, Toronto, Canada</td>
                <td>Training and Development</td>
                <td>22/05/2015</td>
                <td><a href="#" className="event-link">Click Here</a></td>
              </tr>
              <tr>
                <td>04</td>
                <td>The London North West Healthcare NHS Trust London, United Kingdom</td>
                <td>Training and Placement</td>
                <td>28/05/2015</td>
                <td><a href="#" className="event-link">Click Here</a></td>
              </tr>
              <tr>
                <td>05</td>
                <td>Dowling College Manhattan, New York</td>
                <td>Academic and Training Activities</td>
                <td>06/10/2015</td>
                <td><a href="#" className="event-link">Click Here</a></td>
              </tr>
              <tr>
                <td>06</td>
                <td>MedGenome Labs Pvt. Ltd., Bangalore</td>
                <td>Research and Development & Training</td>
                <td>17/06/2015</td>
                <td><a href="#" className="event-link">Click Here</a></td>
              </tr>
              <tr>
                <td>07</td>
                <td>Vectra Technosoft Pvt. Ltd., Chennai</td>
                <td>Training in Software Development</td>
                <td>10/10/2015</td>
                <td><a href="#" className="event-link">Click Here</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default MOU;
