import React, { useState } from "react";

// Import images
import classroomImg from "../../assets/classroom.jpg";
import fundingImg from "../../assets/funding.jpg";
import internationalImg from "../../assets/international.jpg";
import orientationImg from "../../assets/orientation.jpg";
import careerImg from "../../assets/career.jpg";
import assessmentImg from "../../assets/assessment.jpg";

// Import icons
import { FaChalkboardTeacher, FaFutbol, FaMusic } from "react-icons/fa";

const styles = {
  container: {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#f9fafb",
    padding: "24px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    marginRight: "24px",
  },
  sidebarTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "24px",
    color: "#0f172a",
    borderBottom: "2px solid #ccc",
    paddingBottom: "8px",
    textTransform: "uppercase",
  },
  section: {
    marginBottom: "24px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "16px",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: "8px",
    textTransform: "uppercase",
  },
  sectionIcon: {
    marginRight: "8px",
    fontSize: "18px",
  },
  sectionText: {
    fontSize: "14px",
    color: "#334155",
    lineHeight: "1.5",
    marginBottom: "8px",
  },
  viewMore: {
    fontSize: "14px",
    color: "#b91c1c",
    textDecoration: "none",
    fontWeight: "600",
    float: "right",
  },
  main: {
    width: "70%",
  },
  mainTitle: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#1e293b",
    textTransform: "uppercase",
    marginBottom: "24px",
    borderBottom: "2px solid #ccc",
    paddingBottom: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  card: {
    borderRadius: "6px",
    overflow: "hidden",
    backgroundColor: "#fff",
    transition: "all 0.3s ease-in-out",
  },
  cardImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  },
  cardFooter: {
    padding: "12px",
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontSize: "14px",
    textTransform: "uppercase",
    position: "relative",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "10px solid",
    margin: "0 auto",
  },
};

const SidebarSection = ({ icon, title, text }) => (
  <div style={styles.section}>
    <div style={styles.sectionTitle}>
      <span style={styles.sectionIcon}>{icon}</span>
      {title}
    </div>
    <p style={styles.sectionText}>{text}</p>
    <a href="#" style={styles.viewMore}>
      VIEW MORE →
    </a>
  </div>
);

const tiles = [
  { title: "New Classroom Technology", color: "#f97316", image: classroomImg },
  { title: "Get Support Funding & Resources", color: "#a21caf", image: fundingImg },
  { title: "International Students", color: "#6d28d9", image: internationalImg },
  { title: "New Student Orientation", color: "#1d4ed8", image: orientationImg },
  { title: "Career Opportunities", color: "#f59e0b", image: careerImg },
  { title: "Prior Learning Assessment", color: "#16a34a", image: assessmentImg },
];

const UniversityPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarTitle}>Campus Life</div>
        <SidebarSection
          icon={<FaChalkboardTeacher />}
          title="Classroom / Seminar Halls"
          text="BIHER University is renowned for encouraging academic excellence & celebrating high achievement."
        />
        <SidebarSection
          icon={<FaFutbol />}
          title="Sport"
          text="Sport is enthusiastically celebrated throughout BIHER. Students compete in intercollegiate sports."
        />
        <SidebarSection
          icon={<FaMusic />}
          title="Culture"
          text="Musicians, Vocalists, Performers, Debaters and Dancers can all shine at BIHER University."
        />
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.mainTitle}>
          Modern Technologies Demand the Highest Level of Education
        </h1>
        <div style={styles.grid}>
          {tiles.map((tile, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                style={{
                  ...styles.card,
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                  boxShadow: isHovered
                    ? "0 8px 16px rgba(0,0,0,0.15)"
                    : "0 4px 8px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={tile.image} alt={tile.title} style={styles.cardImage} />
                <div style={{ ...styles.cardFooter, backgroundColor: tile.color }}>
                  {tile.title}
                </div>
                <div style={{ ...styles.triangle, borderTopColor: tile.color }} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default UniversityPage;
