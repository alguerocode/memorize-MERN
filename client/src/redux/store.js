import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/post/postReducer'

const store = configureStore({
  reducer: {
    posts:postsReducer
  }
})
export default store