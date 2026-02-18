"use client";

import { getOrdersByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrdersByUser("") // Pass empty string to get all orders, or use "pending", "completed", etc.
      .then((data) => {
        // console.log(data);
        setOrders(data);
      })
      .catch((error) => {
        toast.error(error?.response?.data || "Failed to fetch orders");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner className="h-16 w-16 fill-primary" />
      </div>
    );
  }

  return (
    <section className="py-16 relative">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-10">
          Your Orders
        </h2>

        {orders.length > 0 ? (
          orders.map((order) => <OrderCard key={order._id} order={order} />)
        ) : (
          <p className="text-gray-500">No orders found.</p>
        )}
      </div>
    </section>
  );
};

export default OrdersPage;
