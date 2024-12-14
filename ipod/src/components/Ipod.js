import React, { useState } from "react";
import Screen from "./Screen";
import Wheel from "./Wheel";
import "../App.css";

const Ipod = () => {
  const [menuItems] = useState(["Cover Flow", "Music", "Games", "Settings"]);
  const [subMenu] = useState(["Albums", "Artists", "All Songs"]);
  const [selected, setSelected] = useState(0);
  const [subMenuSelected, setSubMenuSelected] = useState(0);
  const [screen, setScreen] = useState("menu");

  // Handle rotating the wheel
  const handleRotate = (direction) => {
    if (screen === "menu") {
      // Rotate within the main menu
      setSelected((prev) => {
        if (direction === "up")
          return prev === 0 ? menuItems.length - 1 : prev - 1;
        else return prev === menuItems.length - 1 ? 0 : prev + 1;
      });
    } else if (screen === "Music") {
      // Rotate within the Music submenu
      setSubMenuSelected((prev) => {
        if (direction === "up")
          return prev === 0 ? subMenu.length - 1 : prev - 1;
        else return prev === subMenu.length - 1 ? 0 : prev + 1;
      });
    }
  };

  // Handle center button click
  const handleCenterClick = () => {
    if (screen === "menu") {
      const selectedMenuItem = menuItems[selected];
      if (selectedMenuItem === "Music") {
        setScreen("Music");
      } else {
        setScreen(selectedMenuItem);
      }
    }
  };

  // Handle Menu button click
  const handleMenuClick = () => {
    if (screen === "menu") return;
    else setScreen("menu");
  };

  // Handle navigating forward/backward
  const handleNavigate = (direction) => {
    if (screen === "menu") {
      // Navigate in the main menu
      setSelected((prev) => {
        if (direction === "backward")
          return prev === 0 ? menuItems.length - 1 : prev - 1;
        else return prev === menuItems.length - 1 ? 0 : prev + 1;
      });
    } else if (screen === "Music") {
      // Navigate in the Music submenu
      setSubMenuSelected((prev) => {
        if (direction === "backward")
          return prev === 0 ? subMenu.length - 1 : prev - 1;
        else return prev === subMenu.length - 1 ? 0 : prev + 1;
      });
    }
  };

  // Handle playing a song
  const handlePlaySong = () => {
    if (screen === "Music") {
      const selectedSong = subMenu[subMenuSelected];
      alert(`Playing: ${selectedSong}`);
    }
  };

  return (
    <>
      <h1>It's iPod!</h1>
      <div className="ipod-container">
        <Screen
          menuItems={menuItems}
          selected={selected}
          screen={screen}
          subMenu={subMenu}
          subMenuSelected={subMenuSelected}
        />
        <div className="buttons-container">
          <div className="buttons">
            <Wheel
              onRotate={handleRotate}
              onCenterClick={handleCenterClick}
              onMenuClick={handleMenuClick}
              onPlaySong={handlePlaySong}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ipod;
