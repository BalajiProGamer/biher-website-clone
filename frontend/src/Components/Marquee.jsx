import React from "react";
import "./Marquee.css";
import { FaBell } from "react-icons/fa";
import newGif from "../assets/newIcon.gif"; // ✅ Make sure this gif is in src/assets

export default function Marquee() {
  
  return (
    <div className="marquee-container">
      <FaBell className="bell-icon" />
      <h4 className="notif-label">Notification&LatestExamresult:</h4>
      <marquee className="marquee-text" behavior="scroll" direction="left" scrollamount="5">
        <span className="announcement">
          <img src={newGif} alt="New" className="gif-icon" />
          Academic Schedule – U22 & P23 Batch Arts Academic Year 2024–25 Even Term
        </span>
        <span className="separator">|</span>
        <span className="announcement">
          <img src={newGif} alt="New" className="gif-icon" />
          Online Faculty Development Program starting 10th April 2025
        </span>
        <span className="separator">|</span>
        <span className="announcement">
          <img src={newGif} alt="New" className="gif-icon" />
          Final Year Project Viva Schedule – Engineering Dept (12th April 2025)
        </span>
      </marquee>
    </div>
  );
}
