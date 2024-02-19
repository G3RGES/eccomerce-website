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
          >
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white 
              dark:bg-gray-900 p-4 shadow-md rounded-md dark:text-white"
            >
              {/* header */}
              {/* body */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
