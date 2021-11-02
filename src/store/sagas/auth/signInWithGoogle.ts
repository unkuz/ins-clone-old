import { auth, GoogleProvider } from '@/helpers/firebase';
import {
  signInWithGoogleFailure,
  signInWithGoogleRequest,
  signInWithGoogleSucess,
} from '@/store/reducers/authSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

function* onSignInWithGoogle(): any {
  try {
    const result = yield call(signInWithPopup, auth, GoogleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    yield put(signInWithGoogleSucess(user));
  } catch (err) {
    yield put(signInWithGoogleFailure(err));
  }
}

export function* signInWithGoogle() {
  yield takeLatest(signInWithGoogleRequest.toString(), onSignInWithGoogle);
}
