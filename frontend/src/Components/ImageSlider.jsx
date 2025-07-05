// src/components/ImageSlider.jsx

import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import images
import img1 from '../assets/in1.jpg';
import img2 from '../assets/in2.jpg';
import img3 from '../assets/in3.jpg';
import img4 from '../assets/in4.jpg';
import img5 from '../assets/image.png';
import img6 from '../assets/images.jpg';

const ImageSlider = () => {
  const slides = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
