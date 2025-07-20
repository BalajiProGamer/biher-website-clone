import React, { useState } from 'react';
import '../../../styles/global.css';
import Footer from '../../Footer';
import bgImage from '../../../assets/pattern.jpg';
import GroupIcon from '@mui/icons-material/Group';
import Query from '../../Pages/Query';
import Banner from '../../Banner';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const AcademicCouncilMembers = () => {
  const [activeTab, setActiveTab] = useState('members');

  const meetingData = [
    {
      year: '2015 – 2016',
      meetings: ['AC Meeting --> 1', 'AC Meeting --> 2', 'AC Meeting --> 3', 'AC Meeting --> 4'],
    },
    {
      year: '2016 – 2017',
      meetings: ['AC Meeting --> 1', 'AC Meeting --> 2', 'AC Meeting --> 3', 'AC Meeting --> 4'],
    },
    {
      year: '2017 – 2018',
      meetings: ['AC Meeting --> 1', 'AC Meeting --> 2', 'AC Meeting --> 3', 'AC Meeting --> 4'],
    },
    {
      year: '2018 – 2019',
      meetings: ['AC Meeting --> 1', 'AC Meeting --> 2', 'AC Meeting --> 3', 'AC Meeting --> 4'],
    },
    {
      year: '2019 – 2020',
      meetings: ['AC Meeting --> 1', 'AC Meeting --> 2', 'AC Meeting --> 3', 'AC Meeting --> 4'],
    },
    {
      year: '2020 – 2021',
      meetings: ['AC Meeting --> 1', 'AC Meeting --> 2', 'AC Meeting --> 3', 'AC Meeting --> 4'],
    },
  ];

  return (
    <>
      <div className="academic-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="content-box">
          {/* Sidebar */}
          <div className="sidebar">
            <div
              className={`nav-item ${activeTab === 'members' ? 'active' : ''}`}
              onClick={() => setActiveTab('members')}
            >
              ACADEMIC COUNCIL MEMBERS
            </div>
            <div
              className={`nav-item ${activeTab === 'minutes' ? 'active' : ''}`}
              onClick={() => setActiveTab('minutes')}
            >
              MINUTES & MEETING
            </div>
          </div>

          {/* Right Content */}
          <div className="academic-content">
            {activeTab === 'members' && (
              <>
                <h2 className="heading">ACADEMIC COUNCIL MEMBERS (2024 - 2025)</h2>
                <h4 className="subheading">LIST OF MEMBERS (W.E.F Jan 2025):</h4>

                <table className="academic-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>NAME OF THE MEMBER</th>
                      <th>DESIGNATION</th>
                      <th>MEMBERSHIP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>01</td><td>Dr. M. Sundararajan</td><td>Vice-Chancellor (i/c)</td><td>Chairperson</td></tr>
                    <tr><td>02</td><td>Dr. R.M. Suresh</td><td>Pro Vice-Chancellor & CoE</td><td>Member</td></tr>
                    <tr><td>03</td><td>Dr. R.P. Sasi Kumar</td><td>Dean, SBMCH</td><td>Member</td></tr>
                    <tr><td>04</td><td>Dr. M. Sundararaj</td><td>Dean Academics, BIHER</td><td>Member</td></tr>
                    <tr><td>05</td><td>Dr. M.R. Renuka Devi</td><td>Professor, School of Medicine, SBMCH</td><td>Member</td></tr>
                    <tr><td>06</td><td>Dr. K. Saraswathy</td><td>Associate Professor, School of Arts and Science</td><td>Member</td></tr>
                    <tr><td>07</td><td>Dr. Geetha Priya</td><td>Assistant Professor, School of Dental Sciences</td><td>Member</td></tr>
                    <tr><td>08</td><td>Dr. G. Baskaran</td><td>Prof, Gandhigram Rural Institute...</td><td>UGC Nominee</td></tr>
                    <tr><td>09</td><td>Dr. J. Sundeep Aanand</td><td>Secretary, BIHER</td><td>Nominee</td></tr>
                    <tr><td>10</td><td>Dr. J. Srinisha</td><td>Vice President, Sree Balaji Group</td><td>Nominee</td></tr>
                  </tbody>
                </table>
              </>
            )}

            {activeTab === 'minutes' && (
              <>
                <h3 className="minutes-heading">Minutes & Meeting (2023–2024):</h3>

                {meetingData.map((yearData, index) => (
                  <div key={index} className="minutes-box">
                    <div className="minutes-header">
                      <GroupIcon style={{ color: 'white', marginRight: '8px', verticalAlign: 'middle' }} />
                      {yearData.year}
                    </div>
                    <ul className="meeting-list">
                      {yearData.meetings.map((meeting, idx) => (
                        <li key={idx}>
                          <CheckBoxIcon style={{ color: '#333', fontSize: '16px', marginRight: '6px', verticalAlign: 'middle' }} />
                          {meeting}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Query />
      <Banner />
      <Footer />
    </>
  );
};

export default AcademicCouncilMembers;
