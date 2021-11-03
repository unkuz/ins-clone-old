import { auth } from '@/helpers/firebase';
import { EmailPassword } from '@/utils/types/auth';
import {
  createUserWithEmailFailure,
  createUserWithEmailRequest,
  createUserWithEmailSuccess,
} from '@/store/reducers/authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

function* onCreateUserWithEmail(action: PayloadAction<EmailPassword>): any {
  try {
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      action.payload.email,
      action.payload.password
    );
    const { user } = userCredential;

    yield put(createUserWithEmailSuccess(user));
  } catch (err) {
    yield put(createUserWithEmailFailure(err));
  }
}

export function* createUserWithEmail() {
  yield takeLatest(createUserWithEmailRequest.toString(), onCreateUserWithEmail);
}
