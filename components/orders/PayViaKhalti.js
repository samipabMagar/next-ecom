"use client"
import { payViaKhalti } from "@/api/orders";
import React, { useState } from "react";
import Spinner from "../Spinner";

const PayViaKhalti = ({id}) => {
  const [loading, setLoading] = useState(false);
  

  const handlePayment = () => {
    setLoading(true);
    payViaKhalti(id)
    .then((data) => {
        window.location.href =data.payment_url;
    })
    .catch((error) => {
        console.log(error);        alert("Payment failed. Please try again.");
    })
    .finally(() => setLoading(false));
  }
  return (
    <button onClick={handlePayment} className="bg-purple-900 gap-2 flex items-center hover:bg-violet-900 text-white rounded-md px-4 py-2 cursor-pointer">
      {loading && <Spinner className="w-5 h-5 fill-purple-900"/>}
      Pay Via Khalti
    </button>
  );
};

export default PayViaKhalti;
