import { all, put, takeLatest } from 'redux-saga/effects';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';

import {
  editProfileRequest,
  editProfileFailure,
  editProfileSuccess,
} from '@/store/reducers/authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { EditProfile } from '@/utils/types/auth';
import { db } from '@/helpers/firebase';
import { store } from '@/store';

function* onEditProfile(action: PayloadAction<EditProfile>): any {
  try {
    const userRef = yield doc(db, 'users', action.payload.userUid);
    yield updateDoc(userRef, {
      name: action.payload.data.name,
      username: action.payload.data.username,
      email: action.payload.data.email,
      bio: action.payload.data.bio,
    });
    const state = store.getState();
    console.log(state);

    const querySnapshotAllUser = yield getDocs(collection(db, 'users'));

    let userExist;

    querySnapshotAllUser.forEach((doc: any) => {
      if (doc.id == action.payload.userUid) {
        userExist = doc.data();
      }
    });

    yield put(editProfileSuccess(userExist));
  } catch (err) {
    yield put(editProfileFailure(err));
  }
}

export function* userEditProfileSaga() {
  console.log('sfdjfhjsd');
  yield takeLatest(editProfileRequest.toString(), onEditProfile);
}
