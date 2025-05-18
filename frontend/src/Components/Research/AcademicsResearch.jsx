 import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGraduationCap, FaBookOpen, FaThList } from "react-icons/fa";
import AcademicImg from "../../assets/Academic Research.png"; // Banner image
import BackgroundImg from "../../assets/pattern.jpg"; // Background pattern
import Footer from "../Footer";
import Banner from "../Banner"; // Import the Banner component

const AcademicsResearch = () => {
  return (
    <div>
      {/* Banner Image */}
      <img src={AcademicImg} alt="Academic Research" width="100%" height="100%" />
      <Banner />
      {/* Header with breadcrumb */}
      <div
        style={{
          background: "linear-gradient(to right, #8B1A1A, #F44336)",
          color: "white",
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center"
          }}
        >
          <FaHome style={{ marginRight: "8px", fontSize: "18px" }} />
        </Link>
        <span style={{ fontStyle: "italic" }}>
          &nbsp; » Research » Academic Research
        </span>
      </div>

      {/* Background Section */}
      <div
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "20px",
            padding: "0 20px"
          }}
        >
          {/* Left Sidebar */}
          <div
            style={{
              minWidth: "250px",
              backgroundColor: "#003049",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-start"
            }}
          >
            <div
              style={{
                backgroundColor: "#FFC107",
                padding: "12px 16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <FaThList /> Categories
            </div>
            {[
              "Vision & Mission",
              "Dean Desk",
              "Faculty",
              "Regulations",
              "Download",
              "Web Portal"
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 14px",
                  borderBottom: "1px solid #084c61",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  backgroundColor: idx === 0 ? "#012a4a" : "inherit"
                }}
              >
                <FaBookOpen style={{ marginRight: "14px" }} /> {item}
              </div>
            ))}
          </div>

          {/* Right Content Area */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "30px",
              flexGrow: 1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ color: "#003366", borderLeft: "4px solid #f4a261", paddingLeft: "10px" }}>
              Vision & Mission
            </h3>

            <h4 style={{ color: "#b30000", marginTop: "20px" }}>Our Vision :</h4>
            <p style={{ color: "#444", lineHeight: "1.6", borderBottom: "1px solid #ccc", paddingBottom: "20px" }}>
              To be the premier research–intensive University in India and to be seen as a key partner in the
              development of National and International research and technology initiatives. To be forerunners
              in the conception of a research environment that is second to none globally for the advancement
              of socially relevant research that dominates the world stage.
            </p>

            <h4 style={{ color: "#b30000", marginTop: "20px" }}>Our Mission :</h4>
            <p style={{ color: "#444", lineHeight: "1.6" }}>
              To support and augment an organized University–wide environment of research excellence where
              faculty are inspired and challenged to drive the boundaries of knowledge foundation. To motivate
              research leaders in India and around the world to partner with us in the expansion of knowledge
              discovery and the translation of discoveries into tangible benefits for society internationally.
              To be the voice of the research community at BIHER and in all ways, ensure the optimal and
              effective use of intellectual, financial, and physical resources to foster an environment of
              research excellence throughout the University.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AcademicsResearch;
