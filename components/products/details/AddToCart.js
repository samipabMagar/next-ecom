"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(addToCart(product));

    toast.success(`${product.name} added to cart.`);
  }

  return (
    <button
      onClick={addProductToCart}
      className="w-full text-white bg-primary hover:bg-blue-600 focus:ring-4 focus:ring-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center gap-2"
    >
      <MdOutlineAddShoppingCart />
      Add to cart
    </button>
  );
};

export default AddToCart;