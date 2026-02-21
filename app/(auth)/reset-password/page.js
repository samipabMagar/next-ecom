"use client";

import { resetPassword } from "@/api/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import PasswordInput from "@/components/form/PasswordInput";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  const router = useRouter();

  function submitForm(data) {
    setLoading(true);

    resetPassword({ password: data.password, userId, token })
      .then(() => {
        reset();

        router.replace(LOGIN_ROUTE);

        toast.success("Password reset successful.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Password reset failed.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex mt-42 items-center justify-center w-full px-4">
      <div className="flex w-full flex-col max-w-96 gap-5">
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-4xl font-medium text-gray-900">Reset Password</h2>
          <p className="mt-4 text-base text-gray-500/90">
            Please enter your new password.
          </p>
          <div className="mt-10">
            <label className="font-medium">Password</label>
            <PasswordInput {...register("password")} />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700 disabled:opacity-80"
          >
            Reset Password
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;