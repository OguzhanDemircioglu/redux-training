import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const incrementValue = typeof action.payload === 'number' ? action.payload : 1;
            state.count += incrementValue;
        },

        decrement: (state, action) => {
            state.count -= typeof action.payload === 'number' ? action.payload : 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByCount: (state, action) => {
            state.count += action.payload || 0;
        }
    }
})

export const {increment, decrement, reset, incrementByCount} = counterSlice.actions;

export default counterSlice.reducer;