import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img from "../../assets/img.jpg";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/ini1.jpg';
import img5 from '../../assets/ini2.jpg';
import img6 from '../../assets/banner19.jpg';
import img7 from '../../assets/bharath ch.jpg';

import PageLayout from '../Pages/PageLayout';
import UniversityPage from './UniversityPage';
import Footer from '../Footer';
import CampusDashboard from './CampusDashboard';
import FeaturedMedia from './FeaturedMedia';
import FixedLandingSection from './FixedLandingSection';

export default function AutoSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const images = [img1, img2, img3, img4, img5, img6, img7];

  const containerStyle = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
  };

  const bannersContainerStyle = {
    position: 'fixed',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  };

  const bannerButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 15px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.3)',
    whiteSpace: 'nowrap',
  };

  const redButtonStyle = {
    ...bannerButtonStyle,
    backgroundColor: '#d90429',
  };

  const blueButtonStyle = {
    ...bannerButtonStyle,
    backgroundColor: '#003566',
  };

  const queryButtonStyle = {
    position: 'fixed',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    backgroundColor: '#003566',
    color: 'white',
    padding: '10px 5px',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    fontWeight: 'bold',
    fontSize: '14px',
    borderRadius: '0 8px 8px 0',
    cursor: 'pointer',
    zIndex: 20,
    boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
    textDecoration: 'none',
  };

  const modalStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: '500px',
  };

  const overlayStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @media (max-width: 768px) {
          .slide-container {
            height: 70vh;
          }
        }

        @media (max-width: 480px) {
          .slide-container {
            height: 60vh;
          }
        }
      `}</style>

      {/* Overlay */}
      <div style={overlayStyle} onClick={toggleModal}></div>

      {/* Modal */}
      <div style={modalStyle}>
        <button onClick={toggleModal} style={{ float: 'right', cursor: 'pointer' }}>✖</button>
        <h3>Admission Enquiry</h3>
        <form>
          <input type="text" placeholder="Enter Name" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
          <input type="email" placeholder="Enter Email Address" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
          <input type="tel" placeholder="Enter Mobile Number" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
          <select required style={{ width: '100%', marginBottom: '10px', padding: '8px' }}>
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </select>
          <select required style={{ width: '100%', marginBottom: '10px', padding: '8px' }}>
            <option value="">Select Course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
          </select>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#003566', color: 'white', border: 'none', borderRadius: '4px' }}>
            Submit
          </button>
        </form>
      </div>

      {/* Swiper for Auto Sliding */}
      <div style={containerStyle} className="slide-container">
        {/* Online Query Button */}
        <a onClick={toggleModal} style={queryButtonStyle}>
          ONLINE QUERY
        </a>

        {/* Fixed Banner Buttons */}
        <div style={bannersContainerStyle}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzaEBGmJv5c3Y-73VOkxYr9aaGqgh3L8d9VtOwjFnG0kS2cQ/viewform"
            style={redButtonStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            🎓 2025 Admission Open for UG/PG
          </a>
          <a
            href="https://admissions.bharathuniv.ac.in/"
            style={blueButtonStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            🎓 Ph.D Admission Application Form
          </a>
        </div>

        {/* Image Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          style={{ width: '100%', height: '100%' }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#000',
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Other Page Sections */}
      <div>
        <PageLayout />
        <FixedLandingSection />
        <UniversityPage />
        <CampusDashboard />
        <FeaturedMedia />
        <Footer />
      </div>
    </div>
  );
}
