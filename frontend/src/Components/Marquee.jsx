import React from "react";
import "./Marquee.css"; // Import CSS
import { FaBell } from "react-icons/fa";

export default function Marquee() {
  return (
    <div className="marquee-container">
      <FaBell className="bell-icon" /> <h4>Notification:</h4>
      <marquee className="marquee-text">
        Welcome to BIHER! Admissions are open for the academic year 2025-2026. Apply now!
      </marquee>
    </div>
  );
}