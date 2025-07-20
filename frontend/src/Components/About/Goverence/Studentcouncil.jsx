import React from 'react';
import '../../../styles/global.css'; // Adjust path as needed
import bgImage from '../../../assets/pattern.jpg'; // Your background image
import Footer from '../../Footer';

const councilData = [
  { year: '2018-19', link: '/pdfs/student-council-2018-19.pdf' },
  { year: '2019-20', link: '/pdfs/student-council-2019-20.pdf' },
  { year: '2020-21', link: '/pdfs/student-council-2020-21.pdf' },
  { year: '2021-22', link: '/pdfs/student-council-2021-22.pdf' },
  { year: '2022-23', link: '/pdfs/student-council-2022-23.pdf' },
  { year: '2023-24', link: '/pdfs/student-council-2023-24.pdf' },
  { year: '2024-25', link: '/pdfs/student-council-2024-25.pdf' },
];

export const StudentCouncil = () => {
  // Split data into two columns
  const mid = Math.ceil(councilData.length / 2);
  const leftCol = councilData.slice(0, mid);
  const rightCol = councilData.slice(mid);

  return (
    <>
      <div
        className="student-council-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat',
          padding: '40px 20px',
          minHeight: '100vh',
        }}
      >
        <div className="student-council-box">
          <h2 className="student-title">
            Non-Statutory Bodies
          </h2>
          <h3 className="student-subtitle">
            Students Council :
          </h3>
          <hr />

          <div className="student-columns">
            <div className="student-column">
              {leftCol.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="student-item"
                >
                  <span>Students Council list–{item.year}</span>
                  <div className="student-arrow">→</div>
                </a>
              ))}
            </div>

            <div className="student-column">
              {rightCol.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="student-item"
                >
                  <span>Students Council list–{item.year}</span>
                  <div className="student-arrow">→</div>
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
