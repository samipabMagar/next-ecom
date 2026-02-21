"use client";

import { forgotPassword } from "@/api/auth";
import { LOGIN_ROUTE } from "@/constants/routes";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Spinner from "@/components/Spinner";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  function submitForm(data) {
    setLoading(true);

    forgotPassword(data)
      .then(() => {
        reset();console.log(data)

        toast.success("Reset password link has been sent successfully.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Reset password link sending failed.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex mt-42 items-center justify-center w-full px-4">
      <div className="flex w-full flex-col max-w-96 gap-5">
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-4xl font-medium text-gray-900">
            Forgot Password
          </h2>
          <p className="mt-4 text-base text-gray-500/90">
            Please enter email to receive reset password link.
          </p>
          <div className="mt-10">
            <label className="font-medium">Email</label>
            <input
              placeholder="Please enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              {...register("email")}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700 disabled:opacity-80"
          >
            Send Reset Password Link
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
          <p className="text-center py-8">
            Go Back to
            <Link
              href={LOGIN_ROUTE}
              className="text-primary hover:underline ml-2"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;