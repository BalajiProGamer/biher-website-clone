 import React, { useState } from 'react';
import patternImage from '../../../assets/pattern.jpg'; // Make sure this path is correct

const ExecutiveCouncilMembers = () => {
  const [activeTab, setActiveTab] = useState('members');

  const sectionStyle = {
    display: 'flex',
    height: '100vh',
    backgroundImage: `url(${patternImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Arial, sans-serif',
  };

  const sidebarStyle = {
    width: '280px',
    backgroundColor: '#0D74B8',
    padding: '20px 10px',
    
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    fontSize: '15px',
  };

  const buttonStyle = (tab) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: activeTab === tab ? '#0A5A92' : 'transparent',
    color: '#fff',
    padding: '14px 18px',
    marginBottom: '15px',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '4px',
    boxShadow: activeTab === tab ? 'inset 5px 0px 0px white' : 'none',
    transition: 'background-color 0.3s ease',
  });

  const contentStyle = {
    flex: 1,
    padding: '40px 50px',
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    overflowY: 'auto',
  };

  const headingStyle = {
    color: '#8a1212',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'members':
        return (
          <>
            <div style={headingStyle}>LIST OF MEMBERS:</div>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thTdStyle}>S.No</th>
                  <th style={thTdStyle}>NAME OF THE MEMBER</th>
                  <th style={thTdStyle}>DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={thTdStyle}>01</td><td style={thTdStyle}>Dr. M. Sundararajan</td><td style={thTdStyle}>Vice-Chancellor(i/C) BIHER</td></tr>
                <tr><td style={thTdStyle}>02</td><td style={thTdStyle}>Dr. R.M. Suresh</td><td style={thTdStyle}>Pro Vice-Chancellor</td></tr>
                <tr>
                  <td colSpan="3" style={{ ...thTdStyle, fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Dean of Faculties</td>
                </tr>
                <tr><td style={thTdStyle}>03</td><td style={thTdStyle}>Dr. R.P. Sasi Kumar</td><td style={thTdStyle}>Dean, SBMCH</td></tr>
                <tr><td style={thTdStyle}>04</td><td style={thTdStyle}>Dr. S. Praveen Kumar</td><td style={thTdStyle}>Dean, School of Management and Commerce</td></tr>
                <tr><td style={thTdStyle}>05</td><td style={thTdStyle}>Nominee Awaited</td><td style={thTdStyle}></td></tr>
                <tr>
                  <td colSpan="3" style={{ ...thTdStyle, fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                    Teachers of the Institution (Professor, Associate Professor & Assistant Professor)
                  </td>
                </tr>
                <tr><td style={thTdStyle}>06</td><td style={thTdStyle}>Dr. S. Lakshmi</td><td style={thTdStyle}>Professor, School of Electrical Engineering</td></tr>
              </tbody>
            </table>
          </>
        );
      case 'minutes':
        return (
          <>
            <div style={headingStyle}>MINUTES & MEETING</div>
            <p>Details of meetings and minutes will be displayed here.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={sectionStyle}>
      {/* Left Sidebar */}
      <div style={sidebarStyle}>
        <button style={buttonStyle('members')} onClick={() => setActiveTab('members')}>
          <span style={{ fontSize: '18px' }}>✓</span>
          EXECUTIVE COUNCIL MEMBERS
        </button>
        <button style={buttonStyle('minutes')} onClick={() => setActiveTab('minutes')}>
          <span style={{ fontSize: '18px' }}>✓</span>
          MINUTES & MEETING
        </button>
      </div>

      {/* Right Content */}
      <div style={contentStyle}>
        <h4 style={{ color: '#003c71', marginBottom: '5px', letterSpacing: '1px' }}>Statutory Bodies</h4>
        <h2 style={{ margin: '5px 0', color: '#222' }}>
          EXECUTIVE COUNCIL <span style={{ color: '#8a1212' }}>MEMBERS ( 2024-2025 )</span>
        </h2>
        <hr style={{ borderColor: '#ccc', margin: '20px 0' }} />
        {renderContent()}
      </div>
    </div>
  );
};

export default ExecutiveCouncilMembers;
