import { configureStore } from "@reduxjs/toolkit"
import counter from "./counter/counterSlice"
import userPreferences from "./userPreferences/userPreferenceSlice"

export const store = configureStore({
    reducer: {
        counter,
        userPreferences,
    }
   
})