"use client";
import React from "react";
import {  FaBars, FaShoppingCart,  } from "react-icons/fa";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import Link from "next/link";
import { CART_ROUTE } from "@/constants/routes";
import HeaderCart from "./HeaderCart";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state.authReducer;
  });
  return (
    <>
      <header className="flex dark:bg-gray-950 dark:text-white justify-between items-center z-20 py-2 md:py-2 shadow md:px-15 px-5 backdrop-blur-md bg-white sticky top-0">
        <Logo />
        <NavLink />
        <div className="flex gap-4 items-center">
          <ThemeToggler />
         <HeaderCart/>
          <User/>
          <button className="block md:hidden dark:text-white text-gray-700 hover:text-primary cursor-pointer">
            <FaBars />
          </button>
         
        </div>
      </header>
    </>
  );
};

export default Header;
