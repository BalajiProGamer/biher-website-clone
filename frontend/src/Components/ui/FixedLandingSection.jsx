import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/bg.jpeg";

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "60px 100px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "30px",
      }}
    >
      {/* Welcome Heading with motion */}
      <div>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "0",
            color: "white",
          }}
        >
          Welcome to
        </motion.h1>

        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "1.2rem",
            marginTop: "0",
            color: "white",
          }}
        >
          Bharath Institute of Science and Technology (BIST)
        </motion.p>

        {/* Underline */}
        <div style={{ display: "flex", gap: "3px", marginTop: "10px" }}>
          <div style={{ width: "40px", height: "4px", backgroundColor: "#f4c430" }} />
          <div style={{ width: "20px", height: "4px", backgroundColor: "#0f2a57" }} />
          <div style={{ width: "20px", height: "4px", backgroundColor: "#8b0000" }} />
        </div>
      </div>

      {/* Description with motion */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          backgroundColor: "rgba(32, 43, 100, 0.85)",
          padding: "25px",
          borderTopRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          maxWidth: "700px",
        }}
      >
        <strong>
          The first self-financing Engineering College in the name of Bharath Institute of Science and Technology (BIST)
        </strong>{" "}
        was started in Tamil Nadu in 1984 by Sri Lakshmi Ammal Educational Trust, established by the academic visionary
        Dr.S.Jagathrakshakan. The trust then started Sree Balaji Dental College and Hospital, in 1989.
      </motion.div>

      {/* Entire Stats Section with motion */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          backgroundColor: "rgba(139, 0, 0, 0.85)",
          borderTopLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "30px",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        {[
          { number: "39", label: "Years of Experience" },
          { number: "15000+", label: "Students" },
          { number: "400+", label: "Patents" },
          { number: "30000+", label: "Publications" },
          { number: "47.5", label: "Lakhs", sub: "Highest Packages" },
          { number: "60+", label: "Innovative Courses" },
        ].map((item, index) => (
          <div
            key={index}
            style={{ textAlign: "center", color: "white" }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{item.number}</div>
            <div>{item.label}</div>
            {item.sub && <div>{item.sub}</div>}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LandingPage;
