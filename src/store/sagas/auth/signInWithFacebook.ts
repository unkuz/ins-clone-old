import { auth, FacebookProvider, db } from '@/helpers/firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import {
  signInWithFacebookFailure,
  signInWithFacebookRequest,
  signInWithFacebookSucess,
} from '@/store/reducers/authSlice';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { generateNewUser } from '@/utils/firebase';

function* onSignInWithFacebook(): any {
  try {
    const result = yield call(signInWithPopup, auth, FacebookProvider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    const userRef = doc(db, 'users', user.uid);
    const usersSnap = yield getDoc(userRef);

    // !check is user exist on firestore
    if (!usersSnap.exists()) {
      yield setDoc(userRef, generateNewUser(user));
    }
    const userSnap = yield getDoc(userRef);
    const userData = yield userSnap.data();
    yield put(signInWithFacebookSucess(userData));
  } catch (err) {
    yield put(signInWithFacebookFailure(err));
  }
}

export function* signInWithFacebook() {
  yield takeLatest(signInWithFacebookRequest.toString(), onSignInWithFacebook);
}
