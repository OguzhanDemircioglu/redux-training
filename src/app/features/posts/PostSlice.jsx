import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from "date-fns";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 9,
            wow: 1,
            heart: 2,
            rocket: 3,
            coffee: 8
        }
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), {minutes: 20}).toISOString(),
        reactions: {
            thumbsUp: 68,
            wow: 77,
            heart: 6,
            rocket: 1,
            coffee: 2
        }
    }
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const {postAdded, reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;