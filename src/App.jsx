/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopProducts from "./components/TopProducts";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
    </div>
  );
};

export default App;
