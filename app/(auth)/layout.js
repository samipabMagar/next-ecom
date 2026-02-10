"use client"
import React, { useEffect } from "react";
import authBg from "../../assets/images/auth-bg.jpg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constants/routes";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const {user} = useSelector((state) => state.authReducer);
  
  useEffect(() => {
    if(user) {
      router.push(HOME_ROUTE);
    }
  })
  return (
    <section className="relative">
      <div className="w-full h-200 relative">
        <Image
          className=" -z-10 object-cover"
          src={authBg}
          alt="auth-bg"
         fill
        />
      </div>
      <div className="absolute inset-0 flex pt-10 justify-center ">{children}</div>
    </section>
  );
};

export default AuthLayout;
