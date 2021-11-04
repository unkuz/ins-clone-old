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
import { setEditProfileHidden } from '@/store/reducers/appSlice';

function* onEditProfile(action: PayloadAction<EditProfile>): any {
  try {
    const userRef = yield doc(db, 'users', action.payload.userUid);
    yield updateDoc(userRef, {
      name: action.payload.name,
      username: action.payload.username,
      email: action.payload.email,
      bio: action.payload.bio,
    });
    console.log('eit done');

    const querySnapshotAllUser = yield getDocs(collection(db, 'users'));

    let userExist;

    querySnapshotAllUser.forEach((doc: any) => {
      if (doc.id == action.payload.userUid) {
        userExist = doc.data();
      }
    });
    console.log('userexist', userExist);
    yield put(editProfileSuccess(userExist));
    yield put(setEditProfileHidden());
  } catch (err) {
    yield put(editProfileFailure(err));
  }
}

export function* userEditProfileSaga() {
  console.log('sfdjfhjsd');
  yield takeLatest(editProfileRequest.toString(), onEditProfile);
}
