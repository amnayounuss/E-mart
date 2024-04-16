import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

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

const Navbar = () => (
  <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
    <div className="py-4">
      <div className="container flex justify-between
      item-center">
        {/* Logo */}
        <div className="flex item-center gap-4">
          <a
            href="#"
            className="text-primary font-semibold 
            tracking-widest text-2xl uppercase 
            sm:text-3xl"
          >
            E-Mart
          </a>
          {/* Menu Items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link}
                    className="inline-block px-4
                  font-semibold text-gray-500
                  hover:text-black
                  dark:hover:text-white duration-200"
                  >{data.name}</a>
                </li>
              ))}
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
            className="text-xl text-gray-600 group-hover:text-primary 
            dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
          /> 
          </div>

          {/*Order-Button Section */}
          <button className="relative p-3">
            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
              <div className="w-4 h-4 bg-red-500 text-whi
              rounded-full absolute top-0 right-0 flex item-center justify-center text-xs">
                4
              </div>
          </button>
          {/* DarkMode Section */}
          <div></div>

        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
