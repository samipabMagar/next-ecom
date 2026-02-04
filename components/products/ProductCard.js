import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PRODUCT_ROUTE } from "@/constants/routes";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ _id, name, brand, price, category, imageUrls }) => {
  return (
    <>
      <div className="bg-white shadow-md hover:shadow-xl cursor-pointer max-h-80  rounded-xl hover:scale-[103%] transition-transform duration-150 py-2 px-4">
        <div className="h-40 group relative">
          <Link href={`${PRODUCT_ROUTE}/${_id}`}>
            {" "}
            {imageUrls && imageUrls.length > 0 && (
              <Image
                className="object-contain h-full group-hover:scale-105 transform transition
            "
                src={imageUrls[0]}
                width={400}
                height={400}
                alt="img"
              />
            )}
          </Link>
          <span className="absolute top-5 right-3 text-white bg-teal-600 text-xs py-1 px-1 rounded-full">{brand}</span>
        </div>
       
        <div className="flex flex-col gap-1 mt-5">
          <Link href={`${PRODUCT_ROUTE}/${_id}`}>
            <h2 className="text-lg font-semibold hover:text-primary">{name}</h2>
          </Link>
          <h2 className="bg-primary/10 rounded-lg text-xs font-medium text-primary w-fit px-3">
            {category}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="text-lg font-medium">Rs. {price}</span>
              <span className="line-through text-gray-700 text-sm">
                Rs. {price * 1.05}
              </span>
            </div>
            <button className="bg-primary min-w-10 h-10 text-lg py-2 px-2.5 cursor-pointer rounded-full text-white hover:bg-secondary"><FaShoppingCart/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
