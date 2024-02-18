/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

// assets
import BannerImg from "../assets/women/women2.jpg";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-out">
            <img
              src={BannerImg}
              alt="banner_img"
              className="max-w-[400px] h-[350px] w-full mx-auto
               drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text section */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
