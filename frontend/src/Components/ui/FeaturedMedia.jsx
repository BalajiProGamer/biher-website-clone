import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Media cards
import photoGallery from "../../assets/photoGallery.jpg";
import videoGallery from "../../assets/videoGallery.jpg";
import internationalRelations from "../../assets/asas.jpg";
import researchCenter from "../../assets/researchCenter.jpg";

// Logos
import paypalLogo from "../../assets/logo/paypal.png";
import vembuLogo from "../../assets/logo/Vembu.png";
import aisLogo from "../../assets/logo/ais.png";
import kumaranLogo from "../../assets/logo/Kumaranlogo.png";
import zohoLogo from "../../assets/logo/zoho.png";
import tcsLogo from "../../assets/logo/tcs.png";
import ibmLogo from "../../assets/logo/byjus.png";
import wiproLogo from "../../assets/logo/wipro.png";
import infosysLogo from "../../assets/logo/infosys.png";
import googleLogo from "../../assets/logo/amazon.png";
import microsoftLogo from "../../assets/logo/cognizant.png";
import hclLogo from "../../assets/logo/hcl.png";

const cardData = [
  { src: photoGallery, label: "Photo Gallery" },
  { src: videoGallery, label: "Video Gallery" },
  { src: internationalRelations, label: "International Relations" },
  { src: researchCenter, label: "Research Center" },
];

const logoData = [
  { src: paypalLogo, alt: "PayPal" },
  { src: vembuLogo, alt: "Vembu" },
  { src: aisLogo, alt: "AIS" },
  { src: kumaranLogo, alt: "Kumaran Systems" },
  { src: zohoLogo, alt: "Zoho" },
  { src: tcsLogo, alt: "TCS" },
  { src: ibmLogo, alt: "IBM" },
  { src: wiproLogo, alt: "Wipro" },
  { src: infosysLogo, alt: "Infosys" },
  { src: googleLogo, alt: "Google" },
  { src: microsoftLogo, alt: "Microsoft" },
  { src: hclLogo, alt: "HCL" },
];

const FeaturedMedia = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sliderRef = useRef(null);

  const handleMouseEnter = (index) => setActiveCard(index);
  const handleMouseLeave = () => setActiveCard(null);
  const handleTouch = (index) =>
    setActiveCard(activeCard === index ? null : index);

  const handlePause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handlePlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const sliderSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div style={styles.section}>
      {/* Title */}
      <div style={styles.titleWrapper}>
        <h2 style={styles.title}>Our Featured Media</h2>
      </div>

      {/* Media Grid */}
      <div style={styles.grid}>
        {cardData.map((card, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTouch(index)}
          >
            <img src={card.src} alt={card.label} style={styles.image} />
            <div
              style={{
                ...styles.overlay,
                backgroundColor:
                  activeCard === index
                    ? "rgba(0, 59, 77, 0.7)"
                    : "rgba(0, 59, 77, 0.5)",
              }}
            >
              <div style={styles.label}>{card.label}</div>
              {activeCard === index && (
                <div style={styles.readMore}>
                  Read more
                  <div style={styles.underline}></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Logo Slider */}
      <div style={styles.interfaceWrapper}>
        <div style={styles.interfaceHeading}>
          <span role="img" aria-label="student">📘</span> STUDENTS –{" "}
          <span style={{ color: "#f4b221" }}>INDUSTRIAL INTERFACE</span>
        </div>
        <hr style={styles.interfaceDivider} />

        <Slider ref={sliderRef} {...sliderSettings}>
          {logoData.map((logo, index) => (
            <motion.div
              key={index}
              style={styles.logoSlide}
              onMouseEnter={handlePause}
              onMouseLeave={handlePlay}
              onTouchStart={handlePause}
              onTouchEnd={handlePlay}
              whileHover={{
                scale: 1.4,
                zIndex: 10,
                position: "relative",
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 1.4,
                zIndex: 10,
                position: "relative",
              }}
            >
              <img src={logo.src} alt={logo.alt} style={styles.logo} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Styles
const styles = {
  section: {
    backgroundColor: "#003b4d",
    padding: "40px 20px",
    textAlign: "center",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "24px",
    color: "#003b4d",
    backgroundColor: "white",
    padding: "10px 30px",
    fontWeight: "bold",
    textTransform: "uppercase",
    clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    position: "relative",
    width: "250px",
    height: "170px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    transition: "background-color 0.3s ease",
  },
  label: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  readMore: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "5px",
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  },
  underline: {
    width: "50%",
    height: "2px",
    backgroundColor: "#fff",
    margin: "5px auto 0",
  },
  interfaceWrapper: {
    marginTop: "60px",
    backgroundColor: "#fff",
    padding: "40px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  interfaceHeading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#003b4d",
  },
  interfaceDivider: {
    margin: "0 auto 30px",
    width: "80%",
    border: "1px solid #ccc",
  },
  logoSlide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
  logo: {
    height: "130px",
    objectFit: "contain",
    maxWidth: "120px",
    transition: "transform 0.3s ease",
  },
};

export default FeaturedMedia;
