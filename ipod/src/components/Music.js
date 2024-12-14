import React from "react";

const Music = () => {
  const subMenu = ["All Songs", "Artists"];
  return (
    <div className="screen">
      <h2>Music</h2>
      <ul>
        {subMenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Music;
