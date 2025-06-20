 import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import newGif   from "../../assets/new.gif";
import bgImage  from "../../assets/campus-bg.jpg";   // used only in CSS

const CampusDashboard = () => {
  const [activeTab, setActiveTab] = useState("bulletin");
  const [isPaused, setIsPaused]   = useState(false);

  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  /* ---------------------- DATA ---------------------- */
  const bulletinBoardItems = [
    { title: "Ph.D. Programme Admission Notice (2024 Batch)",        dept: "Research & Development" },
    { title: "Post Doctoral Fellowship Form Open",                   dept: "Research & Development" },
    { title: "Smart India Hackathon Registrations",                  dept: "Computer Science & Engineering" },
    { title: "Webinar Series 2.0 on IT",                             dept: "Computer Science & Engineering" },
    { title: "AICTE FDP on Data Science",                            dept: "Information Technology" },
    { title: "Placement Drive – Infosys & TCS",                      dept: "Training & Placement" },
    { title: "Workshop on Machine Learning",                         dept: "Computer Applications" },
    { title: "Guest Lecture on Cyber Security",                      dept: "School of Computing" },
  ];

  const examNotifications = [
    { title: "End Semester Exam Time Table Released",                dept: "Examination Cell" },
    { title: "Practical Exam Guidelines – Summer 2025",              dept: "Examination Cell" },
    { title: "Internal Assessment Schedule",                         dept: "Academic Office" },
    { title: "Exam Hall Ticket Download Available",                  dept: "Examination Cell" },
    { title: "Backlog Exam Notification",                            dept: "Controller of Exams" },
    { title: "Exam Paper Pattern Changes – Circular",                dept: "Academic Council" },
  ];

  const events = [
    {
      day: "7th",
      month: "APRIL",
      year: "2025",
      title: "Finite Element Analysis (FEA) of Electrical Apparatus using MAGNET – Basic Approach",
      dept:  "School of Electrical Engineering",
    },
    {
      day: "10th & 11th",
      month: "MARCH",
      year: "2025",
      title: "National Level Workshop on Semiconductor Technologies, Systems and Their Applications",
      dept:  "School of Electrical Engineering",
    },
  ];

  const announcements = [
    "MOU Signed between North American University and BIHER",
    "NCC Candidate attended Republic Day Camp",
    "BIHER Ranked in Top 100 by QS India",
    "Annual Tech Fest Announced – Registrations Open",
    "NAAC Accreditation – Feedback from Students Required",
    "Admissions 2025: UG/PG Programs Now Open",
    "NIRF Rankings to be Announced in June 2025",
    "New Hostel Block Inaugurated for PG Students",
    "Scholarship Portal for SC/ST/OBC Now Live",
    "Digital Library Portal Updated with AI Journals",
  ];

  /* ---------------------- JSX ---------------------- */
  return (
    <div className="campus-wrapper">
      <motion.div
        ref={containerRef}
        className="campus-container"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* -------- NEWS & EXAM -------- */}
        <motion.div className="campus-section">
          <h3 className="campus-header">
            📄 CAMPUS – <span className="highlight">NEWS & EXAMINATION</span>
          </h3>

          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === "bulletin" ? "active" : ""}`}
              onClick={() => setActiveTab("bulletin")}
            >
              BULLETIN BOARD
            </button>
            <button
              className={`tab-btn ${activeTab === "exam" ? "active" : ""}`}
              onClick={() => setActiveTab("exam")}
            >
              EXAMINATION
            </button>
          </div>

          <div
            className="scroll-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className={`scroll-content ${isPaused ? "paused" : ""}`}>
              <ul className="bulletin-list">
                {(activeTab === "bulletin" ? bulletinBoardItems : examNotifications).map((item, i) => (
                  <li key={i} className="bulletin-item">
                    <img src={newGif} alt="new" className="gif-icon" />
                    {item.title}
                    <p className="dept">{item.dept}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* -------- EVENTS -------- */}
        <motion.div className="campus-section">
          <div className="events-header">
            <div className="events-heading">
              <span className="calendar-emoji">📅</span> CAMPUS – <span className="highlight">EVENTS</span>
            </div>
            <button className="view-all-btn">View All</button>
          </div>

          {events.map((ev, idx) => (
            <div className="event-card" key={idx}>
              <div className="event-date">
                <div className="dot left" />
                <div className="dot right" />
                <div className="event-date-top">
                  <div>{ev.day}</div>
                  <div className="month">{ev.month}</div>
                </div>
                <div className="event-date-bottom">{ev.year}</div>
              </div>
              <div className="event-details">
                <p className="event-title">{ev.title}</p>
                <p className="event-dept">{ev.dept}</p>
                <a href="#" className="click-here">Click Here</a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* -------- ANNOUNCEMENTS -------- */}
        <motion.div className="campus-section">
          <h3 className="campus-header">📢 ANNOUNCEMENTS</h3>
          <ul className="announcement-list">
            {announcements.map((txt, i) => <li key={i}>{txt}</li>)}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CampusDashboard;
