"use client";

import React from "react";

const error = ({ error }) => {
  return (
    <>
      <div className="flex min-h-100 items-center justify-center flex-col gap-2 ">
        <h1 className="text-3xl font-semibold text-red-600">Oops something went wrong!</h1>
        <div className="  text-red-500 font-medium text-2xl">{error.message}</div>
      </div>
    </>
  );
};

export default error;
