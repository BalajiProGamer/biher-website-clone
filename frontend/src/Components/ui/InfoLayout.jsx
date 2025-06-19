import React, { useEffect, useRef, useState } from "react";
import "../../styles/global.css"; // Ensure path is correct

const InfoLayout = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="info-container" ref={containerRef}>
      <div className={`info-grid ${animate ? "animate-section" : ""}`}>
        {/* LEFT COLUMN */}
        <div className="info-column">
          <div className="info-box info-left-border">
            <h3 className="info-title red-title">
              <span className="title-icon">📌</span>
              <span className="uppercase">Admissions</span>
            </h3>
            <div className="red-line"></div>
            <p className="info-text">
             Admissions for an aggregate of 30 plus courses have begun and preparation for our new batch of young intellectuals at Bharath are underway. The Sky is a neighborhood for every individual with high dreams and goals; no ceiling holding you down at our halls of knowledge
            </p>
          </div>

          <div className="info-box info-left-border1">
          
            <h3 className="info-title yellow-title">
              <span className="title-icon">🏅</span> Ranking and Accreditation
            </h3>
            <div className="yellow-line"></div>
            <p className="info-text">
              Bharath Institute of Higher Education and Research is the 1st Private University in India to get the coveted international accreditation from ABET, USA in the year 2018.Having other accreditations such as NAAC, NBA, NABL,ISO and Rankings from NIRF, QS-World ranking, MHW, Global Impact Ranking .


            </p>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="info-center">
          <img
            src="/assets/bulb.png"
            alt="Infographic Bulb"
            className="bulb-image"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="info-column">
          <div className="info-box info-left-border2">
            <h3 className="info-title green-title flex-start">
              <span className="uppercase mr-2">🌍</span> International Relations
            </h3>
             <div className="green-line"></div>
            <p className="info-text">
              The Initiatives & Collaborations segment leads the university in forging partnerships with foreign institutions in matter relating to academic exchanges, such as signing memoranda of understanding to facilitate faculty and student exchanges.
            </p>
          </div>

          <div className="info-box info-left-border3">
            <h3 className="info-title cyan-title flex-start">
              <span className="uppercase mr-2">💼</span> Placement
            </h3>
             <div className="blue-line"></div>
            <p className="info-text">
             With expanding the role of business globally, BIHER is the place which comes to the minds of the recruiters once the placement season starts. We focus not only on the career-oriented growth but offers versatility.There has been a consistent growth in our placements record.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
