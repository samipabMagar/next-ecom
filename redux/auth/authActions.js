import { login, signUp } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);

      localStorage.setItem("authToken", result.token);
      return result;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const registerUser = createAsyncThunk(
  "register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await signUp(data);
      localStorage.setItem("authToken", result.token);

      return result;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
