import React, { useState } from 'react';
import { FaHome, FaBook, FaBars, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import headerImage from '../../../assets/pattern.jpg';
import Imageslider from '../../ImageSlider';
import Banner from '../../Banner';
import Query from '../../Pages/Query';
import Footer from '../../Footer';
import '../../../styles/global.css';
import ImageSlider from '../../ImageSlider';
import NewsSlider from '../../Pages/NewsSlider';

const categoryData = {
  'Global Internship Program': `
  <p>
    <strong>Beyond the scope of academia</strong>, the International Relations office of <strong>BIHER</strong> has been working towards developing within the students an understanding for various career avenues.
  </p>
  <p>
    Students have been receiving these learning opportunities so that they can develop their understanding which is in line with the <strong>global trends in careers</strong>.
  </p>
  <p>
    For more information, kindly contact Dr. N. Balamurugan via email at <br/>
    📧 <a href="mailto:director.international@bharathuniv.ac.in">director.international@bharathuniv.ac.in</a>
  </p>
`
,'International Scholarship': `
  <div class="scholarship-list">
    <h4>International Scholarship:</h4>

    <div class="scholarship-item">
      <p><strong>National Chung Cheng University (CCU), Taiwan</strong></p>
      <p class="official-link">Official Link: <a href="https://erasmus-plus.ec.europa.eu/" target="_blank">https://erasmus-plus.ec.europa.eu/</a></p>
    </div>

    <div class="scholarship-item">
      <p><strong>Washington University in St. Louis: McKelvey School of Engineering</strong></p>
      <p class="official-link">Official Link: <a href="https://erasmus-plus.ec.europa.eu/" target="_blank">https://erasmus-plus.ec.europa.eu/</a></p>
    </div>

    <div class="scholarship-item">
      <p><strong>Taiwan International Graduate Program</strong></p>
      <p class="official-link">Official Link: <a href="https://erasmus-plus.ec.europa.eu/" target="_blank">https://erasmus-plus.ec.europa.eu/</a></p>
    </div>

    <div class="scholarship-item">
      <p><strong>University of California, Los Angeles: Institute for Pure and Applied Mathematics</strong></p>
      <p class="official-link">Official Link: <a href="https://erasmus-plus.ec.europa.eu/" target="_blank">https://erasmus-plus.ec.europa.eu/</a></p>
    </div>

    <div class="scholarship-item">
      <p><strong>Institute of Science and Technology Austria</strong></p>
      <p class="official-link">Official Link: <a href="https://erasmus-plus.ec.europa.eu/" target="_blank">https://erasmus-plus.ec.europa.eu/</a></p>
    </div>
  </div>
`,

 'IELTS': `
  <div class="ielts-section">
    <h3 style="color: #b30000; margin-bottom: 10px;">What is IELTS</h3>
    <p>
      The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA.
    </p>
    <p>
      Your ability to listen, read, write and speak in English will be assessed during the test. IELTS is graded on a scale of 1–9.
    </p>
    <p>
      IELTS is jointly owned by the British Council, IDP: IELTS Australia and Cambridge Assessment English.
    </p>

    <h3 style="color: #b30000; margin-top: 30px; margin-bottom: 10px;">Why take IELTS?</h3>
    <p>
      If you are looking to work, live or study in an English-speaking country, then you must be able to demonstrate a high level of English language ability.
    </p>
    <p>
      English is the third most spoken language in the world, with 379 million speakers worldwide.
    </p>
    <p>
      Being able to communicate in the native language of the country you wish to work or study in, has a wide range of benefits. It is also essential for job opportunities as well as integration into the community.
    </p>
    <p>
      IELTS is the most popular test for those looking to migrate to Australia, Canada, New Zealand and the UK. It is globally recognised by more than 11,000 employers, universities, schools and immigration bodies including 3,400 institutions in the USA.
    </p>
  </div>
`,

'GRE': `
  <div class="gre-section">
    <h3 style="color: #8e0000; margin-bottom: 12px;">GRE Preparation Courses :</h3>

    <p>
      Graduate Record Examination (GRE) is a standardized test taken by prospective graduate and business school applicants around the world who are interested in pursuing a master’s, MBA, specialized master’s in business or doctoral degree in the US, Canada and many other countries. GRE preparation coaching is the first step towards study abroad. The GRE exam is owned and administered by Educational Testing Services (ETS).
    </p>

    <p>
      The GRE General Test is administered on a computer at over 1,000 test locations in over 160 countries. The exam is available on a continual basis throughout the year in most parts of the world. The test is available up to three times a month in Mainland China, Hong Kong, Taiwan, and Korea.
    </p>

    <p>
      Thousands of graduate schools, including business and law, as well as departments and divisions within these schools, accept the GRE General Test.
    </p>

    <p>
      Every year, over 500,000 people from 160 countries take the GRE General Test, which is administered at over 1,000 ETS test centres. Candidates’ GRE scores are accepted at thousands of graduate institutions worldwide for master’s and doctorate degrees.
    </p>

    <p>
      More than 1,200 business schools worldwide accept GRE scores, including top-ranked MBA programs according to The Financial Times, U.S. News & World Report, and Bloomberg Businessweek, as well as a few US law schools.
    </p>
  </div>
`,

 
  
};

const GRE = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Overview');

  return (
    <>
      <ImageSlider />
      <div className="gre-header">
        <div className="gre-breadcrumb">
          <FaHome className="gre-home-icon" onClick={() => navigate('/')} title="Go to Home" />
          <span className="gre-breadcrumb-arrow">»</span>
          <span>International</span>
          <span className="gre-breadcrumb-arrow">»</span>
          <span className="gre-breadcrumb-text">{selectedCategory}</span>
        </div>
      </div>

      <div className="gre-main" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="gre-sidebar">
          <div className="gre-sidebar-header">
            <FaBars />
            Categories
          </div>
          <ul className="gre-category-list">
            {Object.keys(categoryData).map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`gre-category-item ${selectedCategory === item ? 'active' : ''}`}
              >
                <FaBook />
                <span>{item}</span>
                {(item === 'Approvals' || item === 'Ranking & Accreditation') && <FaChevronDown />}
              </li>
            ))}
          </ul>
        </div>

        <div className="gre-content">
          <h2 className="gre-title">{selectedCategory}</h2>
          <div dangerouslySetInnerHTML={{ __html: categoryData[selectedCategory] }} />
        </div>
      </div>
      <NewsSlider />
      <Banner />
      <Query />
      <Footer />
    </>
  );
};

export default GRE;
