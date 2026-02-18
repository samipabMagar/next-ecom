import { FaXmark } from "react-icons/fa6";
import { format } from "date-fns";
import Image from "next/image";
import OrderStatus from "./Status";
import { cancelOrder } from "@/api/orders";
import { toast } from "react-toastify";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_PENDING,
} from "@/constants/order";

const OrderCard = ({ order }) => {
  const isProductAvailable = order.orderItems.some((item) => item.product);

  if (!isProductAvailable) return;

  function cancel() {
    if (confirm("Are you sure?")) {
      cancelOrder(order._id)
        .then(() => {
          toast.success("Order cancelled.");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Order cancel failed.");
        });
    }
  }

  return (
    <div className="main-box border border-gray-200 dark:border-gray-700 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full mb-5 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div className="data">
          <p className="font-semibold text-base leading-7 ">
            Order Id:
            <span className="text-primary font-medium ml-2">
              #{order.orderNumber}
            </span>
          </p>
          <p className="font-semibold text-base leading-7  mt-4">
            Order Date :
            <span className="text-gray-400 font-medium ml-2">
              {format(order.createdAt, "dd MMM, yyyy")}
            </span>
          </p>
        </div>
        <OrderStatus status={order.status} />
      </div>
      <div className="w-full px-6">
        {order.orderItems?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 dark:border-gray-700 gap-6 w-full"
          >
            <div className="img-box max-lg:w-full">
              <Image
                src={item.product?.imageUrls[0]}
                height={200}
                width={200}
                alt={item.product?.name}
                className="aspect-square w-full h-28 rounded-xl object-contain"
              />
            </div>
            <div className="flex flex-row items-center justify-between  w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div className="flex items-center">
                  <div>
                    <h2 className="font-semibold text-xl leading-8  mb-3">
                      {item.product?.name}
                    </h2>
                    <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                      Brand: {item.product?.brand}
                    </p>
                    <div className="flex items-center ">
                      <p className="font-medium text-base leading-7  ">
                        Qty:
                        <span className="text-gray-500 ml-2">
                          {item.quantity}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex items-center max-lg:mt-3">
                    <div className="flex gap-3 lg:block">
                      <p className="font-medium text-sm leading-7 ">Price</p>
                      <p className="lg:mt-4 font-medium text-sm leading-7 text-primary">
                        Rs. {item.product?.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center max-lg:mt-3 ">
                    <div className="flex gap-3 lg:block">
                      <p className="font-medium text-sm leading-7 ">Category</p>
                      <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                        {item.product?.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center max-lg:border-b overflow-hidden border-gray-200 dark:border-gray-700">
          {order.status !== ORDER_STATUS_CANCELLED ? (
            <button
              onClick={cancel}
              className="flex outline-0 py-6 sm:pr-6 px-6 sm:border-r border-gray-200 dark:border-gray-700 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-red-500 cursor-pointer dark:hover:bg-red-950 hover:bg-red-100 transition-all duration-500 hover:text-red-600"
            >
              <FaXmark />
              Cancel Order
            </button>
          ) : null}
          {order.status === ORDER_STATUS_PENDING ? (
            <div className="pl-6 py-3 max-lg:text-center flex items-center gap-3">
              <button className="bg-purple-900 hover:bg-violet-900 text-white rounded-md px-4 py-2 cursor-pointer">
                Pay Via Khalti
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 cursor-pointer">
                Pay Via Stripe
              </button>
              <button className="bg-green-700  hover:bg-green-800 text-white rounded-md px-4 py-2 cursor-pointer">
                Cash on Delivery
              </button>
            </div>
          ) : null}
        </div>
        <p className="font-semibold text-lg  py-6 px-6">
          Total Price:
          <span className="text-primary ml-2">Rs. {order.totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;