import { auth, db } from '@/helpers/firebase';
import {
  signInWithEmailFailure,
  signInWithEmailRequest,
  signInWithEmailSuccess,
} from '@/store/reducers/authSlice';
import { generateNewUser } from '@/utils/firebase';
import { EmailPassword } from '@/utils/types/auth';
import { PayloadAction } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
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
      yield put(signInWithEmailSuccess(generateNewUser(user)));
    } else {
      yield put(signInWithEmailSuccess(userExist));
    }
  } catch (err) {
    yield put(signInWithEmailFailure(err));
  }
}

export function* signInWithEmail() {
  yield takeLatest(signInWithEmailRequest.toString(), onSignInWithEmail);
}
