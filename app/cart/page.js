"use client";

import { FaMinus, FaPlus, FaRegHeart, FaXmark } from "react-icons/fa6";
import { ORDERS_ROUTE, PRODUCT_ROUTE } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaImage } from "react-icons/fa";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/cart/cartSlice";
import { createOrder } from "@/api/orders";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { products, totalPrice } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.authReducer);
  const router = useRouter();

  const dispatch = useDispatch();

  function remove(product) {
    if (confirm("Are you sure?")) {
      dispatch(removeFromCart(product));
    }
  }

  async function checkout() {
    const orderItems = products.map((product) => {
      return {
        product: product.id,
        quantity: product.quantity,
      };
    });

    const orderTotalPrice = Math.ceil(totalPrice * 1.13) + 200;
    const shippingAddress = user.address;
    console.log({ orderItems, orderTotalPrice, shippingAddress });

    try {
      const response = await createOrder({
        orderItems,
        totalPrice: orderTotalPrice,
        shippingAddress,
      });
      toast.success("Order created successfully!");
      dispatch(clearCart());
      router.push(`${ORDERS_ROUTE}`);
    } catch (error) {
      toast.error(error?.response?.data);
    }
  }
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto container px-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Your cart items
        </h2>
        {products.length == 0 ? (
          <p>No items added to cart.</p>
        ) : (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link
                        href={`${PRODUCT_ROUTE}/${product.id}`}
                        className="shrink-0 md:order-1"
                      >
                        {product.imageUrls.length > 0 ? (
                          <Image
                            className="h-20 w-20 object-contain"
                            src={product.imageUrls[0]}
                            alt={product.name}
                            height={200}
                            width={200}
                          />
                        ) : (
                          <FaImage className="h-20 w-20 text-gray-400" />
                        )}
                      </Link>
                      <label htmlFor="counter-input" className="sr-only">
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            onClick={() => dispatch(decreaseQuantity(product))}
                            type="button"
                            disabled={product.quantity == 1}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaMinus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            disabled
                            value={product.quantity}
                          />
                          <button
                            type="button"
                            onClick={() => dispatch(increaseQuantity(product))}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaPlus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            Rs. {product.price * product.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link
                          href={`${PRODUCT_ROUTE}/${product.id}`}
                          className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                        >
                          {product.name}
                        </Link>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex gap-1 items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            <FaRegHeart />
                            Add to Favorites
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(product)}
                            className="inline-flex gap-1 items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <FaXmark />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden xl:mt-8 xl:block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  People also bought
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                  <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <a href="#" className="overflow-hidden rounded">
                      <Image
                        height={100}
                        width={100}
                        className="mx-auto h-44 w-44 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt="imac image"
                      />
                      <Image
                        height={100}
                        width={100}
                        className="mx-auto hidden h-44 w-44 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt="imac image"
                      />
                    </a>
                    <div>
                      <a
                        href="#"
                        className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                      >
                        iMac 27”
                      </a>
                      <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        <span className="line-through"> $399,99 </span>
                      </p>
                      <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                        $299
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2.5">
                      <button
                        data-tooltip-target="favourites-tooltip-1"
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                          />
                        </svg>
                      </button>
                      <div
                        id="favourites-tooltip-1"
                        role="tooltip"
                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Add to favourites
                        <div className="tooltip-arrow" data-popper-arrow />
                      </div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          className="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <a href="#" className="overflow-hidden rounded">
                      <Image
                        height={100}
                        width={100}
                        className="mx-auto h-44 w-44 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                        alt="imac image"
                      />
                      <Image
                        height={100}
                        width={100}
                        className="mx-auto hidden h-44 w-44 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                        alt="imac image"
                      />
                    </a>
                    <div>
                      <a
                        href="#"
                        className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                      >
                        Playstation 5
                      </a>
                      <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        <span className="line-through"> $799,99 </span>
                      </p>
                      <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                        $499
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2.5">
                      <button
                        data-tooltip-target="favourites-tooltip-2"
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                          />
                        </svg>
                      </button>
                      <div
                        id="favourites-tooltip-2"
                        role="tooltip"
                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Add to favourites
                        <div className="tooltip-arrow" data-popper-arrow />
                      </div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          className="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <a href="#" className="overflow-hidden rounded">
                      <Image
                        height={100}
                        width={100}
                        className="mx-auto h-44 w-44 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                        alt="imac image"
                      />
                      <Image
                        height={100}
                        width={100}
                        className="mx-auto hidden h-44 w-44 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                        alt="imac image"
                      />
                    </a>
                    <div>
                      <a
                        href="#"
                        className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                      >
                        Apple Watch Series 8
                      </a>
                      <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        <span className="line-through"> $1799,99 </span>
                      </p>
                      <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                        $1199
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2.5">
                      <button
                        data-tooltip-target="favourites-tooltip-3"
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                          />
                        </svg>
                      </button>
                      <div
                        id="favourites-tooltip-3"
                        role="tooltip"
                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Add to favourites
                        <div className="tooltip-arrow" data-popper-arrow />
                      </div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          className="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. {totalPrice * 0.9}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        Rs. {totalPrice * 0.1}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. 200
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs. {totalPrice * 0.13}
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      Rs. {Math.ceil(totalPrice * 1.13) + 200}
                    </dd>
                  </dl>
                </div>
                <button
                  onClick={() => checkout()}
                  className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-primary/30 dark:hover:bg-blue-700 dark:focus:ring-primary"
                >
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    href={PRODUCT_ROUTE}
                    title
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
