 import React from 'react';
import bharathIcon from '../../assets/bharathicon1.png';
import backgroundImage from '../../assets/pattern.jpg'; // ✅ Import background image
import Footer from '../Footer';
import SidebarMenu from './SidebarMenu';
import Header from '../Header';
import Banner from '../Banner';

const Overview = () => {
  const layoutStyle = {
    display: 'flex',
    padding: '99px',
    backgroundImage: `url(${backgroundImage})`, // ✅ Use imported background image
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  const sidebarStyle = {
    marginRight: '30px',
    flexShrink: 0,
  };

  const contentStyle = {
    maxWidth: '900px',
    lineHeight: '1.7',
    color: '#333',
    flex: 1,
  };

  const headingStyle = {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px',
    borderLeft: '4px solid #f5b120',
    paddingLeft: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const subHeadingStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
  };

  const biherStyle = {
    color: '#a5121a',
  };

  const boldText = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '15px',
  };

  const listStyle = {
    paddingLeft: '20px',
    marginTop: '10px',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
    color: '#333',
  };

  const imageStyle = {
    float: 'right',
    width: '150px',
    marginLeft: '15px',
  };

  return (
    <>
    <Header />
    
      <div style={layoutStyle}>
        <div style={sidebarStyle}>
          <SidebarMenu />
        </div>
        <>
        <Banner />
        </>

        <div style={contentStyle}>
          <div style={headingStyle}>About Us</div>
          <div style={subHeadingStyle}>
            Welcome to - <span style={biherStyle}>BIHER</span> :
          </div>
          <p style={paragraphStyle}>
            Sri Lakshmi Ammal Educational Trust was established with a visionary mission to revolutionize higher education in Tamil Nadu. In 1984, under the dynamic leadership of Dr. S. Jagathrakshakan, the Trust founded the Bharath Institute of Science and Technology (BIST), marking a historic milestone as the first self-financing engineering college in the state. This pioneering initiative laid the foundation for the Trust's subsequent ventures in medical and allied health sciences education.
          </p>

          <p style={boldText}>
            Building on its commitment to excellence, the Trust established Sree Balaji Dental College and Hospital in 1989. The institution quickly rose to prominence and, in July 2002, was granted the status of a Deemed to be University by the Ministry of Human Resource Development (MHRD), Government of India, under Section 3 of the UGC Act, 1956. This recognition heralded the inception of the Bharath Institute of Higher Education and Research (BIHER), which became the umbrella organization for a growing network of esteemed institutions.
          </p>

          <ul style={listStyle}>
            <li style={listItemStyle}>Bharath Medical College and Hospital (BMCH), Chennai</li>
            <li style={listItemStyle}>Sree Balaji College of Nursing, Chennai</li>
            <li style={listItemStyle}>Sree Balaji Medical College and Hospital (SBMCH), Chennai</li>
            <li style={listItemStyle}>Sree Balaji College of Physiotherapy, Chennai</li>
            <li style={listItemStyle}>Sri Lakshmi Narayana Institute of Medical Sciences (SLIMS), Puducherry</li>
          </ul>

          <img
            src={bharathIcon}
            alt="41 years of excellence"
            style={imageStyle}
          />

          <p style={paragraphStyle}>
            Collectively, these institutions reflect the Trust's unwavering commitment to providing world-class education. BIHER now stands as a premier educational conglomerate, offering multi-disciplinary, multicultural, and high-quality education to nearly 10,000 students from around the world. Spanning six expansive campuses across Tamil Nadu and Puducherry, BIHER's infrastructure includes over 1.3 crore square feet of state-of-the-art facilities set within a vast 603-acre landscape. The institution prides itself on its cadre of distinguished faculty, who are dedicated to delivering excellence across undergraduate and postgraduate programs, while also driving forward innovative research and development initiatives.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Overview;
