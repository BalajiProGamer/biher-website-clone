import React from 'react';

const Banner = () => {
  const bannerStyle = {
    position: 'fixed', // Changed to absolute to position inside the page
    top: '300px', // Adjusted to place below the navbar and marquee
    right: '0', // Positioned slightly inside the page
    backgroundColor: '#00a2e8',
    color: 'white',
    padding: '12px 22px',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    zIndex: 1000, // Ensure visibility
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '20px',
  };

  return (
    <div style={bannerStyle}>
      <span style={iconStyle}>🎓</span>
      <span>2025 Admission Open for UG/PG</span>
    </div>
  );
};

export default Banner;
