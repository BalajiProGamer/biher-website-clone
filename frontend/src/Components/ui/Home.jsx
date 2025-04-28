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
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const containerStyle = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const bannersContainerStyle = {
    position: 'fixed',           // Keep it fixed
    top: '50%',                  // Center vertically
    right: '0',               // Stick to the right side
    transform: 'translateY(-50%)', // Adjust for perfect centering
    zIndex: 20,                  // Keep on top
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
    top: '50%',                  // Center vertically
    left: '0',                   // Stick to the left edge
    transform: 'translateY(-50%)', // Adjust for perfect centering
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

  return (
    <div style={{ width: '100%' }}>
      {/* Add Media Query Styles */}
      <style>{`
        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .slide-image {
            height: 70vh;
            object-fit: contain;
            background: #000;
          }
        }

        @media (max-width: 480px) {
          .slide-image {
            height: 60vh;
            object-fit: contain;
          }
        }
      `}</style>

      {/* Swiper for Auto Sliding */}
      <div style={containerStyle}>

        {/* Online Query Button (fixed left) */}
        <a 
          href="https://your-query-form-link.com" 
          style={queryButtonStyle} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ONLINE QUERY
        </a>

        {/*C) */}
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
              <img 
                src={img} 
                alt={`Slide ${index + 1}`} 
                style={imageStyle}
                className="slide-image"
              />
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
