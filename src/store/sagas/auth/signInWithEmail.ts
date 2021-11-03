import { auth } from '@/helpers/firebase';
import { EmailPassword } from '@/utils/types/auth';
import {
  signInWithEmailFailure,
  signInWithEmailRequest,
  signInWithEmailSuccess,
} from '@/store/reducers/authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

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
