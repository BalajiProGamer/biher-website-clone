import React from 'react'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import NssImg from "../../assets/transport.png"; // Adjust path if needed

const Scholarship = () => {
  return (
    <div>
      <img src={NssImg} alt="Nss" width="100%" height="100%" />
        
    <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon"/>
        </Link>
        <span className="header-text">BIHER - (Transport)</span>
      </div>
      <Footer/>

    </div>
  )
}

export default Scholarship