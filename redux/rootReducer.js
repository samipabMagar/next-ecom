import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import userPreferences from "./userPreferences/userPreferenceSlice";
import authReducer from "./auth/authSlice";
const rootReducer = combineReducers({
  counter,
  userPreferences,
  authReducer
});

export default rootReducer;
