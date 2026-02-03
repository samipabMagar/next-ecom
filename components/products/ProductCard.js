import Image from "next/image";
import React from "react";

const ProductCard = ({ _id, name, brand, price, category, imageUrls }) => {
  return (
    <>
      <div className="bg-white shadow rounded-xl group mt-5 py-2 px-4">
        <div className="h-52 ">
          {" "}
          {imageUrls && imageUrls.length > 0 && (
            <Image className="object-contain h-full group-hover:scale-105 transform transition
            " src={imageUrls[0]} width={400} height={400} alt="img" />
          )}
        </div>
        {/* <h2>{brand}</h2> */}
        <div className="flex flex-col gap-1 mt-5">
          <h2 className="text-xl font-semibold">{name}</h2>
          <h2 className="text-blue-700">{category}</h2>
          <div className="flex gap-2 items-center">
            <span className="text-lg font-medium">Rs. {price}</span>
            <span className="line-through text-gray-700 text-sm">Rs. {price * 1.05}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
