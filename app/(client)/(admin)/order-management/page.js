"use client";

import { getAllOrders } from "@/api/orders";
import { useEffect, useState } from "react";
import OrdersTable from "@/components/admin/orders/Table";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";

const OrderManagementPage = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    getAllOrders(selectedStatus)
      .then((data) => {
        console.log('Fetched orders data:', data);
        setOrders(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [selectedStatus]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 shrink-0">
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span>Filter by Status:</span>
              <select
                className="border rounded-md py-2 px-3 border-gray-300 dark:border-gray-600"
                name="status"
                id="status"
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value={ORDER_STATUS_PENDING}>
                  {ORDER_STATUS_PENDING}
                </option>
                <option value={ORDER_STATUS_CONFIRMED}>
                  {ORDER_STATUS_CONFIRMED}
                </option>
                <option value={ORDER_STATUS_SHIPPED}>
                  {ORDER_STATUS_SHIPPED}
                </option>
                <option value={ORDER_STATUS_DELIVERED}>
                  {ORDER_STATUS_DELIVERED}
                </option>
                <option value={ORDER_STATUS_CANCELLED}>
                  {ORDER_STATUS_CANCELLED}
                </option>
              </select>
            </div>
          </div>
        </div>
        <OrdersTable loading={loading} orders={orders} />
      </div>
    </section>
  );
};

export default OrderManagementPage;