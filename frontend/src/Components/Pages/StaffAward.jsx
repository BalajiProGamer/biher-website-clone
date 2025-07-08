import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';

import bgImage from '../../assets/pattern.jpg';
import award1 from '../../assets/stAW3 (1).jpg';
import award2 from '../../assets/stAW3 (2).jpg';
import award3 from '../../assets/stAW3 (3).jpg';
import award4 from '../../assets/stAw4.jpg';
import Footer from '../Footer';
import Query from './Query';
import Banner from '../Banner';

const StaffAward = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const awardImages = [award1, award2, award3, award4];

  return (
    <div className="staff-award-container">
      {/* Breadcrumb Header */}
      <div className="breadcrumb-header">
        <div className="breadcrumb-content">
          <FaHome
            className="breadcrumb-icon"
            onClick={() => navigate('/')}
            title="Home"
          />
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-text">Student Achievement</span>
        </div>
      </div>

      {/* Banner + Cards */}
      <div
        className="award-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="banner-text-wrapper">
          <h1 className="banner-title">
            STAFF <span className="highlight">Awards</span>
          </h1>
          <div className="divider"></div>
        </div>

        <div className="awards-section">
          <div className="awards-grid">
            {awardImages.map((src, index) => (
              <div className="award-card" key={index}>
                <img
                  src={src}
                  alt={`Award ${index + 1}`}
                  className="award-image"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedImage(null)}
            >
              <span className="modal-close">&times;</span>
              <img
                src={selectedImage}
                alt="Full View"
                className="modal-image"
              />
            </div>
          )}
        </div>
      </div>
     <Query />
     <Banner  />
      <Footer />
    </div>
  );
};

export default StaffAward;
