import React, { useState } from 'react';
import '../../../styles/global.css';
import Footer from '../../Footer';
import bgImage from '../../../assets/pattern.jpg';

const ExecutiveCouncilMembers = () => {
  const [activeTab, setActiveTab] = useState('members');

  return (
    <>
      <div
        className="executive-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="content-box">
          {/* Sidebar */}
          <div className="sidebar">
            <div
              className={`nav-item ${activeTab === 'members' ? 'active' : ''}`}
              onClick={() => setActiveTab('members')}
            >
              ✔ EXECUTIVE COUNCIL MEMBERS
            </div>
            <div
              className={`nav-item ${activeTab === 'minutes' ? 'active' : ''}`}
              onClick={() => setActiveTab('minutes')}
            >
              ✔ MINUTES & MEETING
            </div>
          </div>

          {/* Right Content */}
          <div className="executive-content">
            {activeTab === 'members' && (
              <>
                <h2 className="heading">EXECUTIVE COUNCIL MEMBERS (2024 - 2025)</h2>
                <h4 className="subheading">LIST OF MEMBERS (W.E.F Jan 2025):</h4>

                <table className="executive-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>NAME OF THE MEMBER</th>
                      <th>DESIGNATION</th>
                      <th>MEMBERSHIP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Dr. M. Sundararajan</td>
                      <td>Vice-Chancellor (i/c)</td>
                      <td>Chairperson</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Dr. R.M. Suresh</td>
                      <td>Pro Vice-Chancellor & CoE</td>
                      <td>Member</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </>
            )}

            {activeTab === 'minutes' && (
              <>
                <h3 className="subheading">Minutes & Meeting</h3>
                <p>Meeting details and decisions will be listed here...</p>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ExecutiveCouncilMembers;
