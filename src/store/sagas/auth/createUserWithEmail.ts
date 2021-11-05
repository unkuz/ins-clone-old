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
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
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
    const userRef = doc(db, 'users', user.uid);
    const usersSnap = yield getDoc(userRef);
    if (!usersSnap.exists()) {
      yield setDoc(userRef, generateNewUser(user));
      yield updateDoc(userRef, {
        username: action.payload.username,
      });
    }
    const userSnap = yield getDoc(userRef);
    const userData = yield userSnap.data();

    yield put(createUserWithEmailSuccess(userData));
  } catch (err) {
    yield put(createUserWithEmailFailure(err));
  }
}

export function* createUserWithEmail() {
  yield takeLatest(createUserWithEmailRequest.toString(), onCreateUserWithEmail);
}
