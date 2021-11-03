import { auth, db } from '@/helpers/firebase';
import { EmailPassword } from '@/utils/types/auth';
import {
  createUserWithEmailFailure,
  createUserWithEmailRequest,
  createUserWithEmailSuccess,
} from '@/store/reducers/authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

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
    const { user } = userCredential;
    console.log(user);
    const docRef = yield addDoc(collection(db, 'users', String(user.uid)), {
      username: user?.email,
      email: user.email,
      isViP: true,
      timeStamp: serverTimestamp(),
    });

    yield put(createUserWithEmailSuccess(user));
  } catch (err) {
    yield put(createUserWithEmailFailure(err));
  }
}

export function* createUserWithEmail() {
  yield takeLatest(createUserWithEmailRequest.toString(), onCreateUserWithEmail);
}
