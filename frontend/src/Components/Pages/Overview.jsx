import React from "react";
import "./Overview.css"; // Import CSS

const Overview = () => {
  return (
    <div className="overview-container">
      <h1 className="title">Vision Plan</h1>

      {/* Disciplines & Departments Section */}
      <section className="section">
        <h2 className="subtitle">Disciplines & Departments</h2>
        <p className="description">
          BIHER strives to promote interdisciplinary learning with 12 different disciplines,
          such as Health Economics, Data Sciences, Theology, Music, Liberal Arts, etc.
        </p>
      </section>

      {/* 2018 - 2023 Table */}
      <section className="section">
        <h3 className="table-title">2018 - 2023</h3>
        <table className="overview-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>UG</th>
              <th>PG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aerospace Engineering</td>
              <td>Aircraft Propulsion & Power Systems</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Natural Gas & Pipe Lining Engineering</td>
              <td>Ocean Technologies</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 2023 - 2028 Table */}
      <section className="section">
        <h3 className="table-title">2023 - 2028</h3>
        <table className="overview-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>UG</th>
              <th>PG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Acoustics Engineering</td>
              <td>Architectural Acoustics</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Research Section */}
      <section className="section">
        <h2 className="subtitle">Vision Plan - Research</h2>
        <ul className="list">
          <li>Develop strong research capabilities.</li>
          <li>Increase full-time Ph.D. scholars.</li>
          <li>Increase research revenues by 20% per year.</li>
          <li>Achieve 500 patents in the final phase.</li>
        </ul>
      </section>

      {/* Admissions & Scholarships */}
      <section className="section">
        <h2 className="subtitle">Student Capacity, Admission & Scholarships</h2>
        <ul className="list">
          <li>Enroll 50,000 students by 2033.</li>
          <li>Increase the ratio of foreign students to 25% by 2033.</li>
          <li>Introduce new scholarships: BIHER JEE, BRICS, ICCR, etc.</li>
        </ul>
      </section>
    </div>
  );
};

export default Overview;
