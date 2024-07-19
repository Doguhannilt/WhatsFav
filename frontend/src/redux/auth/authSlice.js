import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    userFavorite: localStorage.getItem('userFavorite') ? JSON.parse(localStorage.getItem('userFavorite')) : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action) {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
            localStorage.setItem('expirationTime', expirationTime);
        },
        logout(state) {
            state.userInfo = null;
            localStorage.clear();
        },
        setFavoriteCredentials(state, action) {
            state.userFavorite = action.payload
            localStorage.setItem('userFavorite', JSON.stringify(action.payload))
        },
    },
});

export const { setCredentials, logout, setFavoriteCredentials } = authSlice.actions;
export default authSlice.reducer;
