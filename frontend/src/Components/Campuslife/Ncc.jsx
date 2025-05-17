 import React from 'react';
import { FaHome, FaBook, FaList } from 'react-icons/fa';
import NccImg from '../../assets/NCC9.png';
import Footer from '../Footer';
import Banner from '../Banner';
import backgroundImage from '../../assets/pattern.jpg'; // <-- Add your background image here

const headerStyles = {
  background: 'linear-gradient(180deg, #cc1c1f, #9e1920)',
  padding: '10px 20px',
  color: '#fff',
  fontFamily: "'Times New Roman', serif",
  fontSize: '16px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const breadcrumbLinkStyles = {
  color: '#fff',
  textDecoration: 'none',
  fontStyle: 'italic',
};

const containerStyles = {
  display: 'flex',
  maxWidth: '1200px',
  margin: '40px auto',
  padding: '20px',
  gap: '20px',
  backgroundImage: `url(${backgroundImage})`,  // <-- Background image applied here
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
};

const sidebarStyles = {
  width: '250px',
  backgroundColor: 'rgba(0, 51, 68, 0.85)', // Slight transparency to show bg behind
  borderRadius: '8px 8px 0 0',
  overflow: 'hidden',
  fontFamily: 'Georgia, serif',
  color: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const sidebarHeader = {
  backgroundColor: '#f7b801',
  padding: '7px 12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#000',
};

const sidebarItem = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 16px',
  borderBottom: '1px solid rgba(255,255,255,0.15)',
  color: '#fff',
  textDecoration: 'none',
  transition: 'background 0.3s',
  cursor: 'pointer',
};

const contentStyles = {
  flex: 1,
  fontFamily: 'Georgia, serif',
  lineHeight: '1.8',
  color: '#333',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',  // White background with some opacity
  borderRadius: '8px',
  padding: '20px',
};

const highlightedText = {
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '#004080',
};

const NCC = () => (
  <div>
    {/* Top image */}
    <img
      src={NccImg}
      alt="NCC"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
     <Banner/>
    {/* Header and breadcrumbs */}
    <header style={headerStyles}>
      <a href="/" style={{ color: '#fff', display: 'flex' }}>
        <FaHome />
      </a>
      <a href="/" style={breadcrumbLinkStyles}>Campus Life</a>
      <span>»</span>
      <span>NCC</span>
    </header>

    {/* Main content with sidebar */}
    <div style={containerStyles}>
      {/* Sidebar */}
      <div style={sidebarStyles}>
        <div style={sidebarHeader}>
          <FaList />
          Categories
        </div>
        {[
  'About Us',
  'NCC Activities',
  'Student Achievement',
  'Student Achievement Photos',
  'Chronicle',
  'Gallery',
].map((item, index) => {
  const isGallery = item === 'Gallery';
  return (
    <div
      key={index}
      style={{
        ...sidebarItem,
        padding: isGallery ? '6px 16px' : '16px 14px', // Reduced top-bottom padding for "Gallery"
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <FaBook style={{ marginRight: '10px' }} />
      {item}
    </div>
  );
})}


      </div>

      {/* Content */}
      <div style={contentStyles}>
        <h2 style={{ color: '#9e1920' }}>About Us :</h2>
        <p style={highlightedText}>
          The NCC unit at BIHER functions under the guidance of Associate NCC Officer – CAPTAIN. Dr. R. Udayakumar, Professor, Department of Information Technology, Faculty of Engineering and Technology who has completed the Direct Commission Refresher Course which is conducted for NCC officers in Officer Training Academy–KAMPTEE.
        </p>
        <p>
          The objective of National Cadet Corps is to develop character, comradeship, and capacity for leadership among youth in India. NCC at BIHER motivates the students with best training and the ideals of selfless service. The training inculcates team spirit, a sense of nationalism and it also helps in developing the overall personality of an individual. The BIHER NCC was started in 1996 as an Independent Company. The first and the second year students are enrolled for the duration of three years. NCC parades are regularly conducted in BIST Ground on every Saturday from 7.00 to 11.00 AM as per Parade Schedule. Pre-parade meeting is also conducted in front of the NCC Office on every Friday from 4.30 to 5.30 PM.
        </p>
        <p>
          The NCC cadets actively participate in the Independence Day and Republic Day celebration in the campus. Annual Training Camp, Republic Day Camp (RDC – New Delhi), Inter Group Competitions (IGC), National Integration Camp (NIC) and special camps like Trekking Camp, Firing Camp, etc. are held periodically.
        </p>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default NCC;
