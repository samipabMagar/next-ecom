"use client";
import { confirmPayment } from "@/api/orders";
import Spinner from "@/components/Spinner";
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
      })
      .catch((error) => {
        console.log("Error confirming payment:", error);
      })
      .finally(() => {
        router.push(ORDERS_ROUTE);
      });
  });
  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-16 w-16 fill-primary" />
    </div>
  );
};

export default OrdersPayment;
