 import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import rrcBg from '../../assets/pattern.jpg'; // Adjust path as needed
import Banner from '../Banner';

const RRC = () => {
  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      background: 'linear-gradient(to right, #a52a2a, #ee1c25)',
      color: 'white',
      fontFamily: 'Georgia, serif',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    homeLink: {
      color: 'white',
      textDecoration: 'none',
      marginRight: '8px',
    },
    icon: {
      fontSize: '18px',
    },
    separator: {
      margin: '0 8px',
    },
    breadcrumbText: {
      fontSize: '16px',
    },
    backgroundSection: {
      height: '300px',
      backgroundImage: `url(${rrcBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  };

  return (
    <div>
      <div style={styles.header}>
        <Link to="/" style={styles.homeLink}>
          <FaHome style={styles.icon} />
        </Link>
        <span style={styles.separator}>›</span>
        <span style={styles.breadcrumbText}>RRC</span>
      </div>
      <Banner />
      {/* Background image section below header */}
      <div style={styles.backgroundSection}></div>

      <Footer />
    </div>
  );
};

export default RRC;
