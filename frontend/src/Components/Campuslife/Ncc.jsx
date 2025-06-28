import React from 'react';
import { FaHome, FaBook, FaList } from 'react-icons/fa';
import NccImg from '../../assets/NCC9.png';
import Footer from '../Footer';
import Banner from '../Banner';
import backgroundImage from '../../assets/pattern.jpg';

const NCC = () => (
  <div>
    {/* Top image */}
    <img
      src={NccImg}
      alt="NCC"
      className="ncc-top-image"
    />
    <Banner />

    {/* Header and breadcrumbs */}
    <header className="ncc-header">
      <a href="/" className="ncc-home-link">
        <FaHome />
      </a>
      <a href="/" className="ncc-breadcrumb-link">Campus Life</a>
      <span>»</span>
      <span>NCC</span>
    </header>

    {/* Main layout */}
    <div className="ncc-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Sidebar */}
      <div className="ncc-sidebar">
        <div className="ncc-sidebar-header">
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
        ].map((item, index) => (
          <div
            key={index}
            className={`ncc-sidebar-item ${item === 'Gallery' ? 'gallery-item' : ''}`}
          >
            <FaBook className="ncc-sidebar-icon" />
            {item}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="ncc-content">
        <h2 className="ncc-title">About Us :</h2>
        <br></br>
        <p className="ncc-highlight">
          The NCC unit at BIHER functions under the guidance of Associate NCC Officer – CAPTAIN. Dr. R. Udayakumar, Professor, Department of Information Technology, Faculty of Engineering and Technology who has completed the Direct Commission Refresher Course which is conducted for NCC officers in Officer Training Academy–KAMPTEE.
        </p>
        <br></br>
        <p>
          The objective of National Cadet Corps is to develop character, comradeship, and capacity for leadership among youth in India. NCC at BIHER motivates the students with best training and the ideals of selfless service. The training inculcates team spirit, a sense of nationalism and it also helps in developing the overall personality of an individual. The BIHER NCC was started in 1996 as a Independent Company. The first and the second year students are enrolled for the duration of three years. NCC parades are regularly conducted in BIST Ground on every Saturday from 7.00 to 11.00 AM as per Parade Schedule. Pre-parade meeting is also conducted in front of the NCC Office on every Friday from 4.30 to 5.30 PM
        </p>
        <br></br>
        <p>
          The NCC cadets actively participate in the Independence Day and Republic Day celebration in the campus. Annual Training Camp, Republic Day Camp (RDC - New Delhi), Inter Group Competitions (IGC), National Integration Camp (NIC) and special camps like Trekking Camp, Firing Camp are held periodically.
        </p>
      </div>
    </div>

    <Footer />
  </div>
);

export default NCC;
