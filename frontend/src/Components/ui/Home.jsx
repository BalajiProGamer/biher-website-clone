// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import images
import img from "../../assets/img.jpg";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/ini1.jpg';
import img5 from '../../assets/ini2.jpg'; // Newly uploaded image
import img6 from '../../assets/banner19.jpg'; // Add more as needed
import img7 from '../../assets/img.jpg';
import PageLayout from '../Pages/PageLayout';
import UniversityPage from './UniversityPage';
import Footer from '../Footer'
import CampusDashboard from './CampusDashboard';
import FeaturedMedia from './FeaturedMedia';


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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img src={img1} alt="Slide 1" className="w-full h-[400px] object-cover" />
            
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img src={img2} alt="Slide 2" className="w-full h-[400px] object-cover" />
            
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img src={img3} alt="Slide 3" className="w-full h-[400px] object-cover" />
            
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img src={img4} alt="Slide 4" className="w-full h-[400px] object-cover" />
            
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative">
            <img src={img} alt="Slide 5" className="w-full h-[400px] object-cover" />
            
          </div>
        </SwiperSlide>

        {/* Slide 6 - Your uploaded logos strip */}
        <SwiperSlide>
          <div className="relative">
            <img src={img5} alt="Partner Logos" className="w-full h-[400px] object-contain bg-white" />
            
          </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <div className="relative">
            <img src={img6} alt="Extra Slide 1" className="w-full h-[400px] object-cover" />
            
          </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <div className="relative">
            <img src={img7} alt="Extra Slide 2" className="w-full h-[400px] object-cover" />
            
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <PageLayout/>
      </div>
      <UniversityPage/>
      <CampusDashboard/>
      <FeaturedMedia/>

      <Footer/>
      
    </div>
  );
}
