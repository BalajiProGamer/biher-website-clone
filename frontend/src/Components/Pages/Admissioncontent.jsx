import React from "react";

const admissionOptions = [
  { name: "B.Tech", icon: "🌍", link: "https://admission.bharathuniv.ac.in/biher-b-tech-form" },
  { name: "B.Sc. Agri.", icon: "🚜", link: "https://admission.bharathuniv.ac.in/biher-b-sc-form" },
  { name: "Arts & Science", icon: "🧪", link: "https://admission.bharathuniv.ac.in/biher-arts-science-form" },
  { name: "Nursing", icon: "👩‍⚕️", link: "https://admission.bharathuniv.ac.in/b-sc-nursing-application-form" },
  { name: "B. Arch", icon: "📐", link: "https://admission.bharathuniv.ac.in/biher-b-arch-form" },
  { name: "M.Tech / M.Arch", icon: "💻", link: "https://admission.bharathuniv.ac.in/biher-m-tech-m-arch-application-form" },
  { name: "MBA / MCA", icon: "🎓", link: "https://admission.bharathuniv.ac.in/biher-mca-mba-application-form" },
  { name: "Law", icon: "⚖️", link: "https://admission.bharathuniv.ac.in/biher-law-form" },
  { name: "Pharmacy", icon: "💊", link: "https://admission.bharathuniv.ac.in/biher-pharmacy" },
  { name: "Allied Health Sciences", icon: "🔬", link: "https://admission.bharathuniv.ac.in/ahs-application-form" },
];

const AdmissionContent = () => {
  return ( 
    <div>
      <style>
        {`
          .admission-container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
            text-align: center;
          }

          .admission-header h2 {
            color: #003366;
          }

          .admission-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            padding: 20px;
          }

          .admission-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
            transition: 0.3s;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          }

          .admission-card:hover {
            background: #007bff;
            color: white;
            transform: scale(1.05);
          }

          .admission-icon {
            font-size: 24px;
            margin-bottom: 8px;
          }
        `}
      </style>

      <div className="admission-container">
        <div className="admission-header">
          <h2>Admissions 2025</h2>
          <p>
            Be the change you wish to see in the world by studying in BIHER. Calling all students to realize their dreams from our best-in-class campus with reputed faculty and world-class infrastructure.
          </p>
        </div>

        <div className="admission-grid">
          {admissionOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="admission-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="admission-icon">{option.icon}</span>
              <p>{option.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionContent;
