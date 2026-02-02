import { config } from "@/config/config";
import axios from "axios";
import React from "react";

const fetchById = async (id) => {
  try {
    const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
  }
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const product = await fetchById(id);

  return {
    title: product?.name || "Product Detail",
  };
};
export const page = async ({ params, searchParams }) => {
  const { id } = await params;
  const query = await searchParams;
  console.log(query);

  const product = await fetchById(id);
  return (
    <div>
      <h1>Product of id {id}</h1>
      <h2>{product.brand}</h2>
      <h2>{product.category}</h2>
      <h2>{product.price}</h2>
    </div>
  );
};

export default page;
