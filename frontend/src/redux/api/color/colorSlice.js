import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorInfo: localStorage.getItem('colorInfo')
        ? JSON.parse(localStorage.getItem('colorInfo'))
        : null
}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setColor(state, action) {
            state.colorInfo = action.payload
            localStorage.setItem('colorInfo', JSON.stringify(action.payload))
        }
    }
})

export const { setColor } = colorSlice.actions
export default colorSlice.reducer