"use client";
import Spinner from "@/components/Spinner";
import { ROLE_ADMIN, ROLE_MERCHANT } from "@/constants/roles";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
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

    const adminRoles = [ROLE_ADMIN, ROLE_MERCHANT];
    if(!user.roles?.some((role) => adminRoles.includes(role))){
      router.replace(DASHBOARD_ROUTE)
    }
  },[user])
  if (user) {
    return <div>{children}</div>;
  }
  return (
    <div className="flex py-25 items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default AdminLayout;
