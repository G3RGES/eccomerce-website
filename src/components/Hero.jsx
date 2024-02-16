/* eslint-disable no-unused-vars */
import React from "react";

// slider
import Slider from "react-slick";

// assets
import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shopping.png";
import Image3 from "../assets/hero/sale.png";

const imageList = [
  {
    id: 1,
    img: Image2,
    title: "Upto 50% off on all Men's wear",
    discription: "biggest sale ever on Men's wear",
  },
  {
    id: 2,
    img: Image1,
    title: "Upto 30% off on all Women's wear",
    discription: "biggest sale ever on Women's wear",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 70% off on all Products",
    discription: "biggest sale ever on all Products",
  },
];

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100
    flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200  "
    >
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 
      rounded-3xl rotate-45 -z[9] dark:bg-tertiary/40  "
      ></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0 ">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            {/* text content section */}
            <div
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0
            text-center sm:text-left order-2 sm:order-1 relative z-10 "
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Lorem ipsum dolor sit
              </h1>
              <p className="text-sm">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                ad
              </p>
              <div className="">
                <button
                  className="bg-gradient-to-r from-primary to-secondary 
                hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order now
                </button>
              </div>
            </div>

            {/* image section */}
            <div className="order-1 sm:order-2 ">
              <div className="relative z-10">
                <img
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125
                  object-contain mx-auto  "
                  src={Image1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
