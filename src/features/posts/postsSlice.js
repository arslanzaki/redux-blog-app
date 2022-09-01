import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning Redux Toolkit", content: "I've heard new things" },
  {
    id: 2,
    title: "Slices",
    content: "It is important to learn slices in redux",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
