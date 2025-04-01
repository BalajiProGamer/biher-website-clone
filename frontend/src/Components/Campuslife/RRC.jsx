import React from 'react'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const RRC = () => {
  return (
    <div>
    <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon"/>
        </Link>
        <span className="header-text">BIHER - (RRC)</span>
      </div>
      <Footer/>

    </div>
  )
}

export default RRC
