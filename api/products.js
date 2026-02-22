import axios from "axios";
import { config } from "@/config/config";
import formatQuery from "@/helpers/queryFormatter";
import api from ".";

export const getProducts = async (searchParams) => {
  const query = formatQuery(await searchParams);

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);
  return response.data;
};

export const addProduct = async (formData) => {
  const response = await api.post(`/api/products`, formData);
  return response;
};

export const getProductById = async (id) => {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await api.put(`/api/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/api/products/${id}`);

  return response.data;
};

export const getProductBrands = async() => {
  const response = await axios.get(`${config.apiUrl}/api/products/brands`);
  return response.data;
}

export const getProductCategories = async() => {
  const response = await axios.get(`${config.apiUrl}/api/products/categories`);
  return response.data;
}