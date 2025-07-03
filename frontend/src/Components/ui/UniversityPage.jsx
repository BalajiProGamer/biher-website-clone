import React, { useState, useRef, useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaFutbol,
  FaMusic,
} from "react-icons/fa";

// Images
import classroomImg from "../../assets/classroom.jpg";
import fundingImg from "../../assets/funding.jpg";
import internationalImg from "../../assets/international.jpg";
import orientationImg from "../../assets/orientation.jpg";
import careerImg from "../../assets/career.jpg";
import assessmentImg from "../../assets/assessment.jpg";

// Styles
import "../../styles/global.css";

const SidebarSection = ({ icon, title, text, link }) => (
  <div className="universitypage-sidebar-section">
    <div className="universitypage-section-title">
      <span className="universitypage-section-icon">{icon}</span>
      {title}
    </div>
    <p className="universitypage-section-text">{text}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="universitypage-view-more">
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
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLeftVisible(true);
        observerLeft.disconnect();
      }
    }, { threshold: 0.2 });

    const observerRight = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRightVisible(true);
        observerRight.disconnect();
      }
    }, { threshold: 0.2 });

    if (leftRef.current) observerLeft.observe(leftRef.current);
    if (rightRef.current) observerRight.observe(rightRef.current);

    return () => {
      observerLeft.disconnect();
      observerRight.disconnect();
    };
  }, []);

  return (
    <div className="universitypage-container">
      {/* Sidebar Section */}
      <aside
        ref={leftRef}
        className={`universitypage-sidebar ${leftVisible ? "animate-slide-in-left" : "pre-hide"}`}
      >
        <div className="universitypage-sidebar-title">Campus Life</div>
        <SidebarSection
          icon={<FaChalkboardTeacher />}
          title="Classroom / Seminar Halls"
          text="BIHER University is renowned for encouraging academic excellence & celebrating high achievement."
          link="https://www.bharathuniv.ac.in/nirf/JR%20College.mp4"
        />
        <SidebarSection
          icon={<FaFutbol />}
          title="Sport"
          text="Sport is enthusiastically celebrated throughout BIHER. Students compete in intercollegiate sports."
          link="https://www.bharathuniv.ac.in/nirf/Video%20Recording%20of%20the%20Off-Campus%20(Maduranthakam).mp4"
        />
        <SidebarSection
          icon={<FaMusic />}
          title="Culture"
          text="Musicians, Vocalists, Performers, Debaters and Dancers can all shine at BIHER University."
          link="https://www.bharathuniv.ac.in/nirf/JR%20College.mp4"
        />
      </aside>

      {/* Main Content Grid */}
      <main
        ref={rightRef}
        className={`universitypage-main-content ${rightVisible ? "animate-slide-in-right" : "pre-hide"}`}
      >
        <h1 className="universitypage-main-title">
          Modern Technologies Demand the Highest Level of Education
        </h1>
        <div className="universitypage-grid-container">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`universitypage-grid-card ${hoveredIndex === i ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={tile.image} alt={tile.title} className="universitypage-card-image" />
              <div
                className="universitypage-card-footer"
                style={{ backgroundColor: tile.color }}
              >
                {tile.title}
              </div>
              <div
                className="universitypage-triangle"
                style={{ borderTopColor: tile.color }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UniversityPage;
