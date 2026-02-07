import React from "react";
import { FaBars,  FaShoppingCart, FaUser } from "react-icons/fa";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <>
      <header className="flex dark:bg-gray-950 dark:text-white justify-between items-center z-20 py-2 md:py-2 shadow md:px-15 px-5 backdrop-blur-md bg-white sticky top-0">
        <Logo />
        <NavLink />
        <div className="flex gap-2">
         <ThemeToggler/>
          <button className="text-gray-700 dark:text-white hover:text-primary cursor-pointer">
            <FaShoppingCart />
          </button>
          <button className="text-gray-700 dark:text-white hover:text-primary cursor-pointer">
            <FaUser />
          </button>
          <button className="block md:hidden dark:text-white text-gray-700 hover:text-primary cursor-pointer">
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
