import { auth, db } from '@/helpers/firebase';
import {
  createUserWithEmailFailure,
  createUserWithEmailRequest,
  createUserWithEmailSuccess,
} from '@/store/reducers/authSlice';
import { generateNewUser } from '@/utils/firebase';
import { EmailPassword } from '@/utils/types/auth';
import { PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { call, put, takeLatest } from 'redux-saga/effects';

// try {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }

function* onCreateUserWithEmail(action: PayloadAction<EmailPassword>): any {
  try {
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      action.payload.email,
      action.payload.password
    );
    // if userdata exist dont create new in firestore
    const { user } = userCredential;

    // if new acc create new in firestore

    // check user exist in firestore
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
      yield put(createUserWithEmailSuccess(generateNewUser(user)));
    } else {
      yield put(createUserWithEmailSuccess(userExist));
    }
  } catch (err) {
    yield put(createUserWithEmailFailure(err));
  }
}

export function* createUserWithEmail() {
  yield takeLatest(createUserWithEmailRequest.toString(), onCreateUserWithEmail);
}
