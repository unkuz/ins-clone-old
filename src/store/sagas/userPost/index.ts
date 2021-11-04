import { all, put, takeLatest } from 'redux-saga/effects';
import {
  Post,
  userPostFailure,
  userPostRequest,
  userPostSuccess,
} from '@/store/reducers/postsSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db, storage } from '@/helpers/firebase';
import { ref, getDownloadURL, uploadString } from '@firebase/storage';
import { editProfileSuccess } from '@/store/reducers/authSlice';
import { AppSelected, selectedField } from '@/store/reducers/appSlice';

interface UserPost {
  caption: string;
  selectedFile: string;
  userUid: string;
}

function* onUserPost(action: PayloadAction<UserPost>): any {
  const newPost: Post = {
    caption: action.payload.caption,
    likes: [],
    timeStamp: serverTimestamp(),
    imageURL: '',
    user: action.payload.userUid,
    id: '',
  };
  try {
    const docRef = yield addDoc(collection(db, 'posts'), newPost);
    console.log('Document written with ID: ', docRef.id);
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    const snapshot = yield uploadString(imageRef, action.payload.selectedFile, 'data_url');
    const imageURL = yield getDownloadURL(imageRef);
    yield updateDoc(docRef, {
      imageURL: imageURL,
      id: docRef.id,
    });
    let newPostInDB;
    const querySnapshotAllPosts = yield getDocs(collection(db, 'posts'));
    querySnapshotAllPosts.forEach((doc: any) => {
      if (doc.data().user === action.payload.userUid) {
        newPostInDB = doc.data();
      }
    });

    yield put(userPostSuccess(newPostInDB));
    yield put(selectedField(AppSelected.ACTIVITY_FEED));
  } catch (err) {
    yield put(userPostFailure(err));
  }
}

export function* userPostSaga() {
  yield takeLatest(userPostRequest.toString(), onUserPost);
}
