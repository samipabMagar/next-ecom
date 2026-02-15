import axios from "axios";
import { config } from "@/config/config";

export const getProducts = async (searchParams) => {
  const sort = (await searchParams)?.sort || "";
  const min = (await searchParams)?.minPrice || "";
  const max = (await searchParams)?.maxPrice || "";
  const category = (await searchParams)?.category || "";
  const brands = (await searchParams)?.brands || "";
  const name = (await searchParams)?.name || "";

  const response = await axios.get(
    `${config.apiUrl}/api/products?sort=${sort}&min=${min}&max=${max}&category=${category}&brand=${brands}&name=${name}`,
  );
  return response.data;
};

export const addProduct = async (formData) => {
  const authToken = localStorage.getItem("authToken");
  const response = await axios.post(`${config.apiUrl}/api/products`, formData, {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  //   console.log(response);
  return response;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
  return response.data;
};

export const updateProduct = async (id, data) => {
  const authToken = localStorage.getItem("authToken");
  const response = await axios.put(
    `${config.apiUrl}/api/products/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    },
  );
  return response.data;
};

export const deleteProduct = async(id) => {
  const authToken = localStorage.getItem("authToken");
  const response = await axios.delete(`${config.apiUrl}/api/products/${id}`, {
    headers: {Authorization: `Bearer ${authToken}`}
  })

  return response.data;
}