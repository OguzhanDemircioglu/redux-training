import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    id: String,
    title: String,
    isComplete: false,
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, isComplete = false) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        isComplete,
                    }
                }
            }
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, isComplete: !todo.isComplete }
                    : todo
            );
        },
    },
});

export const {addTodo, removeTodo, toggleComplete} = TodoSlice.actions;

export default TodoSlice.reducer;