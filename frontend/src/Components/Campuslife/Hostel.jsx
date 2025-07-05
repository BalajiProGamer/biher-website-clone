import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import hostelImage from '../../assets/Hostel.png';
import hostelBg from '../../assets/pattern.jpg';
import Footer from '../Footer';
import Query from '../Pages/Query';
import Banner from '../Banner';
import '../../styles/global.css'; // Make sure this path is correct

const Hostel = () => {
  return (
    <div className="hostel-container">
      <img src={hostelImage} alt="Hostel Building" className="hostel-image" />

      <div className="hostel-header">
        <Link to="/" className="hostel-home-link">
          <FaHome className="hostel-icon" />
        </Link>
        <span className="hostel-separator">›</span>
        <span className="hostel-breadcrumb">Campus Life</span>
        <span className="hostel-separator">›</span>
        <span className="hostel-breadcrumb">Hostels</span>
      </div>

      <div
        className="hostel-background-section"
        style={{ backgroundImage: `url(${hostelBg})` }}
      >
        <div className="hostel-content-box">
          <h2 className="hostel-heading">
            <span className="hostel-main-title">Hostels</span> <br />
            <h3 className="hostel-section-title">About us :</h3>
               <hr className="hostel-section-divider" />

          </h2>

          <p>
           Every effort has been made to provide the best facilities for students who live on campus. Every student has access to a wide range of activities, facilities and support. Besides the regular hostel and dining facilities, there are affordable food services on campus that provide inexpensive and easily accessible lunch and evening snacks options. BIHER, with its beautifully landscaped and carefully tended gardens, provides an ideal environment for a congenial learning experience. Here is a campus that invites students out of their hostels to spend time between classes midst greenery and a riot of floral colour.
          </p>
          <br />
          <p>
           BIHER gives great importance to the welfare of its students. It has separate fully equipped hostel facilities for boys and girls. It has 6 blocks of hostels with compound wall and landscaped gardens. All hostel blocks are well connected by roads. RO water plant treatment caters the water needs of the hostel. Sewage plant 
          </p>
          <br />
          <p>
           5 hostels are located in BIHER campus. There are 4 boy’s hostel and 1 girl’s hostel, which accommodate 1470 students in single bedded, two-bedded and three-bedded rooms with ac and non-ac facilities. There are 12 A/C rooms in boy’s hostel and 10 A/C rooms in girl’s hostel. Individual metering services for those who want A/C facilities is also provided. Post-graduates students have separate block of hostels. Each block has separate gym, library, laundry facilities and internet center. Each floor in the hostels has TVs with cable connection. Optional washing services are provided in well maintained separate washing areas. In addition, we provide a Men’s saloon for the boys.
          </p>
          <br />
          <h3 className="hostel-section-title">Dining Hall :</h3>
          <hr className="hostel-section-divider" />

          <p>
            A spacious visitors lounge has recently been added for the benefit of visiting parents / guardians, supplementing the residential guest house facilities available. The spotlessly maintained and spacious vegetarian and non-vegetarian dining halls in the hostels serve wholesome, nutritious food with the help of a unique steam cooking facility. Each block has separate dining hall, which serves south Indian, north Indian and Chinese foods and also a RO Plant drinking water is provided for all the students.. The caterers are well experienced and prepare food in modern kitchen stressing the importance to hygiene and good taste. A dining mess committee consisting of students gives the hostel menu.For those who want a change, a variety of hygienic food facilities are available on campus. A popular eating spot is the 600 square meters food court, that serves delicious non-vegetarian and vegetarian food at reasonable prices. Fast food outlets are also attached to both the boys and girls hostel
          </p>
          <br />
          <h3 className="hostel-section-title">Health Center :</h3>
           <hr className="hostel-section-divider" />
          <p>
           Primary health care center takes care of the health of the students. All students in hostels are checked regularly on monthly basis by the doctors of the university hospital. The university hospital has full-fledged hospital facilities with ICU and emergency care for 24 hours. An ambulance is always standby for any medical emergency. All medicines and investigation are provided free of charge to all students and faculty.
          </p>
          <br />
          <h3 className="hostel-section-title">Guest House :</h3>
           <hr className="hostel-section-divider" />
          <p>
           All visiting parents and guests can stay in the fully furnished air-conditioned guesthouse in the respective campuses. More than 100 guests can stay at the same time.
          </p>
          <h3 className="hostel-section-title">Bank and ATM :</h3>
           <hr className="hostel-section-divider" />
           <p>Punjab National Bank provides the ATM and banking at the respective campuses for the need of the students and faculty.</p>
           <h3 className="hostel-section-title"> Other Facilities :</h3>
           <hr className="hostel-section-divider" />
           <p>Each campus has a post office STD, ISD pay phones, copier facility, stationery store, souvenir shop etc. The university has the tie-ups with beauty parlor, travel agency etc.</p>
        </div>
      </div>
     <Banner/>
     <Query/>
      <Footer />
    </div>
  );
};

export default Hostel;
