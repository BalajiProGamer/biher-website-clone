import React, { useState, useEffect, useRef } from "react";

// 🔽 Importing local images
import classroomImg from '../../assets/classroom.jpg';
import fundingImg from '../../assets/funding.jpg';
import internationalImg from '../../assets/international.jpg';
import orientationImg from '../../assets/orientation.jpg';
import careerImg from '../../assets/career.jpg';
import assessmentImg from '../../assets/assessment.jpg';

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#f9fafb',
    borderRight: '1px solid #e5e7eb',
    padding: '24px',
    marginLeft: '40px',
  },
  sidebarHidden: {
    transform: 'translateX(-100px)',
    opacity: 0,
    transition: 'transform 1s ease, opacity 1s ease',
  },
  sidebarVisible: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  sidebarTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '24px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '8px',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '6px',
  },
  sectionText: {
    fontSize: '14px',
    color: '#4b5563',
    marginBottom: '4px',
  },
  viewMore: {
    fontSize: '14px',
    color: '#dc2626',
    fontWeight: '600',
    textDecoration: 'none',
  },
  main: {
    width: '75%',
    padding: '24px',
    transition: 'transform 1s ease, opacity 1s ease',
    transform: 'translateX(100px)',
    opacity: 0,
  },
  mainVisible: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  mainTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '24px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '8px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'translateY(-6px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  },
  cardImage: {
    width: '100%',
    height: '130px',
    objectFit: 'cover',
  },
  cardFooter: {
    textAlign: 'center',
    padding: '12px',
    color: 'white',
    fontWeight: '600',
  },
  triangle: {
    width: 0,
    height: 0,
    margin: '0 auto',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    position: 'relative',
    top: '-1px',
  },
};

const UniversityPage = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [mainVisible, setMainVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const mainRef = useRef();
  const sidebarRef = useRef();

  const tiles = [
    { title: "NEW CLASSROOM TECHNOLOGY", color: "#f97316", image: classroomImg },
    { title: "GET SUPPORT FUNDING & RESOURCES", color: "#a21caf", image: fundingImg },
    { title: "INTERNATIONAL STUDENTS", color: "#6d28d9", image: internationalImg },
    { title: "NEW STUDENT ORIENTATION", color: "#1d4ed8", image: orientationImg },
    { title: "CAREER OPPORTUNITIES", color: "#fb923c", image: careerImg },
    { title: "PRIOR LEARNING ASSESSMENT", color: "#16a34a", image: assessmentImg },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const mainTop = mainRef.current?.getBoundingClientRect().top;
      const sidebarTop = sidebarRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (mainTop < windowHeight - 100) setMainVisible(true);
      if (sidebarTop < windowHeight - 100) setSidebarVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      {/* Sidebar with scroll animation */}
      <aside
        ref={sidebarRef}
        style={{
          ...styles.sidebar,
          ...styles.sidebarHidden,
          ...(sidebarVisible ? styles.sidebarVisible : {}),
        }}
      >
        <h2 style={styles.sidebarTitle}>Campus Life</h2>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📘 Classroom / Seminar Halls</h3>
          <p style={styles.sectionText}>
            BIHER University is renowned for encouraging academic excellence & celebrating high achievement.
          </p>
          <a href="#" style={styles.viewMore}>VIEW MORE →</a>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>⚽ Sport</h3>
          <p style={styles.sectionText}>
            Sport is enthusiastically celebrated throughout BIHER. Students compete in intercollegiate sports.
          </p>
          <a href="#" style={styles.viewMore}>VIEW MORE →</a>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🎶 Culture</h3>
          <p style={styles.sectionText}>
            Musicians, Vocalists, Performers, Debaters, and Dancers can all shine at BIHER University.
          </p>
          <a href="#" style={styles.viewMore}>VIEW MORE →</a>
        </div>
      </aside>

      {/* Main Content with scroll animation */}
      <main
        ref={mainRef}
        style={{
          ...styles.main,
          ...(mainVisible ? styles.mainVisible : {}),
        }}
      >
        <h1 style={styles.mainTitle}>
          Modern Technologies Demand the Highest Level of Education
        </h1>

        <div style={styles.grid}>
          {tiles.map((tile, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(hoverIndex === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img src={tile.image} alt={tile.title} style={styles.cardImage} />
              <div style={{ ...styles.cardFooter, backgroundColor: tile.color }}>
                {tile.title}
              </div>
              <div
                style={{
                  ...styles.triangle,
                  borderTop: `10px solid ${tile.color}`,
                }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UniversityPage;
