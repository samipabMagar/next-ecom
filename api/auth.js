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

export const forgotPassword = async ({email}) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/forgot-password`, {
    email,
  });

  return response.data;
}

export const resetPassword = async({password, token, userId}) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/reset-password?userId=${userId}&token=${token}`, {
    password,
  })

  return response.data;
}
