 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import libraryImage from '../../assets/lib.jpg';
import qrCodeImage from '../../assets/qr.png';
import { FaHome } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';

const categories = [
  'WEB-OPAC (Online Book Search)',
  'National Digital Library of India (NDL)',
  'Digital Attendance',
  'ACMDL',
  'J-GATE',
  'ASME Digital Collection',
  'DELNET Discovery Portal',
  'E-Resources',
  'Divyang',
  'NPTEL',
  'Shodhganga',
  'View Our Library Floor',
  'View our Library Rules',
  'View our Library Policy'
];

const campusData = {
  "BIHER Campus": {
    volumes: "335541",
    titles: "61108",
    nationalJournals: "110",
    internationalJournals: "52",
    eResources: "8000 (IEEE, Proquest, ASME, ASCMDL & J-Gate)",
    automation: "Auto Lib Software",
    cds: "10917"
  },
  "BIST Campus": {
    volumes: "123456",
    titles: "23456",
    nationalJournals: "75",
    internationalJournals: "40",
    eResources: "5000 (JSTOR, ASCE)",
    automation: "Koha",
    cds: "5000"
  },
  "SBMCH Campus": {
    volumes: "89000",
    titles: "30000",
    nationalJournals: "50",
    internationalJournals: "30",
    eResources: "4000 (PubMed, Medline)",
    automation: "MedLib",
    cds: "3000"
  },
  "SBDCH Campus": {
    volumes: "45000",
    titles: "18000",
    nationalJournals: "35",
    internationalJournals: "20",
    eResources: "3500 (DentalDB, J-Gate)",
    automation: "DentoLib",
    cds: "2500"
  },
  "SLIMS Campus": {
    volumes: "60000",
    titles: "25000",
    nationalJournals: "60",
    internationalJournals: "45",
    eResources: "6000 (Springer, ClinicalKey)",
    automation: "SLIMSoft",
    cds: "4000"
  }
};

const Library = () => {
  const [selectedCampus, setSelectedCampus] = useState('BIHER Campus');

  return (
    <div>
      {/* Banner Image */}
      <img
        src={libraryImage}
        alt="Library"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />

      {/* Header Navigation */}
      <div style={{
        backgroundColor: '#b71c1c',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <FaHome style={{ marginRight: '8px' }} />
          <span style={{ fontStyle: 'italic' }}> » Library</span>
        </Link>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', padding: '50px 70px', fontFamily: 'sans-serif' }}>
        {/* Left Section */}
        <div style={{ flex: 2, paddingRight: '40px' }}>
          <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <span style={{ color: '#b71c1c' }}>About</span> the <strong>Library</strong>
          </h2>
          <p style={{ lineHeight: '1.8', color: '#444' }}>
            The BIHER Library was established in the year 1984 with three main branches of Engineering such as Civil, Mechanical and Computer Science Engineering. Gradually it has grown up in all dimensions in terms of collections and services. The library caters to the needs of the faculty, Students and Research Scholars. Books related to these disciplines were added to this library initially. Bharath University Library has a seating capacity of Six Hundred.
          </p>

          {/* Resources Section */}
          <div style={{ marginTop: '30px' }}>
            <div style={{
              backgroundColor: '#1f2b3a',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '8px',
              display: 'inline-block',
              fontWeight: 'bold'
            }}>
              📚 Resources For <span style={{ color: '#ffc107' }}>All Campus</span>
            </div>

            {/* Campus Selector Buttons */}
            <div style={{ display: 'flex', marginTop: '20px', flexWrap: 'wrap', gap: '10px' }}>
              {Object.keys(campusData).map((campus) => (
                <button
                  key={campus}
                  onClick={() => setSelectedCampus(campus)}
                  style={{
                    padding: '10px 15px',
                    backgroundColor: selectedCampus === campus ? '#0288d1' : '#f0f0f0',
                    color: selectedCampus === campus ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '4px',
                    boxShadow: selectedCampus === campus ? '2px 2px 6px rgba(0,0,0,0.2)' : 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {campus}
                </button>
              ))}
            </div>

            {/* Campus Resource Table */}
            <table style={{ width: '100%', marginTop: '50px', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={tdStyle}>No. of Volumes</td>
                  <td style={tdStyle}>{campusData[selectedCampus].volumes}</td>
                </tr>
                <tr>
                  <td style={tdStyle}>No. of Titles</td>
                  <td style={tdStyle}>{campusData[selectedCampus].titles}</td>
                </tr>
                <tr>
                  <td style={tdStyle}>No. of National Journals</td>
                  <td style={tdStyle}>{campusData[selectedCampus].nationalJournals}</td>
                </tr>
                <tr>
                  <td style={tdStyle}>No. of International Journals</td>
                  <td style={tdStyle}>{campusData[selectedCampus].internationalJournals}</td>
                </tr>
                <tr>
                  <td style={tdStyle}>E-Resources</td>
                  <td style={tdStyle}>{campusData[selectedCampus].eResources}</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Library Automation</td>
                  <td style={tdStyle}>{campusData[selectedCampus].automation}</td>
                </tr>
                <tr>
                  <td style={tdStyle}>No. of CDs</td>
                  <td style={tdStyle}>{campusData[selectedCampus].cds}</td>
                </tr>
              </tbody>
            </table>

            {/* Central Library & Services */}
            <div style={{ marginTop: '50px' }}>
              <h3 style={{ color: '#1f2b3a' }}>📘 Central Library <span style={{ color: '#ff9800' }}>& Services</span></h3>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
                <li><i>Circulation Service</i></li>
                <li><i>Reference Service</i></li>
                <li><i>Reprographic Service</i></li>
                <li><i>Web OPAC (On-line Public Access Catalogue)</i></li>
                <li><i>Resource Sharing (Inter Library Loan)</i></li>
                <li><i>On-line Databases (E-Resources)</i></li>
                <li>
                  <i>E-Learning Facility</i>
                  <ul>
                    <li><i>NPTEL</i></li>
                    <li><i>NDL</i></li>
                  </ul>
                </li>
                <li><i>User Education Program</i></li>
                <li><i>User Time Save Services</i></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{
          width: '280px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          height: 'fit-content',
          position: 'sticky',
          top: '100px'
        }}>
          {/* Categories Box */}
          <div style={{
            backgroundColor: '#fff',
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              position: 'relative',
              backgroundColor: '#b71c1c',
              color: '#fff',
              padding: '10px',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              📂 Categories :
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderLeft: '40px solid transparent',
                borderBottom: '40px solid #e91e63',
                borderTopRightRadius: '8px'
              }}></div>
            </div>

            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
              {categories.map((item, index) => (
                <li key={index} style={{
                  padding: '8px 10px',
                  borderBottom: '1px solid #eee',
                  fontSize: '14px',
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#007bff', marginRight: '6px' }}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code Box */}
          <div style={{
            backgroundColor: '#fff',
        
            textAlign: 'center'
          }}>
            <img
              src={qrCodeImage}
              alt="QR Code for 2025 Admission"
              style={{ width: '250px', height: '350px', objectFit: 'contain', marginBottom: '10px' }}
            />
            <Banner/>
            
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '12px',
  backgroundColor: '#f9f9f9',
  fontSize: '16px',
  verticalAlign: 'top'
};

export default Library;
