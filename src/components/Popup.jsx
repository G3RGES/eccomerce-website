/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="">
          <div
            className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 
          backdrop-blur-md "
          ></div>
        </div>
      )}
    </>
  );
};

export default Popup;
