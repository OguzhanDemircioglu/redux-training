import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "../features/counter/counterSlice.jsx";
import postSlice from "../features/posts/PostSlice.jsx";
import userSlice from "../features/users/userSlice.jsx";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        posts: postSlice,
        users: userSlice
    }
})