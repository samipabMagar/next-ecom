import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import userPreferences from "./userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  counter,
  userPreferences,
});

export default rootReducer;
