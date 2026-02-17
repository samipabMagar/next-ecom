"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { CART_ROUTE } from "@/constants/routes";
import { useSelector } from "react-redux";

const HeaderCart = () => {
  const {products} = useSelector((state) => state.cartReducer);
  return (
    <Link
      href={CART_ROUTE}
      className="text-gray-700 relative dark:text-white hover:text-primary cursor-pointer"
    >
      <FaShoppingCart className="text-lg " />
      <span className="absolute -top-2 -right-2 bg-red-600 text-white h-3 w-3 rounded-full text-[9px] flex items-center justify-center ">{products.length}</span>
    </Link>
  );
};

export default HeaderCart;
