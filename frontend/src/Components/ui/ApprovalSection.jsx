import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import logos
import abetLogo from "../../assets/abet.png";
import naacLogo from "../../assets/naac.png";
import nbaLogo from "../../assets/nba.png";
import nablLogo from "../../assets/nabl.png";
import aictelogo from "../../assets/AICTE.png";
import sirlog from "../../assets/SIR.png";


const ApprovalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const styles = {
    outerContainer: {
      paddingLeft: "60px",
      paddingRight: "60px",
      marginTop: "20px",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      border: "1px solid #ddd",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    approvals: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },
    verticalText: {
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#d32f2f",
      marginRight: "40px",
    },
    logos: {
      display: "flex",
      alignItems: "center",
      gap: "40px",
    },
    logoImage: {
      height: "99px",
      width: "auto",
      cursor: "pointer",
    },
  };

  const logos = [
    { src: abetLogo, alt: "ABET" },
    { src: naacLogo, alt: "NAAC" },
    { src: nbaLogo, alt: "NBA" },
    { src: nablLogo, alt: "NABL" },
    { src: aictelogo, alt: "AICTE" },
    { src: sirlog, alt: "SIR" },
  
  ];

  return (
    <div style={styles.outerContainer}>
      <motion.div
        ref={ref}
        style={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div style={styles.approvals}>
          <h3 style={styles.verticalText}>Approval / Accreditation</h3>
          <div style={styles.logos}>
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                style={styles.logoImage}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApprovalSection;
