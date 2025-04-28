import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#00384d',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      fontSize: '13px',
      paddingTop: '40px',
    },
    container: {
      maxWidth: '1200px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '150px',
      flexWrap: 'wrap',
      paddingBottom: '30px',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s', // smooth transition
    },
    hr: {
      border: 'none',
      height: '2px',
      backgroundColor: '#f7c948',
      margin: '20px auto',
      width: '80%',
    },
    bottom: {
      maxWidth: '1200px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      flexWrap: 'wrap',
    },
    leftText: {
      fontWeight: 'bold',
    },
    rightArea: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    socialIcon: {
      color: 'white',
      fontSize: '18px',
      textDecoration: 'none',
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Top Columns */}
      <div style={styles.container}>
        {/* Colleges */}
        <div style={styles.column}>
          <a href="https://sbmch.ac.in" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Sree Balaji Medical College & Hospital</a>
          <a href="https://slnmc.edu.in" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Sri Lakshmi Narayana Institute of Medical Sciences</a>
          <a href="https://bharathmedicalcollege.com" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Bhaarath Medical College and Hospital</a>
          <a href="https://bharathuniv.ac.in/nursing.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Bhaarath College of Nursing</a>
          <a href="https://sbdch.ac.in" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Sree Balaji Dental College and Hospital</a>
          <a href="https://sbcn.ac.in" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Sree Balaji College of Nursing</a>
          <a href="https://bharathuniv.ac.in/physiotherapy.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Sree Balaji College of Physiotherapy</a>
          <a href="https://slnce.edu.in" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Sri Lakshmi Narayana College of Engineering</a>
          <a href="https://jrmedicalcollege.edu.in" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- JR Medical College and Hospital</a>
        </div>

        {/* Academics */}
        <div style={styles.column}>
          <a href="https://bharathuniv.ac.in/programs.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Programme Offered</a>
          <a href="https://bharathuniv.ac.in/engineering.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Engineering and Technology</a>
          <a href="https://bharathuniv.ac.in/law.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Faculty of Law</a>
          <a href="https://bharathuniv.ac.in/pharmacy.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Faculty of Pharmacy</a>
          <a href="https://bharathuniv.ac.in/media.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- School of Media Science</a>
          <a href="https://bharathuniv.ac.in/arts.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Arts & Science</a>
          <a href="https://www.nirfindia.org" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- NIRF</a>
          <a href="https://bharathuniv.ac.in/nodal.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Nodal Officers</a>
          <a href="https://studyinindia.gov.in/" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Study in India</a>
          <a href="https://www.qsi-gauge.com/" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- QS-I Gauge</a>
          <a href="https://bharathuniv.ac.in/online.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Online Education</a>
        </div>

        {/* Student Corner */}
        <div style={styles.column}>
          <a href="https://bharathuniv.ac.in/placement.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Placement Cell</a>
          <a href="https://bharathuniv.ac.in/antiragging.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Anti-Ragging Committee</a>
          <a href="https://bharathuniv.ac.in/grievance.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Grievances</a>
          <a href="https://bharathuniv.ac.in/feedback.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Students Feedback</a>
          <a href="https://bharathuniv.ac.in/admission.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Admission</a>
          <a href="https://bharathuniv.ac.in/courses.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Courses</a>
          <a href="https://bharathuniv.ac.in/fee.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Fee Structure</a>
          <a href="https://bharathuniv.ac.in/contact.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Contact Us</a>
          <a href="https://bharathuniv.ac.in/mandatorydisclosure.php" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}><b>- Mandatory Disclosure</b></a>
          <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" style={styles.link} onMouseEnter={(e) => e.target.style.color = '#f7c948'} onMouseLeave={(e) => e.target.style.color = 'white'}>- Sustainable Development Goals</a>
        </div>
      </div>

      {/* Yellow Line */}
      <hr style={styles.hr} />

      {/* Bottom Area */}
      <div style={styles.bottom}>
        <div style={styles.leftText}>
          Terms and Conditions for Online Payment
        </div>
        <div style={styles.rightArea}>
          <a href="#" style={styles.socialIcon}><i className="fab fa-facebook-f"></i></a>
          <a href="#" style={styles.socialIcon}><i className="fab fa-twitter"></i></a>
          <a href="#" style={styles.socialIcon}><i className="fab fa-instagram"></i></a>
          <a href="#" style={styles.socialIcon}><i className="fab fa-youtube"></i></a>
          <span>© Copyrights 2025. BIHER All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
