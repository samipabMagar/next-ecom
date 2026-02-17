"use client";
import { addToCart } from "@/redux/cart/cartSlice";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({product}) => {
    const dispatch = useDispatch();

    function addProductToCart() {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart!`);
    }
  return (
    <button onClick={addProductToCart} className="bg-primary min-w-10 h-10 text-lg py-2 px-2.5 cursor-pointer rounded-full text-white hover:bg-secondary">
      <MdOutlineShoppingCart />
    </button>
  );
};

export default AddToCart;
