import React from "react";
import authBg from "../../assets/images/auth-bg.jpg";
import Image from "next/image";

const AuthLayout = ({ children }) => {
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
