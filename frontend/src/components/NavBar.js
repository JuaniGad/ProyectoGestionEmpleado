import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img alt="logo" src={logo} className="w-[124px] h-[32px]" />
      <div className="">
        <ul className=" items-center list-none sm:flex hidden justify-end flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer px-[10px] text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden justify-end flex items-center mr-0">
        <img
          alt="menu"
          src={toggle ? close : menu}
          className=" w-[28px] h-[28px] object-contain cursor-pointer mr-2"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-gradient-to-br from-black to-gray-700`}
        >
          <ul className=" items-center list-none flex flex-col justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer px-[3px] text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
