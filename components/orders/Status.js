import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";

const OrderStatus = ({ status }) => {
  if (status == ORDER_STATUS_CONFIRMED)
    return (
      <span className="rounded-full py-1 px-5 font-semibold text-sm leading-7 text-white bg-primary max-lg:mt-5">
        {status}
      </span>
    );

  if (status == ORDER_STATUS_SHIPPED)
    return (
      <span className="rounded-full py-1 px-5 font-semibold text-sm leading-7 text-white bg-violet-600 max-lg:mt-5">
        {status}
      </span>
    );

  if (status == ORDER_STATUS_DELIVERED)
    return (
      <span className="rounded-full py-1 px-5 font-semibold text-sm leading-7 text-white bg-green-600 max-lg:mt-5">
        {status}
      </span>
    );

  if (status == ORDER_STATUS_CANCELLED)
    return (
      <span className="rounded-full py-1 px-5 font-semibold text-sm leading-7 text-white bg-red-600 max-lg:mt-5">
        {status}
      </span>
    );

  return (
    <span className="rounded-full py-1 px-5 font-semibold text-sm leading-7 text-white bg-amber-600 max-lg:mt-5">
      {status}
    </span>
  );
};

export default OrderStatus;