import React, { useState } from 'react';
import { FaHome, FaBook, FaList } from 'react-icons/fa';
import NccImg from '../../assets/NCC9.png';
import Footer from '../Footer';
import Banner from '../Banner';
import '../../styles/global.css';
import backgroundImage from '../../assets/pattern.jpg';
import gallery1 from '../../assets/ncc1.jpg';
import gallery2 from '../../assets/ncc2.jpg';
import gallery3 from '../../assets/Ncc3.jpg';
import gallery4 from '../../assets/ncc4.jpg';
import gallery5 from '../../assets/ncc5.jpg';
import gallery6 from '../../assets/ncc6.jpg';
import gallery7 from '../../assets/ncc7.jpg';
import gallery8 from '../../assets/ncc8.jpg';
import gallery9 from '../../assets/ncc9.jpg';

const categoryItems = [
  'About Us',
  'NCC Activities',
  'Student Achievement',
  'Chronicle',
  'Gallery',
];

const galleryImages = [
  gallery1, gallery2, gallery3,
  gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9,
];

const NCC = () => {
  const [activeTab, setActiveTab] = useState('About Us');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'About Us':
        return (
          <>
            <h2 className="ncc-title">About Us :</h2>
            <p className="ncc-highlight">
              The NCC unit at BIHER functions under the guidance of Associate NCC Officer –
              <strong> CAPTAIN. Dr. R. Udayakumar</strong>, Professor, Department of Information Technology,
              Faculty of Engineering and Technology who has completed the Direct Commission Refresher Course
              which is conducted for NCC officers in Officer Training Academy–KAMPTEE.
            </p>
            <p>
              The objective of National Cadet Corps is to develop character, comradeship, and capacity for
              leadership among youth in India. NCC at BIHER motivates the students with best training and the
              ideals of selfless service. The training inculcates team spirit, a sense of nationalism and it
              also helps in developing the overall personality of an individual. The BIHER NCC was started in
              1996 as an Independent Company...
            </p>
          </>
        );

      case 'NCC Activities':
        const yearLinks = [
          { year: '2016-2017', url: 'https://www.bharathuniv.ac.in/ncc/NCC%202016-2017.pdf' },
          { year: '2017-2018', url: 'https://www.bharathuniv.ac.in/ncc/NCC%202017-2018.pdf' },
          { year: '2018-2019', url: 'https://www.bharathuniv.ac.in/ncc/NCC%202018-2019.pdf' },
          { year: '2019-2020', url: 'https://www.bharathuniv.ac.in/ncc/NCC%202019-2020.pdf' },
          { year: '2020-2021', url: 'https://www.bharathuniv.ac.in/ncc/NCC%202020-2021.pdf' },
        ];

        return (
          <>
            <h2 className="ncc-title">Activities :</h2>
            <div className="ncc-grid">
              {yearLinks.map((item) => (
                <a
                  key={item.year}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ncc-year-box"
                >
                  <span>{item.year}</span>
                  <span className="arrow">→</span>
                </a>
              ))}
            </div>
          </>
        );

      case 'Student Achievement':
        return (
          <>
            <h2 className="ncc-title">Student Achievements :</h2>
            <div className="student-achievement-wrapper">
              <a
                href="https://www.bharathuniv.ac.in/ncc/NCC%20Achievements/RDC%20Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-box"
              >
                <span className="achievement-text">RDC Meets</span>
                <span className="achievement-arrow">→</span>
              </a>
            </div>
          </>
        );

      case 'Chronicle':
        return (
          <>
            <h2 className="chronicle-title">Chronicle</h2>
            <ul className="chronicle-list">
              <li>Started in the year 1996, as an independent company.</li>
              <li>Dr. V. Kannan is the first NCC Co-ordinator on 21st May 1996.</li>
              <li>Enrollment of 20 cadets done on 19th July 1996.</li>
              <li>First Parade was held on 15th August 1996 at the College Ground from 7am to 11am.</li>
              <li>Tree plantation programme was conducted on 28th September 1996...</li>
              <li>...and more</li>
            </ul>
          </>
        );

      case 'Gallery':
        return (
          <>
            <h2 className="ncc-title">NCC - <span className="gallery-highlight">Gallery :</span></h2>
            <div className="gallery-grid">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => {
                    setCurrentImage(src);
                    setModalOpen(true);
                  }}
                >
                  <img src={src} alt={`NCC Event ${index + 1}`} />
                </div>
              ))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <img src={NccImg} alt="NCC" className="ncc-top-image" />
      <Banner />
<header className="ncc-header">
  <FaHome />
  <a href="/" className="ncc-breadcrumb-link">Campus Life</a>
  <span>»</span>
  <span>NCC</span>
</header>


      <div
        className="ncc-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="ncc-card">
          <div className="ncc-sidebar">
            <div className="ncc-sidebar-header">
              <FaList /> Categories
            </div>
            {categoryItems.map((item) => (
              <div
                key={item}
                className={`ncc-sidebar-item ${activeTab === item ? 'active' : ''}`}
                onClick={() => setActiveTab(item)}
              >
                <FaBook className="ncc-icon" />
                {item}
              </div>
            ))}
          </div>

          <div className="ncc-content">
            {renderContent()}
          </div>
        </div>
      </div>

      {modalOpen && (
  <div className="modal-overlay" onClick={() => setModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-arrow left" onClick={() => {
        const currentIndex = galleryImages.indexOf(currentImage);
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentImage(galleryImages[prevIndex]);
      }}>&#10094;</button>

      <img src={currentImage} alt="Full View" className="modal-image" />

      <button className="modal-arrow right" onClick={() => {
        const currentIndex = galleryImages.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentImage(galleryImages[nextIndex]);
      }}>&#10095;</button>

      <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
};

export default NCC;
