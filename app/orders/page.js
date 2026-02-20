"use client";

import { getOrdersByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import { ORDER_STATUS_CANCELLED, ORDER_STATUS_CONFIRMED, ORDER_STATUS_DELIVERED, ORDER_STATUS_PENDING, ORDER_STATUS_SHIPPED } from "@/constants/order";
import { FaCheckCircle, FaClock, FaShippingFast, FaShoppingBasket, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const statuses = [
  {
    label: "Pending",
    value: ORDER_STATUS_PENDING,
    Icon: <FaClock className="text-amber-600"/>
  },
  {
    label: "Confirmed",
    value: ORDER_STATUS_CONFIRMED,
    Icon: <FaShoppingBasket className="text-primary"/>
  },
  {
    label: "Shipped",
    value: ORDER_STATUS_SHIPPED,
    Icon: <FaShippingFast className="text-violet-600"/>
  },
  {
    label: "Delivered",
    value: ORDER_STATUS_DELIVERED,
    Icon: <FaCheckCircle className="text-green-600"/>
  },
  {
    label: "Cancelled",
    value: ORDER_STATUS_CANCELLED,
    Icon: <FaTimesCircle className="text-red-600"/>
  }
]
const OrdersPage = () => {""
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const queryStatus = searchParams.get("status");
  console.log("Query status:", queryStatus);

  useEffect(() => {
    getOrdersByUser(queryStatus) // Pass empty string to get all orders, or use "pending", "completed", etc.
      .then((data) => {
        // console.log(data);
        setOrders(data);
      })
      .catch((error) => {
        toast.error(error?.response?.data || "Failed to fetch orders");
      })
      .finally(() => setLoading(false));
  }, [queryStatus]);

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
    <div>
      <ul className="flex border-b border-gray-200 mb-2 gap-5">
        {
          statuses.map((status) => {
            return (
              <li key={status.value}><Link href={`?status=${status.value}`} className={`flex ${status.value == queryStatus && "border-primary border-b"}  hover:border-gray-400 hover:border-b  items-center gap-2 pb-3 px-3`}>{status.Icon}{status.label}</Link></li>
            )
          })
        }
      </ul>
    </div>
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
