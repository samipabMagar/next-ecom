import ProductCard from "@/components/products/ProductCard";
import { config } from "@/config/config";
import axios from "axios";
import React from "react";



export const metadata = {
  title: "Products | | eTech",
};
const ProductPage = async () => {
  let products;
  try {
    const response = await axios.get(`${config.apiUrl}/api/products`);
    products = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
   
      {products.map((product) => {
        return (
          <ProductCard
            key={product._id}
            _id = {product._id}
            name={product.name}
            brand={product.brand}
            category={product.category}
            price={product.price}
            imageUrls={product.imageUrls}
          />
        );
      })}
    </div>
  );
};

export default ProductPage;
