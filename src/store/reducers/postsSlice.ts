import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  user: string;
  likes: string[];
  caption: string;
  imageURL: string;
  timeStamp: any;
  id: string;
}
enum PostStatus {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  NONE = 'NONE',
}

interface PostsState {
  posts: Post[];
  status: PostStatus;
  errMsg: string;
}

const initialState: PostsState = {
  posts: [],
  status: PostStatus.NONE,
  errMsg: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    userPostRequest: (state, action) => {
      state.status = PostStatus.LOADING;
    },
    userPostSuccess: (state, action) => {
      state.posts.push(action.payload);
      state.status = PostStatus.SUCCESS;
    },
    userPostFailure: (state, action) => {
      state.status = PostStatus.FAILURE;
    },
    fetchAllPostsRequest: (state) => {
      state.status = PostStatus.LOADING;
    },
    fetchAllPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.status = PostStatus.SUCCESS;
    },
    fetchAllPostsFailure: (state, action) => {
      state.errMsg = action.payload;
      state.status = PostStatus.NONE;
    },
  },
});

export default postsSlice.reducer;
export const {
  userPostFailure,
  userPostRequest,
  userPostSuccess,
  fetchAllPostsRequest,
  fetchAllPostsFailure,
  fetchAllPostsSuccess,
} = postsSlice.actions;
