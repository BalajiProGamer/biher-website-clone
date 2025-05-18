 import React, { useState } from "react";
import publicImg from "../../assets/R-PUBLICATION (1).jpg"; // Banner image
import Footer from "../Footer";
import ResearchDevelopment from "./ResearchDevelopment";
import { FaBook, FaList } from "react-icons/fa";
import Banner from "../Banner";

const yearList = [2015, 2016, 2017, 2018, 2019, 2020];

// History of Bharath College by year
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
  <div style={{
    width: "250px",
    backgroundColor: "#f4a900",
    borderRadius: "10px 10px 0 0",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    overflow: "hidden",
  }}>
    <div style={{
      backgroundColor: "#f4a900",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "16px",
      color: "#000",
      borderBottom: "2px solid #f4a900"
    }}>
      <FaList style={{ marginRight: "10px" }} />
      Categories
    </div>
    <div style={{ backgroundColor: "#003049" }}>
      {categories.map((cat, index) => (
        <div key={index} style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 16px",
          color: "#fff",
          borderBottom: "1px solid #012a3d",
          cursor: "pointer",
        }}>
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
    <div style={{ flex: 1, padding: "0 20px" }}>
      <h2 style={{ color: "#B22222", marginBottom: "30px" }}>SCOPUS :</h2>

      {yearList.map((year) => (
        <div
          key={year}
          style={{
            border: "1px solid #005b96",
            marginBottom: "12px",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <div
            onClick={() => toggleYear(year)}
            style={{
              backgroundColor: "#006ba6",
              color: "#fff",
              padding: "12px 20px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaBook style={{ marginRight: "12px" }} />
              <span>Year – {year}</span>
            </div>
            <span style={{ fontSize: "20px" }}>{openYear === year ? "▲" : "▼"}</span>
          </div>

          {openYear === year && (
            <div
              style={{
                backgroundColor: "#e6f2f8",
                padding: "16px",
                color: "#003049",
              }}
            >
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
      <img src={publicImg} alt="publication" width="100%" height="auto" />
      <Banner />
      <ResearchDevelopment />

      {/* Flex container to align sidebar and main content */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 20px",
        gap: "40px",
        flexWrap: "wrap"
      }}>
        <CategoriesMenu />
        <CollapsibleList />
      </div>

      <Footer />
    </div>
  );
};

export default Publication;
