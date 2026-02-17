import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import userPreferences from "./userPreferences/userPreferenceSlice";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";
const rootReducer = combineReducers({
  counter,
  userPreferences,
  authReducer,
  cartReducer,
});

export default rootReducer;
