import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import {Button}from "../ui/Button";
import "./CertificationVerification.css"; // Import the CSS file

const CertificationVerification = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="container">
      <h1 className="title">Digital Document Service</h1>
      <h2 className="subtitle">Bharath Institute of Higher Education & Research</h2>

      <div className="step-buttons">
        {["Select Service", "Enter User Details", "Check and Pay", "Confirmation"].map((label, index) => (
          <button
            key={index}
            className={`step-button ${step === index + 1 ? "active" : ""}`}
            disabled={step !== index + 1}
          >
            {index + 1}. {label}
          </button>
        ))}
      </div>

      {step === 1 && (
        <div className="service-container">
          <label className="label">Select or search a Service Category:</label>
          <select
            className="select-box"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">-- Select Service --</option>
            <option value="transcript">Transcript</option>
            <option value="certificate">Certificate</option>
            <option value="verification">Verification</option>
          </select>
        </div>
      )}

      <div className="step-buttons">
        <button onClick={nextStep} className="next-button">Next</button>
      </div>

      <div className="bottom-buttons">
        <button className="faq-button">
          <FaQuestionCircle /> How it works?
        </button>
        <button className="faq-button">FAQ</button>
      </div>
    </div>
  );
};

export default CertificationVerification;
