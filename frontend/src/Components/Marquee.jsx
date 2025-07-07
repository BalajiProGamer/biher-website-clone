import React, { useState, useEffect, useRef } from "react";
import "../styles/global.css";
import { FaBell } from "react-icons/fa";
import newGif from "../assets/newIcon.gif";

export default function Marquee() {
  const [scrolled, setScrolled] = useState(false);
  const marqueeRef = useRef(null); // Create a ref

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse/touch handlers using the DOM node
  const handleMouseOver = () => {
    marqueeRef.current?.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current?.start();
  };

  return (
  <div className={`marquee-container ${scrolled ? "scrolled" : ""}`}>
    <div className="marquee-header">
      <FaBell className="bell-icon" />
      <h4 className="notif-label">latest Exam Results & Notifications :</h4>
    </div>
    <marquee
      ref={marqueeRef}
      className="marquee-text"
      behavior="scroll"
      direction="left"
      scrollamount="5"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTouchStart={handleMouseOver}
      onTouchEnd={handleMouseOut}
    >
      <span className="announcement">
        <img src={newGif} alt="New" className="gif-icon" />
        Design For Emerging IOT Applications
      </span>
      <span className="separator">|</span>
      <span className="announcement">
        <img src={newGif} alt="New" className="gif-icon" />
        Academic Schedule - P24 Batch MBA Academic Year 2025-26 Odd Term
      </span>
      <span className="separator">|</span>
      <span className="announcement">
        <img src={newGif} alt="New" className="gif-icon" />
        Final Year Project Viva Schedule – Engineering Dept (12th April 2025)
      </span>
      <span className="announcement">
        <img src={newGif} alt="New" className="gif-icon" />
       ACADEMIC SCHEDULE - [U22 & 23 Batch Engg] ACADEMIC YEAR 2025-2026 ODD TERM

      </span>
    </marquee>
  </div>
);

}
