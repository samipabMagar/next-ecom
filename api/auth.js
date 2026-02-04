import { config } from "@/config/config";
import axios from "axios";

export const login = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);

  return response.data;
};

export const signUp = async ({
  name,
  email,
  phone,
  city,
  password,
  province,
}) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
    name,
    email,
    phone,
    address: {
      city,
      province,
    },
    password,
  });
  return response.data;
};
