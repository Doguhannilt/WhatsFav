import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteFilms: JSON.parse(localStorage.getItem('favoriteFilms')) || []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoriteFilm(state, action) {
            if (!state.favoriteFilms.some(film => film._id === action.payload._id)) {
                state.favoriteFilms.push(action.payload);
                localStorage.setItem('favoriteFilms', JSON.stringify(state.favoriteFilms));
            }
        },
        removeFavoriteFilm(state, action) {
            state.favoriteFilms = state.favoriteFilms.filter(film => film._id !== action.payload._id);
            localStorage.setItem('favoriteFilms', JSON.stringify(state.favoriteFilms));
        },
        setFavorites(state, action) {
            state.favoriteFilms = action.payload;
            localStorage.setItem('favoriteFilms', JSON.stringify(state.favoriteFilms));
        }
    }
});

export const { addFavoriteFilm, removeFavoriteFilm, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
