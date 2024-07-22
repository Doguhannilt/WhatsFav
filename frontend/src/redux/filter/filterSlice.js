import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterInfo: JSON.parse(localStorage.getItem('filterInfo')) || []

};

const filterSlice = createSlice({
    name: 'filterInfo',
    initialState,
    reducers: {
        setInfoCredentials(state, action) {
            if (!state.filterInfo.some(film => film._id === action.payload._id)) {
                state.filterInfo.push(action.payload);
                localStorage.setItem('filterInfo', JSON.stringify(state.filterInfo));
            }
        },        
        setInfoCredentialsClear(state, action) {
            localStorage.removeItem('filterInfo');

        }
    }
});

export const { setInfoCredentials,setInfoCredentialsClear } = filterSlice.actions;
export default filterSlice.reducer;
