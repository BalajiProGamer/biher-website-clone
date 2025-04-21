import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import newGif from "../../assets/new.gif";
import bgImage from "../../assets/campus-bg.jpg";

const styles = {
  containerWrapper: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "60px 20px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  section: {
    background: "#fff",
    padding: "16px",
    borderRadius: "8px",
    flex: 1,
    minWidth: "300px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "16px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "6px",
    marginBottom: "12px",
  },
  highlight: {
    color: "#facc15",
    fontWeight: "bold",
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  tabButton: (active) => ({
    padding: "6px 12px",
    background: active ? "#0284c7" : "#e2e8f0",
    color: active ? "white" : "black",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
    fontWeight: "bold",
  }),
  scrollContainer: {
    height: "230px",
    overflow: "hidden",
    position: "relative",
  },
  scrollContent: {
    display: "inline-block",
    animation: "scrollUp 15s linear infinite",
  },
  bulletinList: {
    listStyle: "none",
    paddingLeft: 0,
    fontSize: "14px",
    margin: 0,
  },
  bulletinItem: {
    marginBottom: "10px",
  },
  gifIcon: {
    width: "30px",
    height: "auto",
    marginRight: "6px",
    verticalAlign: "middle",
    cursor: "pointer",
  },
  dept: {
    fontSize: "12px",
    color: "#666",
    marginLeft: "36px",
  },
  eventCard: {
    display: "flex",
    marginBottom: "12px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  eventDate: {
    width: "80px",
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    overflow: "hidden",
    borderRadius: "12px 12px 0 0",
    background: "#facc15",
    color: "#001f4d",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  eventDateTop: {
    width: "100%",
    paddingTop: "16px",
    paddingBottom: "10px",
    textAlign: "center",
    background: "#facc15",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#001f4d",
    position: "absolute",
    top: "6px",
  },
  leftDot: {
    left: "10px",
  },
  rightDot: {
    right: "10px",
  },
  eventDateBottom: {
    width: "100%",
    background: "#001f4d",
    color: "#ffffff",
    padding: "6px 0",
    fontSize: "14px",
    textAlign: "center",
  },
  eventDetails: {
    padding: "10px",
    flex: 1,
  },
  eventTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "4px",
  },
  eventDept: {
    fontSize: "12px",
    color: "#555",
  },
  clickHere: {
    fontSize: "12px",
    color: "red",
    fontWeight: "bold",
    textDecoration: "none",
  },
  announcementList: {
    listStyle: "disc",
    paddingLeft: "20px",
    fontSize: "13px",
    color: "#333",
    lineHeight: "1.6",
  },
};

