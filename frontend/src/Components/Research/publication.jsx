import React, { useState } from "react";
import publicImg from "../../assets/R-PUBLICATION (1).jpg"; // Banner image
import Footer from "../Footer";
import ResearchDevelopment from "./ResearchDevelopment";
import { FaBook, FaList } from "react-icons/fa";
import Banner from "../Banner";

const yearList = [2015, 2016, 2017, 2018, 2019, 2020];

const historyContent = {
  2015: "In 2015, Bharath College started new research initiatives in computer science and engineering.",
  2016: "2016 saw the launch of several student exchange programs and collaborations with international universities.",
  2017: "Bharath College inaugurated a new library wing with extensive digital resources in 2017.",
  2018: "2018 marked the beginning of the annual tech fest that attracted nationwide participation.",
  2019: "In 2019, Bharath College established a center for renewable energy research.",
  2020: "2020 was challenging due to the pandemic, but Bharath College swiftly moved to online education and virtual seminars.",
};

const categories = ["Scopus", "Web of Science (WOS)", "ICI", "PubMed"];

const CategoriesMenu = () => (
  <div className="publication-sidebar">
    <div className="publication-sidebar-header">
      <FaList style={{ marginRight: "10px" }} />
      Categories
    </div>
    <div style={{ backgroundColor: "#003049" }}>
      {categories.map((cat, index) => (
        <div key={index} className="publication-sidebar-item">
          <FaBook style={{ marginRight: "8px" }} />
          {cat}
        </div>
      ))}
    </div>
  </div>
);

const CollapsibleList = () => {
  const [openYear, setOpenYear] = useState(null);

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div className="publication-collapsible">
      <h2 className="publication-collapsible-title">SCOPUS :</h2>
      {yearList.map((year) => (
        <div key={year} className="publication-year-box">
          <div onClick={() => toggleYear(year)} className="publication-year-header">
            <div className="publication-year-title">
              <FaBook style={{ marginRight: "12px" }} />
              <span>Year – {year}</span>
            </div>
            <span style={{ fontSize: "20px" }}>{openYear === year ? "▲" : "▼"}</span>
          </div>
          {openYear === year && (
            <div className="publication-year-body">
              <p>{historyContent[year]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Publication = () => {
  return (
    <div>
      <img src={publicImg} alt="publication" className="publication-banner" />
      <Banner />
      <ResearchDevelopment />
      <div className="publication-layout">
        <CategoriesMenu />
        <CollapsibleList />
      </div>
      <Footer />
    </div>
  );
};

export default Publication;
