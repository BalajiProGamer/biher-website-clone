import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsItems = [
  {
    img: require("../../assets/ns1 (1).jpg"),
   
  },
  {
    img: require("../../assets/ns1 (3).jpg"),
    
  },
  {
    img: require("../../assets/ns1 (2).jpg"),
    
  },
  {
    img: require("../../assets/ns2 (1).jpg"),
    
  },
  {
    img: require("../../assets/ns2 (2).jpg"),
    
  },
];

const NewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
              <img
                src={item.img}
                alt={`news-${index}`}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "10px",
                  fontSize: "14px",
                }}
              >
                {item.caption}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
