"use client";
import React from "react";
import {  FaBars, FaShoppingCart,  } from "react-icons/fa";
import NavLink from "./NavLink";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/auth/authSlice";
import User from "./User";

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
        <div className="flex gap-4">
          <ThemeToggler />
          <button className="text-gray-700 dark:text-white hover:text-primary cursor-pointer">
            <FaShoppingCart className="text-lg" />
          </button>
          <User/>
          <button className="block md:hidden dark:text-white text-gray-700 hover:text-primary cursor-pointer">
            <FaBars />
          </button>
          {/* {user && (
            <button
              onClick={() => dispatch(logout())}
              className="py-1 px-2 bg-red-600 rounded-lg text-white cursor-pointer"
            >
              logout
            </button>
          )} */}
        </div>
      </header>
    </>
  );
};

export default Header;
