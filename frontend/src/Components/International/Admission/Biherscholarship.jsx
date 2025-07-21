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
 'Overview': `
  <h3>Why Study In India ?</h3>
  <p>India has been and continues to be home for innovation, creativity and leadership. The strength of India’s education system may be gauged from the fact that the world’s leading companies are being helmed by products of Indian education system such as Satya Nadella, CEO, Microsoft, Sundar Pichai, CEO, Google Inc, Ajaypal Singh Banga President and the CEO, MasterCard, Rajeev Suri, CEO of Nokia and Indira Nooyi, CEO of Pepsi Co etc.</p>
  <p>India believes in "vasudhaiva kutumbakam" (the world is a family). A secular nation, tolerant of each other’s beliefs, customs and values it celebrates Diwali (Hindu Festival of Lights), Eid (Islamic religious festival) and Christmas (birth of Jesus Christ) along with other festivals with equal fervor.</p>
  <ul>
    <li>Fastest growing economy by World Bank, IMF & CSO.</li>
    <li>Second fastest growing service sector in the world by CII & KPMG.</li>
    <li>India is the 7th largest country in the world and the largest democracy.</li>
    <li>The second largest pool of engineers and scientists is from India.</li>
    <li>India is the Second – Largest English – Speaking Country in the World – 125,226,449 numbers of English speakers.</li>
  </ul>
`,

 'Eligibility': `
  
  <p>The eligibility criteria for all Programmes for international applicants is minimum <strong>50%</strong> in the qualifying examination along with having studied the prerequisite subjects necessary for admission in the desired Programme.</p>
`,

 'Programmes and Fees': `

  <div style="overflow-x: auto;">
    <table class="fee-table">
      <thead>
        <tr>
          <th>Serial No.</th>
          <th>Programs Offered</th>
          <th>Fees Per Year</th>
        </tr>
      </thead>
      <tbody>
        <tr class="group-header">
          <td>1</td>
          <td><strong>B.Sc. Agriculture – Under Graduate Program 4 Years</strong></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>B.Sc (Hons) Agriculture</td>
          <td>500000/- Per Year</td>
        </tr>
        <tr class="group-header">
          <td>2</td>
          <td><strong>B.Tech. (Bachelor of Technology) - Under Graduate Programs 4 Years</strong></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>B. Tech Aerospace Engineering</td>
          <td>250000/- Per Year</td>
        </tr>
        <tr>
          <td></td>
          <td>B.Tech Aeronautical Engineering</td>
          <td>250000/- Per Year</td>
        </tr>
        <tr>
          <td></td>
          <td>B.Tech Architecture Engineering</td>
          <td>100000/- Per Year</td>
        </tr>
      </tbody>
    </table>
  </div>
`,

 'Bank Details for International Students': `
 
  <div style="overflow-x: auto;">
    <table class="bank-table">
      <thead>
        <tr>
          <th colspan="2">TUITION FEES</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ACCOUNT NAME</td>
          <td>BHARTH INSTITUTE OF HIGHER EDUCATION AND RESEARCH</td>
        </tr>
        <tr>
          <td>ACCOUNT NUMBER</td>
          <td>512120020056284</td>
        </tr>
        <tr>
          <td>BANK NAME</td>
          <td>CITY UNION BANK</td>
        </tr>
        <tr>
          <td>BRANCH NAME</td>
          <td>Chennai Poonamallee Branch</td>
        </tr>
        <tr>
          <td>BANK ADDRESS</td>
          <td>Old.776, New.70, Trunk Road, Poonamallee, Chennai, 600056</td>
        </tr>
        <tr>
          <td>IFSC CODE</td>
          <td>CIUB0000285</td>
        </tr>
        <tr>
          <td>SWIFT CODE</td>
          <td>CUBIN5M</td>
        </tr>
        <tr>
          <td>ABA (AD)#</td>
          <td>6080082</td>
        </tr>
        <tr>
          <td>ONLINE PAYMENT LINK</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
`,

 'BIHER Scholarship': `
  <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px;">
    <div style="flex: 1 1 60%;">
      <h3 style="color: #333;"><strong>BIHER - <span style="color: #b30000;">Scholarship</span> :</strong></h3>
      <hr style="border: 0; border-top: 1px solid #ccc; margin: 10px 0;" />
      <p style="text-align: justify;">
        The University provides merit based scholarships and continuation of scholarship is as per the terms and conditions of the University i.e. regularity in attendance, progress, good character and conduct.
        <br /><br />
        To check your eligibility, please complete the Application form and attach your transcripts.
      </p>
      <p style="margin-top: 10px;"><strong><em style="color: #b30000;">SCHOLARSHIP :</em></strong> Register and Avail upto 50% Scholarship.</p>

      <h4 style="margin-top: 25px; color: #222;">Terms and Condition for the <span style="color: #b30000;">Merit-based Scholarship</span>:</h4>
      <hr style="border: 0; border-top: 1px solid #ccc; margin: 10px 0;" />
      <p><strong><u>The scholarship will be applicable on Tuition fee only.</u></strong></p>
      <p>The scholarship is subject to verification of original transcripts and other documents as required by the University at the time of reporting of the student at the University Campus.</p>
    </div>

    <div style="flex: 1 1 35%; text-align: center;">
      <img src="../../assets/scholarship.jpg" alt="Scholarship" style="max-width: 100%; border-radius: 8px;" />
    </div>
  </div>
`,

  'Apply Now': `
  <div style="padding: 20px;">
    

    <div style="background-color: #f3f5fb; border-left: 3px solid #b30000; display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; border-radius: 6px; cursor: pointer;">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScqxUaV85phQgCYck3DtGkO9kAbaXypxnCMsE28JkTSXs9CDw/closedform?pli=1" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #1a1a1a; font-weight: 500;">
        BIHER Admission 2024 for International Students
      </a>
      <div style="background-color: #555; padding: 8px 12px; border-radius: 0 4px 4px 0;">
        <span style="color: #fff; font-size: 14px;">→</span>
      </div>
    </div>
  </div>
`,

};


const Fees = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('overview');

  return (
    <>
    <ImageSlider/>
      <div className="fees-header">
        <div className="fees-breadcrumb">
          <FaHome className="fees-home-icon" onClick={() => navigate('/')} title="Go to Home" />
          <span className="breadcrumb-arrow">»</span>
          <span>International</span>
          <span className="breadcrumb-arrow">»</span>
          <span className="breadcrumb-overview">BiherScholarship</span>
        </div>
      </div>

      <div className="fees-main" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="fees-sidebar">
          <div className="fees-sidebar-header">
            <FaBars />
            Categories
          </div>
          <ul className="fees-category-list">
            {Object.keys(categoryData).map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`fees-category-item ${selectedCategory === item ? 'active' : ''}`}
              >
                <FaBook />
                <span>{item}</span>
                {(item === 'Approvals' || item === 'Ranking & Accreditation') && <FaChevronDown />}
              </li>
            ))}
          </ul>
        </div>

        <div className="fees-content">
          <h2 className="fees-title">{selectedCategory}</h2>
          <div dangerouslySetInnerHTML={{ __html: categoryData[selectedCategory] }} />
        </div>
      </div>
      <NewsSlider/>
      <Banner/>
      <Query/>

      <Footer />
    </>
  );
};

export default Fees;
