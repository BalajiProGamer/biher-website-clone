import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/global.css";              // ⬅ make sure this is imported AFTER slick CSS

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
  { src: photoGallery,         label: "Photo Gallery" },
  { src: videoGallery,         label: "Video Gallery" },
  { src: internationalRelations, label: "International Relations" },
  { src: researchCenter,       label: "Research Center" },
];

const logoData = [
  { src: paypalLogo,    alt: "PayPal" },
  { src: vembuLogo,     alt: "Vembu" },
  { src: aisLogo,       alt: "AIS" },
  { src: kumaranLogo,   alt: "Kumaran Systems" },
  { src: zohoLogo,      alt: "Zoho" },
  { src: tcsLogo,       alt: "TCS" },
  { src: ibmLogo,       alt: "IBM" },
  { src: wiproLogo,     alt: "Wipro" },
  { src: infosysLogo,   alt: "Infosys" },
  { src: googleLogo,    alt: "Google" },
  { src: microsoftLogo, alt: "Microsoft" },
  { src: hclLogo,       alt: "HCL" },
];

const FeaturedMedia = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sliderRef = useRef(null);

  // ────────────────────────────────────
  // Helpers
  const pauseSlider = () => sliderRef.current?.slickPause();
  const playSlider  = () => sliderRef.current?.slickPlay();

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
      { breakpoint: 1024, settings: { slidesToShow: 4 }},
      { breakpoint: 768,  settings: { slidesToShow: 3 }},
      { breakpoint: 480,  settings: { slidesToShow: 2 }},
    ],
  };

  // ────────────────────────────────────
  return (
    <div className="featured-media__section">
      {/* Title */}
      <div className="featured-media__title-wrapper">
        <h2 className="featured-media__title">Our Featured Media</h2>
      </div>

      {/* Media Grid */}
      <div className="featured-media__grid">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="featured-media__card"
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
          >
            <img src={card.src} alt={card.label} className="featured-media__image" />

            <div
              className={`featured-media__overlay${activeCard === index ? " active" : ""}`}
            >
              <div className="featured-media__label">{card.label}</div>

              {activeCard === index && (
                <div className="featured-media__readmore">
                  Read more
                  <div className="featured-media__underline" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Logo Slider */}
      <div className="interface__wrapper">
        <div className="interface__heading">
          <span role="img" aria-label="student">📘</span>&nbsp;STUDENTS –&nbsp;
          <span className="interface__highlight">INDUSTRIAL INTERFACE</span>
        </div>
        <hr className="interface__divider" />

        <Slider ref={sliderRef} {...sliderSettings}>
          {logoData.map((logo, index) => (
            <motion.div
              key={index}
              className="logo-slide"
              onMouseEnter={pauseSlider}
              onMouseLeave={playSlider}
              onTouchStart={pauseSlider}
              onTouchEnd={playSlider}
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
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedMedia;
