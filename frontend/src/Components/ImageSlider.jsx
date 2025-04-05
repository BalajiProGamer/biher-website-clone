// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import images

import img1 from "../assets/in1.jpg";
import img2 from '../assets/in2.jpg';
import img3 from '../assets/in3.jpg';
import img4 from '../assets/in4.jpg';

export default function ImageSlider() {
  return (
    <div className="relative w-full h-[400px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={img1} alt="Slide 1" className="w-full h-[400px] object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
              A Team from International Skill Development Corporation (ISDC), UK VISITED BIHER CAMPUS.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img2} alt="Slide 2" className="w-full h-[400px] object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
              Another important event caption here.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img3} alt="Slide 3" className="w-full h-[400px] object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
              More details about this slide.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img4} alt="Slide 4" className="w-full h-[400px] object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
              Final slide caption.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
