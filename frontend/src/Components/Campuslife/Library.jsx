import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import libraryImage from '../../assets/lib.jpg';
import qrCodeImage from '../../assets/qr.png';
import { FaHome } from 'react-icons/fa';
import Footer from '../Footer';
import Banner from '../Banner';

import Query from '../Pages/Query'; 
import '../../styles/global.css'; // Make sure this path is correct

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
      <img src={libraryImage} alt="Library" className="library-banner" />

      <div className="library-header">
        <Link to="/" className="library-home-link">
          <FaHome className="library-home-icon" />
          <span className="library-home-text"> » Library</span>
        </Link>
      </div>

      <div className="library-container">
        <div className="library-left">
          <h2 className="library-title">
            <span className="highlight-red">About</span> the <strong>Library</strong>
          </h2>

          <p className="library-description">
            The BIHER Library was established in the year 1984 with three main branches of Engineering such as Civil, Mechanical and Computer Science Engineering. Gradually it has grown up in all dimensions in terms of collections and services. The library caters to the needs of the faculty, Students and Research Scholars. Books related to these disciplines were added to this library initially. Bharath University Library has a seating capacity of Six Hundred.
          </p>

          <div className="library-resources">
            <div className="resource-label">
              📚 Resources For <span className="highlight-yellow">All Campus</span>
            </div>

            <div className="campus-buttons">
              {Object.keys(campusData).map((campus) => (
                <button
                  key={campus}
                  onClick={() => setSelectedCampus(campus)}
                  className={`campus-button ${selectedCampus === campus ? 'active' : ''}`}
                >
                  {campus}
                </button>
              ))}
            </div>

            <table className="campus-table">
              <tbody>
                <tr>
                  <td className="table-cell">No. of Volumes</td>
                  <td className="table-cell">{campusData[selectedCampus].volumes}</td>
                </tr>
                <tr>
                  <td className="table-cell">No. of Titles</td>
                  <td className="table-cell">{campusData[selectedCampus].titles}</td>
                </tr>
                <tr>
                  <td className="table-cell">No. of National Journals</td>
                  <td className="table-cell">{campusData[selectedCampus].nationalJournals}</td>
                </tr>
                <tr>
                  <td className="table-cell">No. of International Journals</td>
                  <td className="table-cell">{campusData[selectedCampus].internationalJournals}</td>
                </tr>
                <tr>
                  <td className="table-cell">E-Resources</td>
                  <td className="table-cell">{campusData[selectedCampus].eResources}</td>
                </tr>
                <tr>
                  <td className="table-cell">Library Automation</td>
                  <td className="table-cell">{campusData[selectedCampus].automation}</td>
                </tr>
                <tr>
                  <td className="table-cell">No. of CDs</td>
                  <td className="table-cell">{campusData[selectedCampus].cds}</td>
                </tr>
              </tbody>
            </table>

            <div className="library-services">
              <h3>📘 Central Library <span className="highlight-yellow">& Services</span></h3>
              <ul className="library-service-list">
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

        <div className="library-right">
          <div className="library-categories">
            <div className="category-header">📂 Categories :</div>
            <ul className="category-list">
              {categories.map((item, index) => (
                <li key={index} className="category-item">
                  <span className="bullet">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="library-qr">
            <img src={qrCodeImage} alt="QR Code" className="qr-image" />
            <Banner />
            <Query/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Library;
