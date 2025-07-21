import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../ImageSlider';
import Query from '../Pages/Query';
import Banner from '../Banner';
import NewsSlider from '../Pages/NewsSlider';
import Footer from '../Footer';
import { FaHome } from 'react-icons/fa';
import '../../styles/global.css';


export const Visitor = () => {
  return (
    <div>
      <ImageSlider />

      {/* Header / Breadcrumb Section */}
      <div className="visitor-header">
        <div className="visitor-breadcrumb">
          <Link to="/" className="visitor-home-link">
            <FaHome className="visitor-home-icon" />
          </Link>
          <span className="visitor-separator">»</span>
          <span className="visitor-current">International Visitor</span>
        </div>
      </div>

      {/* Visitor Table Section */}
      <div className="visitor-table-container">
        <h2 className="visitor-table-heading">Visitors :</h2>
        <table className="visitor-table">
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Name of Visiting Professor</th>
              <th>Home University</th>
              <th>Country</th>
              <th>Area of Specialisation</th>
              <th>Visit</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Prof. Qiu Yonghui</td><td>Centre for South Asian Studies, Sichuan University</td><td>China</td><td>Liberal Arts</td><td>19th Dec</td></tr>
            <tr><td>2</td><td>Nirbhay, Graduate researcher</td><td>Universiti Teknologi PETRONAS (UTP)</td><td>Malaysia</td><td>Electronics and Communication</td><td>17th Jan 2020</td></tr>
            <tr><td>3</td><td>Dr. Sockretes</td><td>Vanderbilt University, Nashville</td><td>USA</td><td>Physics and Engineering</td><td>3rd Feb 2020</td></tr>
            <tr><td>4</td><td>Dr. Jason O Kane</td><td>University of South Carolina</td><td>USA</td><td>Computer Science Engg</td><td>3rd Feb 2020</td></tr>
            <tr><td>5</td><td>Dr. Jont Allen</td><td>Univ of Illinois, Urbana Champaign</td><td>USA</td><td>Electrical and Computer Engineering</td><td>3rd Feb 2020</td></tr>
            <tr><td>6</td><td>Prof. Carlos M. Travieso-Gonzalez</td><td>University of Las Palmas de Gran Canaria (ULPGC)</td><td>Spain</td><td>Signals and Communications Department</td><td>4th Feb 2020</td></tr>
            <tr><td>7</td><td>Prof. Cesare Alippi</td><td>Università della Svizzera Italiana and Politecnico di Milano, Milano, Italy</td><td>Switzerland</td><td>Information Processing Systems</td><td>28th Jan 2020</td></tr>
            <tr><td>8</td><td>Prof Peter Peer</td><td>University of Ljubljana, Slovenia, European Union</td><td>Slovenia</td><td>Computer and Information System</td><td>3rd Feb 2020</td></tr>
            <tr><td>9</td><td>Dr. Zdzzislaw Polkowski</td><td>Wyzykowski University in Polkowice</td><td>Poland</td><td>Economics and Management</td><td>17th Feb 2020</td></tr>
          </tbody>
        </table>
      </div>

      <Query />
      <Banner />
      <NewsSlider />
      <Footer />
    </div>
  );
};
