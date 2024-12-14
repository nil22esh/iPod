import React from "react";
import "../App.css";

const Menu = ({ menuItems, selected }) => {
  return (
    <div className="menu">
      <h4 className="menu-head">iPod Menu</h4>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={index === selected ? "selected" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
