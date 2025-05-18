 import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import hostelImage from '../../assets/Hostel.png';
import hostelBg from '../../assets/pattern.jpg';
import Footer from '../Footer'; // Adjust as needed

const Hostel = () => {
  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      background: 'linear-gradient(to right, #a52a2a, #ee1c25)',
      color: 'white',
      fontFamily: 'Georgia, serif',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    homeLink: {
      color: 'white',
      textDecoration: 'none',
      marginRight: '8px',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      fontSize: '18px',
      marginRight: '4px',
    },
    separator: {
      margin: '0 8px',
    },
    breadcrumbText: {
      fontSize: '16px',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    backgroundSection: {
      backgroundImage: `url(${hostelBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '40px 20px',
    },
    contentBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px',
      padding: '30px',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'Georgia, serif',
      lineHeight: '1.7',
      color: '#333',
    },
    heading: {
      color: '#000',
      fontSize: '24px',
      marginBottom: '20px',
    },
    sectionTitle: {
      color: '#e60000',
    },
  };

  return (
    <div>
      <img src={hostelImage} alt="Hostel Building" style={styles.image} />

      <div style={styles.header}>
        <Link to="/" style={styles.homeLink}>
          <FaHome style={styles.icon} />
        </Link>
        <span style={styles.separator}>›</span>
        <span style={styles.breadcrumbText}>Campus Life</span>
        <span style={styles.separator}>›</span>
        <span style={styles.breadcrumbText}>Hostels</span>
      </div>

      <div style={styles.backgroundSection}>
        <div style={styles.contentBox}>
          <h2 style={styles.heading}>
            <span style={{ color: '#004080' }}>Hostels</span> <br />
            
            <h3 style={{ ...styles.sectionTitle, fontSize: '20px' }}>About us :</h3>
          </h2>
          <p>
            Every effort has been made to provide the best facilities for students who live on campus. Every student has
            access to a wide range of activities, facilities and support. Besides the regular hostel and dining
            facilities, there are affordable food services on campus that provide inexpensive and easily accessible lunch
            and evening snacks. The campus with its beautifully landscaped and carefully tended gardens, provides an
            ideal environment for a congenial learning experience. Here is a campus that invites students out of their
            hostels to spend time between classes midst greenery and a riot of floral colour.
          </p>
          <br></br>
          <p>
            BIHER gives great importance to the welfare of its students. It has separate fully equipped hostel facilities
            for boys and girls. It has 6 blocks of hostels with compound wall and landscaped gardens. All hostel blocks
            are well connected by roads. RO water plant treatment caters the water needs of the hostel. Sewage plant is
            fully functional.
          </p>
          <br></br>
          <p>
            5 hostels are located in BIHER campus. There are 4 boy’s hostel and 1 girl’s hostel, which accommodate 1470
            students in single bedded, two-bedded and three-bedded rooms with ac and non-ac facilities. There are 12 A/C
            rooms in boy’s hostel and 10 A/C rooms in girl’s hostel. Individual metering services for those who want A/C
            facilities is also provided. Post-graduates students have separate block of hostels. Each block has separate
            gym, library, laundry facilities and internet center. Each floor in the hostels has TVs with cable
            connection. Optional washing services are provided in well maintained separate washing areas. In addition, we
            provide a Men’s saloon for the boys.
          </p>
           {/* New content starts here */}
            <h3 style={{ ...styles.sectionTitle, fontSize: '20px' }}>Dining Hall :</h3>
           <p>
             A spacious visitors lounge has recently been added for the benefit of visiting parents / guardians, supplementing the residential guest house facilities available. The spotlessly maintained and spacious vegetarian and non-vegetarian dining halls in the hostels serve wholesome, nutritious food with the help of a unique steam cooking facility. Each block has separate dining hall, which serves south Indian, north Indian and Chinese foods and also a RO Plant drinking water is provided. The caterers are well experienced and prepare food in modern kitchen stressing the importance to hygiene and good taste. A dining mess committee consisting of students gives the hostel menu. For those who want a change, a variety of hygienic food facilities are available on campus. A popular eating spot is the 600 square meters food court, that serves delicious non-vegetarian and vegetarian food at reasonable prices. Fast food outlets are also attached to both the boys and girls hostel.
            </p>
           <br />
         <h3 style={{ ...styles.sectionTitle, fontSize: '20px' }}>Health Center :</h3>
         <p>
          Primary health care center takes care of the health of the students. All students in hostels are checked regularly on monthly basis by the doctors of the university hospital. The university hospital has full-fledged hospital facilities with ICU and emergency care for 24 hours. An ambulance is always standby for any medical emergency. All medicines and investigation are provided free of charge to all students and faculty.
         </p>
         <br />
           <h3 style={{ ...styles.sectionTitle, fontSize: '20px' }}>Guest House :</h3>
        <p>
         All visiting parents and guests can stay in the fully furnished air-conditioned guesthouse in the respective campuses. More than 100 guests can stay at the same time.
         </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hostel;
