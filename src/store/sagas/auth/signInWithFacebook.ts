import { auth, FacebookProvider, db } from '@/helpers/firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

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
    const acessToken = credential?.accessToken;
    const user = result.user;

    const querySnapshotAllUser = yield getDocs(collection(db, 'users'));
    let checkUserIsExist = false;
    let userExist;

    querySnapshotAllUser.forEach((doc: any) => {
      if (doc.id == user.uid) {
        checkUserIsExist = true;
        userExist = doc.data();
      }
    });
    console.log('is user exist', checkUserIsExist);
    if (!checkUserIsExist) {
      yield setDoc(doc(db, 'users', user.uid), generateNewUser(user));
      yield put(signInWithFacebookSucess(generateNewUser(user)));
    } else {
      yield put(signInWithFacebookSucess(userExist));
    }
  } catch (err) {
    yield put(signInWithFacebookFailure(err));
  }
}

export function* signInWithFacebook() {
  yield takeLatest(signInWithFacebookRequest.toString(), onSignInWithFacebook);
}
