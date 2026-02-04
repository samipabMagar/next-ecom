import React from "react";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <div className="flex  items-center justify-center w-full px-4">
      <div className="flex w-full flex-col max-w-xl gap-2">
        
        <form>
          <h2 className="md:text-4xl text-xl font-medium text-gray-900">Sign up</h2>
          
          <div className="flex gap-5">
            {" "}
            <div className="md:mt-4  mt-3">
              <label className="font-medium">Name</label>
              <input
                placeholder="Full name"
                className="md:mt-2 mt-1 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
                required
                type="text"
              />
            </div>
            <div className="md:mt-4 mt-3">
              <label className="font-medium">Email</label>
              <input
                placeholder="Email"
                className="md:mt-2 mt-1 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
                required
                type="email"
              />
            </div>
          </div>
          <div className="md:mt-4 mt-3">
            <label className="font-medium">Phone number</label>
            <input
              placeholder="Please enter your phone number"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
              required
              type="tel"
            />
          </div>
          <div className="md:mt-4 mt-3">
            <label className="font-medium">Address</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                placeholder="Please enter your city"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
                required
                type="text"
              />
              <input
                placeholder="Please enter your province"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
                required
                type="text"
              />
            </div>
          </div>
          <div className="md:mt-4 mt-3">
            <label className="font-medium">Password</label>
            <input
              placeholder="Please enter your password"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
              required
              type="password"
            />
          </div>
          <div className="flex md:gap-3 gap-2 md:mt-5 mt-3 justify-center items-center ">
            {" "}
            <button
              type="submit"
              className=" py-2 md:py-3 w-full flex-3 md:flex-4 cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700"
            >
              Register
            </button>
            <p className="text-center flex-5  md:flex-4 ">
              Already have an account?
              <Link
                href={LOGIN_ROUTE}
                className="text-primary hover:underline  "
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
