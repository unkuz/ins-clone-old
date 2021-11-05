import { auth, db, GoogleProvider } from '@/helpers/firebase';
import {
  signInWithGoogleFailure,
  signInWithGoogleRequest,
  signInWithGoogleSucess,
} from '@/store/reducers/authSlice';
import { generateNewUser } from '@/utils/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { call, put, takeLatest } from 'redux-saga/effects';

function* onSignInWithGoogle(): any {
  try {
    const result = yield call(signInWithPopup, auth, GoogleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    const conversationRef = collection(db, 'conversations');
    yield addDoc(conversationRef, {});

    const userRef = doc(db, 'users', user.uid);
    const usersSnap = yield getDoc(userRef);

    // !check is user exist on firestore
    if (!usersSnap.exists()) {
      yield setDoc(userRef, generateNewUser(user));
    }
    const userSnap = yield getDoc(userRef);
    const userData = yield userSnap.data();
    yield put(signInWithGoogleSucess(userData));
  } catch (err) {
    yield put(signInWithGoogleFailure(err));
  }
}

export function* signInWithGoogle() {
  yield takeLatest(signInWithGoogleRequest.toString(), onSignInWithGoogle);
}
