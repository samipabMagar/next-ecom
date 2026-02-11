"use client";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.authReducer);
  const router =  useRouter();

  useEffect(() => {
    if(!user) {
        router.push(LOGIN_ROUTE);
    }
  },[user])
  if (user) {
    return <div>{children}</div>;
  }
  return;
};

export default AdminLayout;
