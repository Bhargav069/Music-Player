import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        //set loading state during API calls(login, register, fetchUser)
        setLoading: (state, action) => {
            state.isLoading = action.payload;
            state.error = null;
        },

        //set user after successful login/register/fetUser
        //also stores token in local storage for persistence
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = null;

            if(action.payload.token) localStorage.setItem("token", action.payload.token);
        },

        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        //clear all authentication states and remove token from local storage
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            localStorage.removeItem("token");
        },

        updateFavourites: (state, action) => {
            if(state.user){
                state.user.favourites = action.payload;
            }
        },

        clearError: (state, action) => {
            state.error = null;
        },
    },
});

export const {setError, updateFavourites, setLoading, setUser, logout, clearError} = authSlice.actions;
export default authSlice.reducer;