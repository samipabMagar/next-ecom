"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import Logo from "@/components/Logo";
import { useForm } from "react-hook-form";
import { login } from "@/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authActions";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";
import PasswordInput from "@/components/form/PasswordInput";

const page = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const { loading, user, error } = useSelector((state) => state.authReducer);

  const submitForm = async (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    toast.error(error);
  }, [error]);
  return (
    <div className="flex  items-center justify-center w-full px-4">
      <div className="flex w-full flex-col max-w-96 gap-5">
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-4xl font-medium text-gray-900 dark:text-gray-300">
            Sign in
          </h2>
          <p className="mt-4 text-base text-gray-500/90">
            Please enter email and password to access.
          </p>

          <div className="mt-10">
            <label className="font-medium">Email</label>
            <input
              {...register("email")}
              placeholder="Please enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
            />
          </div>
          <div className="mt-6">
            <label className="font-medium">Password</label>
            <PasswordInput {...register("password")} />
          </div>
          <Link
            className="p-2 inline-block text-sm text-primary hover:underline"
            href={FORGOT_PASSWORD_ROUTE}
          >
            Forgot password
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 flex items-center justify-evenly py-3 w-full  cursor-pointer disabled:opacity-70 rounded-md bg-primary text-white transition hover:bg-blue-700"
          >
            Login {loading && <Spinner />}
          </button>
          <p className="text-center py-8">
            Don&apos;t have an account?
            <Link
              href={REGISTER_ROUTE}
              className="text-primary hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
