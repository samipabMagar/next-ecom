import { payViaCash } from "@/api/orders";
import React from "react";
import { toast } from "react-toastify";

const CashOnDelivery = ({ id }) => {
  const confirmOrder = async () => {
    if (
      confirm("Are you sure you want to place the order with Cash on Delivery?")
    ) {
      try {
        await payViaCash(id);
        toast.success("Order placed successfully with Cash on Delivery.");
      } catch (error) {
        toast.error("Failed to place order. Please try again.");
      }
    }
  };
  return (
    <button
      onClick={confirmOrder}
      className="bg-green-700  hover:bg-green-800 text-white rounded-md px-4 py-2 cursor-pointer"
    >
      Cash on Delivery
    </button>
  );
};

export default CashOnDelivery;
