"use client";
import Sidebar from "@/components/admin/Sidebar";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ClientLayout = ({ children }) => {
  const { user } = useSelector((state) => state.authReducer);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(LOGIN_ROUTE);
    }
  }, [user]);
  if (user) {
    return (
      <div>
        <Sidebar />
        <div className="sm:ml-55 p-5">{children}</div>
      </div>
    );
  }
  return (
    <div className="flex py-25 items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default ClientLayout;
