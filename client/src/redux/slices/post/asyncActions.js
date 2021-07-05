import { all_posts, update_post, delete_post, like_post, create_post } from './postReducer';
import * as api from '../../../api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchingPosts = createAsyncThunk(
  'posts/fetch-posts',
  async (nothing, { dispatch }) => {
    try {
      const data = await api.fetchPosts()
      dispatch(all_posts(data))
    } catch (error) {
      console.log(error)
    }
  }
)
export const createPost = createAsyncThunk(
  'posts/fetch-posts',
  async (post, { dispatch }) => {
    await api.createNewPost(post)
      .then(data => dispatch(create_post(data)))
      .catch(err => console.log(err))

  }
)
export const updatePost = createAsyncThunk(
  'posts/update-post',
  ({ currentId: _id, postData }, { dispatch }) => {
    api.updatePost(_id, postData)
      .then((response) => dispatch(update_post(response)))
      .catch(err => console.log(err))
  }
)

export const deletePost = createAsyncThunk(
  'posts/delete-post',
  (id, { dispatch }) => {
    api.deletePost(id)
      .then(() => dispatch(delete_post(id)))
      .catch(err => console.log(err))
  }
)

export const likePost = createAsyncThunk(
  'posts/like-post',
  (id, { dispatch }) => {
    api.likePost(id)
      .then(data => dispatch(like_post(data)))
      .catch(err => console.log(err))
  }
)