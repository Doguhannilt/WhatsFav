import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth/authSlice'
import filterReducer from './filter/filterSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSlice";
import currentFavorites from "./currentFavorites/currentFavorites";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authReducer,
        filter: filterReducer,
        favorites: currentFavorites
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

setupListeners(store.dispatch)
export default store