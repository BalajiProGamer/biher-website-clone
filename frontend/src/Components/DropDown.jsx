import React from "react";
import "./Dropdown.css";

const Dropdown = ({ label, options, icon, isOpen, onToggle }) => {
  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={onToggle}>
        {icon} {label}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              <span className="dropdown-icon">{option.icon}</span>
              <span className="dropdown-text">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
