 import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import headerImage from '../../assets/pattern.jpg'; // pattern background
import Footer from '../Footer';

const Overview = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Breadcrumb Header */}
      <div style={{
        background: 'linear-gradient(to right, #8e2c2c, #e61b23)',
        color: '#fff',
        padding: '12px 30px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '16px' }}>
          <FaHome
            style={{ marginRight: '8px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
            title="Go to Home"
          />
          <span style={{ marginRight: '5px' }}>»</span>
          <span style={{ marginRight: '5px' }}>About Us</span>
          <span style={{ margin: '0 5px' }}>»</span>
          <span style={{ fontStyle: 'italic' }}>Overview</span>
        </div>
      </div>

      {/* ✅ Background Wrapper */}
      <div style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        padding: '40px 20px',
      }}>
        {/* Page Content Area */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '20px',
        }}>
          {/* Sidebar (Categories) */}
          <div style={{
            width: '300px',
            background: '#032539',
            color: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            padding: '20px',
          }}>
            <h3 style={{
              backgroundColor: '#ffc107',
              color: '#000',
              padding: '10px',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              margin: '-20px -20px 20px -20px',
            }}>📚 Categories</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>About Us</li>
              <li>Vision & Mission</li>
              <li>Vision Plan</li>
              <li>Vision Implementation Plan</li>
              <li>Strength Of The Institution</li>
              <li>Inception & Brief History</li>
              <li>Professional Society</li>
              <li>Approvals</li>
              <li>Ranking & Accreditation</li>
            </ul>
          </div>

          {/* Main Content */}
          <div style={{
            background: '#fff',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            flex: 1,
          }}>
            <h2 style={{ color: '#004080' }}>About Us</h2>
            <h3 style={{ color: '#e61b23' }}>Welcome to - <strong>BIHER</strong> :</h3>
            <p style={{ lineHeight: '1.8', color: '#333' }}>
              Sri Lakshmi Ammal Educational Trust was established with a visionary mission to revolutionize higher education in Tamil Nadu. In 1984, under the dynamic leadership of Dr. S. Jagathrakshakan, the Trust founded the Bharath Institute of Science and Technology (BIST), marking a historic milestone as the first self-financing engineering college in the state...
            </p>
            {/* You can continue adding other paragraphs or sections here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Overview;
