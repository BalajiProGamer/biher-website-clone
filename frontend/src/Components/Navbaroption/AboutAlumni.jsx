import React, { useState } from 'react';
import '../../styles/global.css';

const AboutAlumni = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState("Alumni - Home");

  const toggleExpand = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const sidebarItems = [
    "Alumni - Home",
    "Alumni Registration Certificate",
    "Advisory Board",
    {
      title: "Distinguished Alumni Members",
      children: ["Member 1", "Member 2", "Member 3"],
    },
    "Executive Board",
    "Organisation",
    "List of Departmental Alumni Coordinators",
    "Alumni Chapters & President",
    "Functions",
    "Alumni Events/Activities & Guest Lectures Year wise",
    "Out Standing Achievements",
    "Alumni Startups",
    "Upcoming Alumni Events & Reunions",
    "Alumni Staff",
    "Archives",
    "Newsletter",
  ];

  const contentMap = {
    "Alumni - Home": "Welcome to the BIHER Alumni Home PageThe first self-financing Engineering College in the name of Bharath Institute of Science and Technology (BIST) was started in Tamil Nadu in 1984 by Sri Lakshmi Ammal Educational Trust, established by the academic visionary Dr.S.Jagathrakshakan. The trust then started Sree Balaji Dental College and Hospital, in 1989. Sree Balaji Dental College and Hospital was first recognized as a Deemed to be University by MHRD in July 2002, under section 3 of the UGC Act 1956 under the new trust Bharath Institute of Higher Education and Research (BIHER). The Bharath Institute of Science and Technology (BIST) was then brought under the ambit of Bharath Institute of Higher Education!",
    "Alumni Registration Certificate": "Here is how to obtain your Alumni Registration Certificate...",
    "Advisory Board": "Details about our Alumni Advisory Board...",
    "Executive Board": "Meet the Executive Board of BIHER Alumni...",
    "Organisation": "Overview of the Alumni Organisation...",
    "List of Departmental Alumni Coordinators": "Details of the Departmental Alumni Coordinators...",
    "Alumni Chapters & President": "Information about various Alumni Chapters and their Presidents...",
    "Functions": "Key functions and roles of the Alumni Association...",
    "Alumni Events/Activities & Guest Lectures Year wise": "Year-wise Alumni Events and Guest Lectures details...",
    "Out Standing Achievements": "Outstanding achievements of our alumni...",
    "Alumni Startups": "Startups founded by BIHER alumni...",
    "Upcoming Alumni Events & Reunions": "Upcoming alumni events and reunions schedule...",
    "Alumni Staff": "Meet the staff behind the Alumni Association...",
    "Archives": "Archived materials and past records...",
    "Newsletter": "BIHER Alumni newsletter archive...",
    "Member 1": "Profile of Distinguished Alumni Member 1...",
    "Member 2": "Profile of Distinguished Alumni Member 2...",
    "Member 3": "Profile of Distinguished Alumni Member 3..."
  };

  return (
    <div className="alumni-wrapper">
      <div className="alumni-layout">
        {/* Sidebar */}
        <div className="alumni-sidebar">
          <div className="sidebar-header">
            BIHER - CHAPTERS
            <div className="ribbon">★</div>
          </div>
          <ul className="sidebar-list">
            {sidebarItems.map((item, index) => {
              if (typeof item === 'string') {
                return (
                  <li key={index} className="sidebar-item">
                    <span
                      className="sidebar-link"
                      onClick={() => {
                        setSelectedItem(item);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span className="bullet">●</span> {item}
                    </span>
                  </li>
                );
              } else {
                const isOpen = expandedItem === item.title;
                return (
                  <React.Fragment key={index}>
                    <li
                      className="sidebar-item"
                      onClick={() => toggleExpand(item.title)}
                    >
                      <span className="bullet">●</span> {item.title}
                      <span style={{ float: 'right' }}>{isOpen ? '▾' : '▸'}</span>
                    </li>
                    {isOpen &&
                      item.children.map((child, childIndex) => (
                        <li key={childIndex} className="sidebar-child">
                          <span
                            className="sidebar-link"
                            onClick={() => {
                              setSelectedItem(child);
                              window.scrollTo(0, 0);
                            }}
                          >
                            {child}
                          </span>
                        </li>
                      ))}
                  </React.Fragment>
                );
              }
            })}
          </ul>
        </div>

        {/* Main Content */}
        <div className="alumni-content">
          <div className="title-section">
            <div className="subheading">Alumni & Association</div>
            <h2 className="heading">{selectedItem}</h2>
            <hr className="horizontal-rule" />
          </div>
          <p className="paragraph">
            {contentMap[selectedItem] || "More information will be available soon..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAlumni;
