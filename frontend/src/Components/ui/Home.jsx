import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import img from "../../assets/img.jpg";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/ini1.jpg';
import img5 from '../../assets/ini2.jpg';
import img6 from '../../assets/banner19.jpg';
import img7 from '../../assets/img.jpg';

import PageLayout from '../Pages/PageLayout';
import UniversityPage from './UniversityPage';
import Footer from '../Footer';
import CampusDashboard from './CampusDashboard';
import FeaturedMedia from './FeaturedMedia';
import FixedLandingSection from './FixedLandingSection';
import ApprovalSection from './ApprovalSection';
import InfoLayout from './InfoLayout';

export default function ImageSlider() {
  // Array of all images for cleaner mapping
  const allImages = [img1, img2, img3, img4, img, img5, img6, img7];
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {/* First slide with banners */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={img1}
              alt="Slide 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Centered content overlay */}
            <div className="relative z-10 text-center px-4">
              {/* Your centered content here */}
              <div className="bg-white/80 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-red-600 mb-4">University Rankings 2025</h2>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="font-bold text-xl">#202</div>
                    <div>in Southern Asia</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl">QS World University Rankings</div>
                    <div>2025</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl">#661-680</div>
                    <div>in Asia</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Banners - positioned absolutely in top-left */}
            <div className="absolute top-10 left-10 flex flex-col gap-4 z-20">
              <a
                href="https://yourdomain.com/admissions-ugpg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-2 rounded-md shadow-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                🎓 2025 Admission Open for UG/PG
              </a>
              <a
                href="https://yourdomain.com/phd-application"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white px-6 py-2 rounded-md shadow-lg font-semibold hover:bg-blue-900 transition-all duration-300 inline-flex items-center gap-2"
              >
                🎓 Ph.D Admission Application Form
              </a>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Remaining slides - start from index 1 since we already used img1 */}
        {allImages.slice(1).map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 2}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Optional: Add centered content for these slides too if needed */}
              <div className="relative z-10 text-center px-4">
                {/* Slide-specific centered content could go here */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Page Sections */}
      <PageLayout />
      <FixedLandingSection />
      <UniversityPage />
      <CampusDashboard />
      <FeaturedMedia />
      <Footer />
    </div>
  );
}