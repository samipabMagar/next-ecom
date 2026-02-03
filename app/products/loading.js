import React from "react";
import LoadingCard from "@/components/products/LoadingCard";


const loading = () => {
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
       <LoadingCard/>
      <LoadingCard/>
      <LoadingCard/>
      <LoadingCard/>
      <LoadingCard/>
      <LoadingCard/>
      
     </div>
    </>
  );
};

export default loading;
