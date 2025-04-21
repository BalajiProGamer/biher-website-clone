import React from "react";
import InfoLayout from "../ui/InfoLayout"; // Ensure this is imported correctly
import ApprovalSection from "../ui/ApprovalSection"; // Optional if you're using it

const PageLayout = () => {
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Background Image */}
      <img
        src="assets/bg124.png"
        alt="LMS"
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

      {/* Content Above Image */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Optional Approval Section */}
        <div>
          <ApprovalSection />
        </div>

        {/* InfoLayout Appears on Top */}
        <InfoLayout />
      </div>
    </div>
  );
};

export default PageLayout;
