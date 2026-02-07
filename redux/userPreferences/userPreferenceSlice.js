const { createSlice } = require("@reduxjs/toolkit");

const userPreferenceSlice = createSlice({
  name: "userPreferences",
  initialState: {
    theme: "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },

  },
});

export const {toggleTheme} = userPreferenceSlice.actions;

export default userPreferenceSlice.reducer;
