import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';
import '../../styles/global.css';
import NewsSlider from '../Pages/NewsSlider';

const categories = [
  { key: 'recent', label: 'Recent MoU’s' },
  { key: 'international', label: 'MoU’s with International Organizations' },
  { key: 'research', label: 'Collaborative Research' },
  { key: 'phd', label: 'International Ph.D Co-Supervisors' },
];

const contentMap = {
  recent: `Details about recent MoU’s with partner institutions and organizations.`,
  international: `Information about collaborations with international organizations through MoUs.`,
  research: `Insights into ongoing and completed collaborative research activities.`,
  phd: `List of international Ph.D co-supervisors and associated programs.`,
};

const Collaboration = () => {
  const [selectedKey, setSelectedKey] = useState('recent');

  return (
    <div>
      <ImageSlider />

      {/* Header */}
      <div className="collab-header">
        <div className="collab-header-content">
          <Link to="/" className="home-icon">
            <FaHome />
          </Link>
          <span className="breadcrumb-text">» <em>International Collaboration</em></span>
        </div>
      </div>

      {/* Background Image Section with Left-Right Layout */}
      <div className="collab-section">
        <div className="collab-container">
          {/* Left Sidebar */}
          <div className="collab-sidebar">
            <div className="collab-sidebar-header">
              <FaBook className="book-icon" /> Categories
            </div>
            {categories.map((cat) => (
              <div
                key={cat.key}
                className={`collab-nav-item ${selectedKey === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedKey(cat.key)}
              >
                <FaBook className="book-icon" /> | {cat.label}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="collab-content">
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

export default Collaboration;
