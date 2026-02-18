"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Spinner from "@/components/Spinner";

const OrderLayout = ({ children }) => {
  const { user } = useSelector((state) => state.authReducer);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
  }, [user]);

  if (user) return <>{children}</>;

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-16 w-16 fill-primary" />
    </div>
  );
};

export default OrderLayout;
