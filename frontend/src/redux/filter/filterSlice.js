import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterInfo: JSON.parse(localStorage.getItem('filterInfo')) || []
};

const filterSlice = createSlice({
    name: 'filterInfo',
    initialState,
    reducers: {
        setInfoCredentials(state, action) {
            // Yeni filtreyi mevcut filtrelerle birleştir
            const newFilterInfo = [...state.filterInfo, action.payload];
            state.filterInfo = newFilterInfo;
            localStorage.setItem('filterInfo', JSON.stringify(newFilterInfo));
        },        
        setInfoCredentialsClear(state, action) {
            state.filterInfo = []; // Filtre listesini temizle
            localStorage.removeItem('filterInfo');
        }
    }
});

export const { setInfoCredentials, setInfoCredentialsClear } = filterSlice.actions;
export default filterSlice.reducer;
