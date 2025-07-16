import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from 'react-icons/fa';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';
import NewsSlider from '../Pages/NewsSlider';
import '../../styles/global.css'; // Make sure this CSS includes the new styles
import Query from '../Pages/Query';
import Banner from '../Banner';

const categories = [
  { key: 'flagship', label: 'Our Flagship Events' },
  { key: 'internationalDay', label: 'Annual International Day' },
  { key: 'pastEvents', label: 'Past OIR Events' },
  { key: 'upcomingEvents', label: 'Upcoming OIR Events' },
];
const contentMap = {
  flagship: `Annually the International Relations office of BIHER organizes a series of events and initiatives which have been fostered in an atmosphere of internationalization. From cross-cultural sharing events to academic activities, the cell continuously creates an atmosphere of constant and regular engagement which provides students with the finest exposure. Through this consistent practice, the cell has been able to develop a constant culture of knowledge sharing through the most creative and innovative ways inspired by a need to promote corporation and common growth amongst students and faculties. The cell believes not only in fostering international collaborations, but also in furthering the scope of knowledge in regards to globalization in higher education. To further this purpose, various international conferences, seminars, exhibitions and conclaves are organized which provide enriching comprehensive insights from diverse global perspectives.`,

  internationalDay: `As a way of promoting internationalization in education amongst representatives from various Universities across the world, the International Relations office hosts and organizes the International Day Exhibition, which is an annual exhibition conducted so as to provide students with an enriching exposure to the endless academic opportunities from universities across the world. The platform also brings for the students a platform for academic counseling so as to develop an in-depth understanding of the various aspects of global higher education.`,

  pastEvents: `Our out-bound mobility programs are strategically designed to provide our students and faculties with the most enriching global exposure throughout the academic journey. We organize a series of short term and long-term programs which serve the purpose of facilitating abroad learning platforms in countries such as Russia, Switzerland, Canada, United States of America, Germany, Poland, Czech Republic, Greece, France, amongst others. These programs do not only provide students and faculties with a unique learning experience, but they also go on to provide a unique cultural and global exposure, in Nations across the world. So, take the first step`,

  upcomingEvents: ``,
};



const Events = () => {
  const [selectedKey, setSelectedKey] = useState('flagship');

  return (
    <div>
      <ImageSlider />

      {/* Header */}
      <div className="events-header">
        <div className="events-header-content">
          <Link to="/" className="home-icon">
            <FaHome />
          </Link>
          <span className="breadcrumb-text">» <em>International Events</em></span>
        </div>
      </div>

      {/* Background Image Section with Left-Right Layout */}
      <div className="events-section">
        <div className="events-container">
          {/* Left Sidebar */}
          <div className="events-sidebar">
            <div className="events-sidebar-header">
              <FaBook className="book-icon" /> Categories
            </div>
            {categories.map((cat) => (
              <div
                key={cat.key}
                className={`events-nav-item ${selectedKey === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedKey(cat.key)}
              >
                <FaBook className="book-icon" /> | {cat.label}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="events-content">
            <h3>{categories.find(c => c.key === selectedKey)?.label} :</h3>
            <hr />
            <p>{contentMap[selectedKey]}</p>
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

export default Events;
