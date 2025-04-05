import React from "react";

const ResearchDevelopment = () => {
  return (
    <>
      <style>
        {`
          .research-container {
            background-color: #f6c037; /* Yellow background */
            padding: 50px 20px;
            text-align: center;
            position: relative;
            min-height: 300px;
          }

          .research-title {
            font-size: 32px;
            font-weight: bold;
            color: #024f64; /* Dark teal */
            margin-bottom: 20px;
          }

          .research-text {
            font-size: 18px;
            color: #024f64;
            max-width: 900px;
            margin: 0 auto;
          }

          .side-query {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: #003147;
            color: white;
            padding: 10px 20px;
            writing-mode: vertical-rl;
            text-orientation: upright;
            font-weight: bold;
            border-radius: 5px;
          }

          .badge-container {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
          }

          .badge {
            background-color: #c62828; /* Red badge */
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-weight: bold;
          }

          .admission-badge {
            background-color: #3b82f6; /* Blue badge */
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .research-title {
              font-size: 24px;
            }

            .research-text {
              font-size: 16px;
              padding: 0 15px;
            }

            .side-query {
              font-size: 14px;
              padding: 5px 10px;
            }
          }
        `}
      </style>

      <div className="research-container">
        <div className="badge-container">
          <div className="badge">🎓 AICTE - LOA - EOA</div>
          <div className="admission-badge">🎓 2025 Admission Open for UG/PG</div>
        </div>

        <div className="side-query">ONLINE QUERY</div>

        <h1 className="research-title">RESEARCH AND DEVELOPMENT CELL</h1>
        <p className="research-text">
          The Research activities of the University were accelerated from the
          year 2003 onwards. Extensive research facilities were created to
          promote innovative research.
        </p>
        <p className="research-text">
          The students and faculty members are encouraged to innovate through
          quality research in emerging areas.
        </p>
      </div>
    </>
  );
};

export default ResearchDevelopment;
