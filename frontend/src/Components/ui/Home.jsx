import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Query from '../Pages/Query';

import img1 from '../../assets/img.jpg';
import img2 from '../../assets/img1.jpg';
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

import '../../styles/global.css';

/* ---------- simple helpers ---------- */
const randomText = () => Math.random().toString(36).substring(2, 8);

const drawCaptcha = (canvas, text) => {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;

  ctx.fillStyle = '#f4f4f4';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 4; i++) {
    ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.4})`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  ctx.font = '24px sans-serif';
  ctx.fillStyle = '#003566';
  ctx.setTransform(1, 0.15 - Math.random() * 0.3, 0, 1, 10, 28);
  ctx.fillText(text, 0, 0);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
};

export default function AutoSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captcha, setCaptcha] = useState(randomText());
  const canvasRef = useRef(null);

  const refreshCaptcha = () => setCaptcha(randomText());
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => drawCaptcha(canvasRef.current, captcha), [captcha]);

  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="auto-slide-container">
      <div className={isModalOpen ? 'overlay open' : 'overlay'} onClick={toggleModal} />

      {/* Right‑side banners */}
      <div className="banners-container">
        <a className="banner-button red" href="https://admissions.bharathuniv.ac.in/" target="_blank">
          🎓 2025 Admission Open for UG/PG
        </a>
        <a className="banner-button blue" href="https://docs.google.com/forms/d/e/1FAIpQLSfzaEBGmJv5c3Y-73VOkxYr9aaGqgh3L8d9VtOwjFnG0kS2cQ/viewform" target="_blank">
          🎓 Ph.D Admission Application Form
        </a>
      </div>

      {/* Swiper slideshow */}
      <div className="slide-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={0}
          slidesPerView={1}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="slide-inner">
                <img src={src} alt={`Slide ${i + 1}`} className="slide-img" />

                {/* Show animated content for image 2 (index 1) */}
                {i === 1 && (
                  <div className="slide-caption left-in">
                    <h2>BON VOYAGE TO RUSSIA 2024</h2>
                    <p>
                      Summer Internship Training Program for the Students of Bharath Institute of Higher
                      Education and Research at Ural Federal University
                    </p>
                  </div>
                )}
                {/* Animated content for banner19 (index 5) */}
      {i === 5 && (
        <div className="slide-caption bottom-in">
          <h2>39th Convocation – 2023</h2>
          <p>
            Honoring academic excellence and celebrating the achievements of our graduates at Bharath Institute of Higher Education and Research.
          </p>
        </div>
      )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Page content */}
      <PageLayout />
      <FixedLandingSection />
      <UniversityPage />
      <CampusDashboard />
      <FeaturedMedia />
      <Query />
      <Footer />
    </div>
  );
}
