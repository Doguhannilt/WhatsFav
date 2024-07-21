import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterInfo: localStorage.getItem('filterInfo')
        ? JSON.parse(localStorage.getItem('filterInfo'))
        : {}
};

const filterSlice = createSlice({
    name: 'filterInfo',
    initialState,
    reducers: {
        setInfoCredentials(state, action) {
                     
                      const currentInfo = state.filterInfo || {};
                   
                      const updatedInfo = { ...currentInfo, ...action.payload };
                      state.filterInfo = updatedInfo;
                     
                      localStorage.setItem('filterInfo', JSON.stringify(updatedInfo));
        },
        setInfoCredentialsClear(state, action) {
            state.filterInfo = null;
            localStorage.removeItem('filterInfo');

        }
    }
});

export const { setInfoCredentials,setInfoCredentialsClear } = filterSlice.actions;
export default filterSlice.reducer;
