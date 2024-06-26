import React from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "Shop",
    link: "/#"
  },
  {
    id: 3,
    name: "About",
    link: "/#"
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#"
  }
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#"
  },
  {
    id: 2,
    name: "Best selling",
    link: "/#"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#"
  }
]

const Navbar = () => (
  <div className="bg-whiteBackground dark:bg-darkBackground dark:text-white duration-200 relative z-40">
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 ">
          <a href="#" className="flex items-center gap-2">
            <img src="logo.png" alt="E-Mart Logo" className="h-8 sm:h-10" width={'200'} />
          </a>
          {/* Menu Items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link}
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 relative group"
                  >
                    {data.name}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}

              {/* Dropdown */}
              <li className="relative cursor-pointer group">
                <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 relative group">
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300 " />
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                {/* {dropdown link} */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:hover:text-white">
                  <ul className="space-x-6y-2">
                    {DropdownLinks.map((data, index) => (
                      <li key={index}>
                        <a
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block rounded-md font-semibold w-full p-2 hover:bg-primary/20"
                          href={data.link}>{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Navbar Right Section */}
        <div className="flex justify-between items-center gap-4">
          {/* Searchbar Section */}
          <div className="relative group hidden sm:block">
            <input type="text"
              placeholder="Search"
              className="search-bar"
            />
            <IoMdSearch
              className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-1 duration-200"
            />
          </div>

          {/* Order-Button Section */}
          <button className="relative p-3">
            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
              6
            </div>
          </button>
          {/* DarkMode Section */}
          <div>
            <DarkMode />
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
