import { EmailPassword, ISignInWithEmail, ISignUpWithEmail } from '@/models/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: Object;
  status: 'loading' | 'authenticated' | 'unauthenticated';
  errMsg: string;
}

const initialState: AuthState = {
  user: {},
  status: 'unauthenticated',
  errMsg: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createUserWithEmailRequest: (state, action: PayloadAction<ISignUpWithEmail>) => {
      state.status = 'loading';
    },
    createUserWithEmailSuccess: (state, action) => {
      (state.user = action.payload), (state.status = 'authenticated');
    },
    createUserWithEmailFailure: (state, action) => {
      state.user = {};
      state.status = 'unauthenticated';
    },

    signInWithGoogleRequest: (state) => {
      state.status = 'loading';
    },
    signInWithGoogleSucess: (state, action) => {
      state.user = action.payload;
      state.status = 'authenticated';
    },
    signInWithGoogleFailure: (state, action) => {
      (state.status = 'unauthenticated'), (state.user = {});
    },
    signInWithFacebookRequest: (state) => {
      (state.status = 'loading'), (state.user = {});
    },
    signInWithFacebookSucess: (state, action) => {
      state.status = 'authenticated';
      state.user = action.payload;
    },
    signInWithFacebookFailure: (state, action) => {
      (state.status = 'unauthenticated'), (state.user = {});
    },
    signInWithEmailRequest: (state, action: PayloadAction<EmailPassword>) => {
      state.status = 'loading';
    },
    signInWithEmailSuccess: (state, action) => {
      (state.status = 'authenticated'), (state.user = action.payload);
    },
    signInWithEmailFailure: (state, action) => {
      (state.status = 'unauthenticated'),
        (state.user = {}),
        (state.errMsg = action.payload.code.err);
    },
    signOutRequest: (state) => {
      state.status = 'loading';
    },
    signOutSuccess: (state) => {
      state.status = 'unauthenticated';
      state.user = {};
    },
    signOutFailure: (state, action) => {
      state.status = 'authenticated';
      state.errMsg = action.payload.err;
    },
  },
});

export default authSlice.reducer;
export const {
  createUserWithEmailFailure,
  createUserWithEmailRequest,
  createUserWithEmailSuccess,
  signInWithEmailFailure,
  signInWithEmailRequest,
  signInWithEmailSuccess,
  signInWithFacebookFailure,
  signInWithFacebookRequest,
  signInWithFacebookSucess,
  signInWithGoogleFailure,
  signInWithGoogleRequest,
  signInWithGoogleSucess,
  signOutFailure,
  signOutRequest,
  signOutSuccess,
} = authSlice.actions;
