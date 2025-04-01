import React from "react";
import "./FixedImage.css"; // Import CSS

export default function FixedImage() {
  return (
    <div className="fixed-image-container">
      <img src="/assets/img.jpg" alt="Fixed" className="fixed-image" />
    </div>
  );
}