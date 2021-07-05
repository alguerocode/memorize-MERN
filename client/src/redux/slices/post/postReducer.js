import { createSlice } from '@reduxjs/toolkit'


const PostsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    all_posts(state, action) {
      return action.payload;
    },
    create_post(state, action) {
      state.push(action.payload);
    },
    update_post(state, action) {
      return state.map(post => post._id === action.payload._id ? action.payload : post)
    },
    delete_post(state, action) {
      return state.filter(post => post._id !== action.payload)
    },
    like_post(state, action) {
      return state.map(post => post._id === action.payload._id ? action.payload : post)
    }
  }
})
export const postsReducer = PostsSlice.reducer;
export const { all_posts, create_post, update_post, delete_post, like_post } = PostsSlice.actions;

// export const postsSelector = (state) => state.posts.allPosts;
