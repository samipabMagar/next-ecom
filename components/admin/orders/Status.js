import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";

const OrderStatus = ({ status }) => {
  if (status == ORDER_STATUS_CONFIRMED)
    return (
      <span className="rounded-full py-1 px-3 text-xs text-white bg-primary">
        {status}
      </span>
    );

  if (status == ORDER_STATUS_SHIPPED)
    return (
      <span className="rounded-full py-1 px-3 text-xs text-white bg-violet-600">
        {status}
      </span>
    );

  if (status == ORDER_STATUS_DELIVERED)
    return (
      <span className="rounded-full py-1 px-3 text-xs text-white bg-green-600">
        {status}
      </span>
    );

  if (status == ORDER_STATUS_CANCELLED)
    return (
      <span className="rounded-full py-1 px-3 text-xs text-white bg-red-600">
        {status}
      </span>
    );

  return (
    <span className="rounded-full py-1 px-3 text-xs text-white bg-amber-600">
      {status}
    </span>
  );
};

export default OrderStatus;