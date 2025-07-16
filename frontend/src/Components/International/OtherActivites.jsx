import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';
import '../../styles/global.css';
import Query from '../Pages/Query';
import Banner from '../Banner';
import NewsSlider from '../Pages/NewsSlider';

const categories = [
  { key: 'recent', label: 'Recent MoU’s' },
  { key: 'international', label: 'MoU’s with International Organizations' },
  { key: 'research', label: 'Collaborative Research' },
  { key: 'phd', label: 'International Ph.D Co-Supervisors' },
];

const contentMap = {
  recent: `BIHER has recently signed MoUs with reputed international universities and organizations to promote 
collaborative teaching, student and faculty exchange programs, and joint research initiatives. 
These collaborations enhance academic quality and global exposure for students and staff.`,

  international: `BIHER has 126 international MoU's with various universities/organisations around the world. 
BIHER creates a platform for our students to have an International Exposure of standards by organising 
Summer Internship Projects Aboard (SIP), Student Exchange Program (SEP), International Credit Transfer Program etc.

BIHER also sponsors its faculties for participation in International Conference and Guest Lectures, 
visits to international laboratories etc.

BIHER has Sixty plus Visiting / Adjunct faculties from foreign universities/organisations to deliver 
Teaching / Research methodologies niche areas.`,

  research: `Our strategic partnerships have led to the creation of various avenues of collaborative research 
with distinguished institutions across different academic levels. These projects have been focused on the goal 
of creating a common platform for meeting of minds with personnel and experts from across the world, 
to cater for the welfare of humanity, while ensuring the progression of academics in higher education.

Through these partnerships, we have ventures and collaborative research platforms, which have been actively 
working towards mitigating some of the world’s most pressing issues for the well-being and betterment 
of humanity as a whole.`,

  phd: `List of international Ph.D co-supervisors and associated programs.`,
};

const OtherActivities = () => {
  const [selectedKey, setSelectedKey] = useState('recent');

  return (
    <div>
      <ImageSlider />

      {/* Header */}
      <div className="activities-header">
        <div className="activities-header-content">
          <Link to="/" className="home-icon">
            <FaHome />
          </Link>
          <span className="breadcrumb-text">» <em>Other Activities</em></span>
        </div>
      </div>

      {/* Background Image Section with Left-Right Layout */}
      <div className="activities-section">
        <div className="activities-container">
          {/* Left Sidebar */}
          <div className="activities-sidebar">
            <div className="activities-sidebar-header">
              <FaBook className="book-icon" /> Categories
            </div>
            {categories.map((cat) => (
              <div
                key={cat.key}
                className={`activities-nav-item ${selectedKey === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedKey(cat.key)}
              >
                <FaBook className="book-icon" /> | {cat.label}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="activities-content">
            <h3>{categories.find(c => c.key === selectedKey)?.label} :</h3>
            <hr />
            {contentMap[selectedKey].split('\n').map((para, index) => (
              <p key={index} style={{ marginBottom: '1rem', textAlign: 'justify' }}>
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
          <Query/>
          <Banner/>
      <NewsSlider />
      <Footer />
    </div>
  );
};

export default OtherActivities;
