import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Imageslider from '../ImageSlider';
import Query from '../Pages/Query';
import Banner from '../Banner';
import Footer from '../Footer';
import NewsSlider from '../Pages/NewsSlider';
import '../../styles/global.css'; // Your global styles

const Contact = () => {
  const navigate = useNavigate();
  const [infoMessage, setInfoMessage] = useState('');

  const handleFlagClick = (countryCode) => {
    const countryRoutes = {
      us: '/partner-universities/north-america',
      ru: '/partner-universities/russia',
      jp: '/partner-universities/japan',
    };

    if (countryRoutes[countryCode]) {
      setInfoMessage('');
      navigate(countryRoutes[countryCode]);
    } else {
      setInfoMessage('');
    }
  };

  return (
    <>
      <Imageslider />
      <Banner />
      <Query />

      <div className="breadcrumb-containercontact">
        <Link to="/" className="breadcrumb-homecontact">
          <FaHome />
        </Link>
        <span className="breadcrumb-separatorcontact">» <em>Contact</em></span>
        <span className="breadcrumb-currentcontact"></span>
      </div>

      <div className="contact-content">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Contact Us :</h3>
          <hr />
          <p>
            <strong>Office of International Relations,</strong><br />
            Bharath Institute of Higher Education and Research (deemed to be university),<br />
            Main Building, Second Floor,<br />
            #173 Agharam Road Selaiyur,<br />
            Chennai – 600 073, Tamil Nadu, India.<br />
            📧 director.international@bharathuniv.ac.in
          </p>

          <h4>MOU Signed Countries :</h4>
          <div className="flag-grid">
            {[
              'us', 'gb', 'ru', 'my', 'th', 'sg', 'fr', 'jp', 'ge', 'de',
              'ca', 'au', 'it', 'bd', 'kg', 'mv', 'ph', 'pk', 'lk'
            ].map((code, index) => (
              <img
                key={index}
                src={`https://flagcdn.com/w80/${code}.png`}
                alt={code}
                className="flag-img"
                onClick={() => handleFlagClick(code)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>

          {/* Info message for unavailable countries */}
          {infoMessage && <p className="info-message">{infoMessage}</p>}
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <div className="card know-more">
            <h4><span className="icon">🔖</span> Know More</h4>
            <ul>
              <li>🔹 BIHER Faculty Globally</li>
              <li>🔹 Partner Universities/Organizations</li>
              <li>🔹 Summer Internship Russia Program</li>
              <li>🔹 Visiting Foreign Faculty</li>
              <li>🔹 Study In India</li>
            </ul>
          </div>

          <div className="card info-form">
            <h4><span className="icon">🔖</span> For More Information</h4>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" />

              <label>Comment:</label>
              <textarea placeholder="Your comment"></textarea>

              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>

      <NewsSlider />
      <Footer />
    </>
  );
};

export default Contact;
