"use client"

import { toggleTheme } from "@/redux/userPreferences/userPreferenceSlice";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ThemeToggler = () => {
    const dispatch = useDispatch();
  return (
    <button onClick={()=>dispatch(toggleTheme())} className="text-gray-700 dark:text-white hover:text-primary cursor-pointer">
      <FaMoon className="dark:hidden text-lg"/>
      <FaSun className="hidden dark:block text-lg"/>
    </button>
  );
};

export default ThemeToggler;
