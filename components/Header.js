import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaLaptop,
  FaMoon,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <>
      <header className="flex  justify-between items-center z-20 py-2 md:py-4 shadow md:px-15 px-5 backdrop-blur-md bg-white sticky top-0">
        <h1 className="text-primary text-xl  font-semibold">
          <Link className="flex  items-center" href={HOME_ROUTE}>
            <FaLaptop /> eTech
          </Link>
        </h1>
        <NavLink />
        <div className="flex gap-2">
          <button className="text-gray-700 hover:text-primary cursor-pointer">
            <FaMoon />
          </button>
          <button className="text-gray-700 hover:text-primary cursor-pointer">
            <FaShoppingCart />
          </button>
          <button className="text-gray-700 hover:text-primary cursor-pointer">
            <FaUser />
          </button>
          <button className="block md:hidden text-gray-700 hover:text-primary cursor-pointer">
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
