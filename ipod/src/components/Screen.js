import React from "react";
import Menu from "./Menu";

const Screen = ({ menuItems, selected, screen, subMenu, subMenuSelected }) => {
  const menuData = {
    Games: {
      image: "https://cdn-icons-png.flaticon.com/128/7358/7358397.png",
      message: "Welcome to Games!",
    },
    Settings: {
      image: "https://cdn-icons-png.flaticon.com/128/3524/3524659.png",
      message: "Welcome to Settings!",
    },
    "Cover Flow": {
      image: "https://cdn-icons-png.flaticon.com/128/9485/9485656.png",
      message: "Welcome to Cover Flow!",
    },
  };

  const { image, message } = menuData[screen] || {
    image: "",
    message: "Welcome!",
  };

  return (
    <div className="screen-container">
      <div className="screen">
        {/* Main Menu */}
        {screen === "menu" ? (
          <Menu menuItems={menuItems} selected={selected} />
        ) : screen === "Music" ? (
          // Music Submenu
          <>
            <h2>Music</h2>
            <ul>
              {subMenu.map((item, index) => (
                <li
                  key={index}
                  className={index === subMenuSelected ? "selected" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : (
          // Show Image and Welcome Message for the selected screen
          <>
            <img
              src={image}
              alt={screen}
              style={{ width: "100px", marginBottom: "10px" }}
            />
            <h2>{screen}</h2>
            <p>{message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Screen;
