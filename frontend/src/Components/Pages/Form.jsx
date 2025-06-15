import React, { useState } from "react";
import "../../styles/global.css"; // Import CSS for styling

const courseOptions = {
  "CSE": ["AI & ML", "Cybersecurity", "Data Science","Computer Vision","Cloud Computing","Web Technology","Software Engineering","Networks security","web security"],
  "ECE": ["VLSI", "Embedded Systems", "Wireless Communication","Signal Processing","IOT","Robotics","Control Systems","Digital Communication"],
  "Mechanical": ["Automobile", "Robotics", "Thermal Engineering","Design","Manufacturing","Material Science","Energy Engineering","Industrial Engineering"],
  "Civil": ["Structural Engineering", "Transportation Engineering", "Environmental Engineering","Geotechnical Engineering","Water Resources Engineering","Construction Management","Remote Sensing","Surveying"],
  "MBA": ["Finance", "Marketing", "HR","Operations","Business Analytics","International Business","Entrepreneurship","Healthcare Management"],
  "BBA": ["International Business", "Entrepreneurship", "Finance","Marketing","HR","Operations","Business Analytics","Healthcare Management"],
  "B.Com": ["Finance", "Marketing", "HR","Operations","Business Analytics","International Business","Entrepreneurship","Healthcare Management"],
  "B.Sc": ["Physics", "Chemistry", "Mathematics"  ,"Computer Science","Biotechnology","Microbiology","Biochemistry","Electronics"],
  "B.A": ["English", "Tamil", "History","Economics","Political Science","Public Administration","Sociology","Psychology"],
  "M.Sc": ["Biotechnology", "Microbiology"  ,"Biochemistry","Physics","Chemistry","Mathematics","Computer Science","Electronics"],
  "M.A": ["English", "Tamil", "History","Economics","Political Science","Public Administration","Sociology","Psychology"],  
};

const LMSForm = () => {
  const [formData, setFormData] = useState({
    course: "",
    subject: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      ...(e.target.name === "course" ? { subject: "" } : {}) // Reset subject when course changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Options:", formData);
  };

  return (
    <div className="lms-container">
      <h2>
        Learning <span className="highlight">Management System</span>
      </h2>

      <div className="form-section">
        <div className="lms-logo">BIHER - LMS</div>
        <form onSubmit={handleSubmit} className="lms-form">
          <div className="form-group">
            <label>Courses:</label>
            <select name="course" value={formData.course} onChange={handleChange} required>
              <option value="">- Select Course -</option>
              {Object.keys(courseOptions).map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Subjects:</label>
            <select name="subject" value={formData.subject} onChange={handleChange} required disabled={!formData.course}>
              <option value="">- Select Subject -</option>
              {formData.course && courseOptions[formData.course].map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </form>

        <div className="admission-banner"> </div>
      </div>

      <table className="lms-table">
        <thead>
          <tr>
            <th>Courses</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {formData.course && formData.subject && (
            <tr>
              <td>{formData.course}</td>
              <td>{formData.subject}</td>
            </tr>
          )}
        </tbody>
      </table>

      <footer className="lms-footer">© Copyrights 2025. BIHER All rights reserved</footer>
    </div>
  );
};

export default LMSForm;