const CampusDashboard = () => {
  const [activeTab, setActiveTab] = useState("bulletin");
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const bulletinBoardItems = [
    { title: "Ph.D. Programme Admission Notice (2024 Batch)", dept: "Research & Development" },
    { title: "Post Doctoral Fellowship Form Open", dept: "Research & Development" },
    { title: "Smart India Hackathon Registrations", dept: "Computer Science & Engineering" },
    { title: "Webinar Series 2.0 on IT", dept: "Computer Science & Engineering" },
    { title: "AICTE FDP on Data Science", dept: "Information Technology" },
    { title: "Placement Drive – Infosys & TCS", dept: "Training & Placement" },
    { title: "Workshop on Machine Learning", dept: "Computer Applications" },
    { title: "Guest Lecture on Cyber Security", dept: "School of Computing" },
  ];

  const examNotifications = [
    { title: "End Semester Exam Time Table Released", dept: "Examination Cell" },
    { title: "Practical Exam Guidelines – Summer 2025", dept: "Examination Cell" },
    { title: "Internal Assessment Schedule", dept: "Academic Office" },
    { title: "Exam Hall Ticket Download Available", dept: "Examination Cell" },
    { title: "Backlog Exam Notification", dept: "Controller of Exams" },
    { title: "Exam Paper Pattern Changes – Circular", dept: "Academic Council" },
  ];

  const events = [
    {
      day: "7th",
      month: "APRIL",
      year: "2025",
      title: "Finite Element Analysis (FEA) of Electrical Apparatus using MAGNET - Basic Approach",
      dept: "School of Electrical Engineering",
    },
    {
      day: "10th & 11th",
      month: "MARCH",
      year: "2025",
      title: "National Level Workshop on Semiconductor Technologies, Systems and Their Applications",
      dept: "School of Electrical Engineering",
    },
  ];

  const announcements = [
    "MOU Signed between North American University and BIHER",
    "NCC Candidate attended Republic Day Camp",
    "BIHER Ranked in Top 100 by QS India",
    "Annual Tech Fest Announced – Registrations Open",
    "NAAC Accreditation – Feedback from Students Required",
    "Admissions 2025: UG/PG Programs Now Open",
    "NIRF Rankings to be Announced in June 2025",
    "New Hostel Block Inaugurated for PG Students",
    "Scholarship Portal for SC/ST/OBC Now Live",
    "Digital Library Portal Updated with AI Journals",
  ];

  return (
    <div style={styles.containerWrapper}>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
      `}</style>

      <motion.div
        ref={containerRef}
        style={styles.container}
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* News & Exam Section */}
        <motion.div style={styles.section}>
          <h3 style={styles.header}>📄 CAMPUS – <span style={styles.highlight}>NEWS & EXAMINATION</span></h3>
          <div style={styles.tabs}>
            <button style={styles.tabButton(activeTab === "bulletin")} onClick={() => setActiveTab("bulletin")}>BULLETIN BOARD</button>
            <button style={styles.tabButton(activeTab === "exam")} onClick={() => setActiveTab("exam")}>EXAMINATION</button>
          </div>
          <div
            style={styles.scrollContainer}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              style={{
                ...styles.scrollContent,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              <ul style={styles.bulletinList}>
                {(activeTab === "bulletin" ? bulletinBoardItems : examNotifications).map((item, i) => (
                  <li key={i} style={styles.bulletinItem}>
                    <img src={newGif} alt="New" style={styles.gifIcon} />
                    {item.title}
                    <p style={styles.dept}>{item.dept}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Events Section */}
        <motion.div style={styles.section}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "8px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "16px" }}>
              <span style={{ color: "#6b21a8", marginRight: "8px", fontSize: "20px" }}>📅</span>
              <span style={{ color: "#1f2937" }}>CAMPUS - </span>
              <span style={{ color: "#facc15", marginLeft: "4px" }}>EVENTS</span>
            </div>
            <button style={{ backgroundColor: "#001f4d", color: "white", padding: "6px 14px", fontSize: "12px", fontWeight: "bold", border: "none", borderRadius: "4px", letterSpacing: "1px", cursor: "pointer", textTransform: "uppercase" }}>
              View All
            </button>
          </div>
          {events.map((event, index) => (
            <div style={styles.eventCard} key={index}>
              <div style={styles.eventDate}>
                <div style={{ ...styles.dot, ...styles.leftDot }} />
                <div style={{ ...styles.dot, ...styles.rightDot }} />
                <div style={styles.eventDateTop}>
                  <div style={{ fontSize: "16px", lineHeight: "1.2", textAlign: "center" }}>{event.day}</div>
                  <div style={{ fontSize: "12px", letterSpacing: "1px", marginTop: "4px" }}>{event.month}</div>
                </div>
                <div style={styles.eventDateBottom}>{event.year}</div>
              </div>
              <div style={styles.eventDetails}>
                <p style={styles.eventTitle}>{event.title}</p>
                <p style={styles.eventDept}>{event.dept}</p>
                <a href="#" style={styles.clickHere}>Click Here</a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Announcements Section */}
        <motion.div style={styles.section}>
          <h3 style={styles.header}>📢 ANNOUNCEMENTS</h3>
          <ul style={styles.announcementList}>
            {announcements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CampusDashboard;