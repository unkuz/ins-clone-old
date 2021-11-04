import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostsState {
  users: any[];

  errMsg: string;
}

const initialState: PostsState = {
  users: [],

  errMsg: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchAllUsersRequest: (state) => {
      state.users = state.users;
    },
    fetchAllUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.errMsg = '';
    },
    fetchAllUsersFailure: (state, action) => {
      state.errMsg = action.payload;
    },
  },
});

export default usersSlice.reducer;
export const { fetchAllUsersFailure, fetchAllUsersRequest, fetchAllUsersSuccess } =
  usersSlice.actions;
