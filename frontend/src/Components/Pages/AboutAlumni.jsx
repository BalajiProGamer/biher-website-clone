 import React, { useState } from 'react';

const AboutAlumni = () => {
  const [expandedItem, setExpandedItem] = useState(null);

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

  const styles = {
    wrapper: {
      backgroundImage: 'url("../../assets/pattern.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '50px 20px',
      minHeight: '100vh',
    },
    layout: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-start',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sidebar: {
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
      position: 'relative',
    },
    sidebarHeader: {
      backgroundColor: '#f4f4f4',
      padding: '16px',
      fontWeight: 'bold',
      color: '#003b8e',
      letterSpacing: '0.05em',
      position: 'relative',
      borderBottom: '1px solid #ddd',
    },
    ribbon: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #cb2d6f 0%, #9546c4 100%)',
      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
      color: 'white',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sidebarList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    sidebarItem: {
      padding: '12px 16px',
      borderBottom: '1px solid #eee',
      cursor: 'pointer',
      color: '#003b8e',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
    },
    sidebarChild: {
      padding: '10px 24px',
      backgroundColor: '#f9f9f9',
      fontSize: '13px',
      color: '#555',
    },
    bullet: {
      marginRight: '8px',
      color: '#003b8e',
      fontSize: '10px',
    },
    content: {
      flex: 1,
      padding: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.8',
    },
    titleSection: {
      marginBottom: '10px',
    },
    subheading: {
      color: '#003b8e',
      fontSize: '16px',
      fontWeight: '600',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      borderLeft: '4px solid #f7b731',
      paddingLeft: '10px',
    },
    heading: {
      color: '#d12c2c',
      fontSize: '20px',
      fontWeight: '700',
      margin: '10px 0',
    },
    horizontalRule: {
      border: 'none',
      borderTop: '1px solid #ccc',
      margin: '10px 0 20px',
    },
    paragraph: {
      textAlign: 'justify',
      fontSize: '16px',
      color: '#333',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.layout}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            BIHER - CHAPTERS
            <div style={styles.ribbon}>★</div>
          </div>
          <ul style={styles.sidebarList}>
            {sidebarItems.map((item, index) => {
              if (typeof item === 'string') {
                return (
                  <li key={index} style={styles.sidebarItem}>
                    <span><span style={styles.bullet}>●</span>{item}</span>
                  </li>
                );
              } else {
                const isOpen = expandedItem === item.title;
                return (
                  <React.Fragment key={index}>
                    <li style={styles.sidebarItem} onClick={() => toggleExpand(item.title)}>
                      <span><span style={styles.bullet}>●</span>{item.title}</span>
                      <span>{isOpen ? '▾' : '▸'}</span>
                    </li>
                    {isOpen &&
                      item.children.map((child, childIndex) => (
                        <li key={childIndex} style={styles.sidebarChild}>
                          {child}
                        </li>
                      ))}
                  </React.Fragment>
                );
              }
            })}
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          <div style={styles.titleSection}>
            <div style={styles.subheading}>Alumni & Association</div>
            <h2 style={styles.heading}>About Us :</h2>
            <hr style={styles.horizontalRule} />
          </div>
          <p style={styles.paragraph}>
            The first self-financing Engineering College in the name of Bharath Institute of Science and Technology (BIST) was started in Tamil Nadu in 1984 by Sri Lakshmi Ammal Educational Trust, established by the academic visionary Dr. S. Jagathrakshakan. The trust then started Sree Balaji Dental College and Hospital, in 1989. Sree Balaji Dental College and Hospital was first recognized as a Deemed to be University by MHRD in July 2002, under section 3 of the UGC Act 1956 under the new trust Bharath Institute of Higher Education and Research (BIHER). The Bharath Institute of Science and Technology (BIST) was then brought under the ambit of Bharath Institute of Higher Education.
          </p>
          <p style={styles.paragraph}>
            Thus, Bharath Institute of Higher Education and Research (BIHER) is providing multi-stream, multi-cultural and high quality education to nearly 10000 students from around the world. It is functioning in a sprawling area of 603 acres of land with 1.3 crore sq.ft buildings located in 6 Campuses both in Tamil Nadu and Puducherry with the state of the art infrastructure facilities. There are well qualified Teaching Faculty members to teach various UG and PG programmes and to guide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAlumni; 