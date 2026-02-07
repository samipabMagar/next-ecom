import ProductCard from "@/components/products/ProductCard";
import React from "react";
import Filter from "@/components/products/Filter";
import { getProducts } from "@/api/products";

export const metadata = {
  title: "Products | | eTech",
};
const ProductPage = async ({ searchParams }) => {
  const products = await getProducts(searchParams);

  return (
    <section className="grid mt-8 grid-cols-1 pb-10 md:grid-cols-[1fr_4fr] gap-8">
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {products.length == 0 ? (
          <h4>Products not available</h4>
        ) : (
          products.map((product) => {
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
          })
        )}
      </div>
    </section>
  );
};

export default ProductPage;
