import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

import { FaHome } from "react-icons/fa";
import '../../styles/global.css';

import Form from './Form';

const LMS = () => {
  return (
    <div>
      <img src="assets/LMS-BG.png" alt="LMS" width="100%" height="100%" />
      <div className="lms-header-bar">
  <Link to="/" className="icon">
    <FaHome />
  </Link>
  <span className="label">Learning Management System (LMS)</span>
</div>

      <div>
        
        <img src="assets/shadow.png" alt="LMS" width="" height="" />
        <Form/>
      </div>
      <Footer />
    </div>
  );
};

export default LMS;