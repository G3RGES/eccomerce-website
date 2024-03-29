/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { FaStar } from "react-icons/fa6";

// assets
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-tertiary "
          >
            Top Selling Products for you
          </p>
          <h1 data-aos="zoom-out" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 
          lg:grid-cols-5 place-items-center gap-5"
          >
            {/* card section */}
            {ProductsData.map((product) => (
              <div
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                className="space-y-3"
                key={product.id}
              >
                <img
                  className="h-[220px] w-[150px] object-cover rounded-md  "
                  src={product.img}
                  alt={product.title}
                />
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.color} </p>
                  <div className="flex flex-row items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10 cursor-pointer bg-primary
             text-white dark:bg-tertiary py-1 px-5 rounded-md"
            >
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
