/*  eslint-disable no-unused-vars */
import React from "react";

// icons
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

// assets
import Logo from "../assets/logo.png";

// components
// import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white 
    duration-200 relative z-40 "
    >
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center ">
          <div className="">
            <a
              className="uppercase font-bold text-2xl sm:text-3xl flex gap-2"
              href="#"
            >
              <img className="w-10" src={Logo} alt="logo" />
              Shopsy
            </a>
          </div>
          {/* search bar and order button */}
          <div className="">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                 transition-all duration-300 rounded-full border border-gray-300
                 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
               dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary 
              absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
          </div>
          {/* order button */}
          <button
            className="bg-gradient-to-r from-primary to-secondary
             transition-all duration-200 text-white  py-1 px-4 rounded-full
              flex items-center gap-3 group"
            onClick={() => alert("order not available yet")}
          >
            <span className="group-hover:block hidden transition-all duration-200 ">
              Order
            </span>
            <FaCartShopping
              className="text-xl text-white drop-shadow-sm
             cursor-pointer"
            />
          </button>
        </div>
      </div>
      {/* lower navbar */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
