 import React, { useState } from "react";

// Import images
import ukImg from "../../assets/uk.jpg";
import germanyImg from "../../assets/germany.jpeg";
import franceImg from "../../assets/france.jpeg";
import canadaImg from "../../assets/canada.jpeg";
import australiaImg from "../../assets/aus.jpeg";
import japanImg from "../../assets/japan.jpeg";

const StudyAbroad = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const countries = [
    {
      name: "UK",
      imgSrc: ukImg,
      details: [
        { text: "Documents required to apply for UK", info: "Details about UK documents..." },
        { text: "Student Study Visa for UK", info: "Details about UK student visa..." },
        { text: "Top Universities", info: "Details about top universities in UK..." },
        { text: "Why study in UK?", info: "Reasons to study in UK..." },
        { text: "Get to know the UK education system", info: "Details about UK education system..." },
      ],
    },
    {
      name: "GERMANY",
      imgSrc: germanyImg,
      details: [
        { text: "Documents required to apply for GERMANY", info: "Details about Germany documents..." },
        { text: "Student Study Visa for GERMANY", info: "Details about Germany student visa..." },
        { text: "Top Universities", info: "Details about top universities in Germany..." },
        { text: "Why study in GERMANY?", info: "Reasons to study in Germany..." },
        { text: "Education system in GERMANY", info: "Details about Germany education system..." },
      ],
    },
    {
      name: "FRANCE",
      imgSrc: franceImg,
      details: [
        { text: "Documents required to apply for FRANCE", info: "Details about France documents..." },
        { text: "Student Study Visa for FRANCE", info: "Details about France student visa..." },
        { text: "Top Universities", info: "Details about top universities in France..." },
        { text: "Why study in FRANCE?", info: "Reasons to study in France..." },
        { text: "Education system in FRANCE", info: "Details about France education system..." },
      ],
    },
    {
      name: "CANADA",
      imgSrc: canadaImg,
      details: [
        { text: "Documents required to apply for CANADA", info: "Details about Canada documents..." },
        { text: "Student Study Visa for CANADA", info: "Details about Canada student visa..." },
        { text: "Top Universities", info: "Details about top universities in Canada..." },
        { text: "Why study in CANADA?", info: "Reasons to study in Canada..." },
        { text: "Education system in CANADA", info: "Details about Canada education system..." },
      ],
    },
    {
      name: "AUSTRALIA",
      imgSrc: australiaImg,
      details: [
        { text: "Documents required to apply for AUSTRALIA", info: "Details about Australia documents..." },
        { text: "Student Study Visa for AUSTRALIA", info: "Details about Australia student visa..." },
        { text: "Top Universities", info: "Details about top universities in Australia..." },
        { text: "Why study in AUSTRALIA?", info: "Reasons to study in Australia..." },
        { text: "Education system in AUSTRALIA", info: "Details about Australia education system..." },
      ],
    },
    {
      name: "JAPAN",
      imgSrc: japanImg,
      details: [
        { text: "Documents required to apply for JAPAN", info: "Details about Japan documents..." },
        { text: "Student Study Visa for JAPAN", info: "Details about Japan student visa..." },
        { text: "Top Universities", info: "Details about top universities in Japan..." },
        { text: "Why study in JAPAN?", info: "Reasons to study in Japan..." },
        { text: "Education system in JAPAN", info: "Details about Japan education system..." },
      ],
    },
  ];

  return (
    <>
      <style>
        {`
          .study-abroad-container {
            display: flex;
            justify-content: space-around;
            padding: 20px;
            flex-wrap: wrap;
          }

          .country-section {
            width: 30%;
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          h2 {
            text-align: center;
            font-size: 22px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin: 8px 0;
            font-size: 16px;
            cursor: pointer;
            color: blue;
            text-decoration: underline;
          }

          .country-img {
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            border-radius: 8px;
          }

          .detail-info {
            margin-top: 20px;
            padding: 10px;
            background: #e0f7fa;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 768px) {
            .study-abroad-container {
              flex-direction: column;
              align-items: center;
            }

            .country-section {
              width: 80%;
            }
          }
        `}
      </style>

      <div className="study-abroad-container">
        {countries.map((country, index) => (
          <div key={index} className="country-section">
            <h2>{country.name}</h2>
            <img src={country.imgSrc} alt={country.name} className="country-img" />
            <ul>
              {country.details.map((detail, i) => (
                <li key={i} onClick={() => setSelectedDetail(detail.info)}>
                  {detail.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedDetail && (
        <div className="detail-info">
          <h3>Detail Information</h3>
          <p>{selectedDetail}</p>
        </div>
      )}
    </>
  );
};

export default StudyAbroad;