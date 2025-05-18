 import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import patentImg from "../../assets/patent.jpg";
import innovationBg from "../../assets/pattern.jpg";
import Footer from '../Footer';
import Banner from '../Banner';

const Innovation = () => {
  const [isOpen, setIsOpen] = useState(true); // control collapse

  return (
    <div>
      {/* Top full-width image */}
      <img src={patentImg} alt="Patent" style={{ width: '100%', height: 'auto' }} />
      <Banner/>

      {/* Header with home icon and link */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#bf0000',
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '16px',
        gap: '10px'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'white',
        }}>
          <FaHome size={24} style={{ marginRight: '8px' }} />
          <span>» Innovation and Incubation Cell</span>
        </Link>
      </div>

      {/* Background Image Section with content overlay */}
      <div style={{
        backgroundImage: `url(${innovationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60px',
        display: 'flex',
        padding: '40px',
        color: 'white',
        gap: '20px'
      }}>
        {/* Sidebar */}
        <div style={{
          backgroundColor: 'rgba(0, 38, 61, 0.9)',
          width: '300px',
          borderRadius: '8px',
          color: 'white',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundColor: '#ffc107',
              padding: '10px',
              borderRadius: isOpen ? '5px 5px 0 0' : '5px',
              marginBottom: isOpen ? '10px' : '0',
              color: '#00324d',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div><FaBook style={{ marginRight: '8px' }} /> Categories</div>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen && (
            <ul style={{ listStyle: 'none', padding: '0 10px 10px 10px', margin: 0 }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #005577' }}>
                <Link to="/incubator-certificates" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                  <FaBook style={{ marginRight: '8px' }} /> Incubator and Registration Certificates
                </Link>
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #005577' }}>
                <Link to="https://bharathtbi.bharathuniv.ac.in/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                  <FaBook style={{ marginRight: '8px' }} /> Bharath Technology Business Incubator
                </Link>
              </li>
              <li style={{ padding: '8px 0' }}>
                <Link to="https://bharathtbi.bharathuniv.ac.in/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                  <FaBook style={{ marginRight: '8px' }} /> Bharath Healthcare Innovation And Bio-Incubator Society
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Content table */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          color: '#3a0000',
          padding: '20px',
          borderRadius: '8px',
          flexGrow: 1,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif',
          overflowX: 'auto',
          wordWrap: 'break-word',
        }}>
          <p style={{ color: '#ffa500', fontStyle: 'italic', marginBottom: '5px' }}>Innovation Cell</p>
          <h2>Incubator and <span style={{ color: 'darkred' }}>Registration Certificates :</span></h2>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead style={{ backgroundColor: '#eee' }}>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>S.No</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Title</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Certificate Issued On</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>CV</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>01</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Bharath Technology Business Incubator</td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>11-11-2019</td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <a href="https://www.bharathuniv.ac.in/nirf/Innovationcell/Incubator/INC-01.pdf" style={{ color: '#003366', textDecoration: 'underline' }}>Click Here</a>
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>02</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>Bharath Healthcare Innovation And Bioincubator Society</td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>02-03-2021</td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <a href="https://www.bharathuniv.ac.in/nirf/Innovationcell/Incubator/INC-01.pdf" style={{ color: '#003366', textDecoration: 'underline' }}>Click Here</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Innovation;
