// DropDown.js
import React from "react";
import "./Dropdown.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dropdown = ({ label, options, icon, isOpen, onToggle }) => {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={onToggle}>
        {icon} {label} <FaAngleDown className="angle-icon" />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => {
            if (option.link) {
              return option.newTab ? (
                // Open in new tab
                <a
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  {option.icon && <span className="dropdown-icon">{option.icon}</span>}
                  {option.label}
                </a>
              ) : (
                // Internal navigation using Link
                <Link key={index} to={option.link} className="dropdown-item">
                  {option.icon && <span className="dropdown-icon">{option.icon}</span>}
                  {option.label}
                </Link>
              );
            } else {
              return (
                <div key={index} className="dropdown-item">
                  {option.icon && <span className="dropdown-icon">{option.icon}</span>}
                  {option.label}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
