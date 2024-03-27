import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between w-[90%] m-auto justify-items-center items-center">
        <div className="Logo w-[130px] h-[100px]">
          <img
            src="https://logowik.com/content/uploads/images/home-chef9119.jpg"
            alt="logo"
          />
        </div>
        <div className="hidden md:block">
          {" "}
          <ul className="flex gap-[24px] text-[24px] font-semibold text-gray-600">
            <li>
              <a href="#home" className="hover:text-[#008600]">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#008600]">
                Blog
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#008600]">
                Recipe
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          {" "}
          <button onClick={toggleMenu} className="p-[10px]">
            <FaBars className="w-[30px] h-[25px]" />
          </button>
        </div>

        <div className="hidden md:block">
          {" "}
          <button className="px-[26px]  py-[8px] bg-[#008600] text-[24px] text-white font-semibold rounded-lg  hover:bg-[#007200]">
            Login
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute right-0 top-0 mt-[100px] bg-green-500 w-[60%] shadow-md text-center text-[24px] font-semibold"
          style={{ height: "85vh" }}
        >
          <ul className="text-gray-600 h-full flex flex-col justify-start">
            <li>
              <a href="#home" className="block px-4 py-2 hover:text-[#008600]">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#home" className="block px-4 py-2 hover:text-[#008600]">
                Blog
              </a>
            </li>
            <li>
              <a href="#home" className="block px-4 py-2 hover:text-[#008600]">
                Recipe
              </a>
            </li>
            <li>
              {" "}
              <button className="px-[16px]  py-[8px] m-[10px] bg-[#008600] text-[28px] text-white text-bold rounded-lg  hover:bg-[#007200]">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
