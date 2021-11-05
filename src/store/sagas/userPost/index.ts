import { all, put, takeLatest, takeLeading } from 'redux-saga/effects';
import {
  Post,
  userPostFailure,
  userPostRequest,
  userPostSuccess,
} from '@/store/reducers/postsSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  addDoc,
  arrayUnion,
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
import { generateNewPost } from '@/utils/firebase';

interface UserPost {
  caption: string;
  selectedFile: string;
  userUid: any;
}

function* onUserPost(action: PayloadAction<UserPost>): any {
  const newPost: Post = generateNewPost(action.payload);

  let postRef: string;

  // create post
  const docRef = yield addDoc(collection(db, 'posts'), newPost);
  const userPostRef = yield updateDoc(doc(db, 'users', action.payload.userUid), {
    posts: arrayUnion(docRef.id),
  });
  console.log(docRef.id);
  const commentRef = yield setDoc(doc(db, 'comments', docRef.id), {
    id: docRef.id,
    comment: [{}],
  });
  // create comment link to post
  // const commentsRef = yield doc(db, 'comments', docRef.id);
  // const commentSet = yield setDoc(commentsRef, []);

  // // const commentsRef = yield setDoc(doc(db, 'comments', docRef.id), [{}]);
  // console.log('Document written with ID: ', docRef.id, 'vs', commentSet.id);
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
}

export function* userPostSaga() {
  yield takeLeading(userPostRequest.toString(), onUserPost);
}
