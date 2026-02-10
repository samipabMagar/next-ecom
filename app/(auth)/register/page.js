"use client";
import React, { useEffect } from "react";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/auth/authActions";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";
import PasswordInput from "@/components/form/PasswordInput";

const page = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.authReducer);

  const submitForm = async (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return (
    <div className="flex  items-center justify-center w-full px-4">
      <div className="flex w-full flex-col max-w-xl gap-2">
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="md:text-4xl text-xl font-medium dark:text-gray-200 text-gray-900">
            Sign up
          </h2>

          <div className="flex gap-5">
            {" "}
            <div className="md:mt-4  mt-3">
              <label className="font-medium">Name</label>
              <input
                {...register("name")}
                placeholder="Full name"
                className="md:mt-2 mt-1 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
                required
                type="text"
              />
            </div>
            <div className="md:mt-4 mt-3">
              <label className="font-medium">Email</label>
              <input
                {...register("email")}
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
              {...register("phone")}
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
                {...register("city")}
                placeholder="Please enter your city"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
                required
                type="text"
              />
              <input
                {...register("province")}
                placeholder="Please enter your province"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-2 md:py-3 w-full"
                required
                type="text"
              />
            </div>
          </div>
          <div className="md:mt-4 mt-3">
            <label className="font-medium">Password</label>
            <PasswordInput {...register("password")} />
          </div>
          <div className="flex md:gap-3 gap-2 md:mt-5 mt-3 justify-center items-center ">
            {" "}
            <button
              type="submit"
              className="flex justify-evenly items-center py-2 md:py-3 w-full flex-3 md:flex-4 cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700"
            >
              Register {loading && <Spinner />}
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
