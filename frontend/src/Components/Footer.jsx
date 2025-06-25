import React from "react";
import "../styles/global.css";   // make sure this (or a parent import) pulls the CSS in

const Footer = () => (
  <footer className="footer">
    {/* ─────────── Top Columns ─────────── */}
    <div className="footer__container">
      {/* Colleges */}
      <div className="footer__column">
        <a href="https://sbmch.ac.in"          target="_blank" rel="noopener noreferrer" className="footer__link">- Sree Balaji Medical College &amp; Hospital</a>
        <a href="https://slnmc.edu.in"         target="_blank" rel="noopener noreferrer" className="footer__link">- Sri Lakshmi Narayana Institute of Medical Sciences</a>
        <a href="https://bharathmedicalcollege.com" target="_blank" rel="noopener noreferrer" className="footer__link">- Bhaarath Medical College and Hospital</a>
        <a href="https://bharathuniv.ac.in/nursing.php" target="_blank" rel="noopener noreferrer" className="footer__link">- Bhaarath College of Nursing</a>
        <a href="https://sbdch.ac.in"          target="_blank" rel="noopener noreferrer" className="footer__link">- Sree Balaji Dental College and Hospital</a>
        <a href="https://sbcn.ac.in"           target="_blank" rel="noopener noreferrer" className="footer__link">- Sree Balaji College of Nursing</a>
        <a href="https://bharathuniv.ac.in/physiotherapy.php" target="_blank" rel="noopener noreferrer" className="footer__link">- Sree Balaji College of Physiotherapy</a>
        <a href="https://slnce.edu.in"         target="_blank" rel="noopener noreferrer" className="footer__link">- Sri Lakshmi Narayana College of Engineering</a>
        <a href="https://jrmedicalcollege.edu.in" target="_blank" rel="noopener noreferrer" className="footer__link">- JR Medical College and Hospital</a>
      </div>

      {/* Academics */}
      <div className="footer__column">
        <a href="https://bharathuniv.ac.in/programs.php"       className="footer__link" target="_blank" rel="noopener noreferrer">- Programme Offered</a>
        <a href="https://bharathuniv.ac.in/engineering.php"    className="footer__link" target="_blank" rel="noopener noreferrer">- Engineering and Technology</a>
        <a href="https://bharathuniv.ac.in/law.php"            className="footer__link" target="_blank" rel="noopener noreferrer">- Faculty of Law</a>
        <a href="https://bharathuniv.ac.in/pharmacy.php"       className="footer__link" target="_blank" rel="noopener noreferrer">- Faculty of Pharmacy</a>
        <a href="https://bharathuniv.ac.in/media.php"          className="footer__link" target="_blank" rel="noopener noreferrer">- School of Media Science</a>
        <a href="https://bharathuniv.ac.in/arts.php"           className="footer__link" target="_blank" rel="noopener noreferrer">- Arts &amp; Science</a>
        <a href="https://www.nirfindia.org"                    className="footer__link" target="_blank" rel="noopener noreferrer">- NIRF</a>
        <a href="https://bharathuniv.ac.in/nodal.php"          className="footer__link" target="_blank" rel="noopener noreferrer">- Nodal Officers</a>
        <a href="https://studyinindia.gov.in/"                 className="footer__link" target="_blank" rel="noopener noreferrer">- Study in India</a>
        <a href="https://www.qsi-gauge.com/"                   className="footer__link" target="_blank" rel="noopener noreferrer">- QS‑I Gauge</a>
        <a href="https://bharathuniv.ac.in/online.php"         className="footer__link" target="_blank" rel="noopener noreferrer">- Online Education</a>
      </div>

      {/* Student Corner */}
      <div className="footer__column">
        <a href="https://bharathuniv.ac.in/placement.php"  className="footer__link" target="_blank" rel="noopener noreferrer">- Placement Cell</a>
        <a href="https://bharathuniv.ac.in/antiragging.php" className="footer__link" target="_blank" rel="noopener noreferrer">- Anti‑Ragging Committee</a>
        <a href="https://bharathuniv.ac.in/grievance.php"  className="footer__link" target="_blank" rel="noopener noreferrer">- Grievances</a>
        <a href="https://bharathuniv.ac.in/feedback.php"   className="footer__link" target="_blank" rel="noopener noreferrer">- Students Feedback</a>
        <a href="https://bharathuniv.ac.in/admission.php"  className="footer__link" target="_blank" rel="noopener noreferrer">- Admission</a>
        <a href="https://bharathuniv.ac.in/courses.php"    className="footer__link" target="_blank" rel="noopener noreferrer">- Courses</a>
        <a href="https://bharathuniv.ac.in/fee.php"        className="footer__link" target="_blank" rel="noopener noreferrer">- Fee Structure</a>
        <a href="https://bharathuniv.ac.in/contact.php"    className="footer__link" target="_blank" rel="noopener noreferrer">- Contact Us</a>
        <a href="https://bharathuniv.ac.in/mandatorydisclosure.php" className="footer__link" target="_blank" rel="noopener noreferrer"><b>- Mandatory Disclosure</b></a>
        <a href="https://sdgs.un.org/goals"               className="footer__link" target="_blank" rel="noopener noreferrer">- Sustainable Development Goals</a>
      </div>
    </div>

    {/* Yellow line */}
    <hr className="footer__divider" />

    {/* ─────────── Bottom Bar ─────────── */}
    <div className="footer__bottom">
      <div className="footer__left">
        Terms and Conditions for Online Payment
      </div>

      <div className="footer__right">
        <a href="#" className="footer__social"><i className="fab fa-facebook-f" /></a>
        <a href="#" className="footer__social"><i className="fab fa-twitter"    /></a>
        <a href="#" className="footer__social"><i className="fab fa-instagram"  /></a>
        <a href="#" className="footer__social"><i className="fab fa-youtube"    /></a>
        <span>© 2025 BIHER – All rights reserved</span>
      </div>
    </div>
  </footer>
);

export default Footer;
