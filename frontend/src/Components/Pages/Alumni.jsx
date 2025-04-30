 import React from 'react';
import Footer from '../Footer';
import { FaHome, FaGraduationCap } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AboutAlumni from './AboutAlumni';

const Alumni = () => {
  const styles = {
    alumniContainer: {
      padding: '0',
      margin: '0',
      fontFamily: 'Arial, sans-serif',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '75vh',
      overflow: 'hidden',
      backgroundColor: '#003b8e',
    },
    backgroundImage: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
    },
    overlayImage: {
      position: 'absolute',
      right: '10%',
      bottom: '0',
      height: '90%',
      zIndex: 2,
    },
    overlayText: {
      position: 'absolute',
      top: '50%',
      left: '45%',
      transform: 'translate(-50%, -50%)',
      zIndex: 3,
      textAlign: 'center',
      width: '100%',
    },
    mainHeading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: '10px',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      letterSpacing: '0.4em',
      color: 'white',
    },
    welcome: {
      color: 'white',
    },
    highlight: {
      color: '#f89c1c',
      borderBottom: '2px solid white',
      paddingBottom: '4px',
    },
    subheading: {
      marginTop: '10px',
      color: '#48d1cc',
      fontSize: '1.5rem',
      fontWeight: '500',
      letterSpacing: '0.05em',
    },
    banner: {
      position: 'absolute',
      bottom: '5%',
      right: '5%',
      backgroundColor: '#2ca8df',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '1rem',
      fontWeight: '500',
      whiteSpace: 'nowrap',
      zIndex: 4,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start', // Align the header content to the left
      padding: '10px 20px',
      background: 'linear-gradient(to right, #a82323, #f21c3c)',
      color: 'white',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      gap: '28px',
    },
    homeLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.2rem',
      
    },
    headerText: {
      color: 'white',
      fontSize: '1rem',
      fontStyle: 'italic',
    },
  };

  return (
    <div style={styles.alumniContainer}>
      <div style={styles.imageContainer}>
        <img
          src="assets/hero-1-bg.jpg"
          alt="Alumni Background"
          style={styles.backgroundImage}
        />
        <img
          src="assets/teacher-2.png"
          alt="Overlay"
          style={styles.overlayImage}
        />

        {/* Banner */}
        <div style={styles.banner}>
          <FaGraduationCap />
          2025 Admission Open for UG/PG
        </div>

        {/* Center Text */}
        <div style={styles.overlayText}>
          <div style={styles.mainHeading}>
            <span style={styles.welcome}>WELCOME TO</span>
            <span style={styles.highlight}>BIHER</span>
          </div>
          <div style={styles.subheading}>Alumni Association</div>
        </div>
      </div>

      {/* Header Section */}
      <div style={styles.header}>
        <Link to="/" style={styles.homeLink}>
          <FaHome />
        </Link>
        <span>&raquo;</span>
        <span style={styles.headerText}>BIHER - ALUMNI</span>
      </div>

      <AboutAlumni/>
      <Footer/>
    </div>
  );
};

export default Alumni;