import { createSlice } from "@reduxjs/toolkit"
import { loginUser } from "./authActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading:false,
        error:null
    }, reducer: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.user = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default authSlice.reducer;