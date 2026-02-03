import ProductCard from "@/components/products/ProductCard";
import { config } from "@/config/config";
import axios from "axios";
import React from "react";
import Filter from "@/components/products/Filter";

export const metadata = {
  title: "Products | | eTech",
};
const ProductPage = async ({ searchParams }) => {
  const sort = (await searchParams)?.sort ?? "";

  const response = await axios.get(
    `${config.apiUrl}/api/products?sort=${sort}`,
  );
  const products = response.data;



  return (
    <section className="grid mt-8 grid-cols-1 md:grid-cols-[1fr_4fr] gap-8">
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              _id={product._id}
              name={product.name}
              brand={product.brand}
              category={product.category}
              price={product.price}
              imageUrls={product.imageUrls}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductPage;
