/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { FaStar } from "react-icons/fa";

// assets
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="text-left mb-10 ">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-tertiary "
          >
            Top Rated Products for you
          </p>
          <h1 data-aos="zoom-out" className="text-3xl font-bold">
            Top Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-20 md:gap-5 place-items-center"
        >
          {ProductsData.map((product) => (
            <div className="" key={product.id}>
              {/* image section */}
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 
                dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group
                 max-w-[300px]"
              >
                <img className="" src={product.img} alt={product.title} />
              </div>
              {/* details section */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
