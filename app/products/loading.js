import React from "react";
import LoadingCard from "@/components/products/LoadingCard";
import Filter from "@/components/products/Filter";

const loading = () => {
  return (
    <>
      <section className="grid mt-8 grid-cols-1 pb-10 md:grid-cols-[1fr_4fr] gap-8">
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </section>
    </>
  );
};

export default loading;
