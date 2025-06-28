import React, { useState } from 'react';
import { FaHome, FaBook, FaBars, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import headerImage from '../../assets/pattern.jpg';
import excellenceBadge from '../../assets/41 logo.png';
import Footer from '../Footer';
import '../../styles/global.css';

const categoryData = {
  'About Us': `
    <div style="font-size: 18px; line-height: 1.8; color: #333;">
      <h3 style="color: #000; font-weight: bold;">Welcome to - <span style="color: #c00;">BIHER</span> :</h3>
      <p>Sri Lakshmi Ammal Educational Trust was established with a visionary mission to revolutionize higher education in Tamil Nadu. 
      In 1984, under the dynamic leadership of Dr. S. Jagathrakshakan, the Trust founded the Bharath Institute of Science and Technology (BIST), 
      marking a historic milestone as the first self-financing engineering college in the state. This pioneering initiative laid the foundation 
      for the Trust’s subsequent ventures in medical and allied health sciences education.</p>
      <br>
      <p>Building on its commitment to excellence, the Trust established Sree Balaji Dental College and Hospital in 1989. The institution quickly 
      rose to prominence and, in July 2002, was granted the status of a Deemed to be University by the Ministry of Human Resource Development (MHRD), 
      Government of India, under Section 3 of the UGC Act, 1956. This recognition heralded the inception of the Bharath Institute of Higher Education 
      and Research (BIHER), which became the umbrella organization for a growing network of esteemed institutions.</p>
      <br>
      <p style="font-weight: bold; color: #003366;">Today, BIHER Encompasses a Wide Range of Specialized Institutions, including :</p>

      <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 30px auto;">
        <ul style="margin: 0; padding-left: 20px; list-style-type: circle; flex: 1; font-size: 15px; line-height: 1.7;">
          <li>Bharath Medical College and Hospital (BMCH), Chennai</li>
          <li>Sree Balaji College of Nursing, Chennai</li>
          <li>Sree Balaji Medical College and Hospital (SBMCH), Chennai</li>
          <li>Sree Balaji College of Physiotherapy, Chennai</li>
          <li>Sri Lakshmi Narayana Institute of Medical Sciences (SLIMS), Puducherry</li>
        </ul>
        <div style="flex-shrink: 0;">
          <img src="${excellenceBadge}" alt="41 Years of Educational Excellence" style="max-width: 150px;" />
        </div>
      </div>

      <p>Collectively, these institutions reflect the Trust's unwavering commitment to providing world-class education. BIHER now stands 
      as a premier educational conglomerate, offering multi-disciplinary, multicultural, and high-quality education to nearly 10,000 
      students from around the world. Spanning six expansive campuses across Tamil Nadu and Puducherry, BIHER’s infrastructure includes 
      over 1.3 crore square feet of state-of-the-art facilities set within a vast 603-acre landscape. The institution prides itself 
      on its cadre of distinguished faculty, who are dedicated to delivering excellence across undergraduate and postgraduate programs, 
      while also driving forward innovative research and development initiatives.</p>
    </div>
  `,// KEEP AS IS (HTML remains inline)
    'Vision & Mission': `
    <div style="font-size: 20px; line-height: 1.8; color: #333;">
      <h3 style="color: #000; font-weight: bold;">Our <span style="color: #c00;">Vision</span> :</h3>
      <p style="margin-top: 10px;">
        "Bharath Institute of Higher Education & Research (BIHER) envisions and constantly strives to provide an excellent academic and research ambience 
        for students and members of the faculties to inherit professional competence along with human dignity and transformation of community to keep pace 
        with the global challenges so as to achieve holistic development."
      </p>
      <br>
      <h3 style="color: #000; font-weight: bold;">Our <span style="color: #c00;">Mission</span> :</h3>
      
      <ul style="margin-top: 10px; padding-left: 20px; list-style-type: circle;">
        <li>To develop as a Premier University for Teaching, Learning, Research and Innovation on par with leading global Universities.</li>
        <li>To impart education and training to students for creating a better society with ethics and morals.</li>
        <li>To foster an interdisciplinary approach in education, research and innovation by supporting lifelong professional development, 
        enriching knowledge banks through scientific research, promoting best practices and innovation, industry driven and institute oriented 
        cooperation, globalization and international initiatives.</li>
        <li>To develop as a multi-dimensional institution contributing immensely to the cause of societal advancement through spread of literacy, 
        human dignity, equality, human rights, and democratic values.</li>
        <li>To establish benchmark standards in professional practice in the fields of innovation and emerging areas in Engineering, Management, Medicine, Dentistry, Nursing, Physiotherapy and Allied Sciences.</li>
      </ul>
    </div>
  `,
    'Vision Plan': `
  <div style="font-size: 15px; line-height: 1.8; color: #333;">
    <h4 style="color: #c00;">Disciplines & Departments :</h4>
    <ul style="padding-left: 20px; list-style-type: disc;">
      <li>BIHER strives to promote Interdisciplinary learning with 12 different disciplines such as Health economics, Data sciences, Theology, Music, Liberal Arts etc.,</li>
      <li>50% of BIHER’s programs will be interdisciplinary by 2023, 75% in 2028 and 100% by 2033 – Tuned as per the needs of National & International Importance.</li>
    </ul>

    <div style="margin-top: 20px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <thead style="background-color: #054766; color: #fff;">
          <tr>
            <th style="padding: 10px; border: 1px solid #ccc;">S.No</th>
            <th style="padding: 10px; border: 1px solid #ccc;">UG</th>
            <th style="padding: 10px; border: 1px solid #ccc;">PG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">1</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Aerospace Engineering (Computational Intelligence)</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Aircraft Propulsion & Power Systems</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">2</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Natural gas & Pipe Lining Engineering</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Ocean Technologies</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">3</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Informatics & Drug Design</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Composite Fluid Structure Engineering</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">4</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Engineering Science & Mechanics</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Material Engineering</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">5</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Nuclear & Radiological Engineering</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Oil Drilling & Ocean Technologies</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">6</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Occupational Therapy</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Sports Medicine Modular Genetics</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 style="margin-top: 40px; color: #c00;">2023 - 2028 Vision Programs :</h4>
    <div style="margin-top: 10px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <thead style="background-color: #054766; color: #fff;">
          <tr>
            <th style="padding: 10px; border: 1px solid #ccc;">S.No</th>
            <th style="padding: 10px; border: 1px solid #ccc;">UG</th>
            <th style="padding: 10px; border: 1px solid #ccc;">PG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">1</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Acoustics Engineering</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Architectural Acoustics</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">2</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Petro Informatics</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Energy Sciences Engineering</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">3</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Creative Intelligence & Innovation Technologies</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Forensics Security</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">4</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Smart Connected Autonomous Vehicle Engineering</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Material Engineering</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">5</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Alternate Energy Engineering</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Green Engineering Technology</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">6</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Optometry</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Rehabilitation & Regenerative Medicine</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;">7</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Clinical Nutrition Global Health & Social Medicine</td>
            <td style="padding: 8px; border: 1px solid #ccc;">Travel Medicine Transgender Medicine</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 style="margin-top: 40px; color: #c00;">Vision Plan - Research :</h4>
  <ul style="padding-left: 20px; list-style-type: disc;">
    <li>Adopt mentor model to develop strong Research Capabilities — Leading International Research University</li>
    <li>Develop centre of Excellence to conduct high quality Research Activities.</li>
    <li>Encourage community focused research for example to undertake research in public health, community development & health information technology.</li>
    <li>Setting clearly defined short term and long term goals in research with timelines, evaluate the progress and ensure that all relevant infrastructural and human resource support is available to achieve the goals.</li>
    <li>National / International Partnerships and Collaborations with leading research labs and universities. — achieve 75 in 2023, 125 in 2028 and 200 in 2033.</li>
    <li>Increase full time Ph.D scholars to more than 550 in 2023, 750 in 2028 and 1200 in 2033 and PDFS to 25 in 2023, 40 in 2028 and 60 in 2033.</li>
    <li>Increase the quantity and improve the quality of Publications — From the Present 5441 SCOPUS Indexed articles to 20,000 in 2023, to 55,000 in 2028 and total no of publications — 70,180 in 2033 ; High IF publications — to increase from the present 12% to 20% in 2033.</li>
    <li>Increase Research Revenues from the present Rs 20.75 Crores at a growth rate of 15% - 20% per year.</li>
  </ul>
  </div>
`,'Vision Implementation Plan': `
  <div style="font-size: 15px; line-height: 1.8; color: #333;">
    <h2 style="color: #003366; letter-spacing: 1px; border-left: 4px solid #f8b500; padding-left: 10px;">Vision Implementation Plan</h2>

    <h3 style="color: #000; margin-top: 20px;">Academics :</h3>
    <ul style="list-style-type: circle; padding-left: 20px;">
      <li>Launch new programs with innovative curriculum design – Provide exposure to multiple subjects to get multifaceted exposure.</li>
      <li>Flexibility to students – options / add-ons to core subjects, develop Device Agnostic Technology to access online content.</li>
      <li>Funding / Incubation entrepreneurial ideas, Flipped class Room – Integrated Courses & Need based learning.</li>
    </ul>

    <h3 style="color: #000; margin-top: 20px;">Research :</h3>
    <ul style="list-style-type: circle; padding-left: 20px;">
      <li>To promote interest in industry-relevant topics for applied research, and stimulate industry-academia collaboration through platforms such as research forums and seminars.</li>
      <li>To allocate funding for development of research-oriented infrastructure according to national priorities and needs.</li>
      <li>To attract top notch researchers to lead collaborative research between multiple stake holders.</li>
      <li>To increase expenditure on R&D to 35% in 2023, 40% in 2028 & 45% in 2033 by providing funding for research focusing on community development.</li>
    </ul>

    <h3 style="color: #000; margin-top: 20px;">Faculty :</h3>
    <ul style="list-style-type: circle; padding-left: 20px;">
      <li>To grant autonomy to well performing Departments / Research Centres / Centre of Excellence to devise their own mechanisms to recruit faculty members and supporting staffs.</li>
      <li>To encourage active participation of professionals with industry experiences in teaching and offer sabbaticals, incentives & promotions for all Faculties members.</li>
      <li>To develop tenure-based system and performance-based remuneration system to reward performing Faculty members.</li>
      <li>To encourage Faculty members to take up consultancy projects and provide incentives for the same.</li>
      <li>To provide financial support opportunity to enrich knowledge for Faculty members and students by providing Exchange Programmes and establishing research collaboration between Faculty members with global leading research institutes.</li>
      <li>To provide State of the Art teaching / pedagogy / learning / research / sports / infrastructure & amenities to Faculty members and students.</li>
    </ul>

    <h3 style="margin-top: 40px; color: #8B0000;">Basic Assumptions for <span style="color: #b30000;">Financial Projections</span> :</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 10px;">
      <thead style="background-color: #eaeaea; color: #000;">
        <tr>
          <th style="padding: 8px; border: 1px solid #ccc;">S.No</th>
          <th style="padding: 8px; border: 1px solid #ccc;">Particulars</th>
          <th style="padding: 8px; border: 1px solid #ccc;">Year - (2018 - 2023)</th>
          <th style="padding: 8px; border: 1px solid #ccc;">Year - (2023 - 2028)</th>
          <th style="padding: 8px; border: 1px solid #ccc;">Year - (2028 - 2033)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;">1</td>
          <td style="padding: 8px; border: 1px solid #ccc;">Students in Nos.</td>
          <td style="padding: 8px; border: 1px solid #ccc;">15000</td>
          <td style="padding: 8px; border: 1px solid #ccc;">25000</td>
          <td style="padding: 8px; border: 1px solid #ccc;">50000</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;">2</td>
          <td style="padding: 8px; border: 1px solid #ccc;">Staff Ratio</td>
          <td style="padding: 8px; border: 1px solid #ccc;">1:7</td>
          <td style="padding: 8px; border: 1px solid #ccc;">1:5</td>
          <td style="padding: 8px; border: 1px solid #ccc;">1:3</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;">3</td>
          <td style="padding: 8px; border: 1px solid #ccc;">Foreign Students as % of total Student Strength</td>
          <td style="padding: 8px; border: 1px solid #ccc;">5%</td>
          <td style="padding: 8px; border: 1px solid #ccc;">10%</td>
          <td style="padding: 8px; border: 1px solid #ccc;">15%</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;">4</td>
          <td style="padding: 8px; border: 1px solid #ccc;">Resident Scholars as % of Total Student Strength</td>
          <td style="padding: 8px; border: 1px solid #ccc;">65%</td>
          <td style="padding: 8px; border: 1px solid #ccc;">70%</td>
          <td style="padding: 8px; border: 1px solid #ccc;">75%</td>
        </tr>
      </tbody>
    </table>
  </div>
`,


  'Strength Of The Institution': `
  <div style="font-size: 20px; line-height: 1.8; color: #333;">
    <h3 style="color: #000;">Strength Of <span style="color: #c00;">the Institution :</span></h3>
    <br>
    <ul style="padding-left: 20px; list-style-type: circle;">
      <li>6 Campuses - 305 acres — 1.3 crore sq.ft buildings — 3000 Bedded Hospital — 6000 OPS / day (Free - Treatment, Medicine & Food).</li>
      
      <li>Cutting edge Research — 5 lakh sq.ft Research Park, 56 Research Labs, 12 Centres of Excellence.</li>
      <li>World class library with 5 lakh Books, Online journal access to more than 20 lakh e-Resources.</li>
      <li>Virtual class rooms, ICTI EDIJSAT, NPTEL, MOOCs, etc., modules to provide access to courses from top institutions.</li>
      <li>State of Art Student amenities — Hostel Health Centre, Cosmopolitan Cafeteria, Sports, Gym, Recreation facilities, etc.</li>
      <li>Last 5 years — more than 1000 Medical camps, 500 Villages, Planted 25,000 Saplings. Swachh Bharath, Swachhta Pakhwada, Unnat Bharath Abhiyan NCC, NSS, YRC, RRC etc., for holistic development.</li>
      <li>Nearly - 55% Girl students, 75% Other state students, 85% Economically & Socially challenged students, 43% Women faculty.</li>
      <li>Stipends / Scholarships worth - Rs. 35.7 Crores (2016-17), Rs. 38.5 Crores (2017-18).</li>
    </ul>
  </div>
`,

  'Inception & Brief History': `
  <div style="font-size: 29px; line-height: 1.8; color: #333;">
    <h3 style="color: #000; font-weight: bold;">
      Inception &nbsp;<span style="color: #c00;">Brief History :</span>
    </h3>
    <br>

    <p>
      Bharath Institute of Higher Education and Research (BIHER) is one of India’s leading institutes,
      with more than 10,000 students and 900 faculty members. The areas of excellence range from engineering and medicine
      to management and humanities. We live in an increasingly interconnected world that faces challenges and complex
      problems on a global scale. Since the start of the 21st century, BIHER is uniquely prepared among the other
      universities by its breadth of scholarship, entrepreneurial heritage and pioneering faculty – To provide research
      and real-world approaches to address many of the current issues.
    </p>
    <br>
    <p>
      The era of globalization means many things to Bharath: research on issues relating to science and technology,
      exchanges with foreign universities, overseas opportunities for undergraduates, and collaboration. BIHER embarked
      upon ambitious strategic initiatives to ensure that Bharath continues to educate future leaders and to find
      solutions to the most pressing global challenges through its International Advisory Board with eminent scholars
      from 40 top universities/organizations across the world, Corporate Advisory Board with eminent executives from
      215 leading companies, Faculty Abroad Program, Student Semester Abroad Program, Research Institute, Innovation
      in Teaching and Learning Pedagogy, and Diversity of students from 52 countries and from across India.
    </p>
  </div>
`,

  
  
};

const Overview = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('About Us');

  return (
    <>
      <div className="overview-header">
        <div className="overview-breadcrumb">
          <FaHome className="overview-home-icon" onClick={() => navigate('/')} title="Go to Home" />
          <span className="breadcrumb-arrow">»</span>
          <span>About Us</span>
          <span className="breadcrumb-arrow">»</span>
          <span className="breadcrumb-overview">Overview</span>
        </div>
      </div>

      <div
        className="overview-main"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="overview-sidebar">
          <div className="overview-sidebar-header">
            <FaBars />
            Categories
          </div>
          <ul className="overview-category-list">
            {Object.keys(categoryData).map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`overview-category-item ${selectedCategory === item ? 'active' : ''}`}
              >
                <FaBook />
                <span>{item}</span>
                {(item === 'Approvals' || item === 'Ranking & Accreditation') && <FaChevronDown />}
              </li>
            ))}
          </ul>
        </div>

        <div className="overview-content">
          <h2 className="overview-title">{selectedCategory}</h2>
          <div dangerouslySetInnerHTML={{ __html: categoryData[selectedCategory] }} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Overview;
