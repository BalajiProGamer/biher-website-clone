import React, { useState } from "react";
import "./Sidebar.css";
import { FaBook, FaCaretDown, FaCaretRight, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <FaBars className="menu-icon" />
        <h3>Categories</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaBook className="icon" /> Vision & Mission
        </li>
        <li>
          <FaBook className="icon" /> IQAC Composition
        </li>
        <li onClick={() => toggleSection("audit")}>
          <FaBook className="icon" /> AUDIT
          {openSections["audit"] ? <FaCaretDown /> : <FaCaretRight />}
        </li>
        {openSections["audit"] && <ul className="sub-menu"><li>Sub-item</li></ul>}
        <li>
          <FaBook className="icon" /> Feedback
        </li>
        <li>
          <FaBook className="icon" /> AQAR
        </li>
        <li>
          <FaBook className="icon" /> SSR Report - 2024
        </li>
        <li onClick={() => toggleSection("maintenance")}>
          <FaBook className="icon" /> Maintenance
          {openSections["maintenance"] ? <FaCaretDown /> : <FaCaretRight />}
        </li>
        {openSections["maintenance"] && <ul className="sub-menu"><li>Sub-item</li></ul>}
        <li>
          <FaBook className="icon" /> DVV - Clarification
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;