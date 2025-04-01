import React from "react";
import "./DirectorPage.css"; // Make sure to rename the CSS file accordingly

// Director and Leadership Data
const directorData = [
  
  {
    title: "Pro Chancellor",
    name: "Prof. K. Vijaya Bhaskar Raju",
    image: "/assets/vc-02.png",
    description:
      "As Pro Chancellor, I take this opportunity to welcome students coming from all parts of the country and abroad.",
  },
  {
    title: "Vice-Chancellor",
    name: "Prof. Dr. M. Sundararajan",
    image: "/vicechancellor.jpeg",
    description:
      "As Vice-Chancellor, I am committed to ensuring a high-quality academic experience for all students.",
  },
  {
    title: "Pro Vice-Chancellors",
    name: "Dr. R. M. Suresh & Dr. R. Venkatesh Babu",
    image: "/provc1.jpeg",
    description:
      "Providing academic leadership and fostering research-driven education.",
  },
  {
    title: "Registrar",
    name: "Dr. S. Bhuminathan & Dr. R. Hariprakash",
    image: "/registrar1.jpeg",
    description:
      "Managing the university's administrative and regulatory functions.",
  },
];

const DirectorPage = () => {
  return (
    <div className="director-container">
      <h1>University Leadership</h1>
      {directorData.map((leader, index) => (
        <div key={index} className="leader-card">
          <h2>{leader.title}</h2>
          <img src={leader.image} alt={leader.name} className="leader-image" />
          <h3>{leader.name}</h3>
          <p>{leader.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DirectorPage;
