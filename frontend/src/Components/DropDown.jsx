import React from "react";
import "./Navbar.css";

const Dropdown = ({ label, icon, options, isOpen, onToggle }) => {
  return (
    <div className="dropdown" onMouseEnter={onToggle} onMouseLeave={onToggle}>
      <div className="dropdown-label">
        {icon} {label}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target={option.newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              {option.icon} {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
