import React, { useState, useEffect } from "react";
import "../../styles/global.css";

const stateCityMap = {
  "tamil-nadu": ["Chennai", "Coimbatore", "Madurai"],
  "karnataka": ["Bangalore", "Mysore"],
  "maharashtra": ["Mumbai", "Pune"],
  "delhi": ["New Delhi", "South Delhi", "North Delhi"],
  // Add more mappings here...
};

const Query = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");

  const openForm = () => setIsModalOpen(true);
  const closeForm = () => setIsModalOpen(false);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setCityOptions(stateCityMap[selected] || []);
  };

  return (
    <>
      <div className="query-tab" onClick={openForm}>
        ONLINE QUERY
      </div>

      {isModalOpen && (
        <div className="query-modal-overlay">
          <div className="query-modal">
            <button className="close-btn" onClick={closeForm}>&times;</button>
            <form className="query-form">
              <h2>Admission Enquiry</h2>
              <input type="text" placeholder="Enter Name *" required />
              <input type="email" placeholder="Enter Email Address *" required />
              <input type="tel" placeholder="+91 Enter Mobile Number *" required />

              <div className="query-row">
                <select required onChange={handleStateChange} value={selectedState}>
                  <option value="">Select State *</option>
                  {Object.keys(stateCityMap).map((stateKey) => (
                    <option key={stateKey} value={stateKey}>
                      {stateKey.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </option>
                  ))}
                </select>
                <select required>
                  <option value="">Select City *</option>
                  {cityOptions.map((city, idx) => (
                    <option key={idx} value={city.toLowerCase()}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="query-row">
                <select required>
                  <option value="">Select Course *</option>
                  <option value="btech">B.Tech</option>
                </select>
                <select required>
                  <option value="">Select Specialization *</option>
                  <option value="cse">CSE</option>
                </select>
              </div>

              <div className="query-row captcha-row">
                <div className="captcha-code-box">
                  <span className="captcha-code">{generatedCaptcha}</span>
                  <button type="button" className="refresh-btn" onClick={generateCaptcha} title="Refresh">
                    &#x21bb;
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  required
                  value={enteredCaptcha}
                  onChange={(e) => setEnteredCaptcha(e.target.value)}
                />
              </div>

              <div className="query-consent">
                <input type="checkbox" required />
                <label>
                  I authorize BIHER to contact me via Email, SMS, WhatsApp & Calls
                </label>
              </div>

              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Query;
