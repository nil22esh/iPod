import React from "react";

const Wheel = ({
  onRotate,
  onCenterClick,
  onMenuClick,
  onPlaySong,
  onNavigate,
}) => {
  // Handle scroll events for forward/backward navigation
  const handleRotate = (e) => {
    if (e.deltaY < 0) onRotate("up"); // Scroll up (Backward)
    else onRotate("down"); // Scroll down (Forward)
  };

  return (
    <div className="wheel" onWheel={handleRotate}>
      {/* Menu Button */}
      <div className="button menu-button" onClick={onMenuClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2948/2948037.png"
          alt="Menu"
        />
      </div>

      {/* Forward Button */}
      <div
        className="button forward-button"
        onClick={() => onNavigate("forward")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/4818/4818800.png"
          alt="Forward"
        />
      </div>

      {/* Backward Button */}
      <div
        className="button backward-button"
        onClick={() => onNavigate("backward")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/4818/4818809.png"
          alt="Backward"
        />
      </div>

      {/* Play Button */}
      <div className="button bottom-button" onClick={onPlaySong}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5725/5725942.png"
          alt="Play"
        />
      </div>

      {/* Center Button */}
      <div className="center-button" onClick={onCenterClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/6941/6941944.png"
          alt="Center"
        />
      </div>
    </div>
  );
};

export default Wheel;
