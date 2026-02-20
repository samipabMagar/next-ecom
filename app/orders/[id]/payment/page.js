"use client";
import { confirmPayment } from "@/api/orders";
import Spinner from "@/components/Spinner";
import { ORDER_STATUS_CONFIRMED } from "@/constants/order";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const OrdersPayment = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const status = searchParams.get("status");
    confirmPayment(id, status)
      .then(() => {
        toast.success("Payment status updated successfully");
        router.replace(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
      })
      .catch((error) => {
        console.log("Error confirming payment:", error);
      })
     
  });
  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-16 w-16 fill-primary" />
    </div>
  );
};

export default OrdersPayment;
