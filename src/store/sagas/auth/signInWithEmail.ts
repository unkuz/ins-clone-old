import { call, put, takeLatest } from 'redux-saga/effects';
import {
  signInWithEmailRequest,
  signInWithEmailFailure,
  signInWithEmailSuccess,
} from '@/store/reducers/authSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/helpers/firebase';
import { PayloadAction } from '@reduxjs/toolkit';
import { EmailPassword } from '@/models/auth';

function* onSignInWithEmail(action: PayloadAction<EmailPassword>): any {
  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      action.payload.email,
      action.payload.password
    );
    const { user } = userCredential;
    yield put(signInWithEmailSuccess(user));
  } catch (err) {
    yield put(signInWithEmailFailure(err));
  }
}

export function* signInWithEmail() {
  yield takeLatest(signInWithEmailRequest.toString(), onSignInWithEmail);
}
