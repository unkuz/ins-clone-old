import { auth, FacebookProvider } from '@/helpers/firebase';
import {
    signInWithFacebookFailure,
    signInWithFacebookRequest,
    signInWithFacebookSucess
} from '@/store/reducers/authSlice';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

function* onSignInWithFacebook(): any {
  try {
    const result = yield call(signInWithPopup, auth, FacebookProvider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const acessToken = credential?.accessToken;
    const user = result.user;

    yield put(signInWithFacebookSucess(user));
  } catch (err) {
    yield put(signInWithFacebookFailure(err));
  }
}

export function* signInWithFacebook() {
  yield takeLatest(signInWithFacebookRequest.toString(), onSignInWithFacebook);
}
