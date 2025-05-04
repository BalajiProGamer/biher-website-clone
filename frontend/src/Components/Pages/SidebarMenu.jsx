import React from 'react';

const SidebarMenu = ({ selectedItem, onSelect }) => {
  const menuItems = [
    "About Us",
    "Vision & Mission",
    "Vision Plan",
    "Vision Implementation Plan",
    "Strength Of The Institution",
    "Inception & Brief History",
    "Professional Society",
    "Approvals",
    "Ranking & Accreditation"
  ];

  const styles = {
    sidebar: {
      background: '#003047',
      borderRadius: '10px 10px 0 0',
      width: '270px',
      color: 'white',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      backgroundColor: '#f5b120',
      padding: '12px 16px',
      fontWeight: 'bold',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    item: {
      padding: '6px 11px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    activeItem: {
      backgroundColor: '#004f6e',
    },
    icon: {
      marginRight: '10px',
    },
    arrow: {
      marginLeft: 'auto',
    }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.header}>
        <i className="fas fa-list"></i> Categories
      </div>
      <ul style={styles.list}>
        {menuItems.map((item) => {
          const isActive = selectedItem === item;
          return (
            <li
              key={item}
              style={{
                ...styles.item,
                ...(isActive ? styles.activeItem : {})
              }}
              onClick={() => onSelect(item)}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-book" style={styles.icon}></i>
                {item}
              </span>
              {["Approvals", "Ranking & Accreditation"].includes(item) && (
                <i className="fas fa-chevron-down" style={styles.arrow}></i>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarMenu;
