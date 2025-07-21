import React, { useState } from 'react';
import { FaHome, FaBook, FaBars, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import headerImage from '../../../assets/pattern.jpg';
import ImageSlider from '../../ImageSlider';
import Banner from '../../Banner';
import Query from '../../Pages/Query';
import Footer from '../../Footer';
import '../../../styles/global.css';
import NewsSlider from '../../Pages/NewsSlider';

const categoryData = {
  'MoU’s': `
  <div class="mou-org-section">
    <h3 class="mou-title">MoU’s with International Organizations :</h3>
    
    <p>
      BIHER has 126 international MOU’s with various universities/organisations around the world. BIHER creates a platform for our students to have an International Exposure of standards by organising Summer Internship Projects Aboard(SIPA), Student Exchange Program(SEP), International Credit Transfer Program etc.
    </p>
    <p>
      BIHER also sponsors its faculties for participation in International Conference and Guest Lectures, visits to international laboratories etc.
    </p>
    <p>
      BIHER has Sixty plus Visiting / Adjunct faculties from foreign universities/organisations to deliver Teaching / Research methodologies niche areas.
    </p>
    <p>
      The driving vision at Bharath University is to rapidly evolve into a centre of international education excellence. To achieve this vision, Bharath University continually develops strategic international partnerships with reputed universities and institutions of higher learning across the globe. Bharath University’s global strategy aims to develop strong and effective alliances. These alliances offer faculty, students and researchers at both institutions with opportunities for international collaboration and active involvement in multi-disciplinary projects at a global level.
    </p>
    <p>
      To ensure maximum market-readiness in students, Bharath University works to build maximum international exposure into each program, so as to prepare students more extensively and to think globally.
    </p>
  </div>
`,

 'Collaborative Research': `
  <div class="collab-research-text">
    <p>
      Our strategic partnerships have led to the creation of various avenues of collaborative research with distinct institutions on different academic levels. These projects have been focused on the goal of creating a common platform for meeting of minds with personnel and experts from across the world, to cater for the welfare of humanity, while ensuring the progression of academics in higher education.
    </p>
    <p>
      Through these partnerships, we have ventures and collaborative research platforms, which have been actively working towards mitigating some of the world’s most pressing issues for the well-being and betterment of humanity as a whole.
    </p>
  </div>
`,

'International Ph.D Co-Supervisors': `
  <div class="phd-co-supervisors-section">
   
    <p>
      In view of giving the best exposure and experience for our Ph.D. scholars, we had been keen on collaborating with suitable interested international faculty as CO-supervisor for our Ph.D. Scholars.
      We have a good number of students pursuing PhD programs in fields such as science, technology, engineering, medicine (including dentistry, physiotherapy, and nursing), arts, and management.
    </p>
  </div>
`,

  'Honorary Professors': `
    <div class="gre-section">
      <h3 style="color: #8e0000; margin-bottom: 12px;">GRE Preparation Courses :</h3>
      <p>
        GRE is a standardized test taken by prospective graduate and business school applicants who are interested in pursuing a master's, MBA, or PhD in countries like the US and Canada.
      </p>
    </div>
  `,
};

const Mous = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('overview');

  return (
    <>
      <ImageSlider />
      <div className="mous-header">
        <div className="mous-breadcrumb">
          <FaHome className="mous-home-icon" onClick={() => navigate('/')} title="Go to Home" />
          <span className="mous-breadcrumb-arrow">»</span>
          <span>International</span>
          <span className="mous-breadcrumb-arrow">»</span>
          <span className="mous-breadcrumb-text">{selectedCategory}</span>
        </div>
      </div>

      <div className="mous-main" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="mous-sidebar">
          <div className="mous-sidebar-header">
            <FaBars />
            Categories
          </div>
          <ul className="mous-category-list">
            {Object.keys(categoryData).map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`mous-category-item ${selectedCategory === item ? 'active' : ''}`}
              >
                <FaBook />
                <span>{item}</span>
                {(item === 'Approvals' || item === 'Ranking & Accreditation') && <FaChevronDown />}
              </li>
            ))}
          </ul>
        </div>

        <div className="mous-content">
          <h2 className="mous-title">{selectedCategory}</h2>
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

export default Mous;
