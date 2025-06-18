import React, { useEffect, useRef, useState } from "react";

import abetLogo from "../../assets/abet.png";
import naacLogo from "../../assets/naac.png";
import nbaLogo from "../../assets/nba.png";
import nablLogo from "../../assets/nabl.png";
import aictelogo from "../../assets/AICTE.png";
import sirlog from "../../assets/SIR.png";

const ApprovalSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const logos = [
    { src: sirlog, alt: "QS" },
    { src: aictelogo, alt: "AICTE" },
    { src: nbaLogo, alt: "SCIMAGO" },
    { src: nablLogo, alt: "NO1" },
    { src: abetLogo, alt: "ABET" },
    { src: naacLogo, alt: "NAAC" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="approval-section-outer" ref={sectionRef}>
      <div className={`approval-section-container ${inView ? "start-scroll" : ""}`}>
        <div className="approval-section-content">
          <div className="approval-section-title">APPROVAL / ACCREDITATION</div>
          <div className="approval-section-logos-wrapper">
            <div className="approval-section-logos">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="approval-logo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalSection;
