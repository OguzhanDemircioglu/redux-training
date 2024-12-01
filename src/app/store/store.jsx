import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "../features/counter/counterSlice.jsx";
import postSlice from "../features/posts/PostSlice.jsx";
import userSlice from "../features/users/userSlice.jsx";
import TodoSlice from "../features/todos/TodoSlice.jsx";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        posts: postSlice,
        users: userSlice,
        todos: TodoSlice
    }
})