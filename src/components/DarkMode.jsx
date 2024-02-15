/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

// assets
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; //* HTML element //* TESTING
  // console.log(element); //* TESTING

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [element.classList, theme]);

  //* SIMPLE BUT LESS CODE AND EASIER TO CHANGE IF NEEDED AND
  //* USABLE WITH BOTH IN THE SITUATION BELOW
  const themeSetting = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {/* light mode */}
      <img
        // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        onClick={themeSetting}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
        duration-300 absolute right-0 z-10 
         ${theme === "dark" ? "opacity-0" : "opacity-100"}
        `}
        src={LightButton}
        alt="light mode"
      />

      {/* //* THERE'S ANOTHER WAY TO CHANGE THE IMG FROM THE LIGHT TO DARK BY GIVING dark:hidden
      //* TO THE LIGHT IMG AND dark:block TO THE DARK IMG  */}

      {/* dark mode */}
      <img
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
        duration-300 `}
        onClick={themeSetting}
        src={DarkButton}
        alt="dark mode"
      />
    </div>
  );
};

export default DarkMode;
