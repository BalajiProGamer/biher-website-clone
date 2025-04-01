import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <ul>
            <li><a href="https://sbmch.ac.in" target="_blank" rel="noopener noreferrer">Sree Balaji Medical College & Hospital</a></li>
            <li><a href="https://slims.ac.in/" target="_blank" rel="noopener noreferrer">Sri Lakshmi Narayana Institute of Medical Sciences</a></li>
            <li><a href="https://bharathmedicalcollege.com" target="_blank" rel="noopener noreferrer">Bharath Medical College and Hospital</a></li>
            <li><a href="https://bharathcollegeofnursing.com" target="_blank" rel="noopener noreferrer">Bharath College of Nursing</a></li>
            <li><a href="https://sbdch.ac.in" target="_blank" rel="noopener noreferrer">Sree Balaji Dental College and Hospital</a></li>
            <li><a href="https://sbcn.ac.in" target="_blank" rel="noopener noreferrer">Sree Balaji College of Nursing</a></li>
            <li><a href="https://sbcp.ac.in" target="_blank" rel="noopener noreferrer">Sree Balaji College of Physiotherapy</a></li>
            <li><a href="https://slnce.ac.in" target="_blank" rel="noopener noreferrer">Sri Lakshmi Narayana College of Engineering</a></li>
            <li><a href="https://jrmedicalcollege.com" target="_blank" rel="noopener noreferrer">JR Medical College and Hospital</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">Programme Offered</a></li>
            <li><a href="#">Engineering and Technology</a></li>
            <li><a href="#">Faculty of Law</a></li>
            <li><a href="#">Faculty of Pharmacy</a></li>
            <li><a href="#">School of Media Science</a></li>
            <li><a href="#">Arts & Science</a></li>
            <li><a href="#">NIRF</a></li>
            <li><a href="#">Nodal Officers</a></li>
            <li><a href="#">Study in India</a></li>
            <li><a href="#">QS-I Gauge</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">Placement Cell</a></li>
            <li><a href="#">Anti-Ragging Committee</a></li>
            <li><a href="#">Grievances</a></li>
            <li><a href="#">Admission</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Fee Structure</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Mandatory Disclosure</a></li>
            <li><a href="#">Sustainable Development Goals</a></li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <p>Terms and Conditions for Online Payment</p>
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        
        <p>© Copyrights 2025, BIHER All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;