import React from 'react';
import '../../../styles/global.css';
import bgImage from '../../../assets/pattern.jpg'; // make sure this file exists
import Footer from '../../Footer';

const leftCommittees = [
  { name: 'Academic Audit Committee', link: '/pdfs/academic-audit.pdf' },
  { name: 'Alumni Committee', link: '/pdfs/alumni.pdf' },
  { name: 'Anti – Ragging Committee', link: '/pdfs/anti-ragging.pdf' },
  { name: 'Cultural Committee', link: '/pdfs/cultural.pdf' },
  { name: 'Extension Programme Committee', link: '/pdfs/extension.pdf' },
  { name: 'Internal Committee for Disabled Students', link: '/pdfs/disabled.pdf' },
  { name: 'Library Advisory Committee', link: '/pdfs/library.pdf' },
  { name: 'Research Advisory Committee', link: '/pdfs/research.pdf' },
  { name: 'Staff Grievances Redressal Committee', link: '/pdfs/staff-grievance.pdf' },
  { name: 'Student Disciplinary Committee', link: '/pdfs/student-disciplinary.pdf' },
];

const rightCommittees = [
  { name: 'Admissions and Admissions Review Committee', link: '/pdfs/admissions.pdf' },
  { name: 'Animal Ethical Committee', link: '/pdfs/animal-ethical.pdf' },
  { name: 'Code of Ethics and Conduct Monitoring Committee', link: '/pdfs/code-of-ethics.pdf' },
  { name: 'Examination Disciplinary Committee', link: '/pdfs/exam-disciplinary.pdf' },
  { name: 'Hostel & Canteen Committee', link: '/pdfs/hostel.pdf' },
  { name: 'Internal Complaints Committee for Prevention of Sexual Harassment', link: '/pdfs/icc.pdf' },
  { name: 'Purchase Committee', link: '/pdfs/purchase.pdf' },
  { name: 'Sports Committee', link: '/pdfs/sports.pdf' },
  { name: 'Staff Selection Committee', link: '/pdfs/staff-selection.pdf' },
  { name: 'Student Grievances Redressal Committee', link: '/pdfs/student-grievance.pdf' },
];

const Committee = () => {
  return (
    <>
      <div
        className="committee-container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat',
          padding: '40px 20px',
          minHeight: '100vh',
        }}
      >
        <div className="committee-content-box">
          <h2 className="committee-title">
            Non-Statutory Bodies - <span>Committee :</span>
          </h2>

          <div className="committee-columns">
            <div className="committee-column">
              {leftCommittees.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="committee-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.name}</span>
                  <div className="committee-arrow">➜</div>
                </a>
              ))}
            </div>

            <div className="committee-column">
              {rightCommittees.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="committee-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.name}</span>
                  <div className="committee-arrow">➜</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Committee;
