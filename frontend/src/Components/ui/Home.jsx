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


export default function ImageSlider() {
  // Array of all images for cleaner mapping
  const allImages = [img1, img2, img3, img4, img, img5, img6, img7];
  
  return (
    
      <div>
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