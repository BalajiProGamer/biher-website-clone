import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Styles for layout
const styles = {
  container: {
    backgroundColor: "#fff",
    minHeight: "100vh",
    padding: "4rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "2rem",
    width: "100%",
    maxWidth: "1280px",
  },
  mdGrid: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",
    height: "100%",
  },
  box: {
    backgroundColor: "#f3f4f6",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  leftBorder: {
    borderLeft: "4px solid #b91c1c",
  },
  textTitle: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.125rem",
    marginBottom: "0.5rem",
    color: "#b91c1c",
  },
  titleIcon: {
    marginRight: "0.5rem",
  },
  paragraph: {
    color: "#374151",
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
  },
  yellowTitle: {
    color: "#f59e0b",
    fontWeight: "800",
    textTransform: "uppercase",
  },
  yellowLine: {
    borderTop: "2px solid #facc15",
    width: "4rem",
    marginBottom: "0.5rem",
  },
  centerImage: {
    width: "20rem",
    height: "auto",
  },
  textRightBox: {
    backgroundColor: "#f3f4f6",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    textAlign: "right",
  },
  greenText: {
    color: "#15803d",
  },
  cyanText: {
    color: "#0e7490",
  },
};

// Motion variants for scroll-triggered animations
const fadeLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const InfoLayout = () => {
  const bulbRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (bulbRef.current) {
      observer.observe(bulbRef.current);
    }

    return () => {
      if (bulbRef.current) {
        observer.unobserve(bulbRef.current);
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <motion.div
        style={{ ...styles.grid, ...styles.mdGrid }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* LEFT SIDE */}
        <motion.div style={styles.column}>
          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{ ...styles.box, ...styles.leftBorder }}
          >
            <h3 style={styles.textTitle}>
              <span style={styles.titleIcon}>📌</span>
              <span style={{ textTransform: "uppercase" }}>Admissions</span>
            </h3>
            <p style={styles.paragraph}>
              Admissions for an aggregate of 30 plus courses have begun and preparation for our new batch
              of young intellectuals at Bharath are underway. The sky is a neighborhood for every individual
              with high dreams and goals; no ceiling holding you down at our halls of knowledge.
            </p>
          </motion.div>

          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={styles.box}
          >
            <h3 style={{ ...styles.textTitle, ...styles.yellowTitle }}>
              <span style={styles.titleIcon}>🏅</span> Ranking and Accreditation
            </h3>
            <div style={styles.yellowLine}></div>
            <p style={styles.paragraph}>
              Bharath Institute of Higher Education and Research is the 1st Private University in India to get
              the coveted international accreditation from ABET, USA in 2018. Having other accreditations such
              as NAAC, NBA, NABL, ISO and Rankings from NIRF, QS-World ranking, MHW, Global Impact Ranking.
            </p>
          </motion.div>
        </motion.div>

        {/* CENTER BULB IMAGE */}
        <motion.div
          ref={bulbRef}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/bulb.png"
            alt="Infographic Bulb"
            style={styles.centerImage}
            className={isVisible ? "animate-fadeInUp" : ""}
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div style={styles.column}>
          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={styles.textRightBox}
          >
            <h3 style={{ ...styles.textTitle, ...styles.greenText, justifyContent: "flex-end" }}>
              <span style={{ marginRight: "0.5rem", textTransform: "uppercase" }}>International Relations</span> 🌍
            </h3>
            <p style={styles.paragraph}>
              The Initiatives & Collaborations segment leads the university in forging partnerships
              relating to academic development and global understanding to promote new forms of academic initiatives.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={styles.textRightBox}
          >
            <h3 style={{ ...styles.textTitle, ...styles.cyanText, justifyContent: "flex-end" }}>
              <span style={{ marginRight: "0.5rem", textTransform: "uppercase" }}>Placements</span> 💼
            </h3>
            <p style={styles.paragraph}>
              With expanding global business, BIHER is the place that comes to the minds of recruiters every placement season.
              We focus not only on career-oriented growth but also versatility. There has been a consistent growth in our placement record.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoLayout;
