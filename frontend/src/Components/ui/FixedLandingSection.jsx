import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/bg.jpeg";
import "../../styles/global.css"; // Make sure this path matches your project

const LandingPage = () => {
  return (
    <div
      className="landing-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Welcome Section */}
      <div>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay:4,duration: 2}}
          className="landing-heading"
        >
          Welcome to
        </motion.h1>

        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 4, duration: 2 }}
          className="landing-subheading"
        >
          Bharath Institute of Science and Technology (BIST)
        </motion.p>

        <div className="landing-underline">
          <div className="underline yellow" />
          <div className="underline blue" />
          <div className="underline red" />
        </div>
      </div>

      {/* Description */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="landing-description"
      >
        <strong>
          The first self-financing Engineering College in the name of Bharath Institute of Science and Technology (BIST)
        </strong>{" "}
        was started in Tamil Nadu in 1984 by Sri Lakshmi Ammal Educational Trust, established by the academic visionary
        Dr.S.Jagathrakshakan. The trust then started Sree Balaji Dental College and Hospital, in 1989.
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 2}}
        className="landing-stats"
      >
        {[
          { number: "39", label: "Years of Experience" },
          { number: "15000+", label: "Students" },
          { number: "400+", label: "Patents" },
          { number: "30000+", label: "Publications" },
          { number: "47.5", label: "Lakhs", sub: "Highest Packages" },
          { number: "60+", label: "Innovative Courses" },
        ].map((item, index) => (
          <div key={index} className="stat-box">
            <div className="stat-number">{item.number}</div>
            <div>{item.label}</div>
            {item.sub && <div>{item.sub}</div>}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LandingPage;
