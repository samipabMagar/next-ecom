"use client";

import { ORDER_STATUS_PENDING } from "@/constants/order";
import { DASHBOARD_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, PROFILE_ROUTE } from "@/constants/routes";
import { logout } from "@/redux/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  if (!user)
    return (
      <Link
        className="py-1 px-4 bg-primary text-white rounded-lg"
        href={LOGIN_ROUTE}
      >
        Login
      </Link>
    );
  return (
    <div className="relative">
      <button
        onClick={(e) => setShow(!show)}
        className="text-gray-700 border-3 rounded-full  border-gray-500 h-9 min-w-9 flex items-center justify-center dark:text-white hover:text-primary cursor-pointer"
      >
        {user?.profileImageUrl ? (
          <Image
            src={user.profileImageUrl}
            height={64}
            width={64}
            alt={user.name}
            className="h-8 w-8 rounded-full "
          />
        ) : (
          <FaUser />
        )}
      </button>
      {show && (
        <>
          <div
            onClick={() => setShow(false)}
            className="fixed inset-0 min-h-screen"
          ></div>
          <div className="shadow absolute right-0 top-9  rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="border-b  pb-2 p-2 dark:border-gray-700 border-gray-300">
              <h1 className="text-gray-800 dark:text-gray-200">{user?.name}</h1>
              <h1 className="text-primary">{user?.email}</h1>
            </div>
            <div className="flex flex-col  py-2 ">
              <Link
                className="hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 px-2 py-1 w-full text-gray-700"
                href={DASHBOARD_ROUTE}
              >
                Dashboard
              </Link>
              <Link
                className="hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 px-2 py-1 w-full text-gray-700"
                href={`${ORDERS_ROUTE}?status=${ORDER_STATUS_PENDING}`}
              >
                Orders
              </Link>
              <Link
                className="hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 px-2 py-1 w-full text-gray-700"
                href={PROFILE_ROUTE}
              >
                Profile
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="hover:bg-red-100 dark:text-gray-100 dark:hover:bg-red-700 px-2 py-1 w-full text-start cursor-pointer text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
