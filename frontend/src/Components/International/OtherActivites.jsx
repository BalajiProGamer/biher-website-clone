import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';
import '../../styles/global.css';
import NewsSlider from '../Pages/NewsSlider';

const categories = [
  { key: 'overview', label: 'Overview' },
  { key: 'inbound', label: 'Inbound Exchange Program' },
  { key: 'outbound', label: 'Outbound Exchange Program' },
  { key: 'faculty', label: 'Faculty Exchange Programs' },
  { key: 'virtual', label: 'Virtual Exchange Programs' },
];

const contentMap = {
  overview: `Through our array of international programs, we provide and facilitate platforms which result in the development of global opportunities for students and faculties...`,
  inbound: `Inbound Exchange Program content goes here.`,
  outbound: `Outbound Exchange Program content goes here.`,
  faculty: `Faculty Exchange Program content goes here.`,
  virtual: `Virtual Exchange Program content goes here.`,
};

const OtherActivities = () => {
  const [selectedKey, setSelectedKey] = useState('overview');

  return (
    <div>
      <ImageSlider />

      {/* Header */}
      <div className="other-activities-header">
        <div className="other-activities-header-content">
          <Link to="/" className="home-icon">
            <FaHome />
          </Link>
          <span className="breadcrumb-text">» <em>Other Activities</em></span>
        </div>
      </div>

      {/* Background Image Section with Left-Right Layout */}
      <div className="other-activities-section">
        <div className="other-activities-container">
          {/* Left Sidebar */}
          <div className="other-activities-sidebar">
            <div className="other-activities-sidebar-header">
              <FaBook className="book-icon" /> Categories
            </div>
            {categories.map((cat) => (
              <div
                key={cat.key}
                className={`other-activities-nav-item ${selectedKey === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedKey(cat.key)}
              >
                <FaBook className="book-icon" /> | {cat.label}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="other-activities-content">
            <h3>{categories.find(c => c.key === selectedKey)?.label} :</h3>
            <hr />
            <p>{contentMap[selectedKey]}</p>
          </div>
        </div>
      </div>

      <NewsSlider />
      <Footer />
    </div>
  );
};

export default OtherActivities;
