import { auth, db, GoogleProvider } from '@/helpers/firebase';
import {
  signInWithGoogleFailure,
  signInWithGoogleRequest,
  signInWithGoogleSucess,
} from '@/store/reducers/authSlice';
import { generateNewUser } from '@/utils/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { call, put, takeLatest } from 'redux-saga/effects';

function* onSignInWithGoogle(): any {
  try {
    const result = yield call(signInWithPopup, auth, GoogleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    const querySnapshotAllUser = yield getDocs(collection(db, 'users'));
    let checkUserIsExist = false;
    let userExist;

    querySnapshotAllUser.forEach((doc: any) => {
      if (doc.id == user.uid) {
        checkUserIsExist = true;
        userExist = doc.data();
      }
      console.log(doc.data());
    });

    if (!checkUserIsExist) {
      yield setDoc(doc(db, 'users', user.uid), generateNewUser(user));
      yield put(signInWithGoogleSucess(generateNewUser(user)));
    } else {
      yield put(signInWithGoogleSucess(userExist));
    }
  } catch (err) {
    yield put(signInWithGoogleFailure(err));
  }
}

export function* signInWithGoogle() {
  yield takeLatest(signInWithGoogleRequest.toString(), onSignInWithGoogle);
}
