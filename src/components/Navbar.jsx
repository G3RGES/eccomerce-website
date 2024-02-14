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
    <div className="">
      {/* upper navbar */}
      <div className="">
        <div className="">
          <div className="">
            <a className="" href="#">
              <img className="" src={Logo} alt="logo" />
            </a>
          </div>
          {/* search bar and order button */}
          <div className="">
            <div className="group">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                 transition-all duration-300 rounded-full border border-gray-300
                 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
               dark:border-gray-500 dark:bg-gray-800  "
              />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
