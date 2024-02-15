/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// assets
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="relative">
      {/* light mode */}
      <img
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
        duration-300 absolute right-0 z-10
        `}
        src={LightButton}
        alt="light mode"
      />

      {/* dark mode */}
      <img
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
        duration-300 `}
        src={DarkButton}
        alt="dark mode"
      />
    </div>
  );
};

export default DarkMode;
