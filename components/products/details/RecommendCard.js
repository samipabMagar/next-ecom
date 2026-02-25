import { getProducts } from "@/api/products";
import { PRODUCT_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const RecommendedProductCard = ({ id, imageUrls, name, category }) => {
  return (
    <Link
      href={`${PRODUCT_ROUTE}/${id}`}
      className="mt-4 flex items-center gap-3 justify-start p-5 group bg-white dark:bg-gray-800 dark:border-gray-900 border-gray-300 border rounded-lg"
    >
      {imageUrls.length > 0 ? (
        <Image
          src={imageUrls[0]}
          height={200}
          width={200}
          alt={name}
          className="h-20 w-20 object-contain rounded-lg"
        />
      ) : (
        <div className="h-20 w-20 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
          <FaImage className="text-3xl text-gray-500" />
        </div>
      )}
      <div>
        <h4 className="font-semibold hover:underline">{name}</h4>
        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary inset-ring inset-ring-primary/30">
          {category}
        </span>
      </div>
    </Link>
  );
};

import React from "react";
import { FaImage } from "react-icons/fa";

const RecommendedProducts = async ({ id, category }) => {
  const products = await getProducts({ category, limit: 4 });

  return (
    <div>
      {products
        .filter((product) => product._id != id)
        .map((product) => (
          <RecommendedProductCard
            key={product._id}
            id={product._id}
            {...product}
          />
        ))}
    </div>
  );
};

export default RecommendedProducts;