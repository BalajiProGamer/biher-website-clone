 import React, { useState } from 'react';
import { FaHome, FaBook, FaBars, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import headerImage from '../../assets/pattern.jpg';
import excellenceBadge from '../../assets/41 logo.png';
import Footer from '../Footer';

const categoryData = {
  'About Us': `
    <div style="font-size: 15px; line-height: 1.8; color: #333;">
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
  `,
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
`,

  'Vision Implementation Plan': 'Describes the execution strategy for the vision plan.',
  'Strength Of The Institution': 'Highlights our academic, infrastructural and faculty strengths.',
  'Inception & Brief History': 'Provides the historical evolution of the institution.',
  'Professional Society': 'Details the professional bodies and student chapters present.',
  'Approvals': 'Contains information about AICTE, UGC and other relevant approvals.',
  'Ranking & Accreditation': 'Shows our NAAC, NBA and other rankings/accreditations.',
};

const Overview = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('About Us');

  return (
    <>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(to right, #8e2c2c, #e61b23)',
        color: '#fff',
        padding: '12px 30px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '16px' }}>
          <FaHome style={{ marginRight: '8px', cursor: 'pointer' }} onClick={() => navigate('/')} title="Go to Home" />
          <span style={{ marginRight: '5px' }}>»</span>
          <span style={{ marginRight: '5px' }}>About Us</span>
          <span style={{ margin: '0 5px' }}>»</span>
          <span style={{ fontStyle: 'italic' }}>Overview</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        padding: '40px',
        paddingLeft: '80px',
        paddingRight: '40px',
        display: 'flex',
        gap: '30px',
      }}>
        {/* Sidebar */}
        <div style={{
          width: '220px',
          background: '#032539',
          color: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          fontFamily: 'sans-serif',
          height: 'fit-content',
        }}>
          <div style={{
            backgroundColor: '#ffc107',
            color: '#000',
            padding: '10px 12px',
            fontWeight: 'bold',
            fontSize: '15px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <FaBars />
            Categories
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Object.keys(categoryData).map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(item)}
                style={{
                  padding: '9px 19px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  background: selectedCategory === item ? '#043d5d' : 'transparent',
                  fontSize: '13px',
                }}
              >
                <FaBook />
                <span style={{ flex: '1 1 auto' }}>{item}</span>
                {(item === 'Approvals' || item === 'Ranking & Accreditation') && (
                  <FaChevronDown style={{ marginLeft: 'auto' }} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div style={{
          flex: 1,
          background: '#fff',
          borderRadius: '10px',
          padding: '24px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          minHeight: '300px',
        }}>
          <h2 style={{
            borderBottom: '2px solid #ccc',
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            {selectedCategory}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: categoryData[selectedCategory] }} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Overview;
