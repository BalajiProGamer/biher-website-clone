import React from "react";
import InfoLayout from "../ui/InfoLayout";
import ApprovalSection from "../ui/Section";

const PageLayout = () => {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background Image */}
      <img
        src="assets/bg124.png"
        alt="LMS Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Optional: Overlay for contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.85)", // Adjust opacity as needed
          zIndex: 1,
        }}
      />

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <ApprovalSection />
        <InfoLayout />
      </div>
    </div>
  );
};

export default PageLayout;
